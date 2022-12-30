import { useEffect, useRef, useState } from 'react'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
  XIcon,
} from './styles'
import * as Toast from '@radix-ui/react-toast'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Button } from '../Button'
import { ArrowRight } from 'phosphor-react'

export interface ToastProps {
  date: Date
}

export function ToastComponent({ date }: ToastProps) {
  const [open, setOpen] = useState(false)
  const timeRef = useRef(0)

  function handleOnClick() {
    setOpen(false)
    window.clearTimeout(timeRef.current)
    timeRef.current = window.setTimeout(() => {
      setOpen(true)
    }, 100)
  }

  function dateFormat(date: Date) {
    return format(date, "EEEE ',' dd 'de' MMMM 'às' kk'h", {
      locale: ptBR,
    })
  }

  useEffect(() => {
    return () => clearTimeout(timeRef.current)
  }, [])

  return (
    <Toast.Provider swipeDirection="right">
      <Button onClick={handleOnClick}>
        Finalizar
        <ArrowRight />
      </Button>

      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle>
          Agendamento realizado
          <ToastClose>
            <XIcon />
          </ToastClose>
        </ToastTitle>
        <Toast.Description asChild>
          <ToastDescription>{dateFormat(date)}</ToastDescription>
        </Toast.Description>
      </ToastRoot>

      <ToastViewport />
    </Toast.Provider>
  )
}
