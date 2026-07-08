import fs from 'fs';

const filePath = './src/components/HomeView.tsx';
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

// Find start and end of the Bento Grid
const startIndex = lines.findIndex(line => line.includes('{/* 3. Engineered for Performance (Bento Grid) */}'));
let endIndex = -1;

for (let i = startIndex + 1; i < lines.length; i++) {
  if (lines[i].includes('</section>')) {
    endIndex = i;
    break;
  }
}

if (startIndex !== -1 && endIndex !== -1) {
  lines.splice(startIndex, endIndex - startIndex + 1, '      {/* 3. Industries & Technologies */}', '      <IndustriesAndTech />');
}

// Find and remove the old IndustriesAndTech at the bottom
const bottomIndex = lines.findIndex(line => line.includes('{/* Industries & Technologies Section */}'));
if (bottomIndex !== -1) {
  lines.splice(bottomIndex, 3); // removes comment, component, and maybe the blank line below
}

fs.writeFileSync(filePath, lines.join('\n'));
console.log('Update complete');
