import { Phone, MessageCircle, MapPin } from 'lucide-react'
import type { CSSProperties } from 'react'

const MAPS_URL = 'https://maps.google.com/?q=Thrissur,Kerala,India'
const WA_URL = 'https://wa.me/917306067616'
const IG_URL = 'https://www.instagram.com/royalking_water?igsh=MWdzZTJ1cTZ6YXV5aQ=='

function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}

interface ActionButtonProps {
  href: string
  bgClass?: string
  bgStyle?: CSSProperties
  icon: React.ReactNode
  label: string
  external?: boolean
}

function ActionButton({ href, bgClass = '', bgStyle, icon, label, external }: ActionButtonProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="flex flex-col items-center gap-2"
      aria-label={label}
    >
      <span
        className={`tap-target flex h-12 w-12 items-center justify-center rounded-full text-white ${bgClass}`}
        style={bgStyle}
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="text-xs text-black">{label}</span>
    </a>
  )
}

export default function QuickActions() {
  return (
    <div className="flex flex-row items-center justify-center gap-10 border-b border-royal-blue/20 bg-white/10 px-6 py-4 backdrop-blur-sm">
      <ActionButton
        href="tel:7306067616"
        bgClass="bg-royal-blue"
        icon={<Phone size={22} />}
        label="Call Now"
      />
      <ActionButton
        href={WA_URL}
        bgClass="bg-green-wa"
        icon={<MessageCircle size={22} />}
        label="WhatsApp"
        external
      />
      <ActionButton
        href={MAPS_URL}
        bgClass="bg-water-cyan"
        icon={<MapPin size={22} />}
        label="Location"
        external
      />
      <ActionButton
        href={IG_URL}
        bgStyle={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
        icon={<InstagramIcon size={22} />}
        label="Instagram"
        external
      />
    </div>
  )
}
