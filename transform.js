const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

const filesToTransform = [
  'HomeView.tsx',
  'ServicesView.tsx',
  'PortfolioView.tsx',
  'PricingView.tsx'
];

filesToTransform.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Add "use client";
  if (!content.includes('"use client";')) {
    content = '"use client";\n\n' + content;
  }
  if (!content.includes('import { useRouter }')) {
    content = content.replace("import React", "import { useRouter } from 'next/navigation';\nimport React");
  }

  // Replace interface *Props
  content = content.replace(/interface\s+\w+Props\s*{[\s\S]*?}/, '');
  
  // Replace export default function ...({ onNavigate }: ...Props)
  const funcRegex = /export default function (\w+)\(\{\s*onNavigate\s*\}\s*:\s*\w+Props\)\s*{/;
  content = content.replace(funcRegex, (match, componentName) => {
    return `export default function ${componentName}() {\n  const router = useRouter();\n  const onNavigate = (view, context) => {\n    // Context handled via state or query params in Next.js typically.\n    router.push(view === 'home' ? '/' : \`/\${view}\`);\n  };\n`;
  });

  fs.writeFileSync(filePath, content, 'utf-8');
});

// For ContactView.tsx, which has initialContext
const contactFilePath = path.join(componentsDir, 'ContactView.tsx');
let contactContent = fs.readFileSync(contactFilePath, 'utf-8');
if (!contactContent.includes('"use client";')) {
  contactContent = '"use client";\n\n' + contactContent;
}
// Remove Props
contactContent = contactContent.replace(/interface\s+ContactViewProps\s*{[\s\S]*?}/, '');
contactContent = contactContent.replace(/export default function ContactView\(\{\s*initialContext\s*\}\s*:\s*ContactViewProps\)\s*{/, 'export default function ContactView() {\n  const initialContext = null; // Can be read from URL in Next.js\n');

fs.writeFileSync(contactFilePath, contactContent, 'utf-8');

console.log('Transformation complete!');
