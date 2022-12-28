import { useState } from 'react'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
  XIcon,
} from './styles'
import * as Toast from '@radix-ui/react-toast'

import { Button } from '../Button'

export function ToastComponent() {
  const [open, setOpen] = useState(true)

  return (
    <Toast.Provider swipeDirection="right" duration={5000000}>
      <Button>Finalizar</Button>

      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle>
          Agendamento realizado
          <ToastClose>
            <XIcon />
          </ToastClose>
        </ToastTitle>
        <ToastDescription>Quarta-feira, 23 de outubro às 16h</ToastDescription>
      </ToastRoot>

      <ToastViewport />
    </Toast.Provider>
  )
}
