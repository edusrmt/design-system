import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const Content = styled(Tooltip.Content, {
  borderRadius: '$sm',
  padding: '$3 $4',
  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$short',
  color: '$gray100',
  background: '$gray900',
  boxShadow: '4px 16px 24px rgba(0, 0, 0, 0.25)',
  userSelect: 'none',
})

export const Arrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
