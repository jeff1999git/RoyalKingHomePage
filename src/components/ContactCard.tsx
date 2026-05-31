import { Phone, MessageCircle, MapPin, Mail, ChevronRight } from 'lucide-react'

const MAPS_URL = 'https://maps.app.goo.gl/Jp7GUyAE5WmsqwUSA'
const WA_URL = 'https://wa.me/917306067616'
const IG_URL = 'https://www.instagram.com/royalking_water?igsh=MWdzZTJ1cTZ6YXV5aQ=='

function InstagramIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}

interface ContactRowProps {
  href: string
  iconBg: string
  iconColor: string
  icon: React.ReactNode
  primary: string
  secondary: string
  external?: boolean
}

function ContactRow({
  href,
  iconBg,
  iconColor,
  icon,
  primary,
  secondary,
  external,
}: ContactRowProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="tap-target flex items-center gap-3 border-b border-royal-blue/20 px-5 py-3 last:border-b-0"
      aria-label={`${primary} — ${secondary}`}
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${iconBg}`}
        aria-hidden="true"
      >
        <span className={iconColor}>{icon}</span>
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-deep-navy">{primary}</span>
        <span className="block text-xs text-black">{secondary}</span>
      </span>

      <ChevronRight size={16} className="shrink-0 text-black" aria-hidden="true" />
    </a>
  )
}

export default function ContactCard() {
  return (
    <div className="card-hover mx-4 mb-3 overflow-hidden rounded-2xl border border-royal-blue/40 bg-white/10 shadow-card backdrop-blur-sm">
      <p className="px-5 pb-2 pt-4 text-xs font-semibold uppercase tracking-widest text-black">
        Contact Us
      </p>

      <ContactRow
        href="tel:7306067616"
        iconBg="bg-royal-blue/10"
        iconColor="text-royal-blue"
        icon={<Phone size={17} />}
        primary="7306067616"
        secondary="Tap to call"
      />

      <ContactRow
        href={WA_URL}
        iconBg="bg-green-500/10"
        iconColor="text-green-500"
        icon={<MessageCircle size={17} />}
        primary="7306067616"
        secondary="Chat on WhatsApp"
        external
      />

      <ContactRow
        href={MAPS_URL}
        iconBg="bg-water-cyan/10"
        iconColor="text-water-cyan"
        icon={<MapPin size={17} />}
        primary="Thrissur, Kerala"
        secondary="View on Google Maps"
        external
      />

      <ContactRow
        href={IG_URL}
        iconBg="bg-pink-50"
        iconColor="text-pink-500"
        icon={<InstagramIcon size={17} />}
        primary="@royalking_water"
        secondary="Follow on Instagram"
        external
      />

      <ContactRow
        href="mailto:royalkingwatersupply@gmail.com"
        iconBg="bg-red-50"
        iconColor="text-red-500"
        icon={<Mail size={17} />}
        primary="royalkingwatersupply@gmail.com"
        secondary="Send an email"
      />
    </div>
  )
}
