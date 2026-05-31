import Image from 'next/image'

export default function CoverBanner() {
  return (
    <div
      className="relative h-44 w-full overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #003D91 0%, #0099C6 100%)' }}
    >
      {/* Decorative background circles */}
      <span className="absolute -right-5 -top-8 h-32 w-32 rounded-full bg-white opacity-[0.07]" />
      <span className="absolute left-8 -top-4 h-16 w-16 rounded-full bg-white opacity-[0.07]" />

      {/* Water can product image — centered above the logo */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{ width: 110, height: 160 }}
      >
        <Image
          src="/water-can.avif"
          alt="Royal King branded 20L water can"
          fill
          className="object-contain object-bottom drop-shadow-lg"
          priority
          sizes="110px"
        />
      </div>

      {/* Animated wave layers at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-14 overflow-hidden">
        {/* Wave 1 — slower, more opaque */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 56"
          preserveAspectRatio="none"
          className="absolute bottom-0"
          style={{
            width: '200%',
            height: '100%',
            animation: 'wave-move 5s linear infinite',
          }}
        >
          <path
            d="M0,28 C180,56 360,0 540,28 C720,56 900,0 1080,28 C1260,56 1440,0 1440,28 L1440,56 L0,56 Z"
            fill="rgba(255,255,255,0.18)"
          />
        </svg>

        {/* Wave 2 — faster, less opaque, reversed */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 56"
          preserveAspectRatio="none"
          className="absolute bottom-0"
          style={{
            width: '200%',
            height: '100%',
            animation: 'wave-move 3.5s linear infinite reverse',
          }}
        >
          <path
            d="M0,14 C240,40 480,4 720,22 C960,40 1200,8 1440,28 L1440,56 L0,56 Z"
            fill="rgba(255,255,255,0.10)"
          />
        </svg>
      </div>
    </div>
  )
}
