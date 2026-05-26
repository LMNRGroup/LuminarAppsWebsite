"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface InteractiveGridPatternProps
  extends React.HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
  radius?: number;
}

interface GridSize {
  width: number;
  height: number;
}

const brandColors = ["#8b5cf6", "#f4d27a", "#78a6ff"] as const;

export function InteractiveGridPattern({
  className,
  width = 24,
  height = 24,
  radius = 5,
  ...props
}: InteractiveGridPatternProps) {
  const gradientId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<GridSize>({ width: 0, height: 0 });
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) {
      return;
    }

    const updateSize = () => {
      setSize({ width: node.clientWidth, height: node.clientHeight });
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(node);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setPointer({ x: event.clientX, y: event.clientY });
    };

    const handlePointerLeave = () => {
      setPointer(null);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  const activeSquares = useMemo(() => {
    if (!pointer || radius <= 0 || size.width === 0 || size.height === 0) {
      return [];
    }

    const cols = Math.ceil(size.width / width);
    const rows = Math.ceil(size.height / height);
    const centerCol = Math.floor(pointer.x / width);
    const centerRow = Math.floor(pointer.y / height);
    const squares: Array<{
      color: string;
      opacity: number;
      x: number;
      y: number;
    }> = [];

    for (let col = centerCol - radius; col <= centerCol + radius; col += 1) {
      for (let row = centerRow - radius; row <= centerRow + radius; row += 1) {
        if (col < 0 || row < 0 || col >= cols || row >= rows) {
          continue;
        }

        const distance = Math.hypot(col - centerCol, row - centerRow);
        if (distance > radius) {
          continue;
        }

        const falloff = 1 - distance / radius;
        const colorIndex = Math.abs((col * 7 + row * 13) % brandColors.length);

        squares.push({
          color: brandColors[colorIndex],
          opacity: 0.08 + falloff * 0.28,
          x: col * width,
          y: row * height,
        });
      }
    }

    return squares;
  }, [height, pointer, radius, size.height, size.width, width]);

  return (
    <div
      ref={containerRef}
      className={cn("h-full w-full", className)}
      {...props}
    >
      <svg
        aria-hidden="true"
        className="h-full w-full"
        height={size.height}
        preserveAspectRatio="none"
        viewBox={`0 0 ${Math.max(size.width, 1)} ${Math.max(size.height, 1)}`}
        width={size.width}
      >
        <defs>
          <pattern
            id={gradientId}
            height={height}
            patternUnits="userSpaceOnUse"
            width={width}
            x="0"
            y="0"
          >
            <path
              d={`M ${width} 0 L 0 0 0 ${height}`}
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect fill={`url(#${gradientId})`} height="100%" width="100%" />

        {activeSquares.map((square) => (
          <rect
            key={`${square.x}-${square.y}`}
            fill={square.color}
            fillOpacity={square.opacity}
            height={height - 1}
            rx="3"
            width={width - 1}
            x={square.x}
            y={square.y}
          />
        ))}
      </svg>
    </div>
  );
}
