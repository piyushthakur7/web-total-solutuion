"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Mechanical progress logic
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 800); // Final delay at 100%
          return 100;
        }
        const increment = Math.floor(Math.random() * 5) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // WebGL Shader Background Logic
    const canvas = canvasRef.current;
    if (!canvas) return;

    function syncSize() {
      const w = canvas?.clientWidth || window.innerWidth;
      const h = canvas?.clientHeight || window.innerHeight;
      if (canvas && (canvas.width !== w || canvas.height !== h)) {
        canvas.width = w;
        canvas.height = h;
      }
    }
    window.addEventListener('resize', syncSize);
    syncSize();

    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) return;
    
    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;
    
    const fs = `
      precision highp float;
      uniform float u_time;
      varying vec2 v_texCoord;

      void main() {
          vec2 uv = v_texCoord;
          // Organic liquid motion
          float noise = sin(uv.x * 10.0 + u_time) * 0.1 + sin(uv.y * 8.0 - u_time * 0.8) * 0.1;
          
          vec3 color1 = vec3(0.055, 0.439, 0.651); // #0E70A6
          vec3 color2 = vec3(0.153, 0.192, 0.286); // #273149
          
          float mixVal = smoothstep(0.3, 0.7, uv.y + noise);
          vec3 finalColor = mix(color1, color2, mixVal);
          
          float pulse = sin(u_time * 2.0) * 0.05 + 0.95;
          finalColor *= pulse;

          gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    function createShader(type: number, src: string) {
      const shader = gl!.createShader(type);
      if (!shader) return null;
      gl!.shaderSource(shader, src);
      gl!.compileShader(shader);
      return shader;
    }
    
    const prog = gl.createProgram();
    const vertexShader = createShader(gl.VERTEX_SHADER, vs);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fs);
    
    if (!prog || !vertexShader || !fragmentShader) return;
    
    gl.attachShader(prog, vertexShader);
    gl.attachShader(prog, fragmentShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);
    
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    
    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
    
    const uTime = gl.getUniformLocation(prog, 'u_time');
    
    let animationFrameId: number;
    function render(t: number) {
      if (!gl || !canvas) return;
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    }
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', syncSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#213145]"
        >
          {/* WebGL Shader Background */}
          <div className="absolute inset-0 w-full h-full opacity-40 mix-blend-soft-light pointer-events-none">
            <canvas ref={canvasRef} className="block w-full h-full" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center w-full max-w-sm px-6">
            
            {/* Brand Logo Container */}
            <motion.div 
              className="mb-12 bg-white px-6 py-4 rounded-[2px] shadow-xl"
              animate={{ scale: [1, 1.05, 1], opacity: [1, 0.85, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <img
                src="/bhaskar_logo_1.png"
                alt="Web Total Solution Logo"
                className="h-16 md:h-20 w-auto object-contain scale-[1.5]"
              />
            </motion.div>

            {/* Progress Information */}
            <div className="w-full flex flex-col items-center">
              {/* Percentage Counter */}
              <div className="mb-4">
                <span className="font-semibold text-sm text-[#ddedff] tabular-nums opacity-80 tracking-widest font-mono">
                  {progress}%
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-[1px] bg-[#bcc6e4]/30 overflow-hidden relative">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-[#0e70a6]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.3 }}
                />
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="absolute bottom-16 w-full text-center px-6">
            <p className="text-[11px] font-semibold text-[#ddedff]/60 uppercase tracking-[0.3em]">
              Architectural Precision for Digital Growth
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
