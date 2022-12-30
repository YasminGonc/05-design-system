import { ComponentProps } from 'react'
import { TooltipContent, TooltipText } from './styles'

import * as Tooltip from '@radix-ui/react-tooltip'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export interface TooltipPros extends ComponentProps<typeof TooltipText> {
  text: string
  date: Date
}

export function TooltipComponent(props: TooltipPros) {
  function formatDate(date: Date) {
    return format(date, 'dd')
  }

  function formatDateContent(date: Date) {
    return format(date, "dd 'de' MMMM -", {
      locale: ptBR,
    })
  }

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <TooltipText {...props}>{formatDate(props.date)}</TooltipText>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <TooltipContent sideOffset={-14}>
            {props.disponibility === 'available'
              ? `${formatDateContent(props.date)} Disponível`
              : `${formatDateContent(props.date)} Indisponível`}
            <Tooltip.Arrow />
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

TooltipComponent.displayName = 'Tooltip'
