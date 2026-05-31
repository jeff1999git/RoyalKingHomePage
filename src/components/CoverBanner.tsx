export default function CoverBanner() {
  return (
    <div
      className="relative h-40 w-full overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #003D91 0%, #0099C6 100%)',
      }}
      aria-hidden="true"
    >
      {/* Decorative circles — depth without image weight */}
      <span
        className="absolute rounded-full bg-white opacity-10"
        style={{ width: 120, height: 120, top: -30, right: -20 }}
      />
      <span
        className="absolute rounded-full bg-white opacity-10"
        style={{ width: 80, height: 80, bottom: -10, left: 30 }}
      />
      <span
        className="absolute rounded-full bg-white opacity-[0.07]"
        style={{ width: 50, height: 50, top: 20, left: '45%' }}
      />
    </div>
  )
}
