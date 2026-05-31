'use client'

import CoverBanner from '@/components/CoverBanner'
import ProfileHeader from '@/components/ProfileHeader'
import QuickActions from '@/components/QuickActions'
import ContactCard from '@/components/ContactCard'
import AboutCard from '@/components/AboutCard'
import Footer from '@/components/Footer'
import BottomBar from '@/components/BottomBar'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Page() {
  useScrollReveal()

  return (
    <div className="min-h-screen bg-page-bg">
      {/* Card column: full-width on mobile, 430px centered on desktop */}
      <div className="relative mx-auto min-h-screen w-full max-w-[430px] bg-white">
        <CoverBanner />
        <ProfileHeader />
        <QuickActions />

        {/* pb-24 reserves space so footer content clears the sticky bottom bar */}
        <div className="pt-3">
          <ContactCard />
          <AboutCard />
          <Footer />
        </div>

        <BottomBar />
      </div>
    </div>
  )
}
