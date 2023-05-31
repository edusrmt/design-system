import * as RadixTooltip from '@radix-ui/react-tooltip'
import { Arrow, Content } from './styles'
import { ReactNode } from 'react'

export interface TooltipProps {
  children: ReactNode
  message: string
}

export function Tooltip({ children, message }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <Content sideOffset={5}>
            {message}
            <Arrow />
          </Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
