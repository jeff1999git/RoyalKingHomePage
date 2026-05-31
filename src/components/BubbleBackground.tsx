const SIZES     = [2, 2, 3, 2, 4, 2, 3, 2, 5, 2, 2, 3, 2, 4, 2]
const DURATIONS = [6, 9, 7, 10, 8, 6, 11, 7, 9, 8, 6, 10, 7, 8, 9]
const DELAYS    = [0, -3, -7, -1.5, -5, -9, -2, -11, -4, -13, -6, -15, -8, -17, -10,
                   -12, -14, -16, -18, -20, -0.5, -2.5, -3.5, -19, -4.5]
const ANIMS     = ['bubble-rise-a', 'bubble-rise-b', 'bubble-rise-c', 'bubble-rise-d']

const BUBBLES = Array.from({ length: 550 }, (_, i) => ({
  left:     `${((i / 549) * 99.6 + 0.2).toFixed(2)}%`,
  size:     SIZES[i % SIZES.length],
  duration: DURATIONS[i % DURATIONS.length],
  delay:    DELAYS[i % DELAYS.length],
  anim:     ANIMS[i % ANIMS.length],
}))

export default function BubbleBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
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
            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(0,180,216,0.4))`,
            border: '1px solid rgba(0,180,216,0.65)',
            animation: `${b.anim} ${b.duration}s ease-in ${b.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
