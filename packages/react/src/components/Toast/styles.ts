import { styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  border: '1px solid $gray600',

  padding: '$5 $3',
  width: 360,

  fontFamily: '$default',
  lineHeight: '$base',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
})

export const XIcon = styled(X, {
  color: '$gray200',
  height: '$5',
  width: '$5',
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontSize: '$xl',
  fontWeight: '$bold',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const ToastDescription = styled('p', {
  color: '$gray200',
  fontSize: '$sm',
  margin: 0,
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  padding: '$8',
  listStyle: 'none',
})
