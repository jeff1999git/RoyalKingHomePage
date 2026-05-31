import Image from 'next/image'

export default function CoverBanner() {
  return (
    <div className="flex w-full items-center justify-center gap-4 bg-sky-100 px-6 py-6">
      {/* Left: logo + badge + tagline */}
      <div className="flex flex-col items-start gap-2">
        <div className="relative" style={{ width: 160, height: 72 }}>
          <Image
            src="/logo.avif"
            alt="Royal King"
            fill
            sizes="160px"
            className="object-contain object-left"
            priority
          />
        </div>
        <span className="rounded-full bg-royal-blue/10 px-3 py-1 text-xs font-medium text-royal-blue">
          Water Supply
        </span>
        <p className="text-xs text-[#94A3B8]">Pure Water, Pure Life</p>
      </div>

      {/* Right: water can */}
      <div className="relative shrink-0" style={{ width: 130, height: 180 }}>
        <Image
          src="/water-can.avif"
          alt="Royal King branded 20L water can"
          fill
          sizes="130px"
          className="object-contain drop-shadow-md"
          priority
        />
      </div>
    </div>
  )
}
