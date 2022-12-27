import * as Tooltip from '@radix-ui/react-tooltip'
import { keyframes, styled } from '../../styles'
import { Text } from '../Text'

export const TooltipText = styled(Text, {
  color: '$white',
  width: 'fit-content',
  padding: '$4 $6',
  borderRadius: '$sm',
  cursor: 'default',

  variants: {
    disponibility: {
      available: {
        backgroundColor: '$gray600',
      },
      notAvailable: {
        backgroundColor: 'transparent',
      },
    },
  },

  defaultVariants: {
    disponibility: 'available',
  },
})

const slideUpAndFade = keyframes({
  from: {
    transform: 'translateY(2px)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideRightAndFade = keyframes({
  from: {
    transform: 'translateX(-2px)',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const slideDownAndFade = keyframes({
  from: {
    transform: 'translateY(-2px)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideLeftAndFade = keyframes({
  from: {
    transform: 'translateX(2px)',
  },
  to: {
    transform: 'translateX(0)',
  },
})

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  padding: '$3 $4',

  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',

  '&[data-state="delayed-open"][data-side="top"]': {
    animation: `${slideDownAndFade} 200ms ease-out`,
  },

  '&[data-state="delayed-open"][data-side="right"]': {
    animation: `${slideLeftAndFade} 200ms ease-out`,
  },

  '&[data-state="delayed-open"][data-side="bottom"]': {
    animation: `${slideUpAndFade} 200ms ease-out`,
  },

  '&[data-state="delayed-open"][data-side="left"]': {
    animation: `${slideRightAndFade} 200ms ease-out`,
  },
})
