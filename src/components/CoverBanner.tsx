import Image from 'next/image'

export default function CoverBanner() {
  return (
    <div className="flex w-full items-end justify-center bg-white pt-6" style={{ height: 180 }}>
      <div className="relative" style={{ width: 120, height: 170 }}>
        <Image
          src="/water-can.avif"
          alt="Royal King branded 20L water can"
          fill
          sizes="120px"
          className="object-contain object-bottom drop-shadow-md"
          priority
        />
      </div>
    </div>
  )
}
