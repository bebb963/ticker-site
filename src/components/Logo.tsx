import Image from 'next/image'

type LogoVariant = 'light' | 'dark' | 'footer'

interface LogoProps {
  variant?: LogoVariant
  className?: string
}

const variantStyles: Record<LogoVariant, React.CSSProperties> = {
  light: {
    filter: 'none',
  },
  dark: {
    filter: 'brightness(0) invert(1)',
  },
  footer: {
    filter: 'brightness(0) invert(1)',
  },
}

const variantSizes: Record<LogoVariant, { width: number; height: number }> = {
  light:  { width: 160, height: 40 },
  dark:   { width: 160, height: 40 },
  footer: { width: 400, height: 100 },
}

export default function Logo({ variant = 'light', className = '' }: LogoProps) {
  const { width, height } = variantSizes[variant]
  const style = variantStyles[variant]

  return (
    <Image
      src="/images/logo-TICKER.png"
      alt="Ticker"
      width={width}
      height={height}
      style={style}
      className={className}
      priority
    />
  )
}
