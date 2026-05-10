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
      rel="noopener noreferrer"
      aria-label={`${label} (opens in a new tab)`}
      className="inline-flex items-center gap-2 rounded-full bg-button p-2 font-bold text-button-foreground transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground xl:p-3">
      <span className="w-4 xl:w-5" aria-hidden="true">
        {icon}
      </span>
    </a>
  )
}

export default SocialButton
