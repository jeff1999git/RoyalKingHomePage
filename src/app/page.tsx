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
    <div className="min-h-screen bg-page-bg">
      {/* Card column: full-width on mobile, 430px centered on desktop */}
      <div className="relative mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-sky-100">
        <BubbleBackground />

        {/* z-10 ensures all content sits above the bubble layer */}
        <div className="relative z-10">
          <CoverBanner />
          <QuickActions />

          <div className="pb-24 pt-3">
            <ContactCard />
            <AboutCard />
          </div>
        </div>

        <BottomBar />
      </div>
    </div>
  )
}
