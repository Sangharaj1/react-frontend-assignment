import type { ReactNode } from 'react'

export type BasicButtonProps = {
  children?: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  fullWidth?: boolean
  className?: string
  onClick?: () => void
  id?: string
  title?: string
}
