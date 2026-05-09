import type { ReactNode } from 'react'

type SocialButtonProps = {
  href: string
  label: string
  icon: ReactNode
}

function SocialButton({ href, label, icon }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-2 rounded-full bg-button fill-button-foreground p-2 font-bold text-button-foreground transition-opacity hover:opacity-70 xl:p-3">
      <span className="w-4 xl:w-5">{icon}</span>
    </a>
  )
}

export default SocialButton
