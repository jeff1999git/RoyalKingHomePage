import { Droplets, ShieldCheck, PackageCheck, Users } from 'lucide-react'

const features = [
  { icon: <Droplets    size={22} />, line1: 'PURE',     line2: '& SAFE'     },
  { icon: <ShieldCheck size={22} />, line1: 'TRUSTED',  line2: 'QUALITY'    },
  { icon: <PackageCheck size={22}/>, line1: 'ON TIME',  line2: 'DELIVERY'   },
  { icon: <Users       size={22} />, line1: 'FOR ALL',  line2: 'OCCASIONS'  },
]

export default function AboutCard() {
  return (
    <div
      className="card-hover mx-4 mb-3 overflow-hidden rounded-2xl border border-royal-blue/40 bg-white/10 shadow-card backdrop-blur-sm"
    >
      <p className="px-5 pb-2 pt-4 text-xs font-semibold uppercase tracking-widest text-[#94A3B8]">
        About Us
      </p>

      <p className="px-5 pb-4 text-sm leading-relaxed text-[#4A5568]">
        Royal King provides safe, hygienic and reliable drinking water for
        homes, offices, functions and events across Thrissur, Kerala.
      </p>

      {/* Horizontal feature strip */}
      <div className="flex border-t border-royal-blue/20">
        {features.map((f, idx) => (
          <div
            key={f.line1}
            className={`flex flex-1 flex-col items-center gap-2 py-4 ${
              idx < features.length - 1 ? 'border-r border-royal-blue/20' : ''
            }`}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-royal-blue text-white">
              {f.icon}
            </span>
            <span className="text-center text-[10px] font-bold leading-tight tracking-wide text-deep-navy">
              {f.line1}<br />{f.line2}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
