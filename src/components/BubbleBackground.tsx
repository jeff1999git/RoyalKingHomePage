const BUBBLES: { left: string; size: number; duration: number; delay: number }[] = [
  { left: '5%',  size: 7,  duration: 7,  delay: 0    },
  { left: '12%', size: 4,  duration: 9,  delay: -2.5 },
  { left: '20%', size: 11, duration: 6,  delay: -4   },
  { left: '28%', size: 5,  duration: 8,  delay: -1   },
  { left: '36%', size: 9,  duration: 10, delay: -6   },
  { left: '44%', size: 4,  duration: 7,  delay: -3   },
  { left: '52%', size: 13, duration: 8,  delay: -5   },
  { left: '60%', size: 6,  duration: 6,  delay: -7   },
  { left: '68%', size: 5,  duration: 9,  delay: -2   },
  { left: '76%', size: 10, duration: 7,  delay: -4   },
  { left: '84%', size: 6,  duration: 8,  delay: -1   },
  { left: '92%', size: 8,  duration: 9,  delay: -3   },
  { left: '10%', size: 6,  duration: 11, delay: -8   },
  { left: '25%', size: 4,  duration: 7,  delay: -5   },
  { left: '40%', size: 8,  duration: 8,  delay: -9   },
  { left: '55%', size: 5,  duration: 6,  delay: -4   },
  { left: '70%', size: 12, duration: 9,  delay: -7   },
  { left: '86%', size: 7,  duration: 7,  delay: -2   },
  { left: '16%', size: 4,  duration: 8,  delay: -6   },
  { left: '96%', size: 5,  duration: 10, delay: -1   },
]

export default function BubbleBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: b.left,
            bottom: -b.size,
            width: b.size,
            height: b.size,
            background: `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9), rgba(0,180,216,0.2))`,
            border: '1px solid rgba(0,180,216,0.35)',
            animation: `bubble-rise ${b.duration}s ease-in ${b.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
