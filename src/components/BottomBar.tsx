'use client'

import { useState } from 'react'
import { Download, Share2, Check } from 'lucide-react'
import { downloadVCard } from '@/lib/vcard'

export default function BottomBar() {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const data = {
      title: 'Royal King Water',
      text: 'Pure Water, Pure Life — Trusted water delivery in Thrissur',
      url: window.location.href,
    }

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share(data)
      } catch {
        // user cancelled share sheet — no action needed
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch {
        // clipboard not available
      }
    }
  }

  return (
    <div
      className="fixed bottom-0 z-50 flex w-full max-w-[430px] border-t border-border-light bg-white shadow-[0_-2px_12px_rgba(0,0,0,0.08)]"
      style={{
        left: '50%',
        transform: 'translateX(-50%)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
    >
      {/* Save Contact */}
      <button
        onClick={downloadVCard}
        className="tap-target flex flex-1 items-center justify-center gap-2 bg-royal-blue py-3.5 text-sm font-semibold text-white"
        aria-label="Save Royal King contact to phone"
      >
        <Download size={16} aria-hidden="true" />
        Save Contact
      </button>

      {/* Share */}
      <button
        onClick={handleShare}
        className="tap-target flex flex-1 items-center justify-center gap-2 border-l border-border-light bg-white py-3.5 text-sm font-semibold text-royal-blue"
        aria-label={copied ? 'Link copied' : 'Share this page'}
      >
        {copied ? (
          <>
            <Check size={16} aria-hidden="true" />
            Copied!
          </>
        ) : (
          <>
            <Share2 size={16} aria-hidden="true" />
            Share
          </>
        )}
      </button>
    </div>
  )
}
