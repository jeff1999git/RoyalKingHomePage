const VCARD = `BEGIN:VCARD
VERSION:3.0
FN:Royal King Water
ORG:Royal King
TEL;TYPE=CELL,VOICE:+917306067616
TEL;TYPE=WORK:+917306067616
ADR;TYPE=WORK:;;Thrissur;Kerala;;India
URL:https://royalkingwater.in
END:VCARD`

export function downloadVCard(): void {
  const blob = new Blob([VCARD], { type: 'text/vcard;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = 'royal-king-water.vcf'
  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
  URL.revokeObjectURL(url)
}
