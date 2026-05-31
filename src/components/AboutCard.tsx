import { Check } from 'lucide-react'

const features = [
  'Pure & Safe',
  'Trusted Quality',
  'On Time Delivery',
  'All Occasions',
]

export default function AboutCard() {
  return (
    <div
      data-reveal
      data-reveal-delay="1"
      className="card-hover mx-4 mb-3 overflow-hidden rounded-2xl border border-border-light bg-white shadow-card"
    >
      <p className="px-5 pb-2 pt-4 text-xs font-semibold uppercase tracking-widest text-[#94A3B8]">
        About Us
      </p>

      <p className="px-5 pb-4 text-sm leading-relaxed text-[#4A5568]">
        Royal King provides safe, hygienic and reliable drinking water for
        homes, offices, functions and events across Thrissur, Kerala.
      </p>

      <div className="flex flex-wrap gap-2 px-5 pb-5">
        {features.map((feature) => (
          <span
            key={feature}
            className="flex items-center gap-1.5 rounded-full bg-royal-blue/[0.08] px-3 py-1.5 text-xs font-medium text-royal-blue"
          >
            <Check size={12} aria-hidden="true" />
            {feature}
          </span>
        ))}
      </div>
    </div>
  )
}
