import Image from 'next/image'

export default function ProfileHeader() {
  return (
    <div className="flex flex-col items-center pb-5 pt-4">
      {/* Brand logo in place of text name */}
      <div className="relative h-16 w-48">
        <Image
          src="/logo.avif"
          alt="Royal King"
          fill
          className="object-contain"
          priority
          sizes="192px"
        />
      </div>

      {/* Category badge */}
      <span className="mt-2 rounded-full bg-royal-blue/10 px-3 py-1 text-xs font-medium text-royal-blue">
        Water Supply
      </span>

      {/* Tagline */}
      <p className="mt-1 text-sm text-[#94A3B8]">Pure Water, Pure Life</p>
    </div>
  )
}
