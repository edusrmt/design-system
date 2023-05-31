import {
  Root as ToastRoot,
  Provider as ToastProvider,
} from '@radix-ui/react-toast'
import { X } from 'phosphor-react'

import { Close, Description, Header, Root, Title, Viewport } from './styles'
import { ComponentProps } from '@stitches/react'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastProvider>
      <Root {...props}>
        <Header>
          <Title>{title}</Title>

          <Close asChild>
            <X />
          </Close>
        </Header>
        <Description>{description}</Description>
      </Root>

      <Viewport />
    </ToastProvider>
  )
}
