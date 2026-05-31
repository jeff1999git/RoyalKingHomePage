import { Droplets } from 'lucide-react'

export default function ProfileHeader() {
  return (
    <div className="flex flex-col items-center pb-5">
      {/* Logo circle — overlaps banner by 44px */}
      <div
        className="flex h-[88px] w-[88px] items-center justify-center rounded-full border-[3px] border-white bg-white shadow-lg"
        style={{ marginTop: '-44px' }}
        aria-label="Royal King logo"
      >
        <Droplets size={40} className="text-royal-blue" aria-hidden="true" />
      </div>

      {/* Business name */}
      <h1 className="mt-3 text-2xl font-bold tracking-tight text-deep-navy">
        Royal King
      </h1>

      {/* Category badge */}
      <span className="mt-1 rounded-full bg-royal-blue/10 px-3 py-1 text-xs font-medium text-royal-blue">
        Water Supply
      </span>

      {/* Tagline */}
      <p className="mt-1 text-sm text-[#94A3B8]">Pure Water, Pure Life</p>
    </div>
  )
}
