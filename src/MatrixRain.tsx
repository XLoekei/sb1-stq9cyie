import React, { useEffect, useRef } from 'react';

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationPhaseRef = useRef<'boot' | 'text'>('boot');
  const textPositionsRef = useRef<{ x: number; y: number; char: string }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];
    let activeColumns = new Set<number>();
    let startTime = Date.now();

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Multi-language character sets
    const characterSets = {
      japanese: 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン',
      chinese: '的一是不了人我在有他这为之大来以个中上们',
      korean: 'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣ',
      cyrillic: 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
      greek: 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ',
      arabic: 'ابتثجحخدذرزسشصضطظعغفقكلمنهوي',
      devanagari: 'अआइईउऊएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह',
      thai: 'กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮ',
      numbers: '0123456789',
      binary: '01'
    };

    const allChars = Object.values(characterSets).join('');

    // Create text positions for "WHOLEFIT"
    const createTextPositions = () => {
      const text = 'WHOLEFIT';
      context.font = `${fontSize * 2}px monospace`; // Larger text
      const textWidth = context.measureText(text).width;
      const startX = (canvas.width - textWidth) / 2;
      const startY = canvas.height / 2;
      
      textPositionsRef.current = text.split('').map((char, i) => ({
        x: startX + i * (fontSize * 2),
        y: startY,
        char
      }));
    };

    // Check if a position is part of the text outline with glow effect
    const isPartOfText = (x: number, y: number): string | null => {
      for (const pos of textPositionsRef.current) {
        const distance = Math.sqrt(Math.pow(x - pos.x, 2) + Math.pow(y - pos.y, 2));
        if (distance < fontSize * 1.5) { // Increased detection radius for better text formation
          return pos.char;
        }
      }
      return null;
    };

    function draw() {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;

      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Boot sequence phases
      if (elapsed < 3000) {
        // Vertical cascade boot sequence
        animationPhaseRef.current = 'boot';
        const newColumns = Math.floor((elapsed / 3000) * columns);
        
        for (let i = 0; i < newColumns; i++) {
          if (!activeColumns.has(i)) {
            activeColumns.add(i);
          }
        }
      } else {
        // Text formation phase
        animationPhaseRef.current = 'text';
        activeColumns = new Set(Array.from({ length: columns }, (_, i) => i));
        createTextPositions();
      }

      // Draw matrix rain
      context.font = `${fontSize}px monospace`;

      activeColumns.forEach(i => {
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Check if this position should be part of the text
        const textChar = isPartOfText(x, y);

        if (textChar && animationPhaseRef.current === 'text') {
          // Draw glowing text character
          context.fillStyle = '#fff';
          context.shadowColor = '#0fa';
          context.shadowBlur = 10;
          context.fillText(textChar, x, y);
          context.shadowBlur = 0;
        } else {
          // Draw regular matrix rain with varying opacity
          const text = allChars[Math.floor(Math.random() * allChars.length)];
          const green = 200 + Math.random() * 55;
          const opacity = Math.random() * 0.5 + 0.3; // Variable opacity for depth
          context.fillStyle = `rgba(0, ${green}, 170, ${opacity})`;
          context.fillText(text, x, y);
        }

        // Reset drops with variable speed
        if (drops[i] * fontSize > canvas.height) {
          if (Math.random() > 0.975) {
            drops[i] = 0;
          }
        }
        drops[i] += 0.5 + Math.random() * 0.5; // Variable fall speed
      });
    }

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createTextPositions();
      activeColumns = new Set();
      startTime = Date.now();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-rain" />;
};

export default MatrixRain;