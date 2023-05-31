import * as Toast from '@radix-ui/react-toast'
import { styled, keyframes } from '../../styles'

const slideRight = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: 'translateX(100%)',
  },
})

export const Root = styled(Toast.Root, {
  fontFamily: '$default',

  background: '$gray800',
  border: '1px solid $colors$gray600',
  borderRadius: '$sm',
  padding: '$3 $5',

  /* styles.css */
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${slideRight} 100ms ease-out`,
  },
})

export const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '$4',
})

export const Title = styled(Toast.Title, {
  color: '$white',
  fontSize: '$xl',
  fontWeight: '$bold',
  marginBottom: '$1',
})

export const Close = styled(Toast.Close, {
  width: '$5',
  height: '$5',
  color: '$gray200',
  cursor: 'pointer',
})

export const Description = styled(Toast.Description, {
  color: '$gray200',
  fontSize: '$sm',
})

export const Viewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '$8',
  gap: '$2',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  outline: 'none',
})
