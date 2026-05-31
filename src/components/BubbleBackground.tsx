const BUBBLES: { left: string; size: number; duration: number; delay: number }[] = [
  { left: '3%',  size: 6,  duration: 7,  delay: 0    },
  { left: '7%',  size: 4,  duration: 9,  delay: -3   },
  { left: '11%', size: 9,  duration: 8,  delay: -1.5 },
  { left: '15%', size: 4,  duration: 6,  delay: -5   },
  { left: '19%', size: 11, duration: 10, delay: -2   },
  { left: '23%', size: 5,  duration: 7,  delay: -7   },
  { left: '27%', size: 7,  duration: 9,  delay: -4   },
  { left: '31%', size: 4,  duration: 6,  delay: -0.5 },
  { left: '35%', size: 10, duration: 8,  delay: -6   },
  { left: '39%', size: 5,  duration: 11, delay: -3   },
  { left: '43%', size: 7,  duration: 7,  delay: -8   },
  { left: '47%', size: 4,  duration: 9,  delay: -2   },
  { left: '51%', size: 13, duration: 8,  delay: -5   },
  { left: '55%', size: 5,  duration: 6,  delay: -1   },
  { left: '59%', size: 8,  duration: 10, delay: -9   },
  { left: '63%', size: 4,  duration: 7,  delay: -4   },
  { left: '67%', size: 10, duration: 9,  delay: -6   },
  { left: '71%', size: 5,  duration: 8,  delay: -2.5 },
  { left: '75%', size: 7,  duration: 6,  delay: -7   },
  { left: '79%', size: 4,  duration: 9,  delay: -3.5 },
  { left: '83%', size: 9,  duration: 7,  delay: -5   },
  { left: '87%', size: 5,  duration: 8,  delay: -1   },
  { left: '91%', size: 11, duration: 10, delay: -8   },
  { left: '95%', size: 6,  duration: 7,  delay: -4   },
  { left: '98%', size: 4,  duration: 9,  delay: -2   },
  { left: '5%',  size: 5,  duration: 11, delay: -9   },
  { left: '9%',  size: 8,  duration: 8,  delay: -6   },
  { left: '13%', size: 4,  duration: 7,  delay: -3   },
  { left: '21%', size: 6,  duration: 9,  delay: -10  },
  { left: '29%', size: 4,  duration: 6,  delay: -7   },
  { left: '37%', size: 9,  duration: 8,  delay: -4   },
  { left: '45%', size: 5,  duration: 10, delay: -11  },
  { left: '53%', size: 7,  duration: 7,  delay: -5   },
  { left: '61%', size: 4,  duration: 9,  delay: -8   },
  { left: '69%', size: 12, duration: 8,  delay: -3   },
  { left: '77%', size: 5,  duration: 6,  delay: -6   },
  { left: '85%', size: 7,  duration: 11, delay: -1   },
  { left: '93%', size: 4,  duration: 8,  delay: -9   },
  { left: '25%', size: 6,  duration: 7,  delay: -12  },
  { left: '73%', size: 5,  duration: 9,  delay: -10  },
]

export default function BubbleBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
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
