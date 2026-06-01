'use client'

import { useState } from 'react'
import { Package, ChevronDown, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function BulkOrderCard() {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 15000)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        signal: controller.signal,
      })
      clearTimeout(timer)
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (err: unknown) {
      clearTimeout(timer)
      const msg =
        err instanceof Error
          ? err.name === 'AbortError'
            ? 'Request timed out. Please try again.'
            : err.message
          : 'Failed to send.'
      setErrorMsg(msg)
      setStatus('error')
    }
  }

  return (
    <div data-reveal className="card-hover mx-4 mb-3 overflow-hidden rounded-2xl border border-royal-blue/40 bg-white/10 shadow-card backdrop-blur-sm">
      {/* Header — always visible */}
      <button
        type="button"
        onClick={() => { setOpen(o => !o); setStatus('idle') }}
        className="tap-target flex w-full items-center gap-3 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-royal-blue/10">
          <Package size={17} className="text-royal-blue" />
        </span>
        <span className="flex-1">
          <span className="block text-sm font-semibold text-deep-navy">For Bulk Orders</span>
          <span className="block text-xs text-black">Tap to place a bulk inquiry</span>
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-royal-blue transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown form */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="border-t border-royal-blue/20 px-5 pb-5 pt-4">
          {status === 'success' ? (
            <div className="flex flex-col items-center gap-2 py-4 text-center">
              <CheckCircle size={36} className="text-green-500" />
              <p className="text-sm font-semibold text-deep-navy">Message Sent!</p>
              <p className="text-xs text-black">We&apos;ll get back to you shortly.</p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-2 text-xs text-royal-blue underline underline-offset-2"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-royal-blue/30 bg-white/20 px-4 py-2.5 text-sm text-deep-navy placeholder-black/40 outline-none focus:border-royal-blue focus:ring-1 focus:ring-royal-blue/30"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-royal-blue/30 bg-white/20 px-4 py-2.5 text-sm text-deep-navy placeholder-black/40 outline-none focus:border-royal-blue focus:ring-1 focus:ring-royal-blue/30"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-royal-blue/30 bg-white/20 px-4 py-2.5 text-sm text-deep-navy placeholder-black/40 outline-none focus:border-royal-blue focus:ring-1 focus:ring-royal-blue/30"
              />
              <textarea
                name="message"
                placeholder="Message or Inquiry (quantity, location, schedule…)"
                required
                rows={3}
                value={form.message}
                onChange={handleChange}
                className="w-full resize-none rounded-xl border border-royal-blue/30 bg-white/20 px-4 py-2.5 text-sm text-deep-navy placeholder-black/40 outline-none focus:border-royal-blue focus:ring-1 focus:ring-royal-blue/30"
              />

              {status === 'error' && (
                <div className="flex items-center gap-2 text-xs text-red-500">
                  <AlertCircle size={14} />
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="tap-target flex items-center justify-center gap-2 rounded-xl bg-royal-blue py-3 text-sm font-semibold text-white disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
