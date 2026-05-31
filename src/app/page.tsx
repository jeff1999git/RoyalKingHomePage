'use client'

import CoverBanner from '@/components/CoverBanner'
import QuickActions from '@/components/QuickActions'
import ContactCard from '@/components/ContactCard'
import AboutCard from '@/components/AboutCard'
import BottomBar from '@/components/BottomBar'
import BubbleBackground from '@/components/BubbleBackground'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Page() {
  useScrollReveal()

  return (
    <div className="min-h-screen bg-[#dff4ff]">
      {/* Full-viewport bubble layer */}
      <BubbleBackground />

      {/* Card column: full-width on mobile, 430px centered on desktop */}
      <div className="relative z-10 mx-auto min-h-screen w-full max-w-[430px]">
        <CoverBanner />
        <QuickActions />

        <div className="pb-24 pt-3">
          <ContactCard />
          <AboutCard />
        </div>

        <BottomBar />
      </div>
    </div>
  )
}
