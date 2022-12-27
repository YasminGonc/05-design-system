import * as Tooltip from '@radix-ui/react-tooltip'
import { TooltipContent, TooltipText } from './styles'
import { ComponentProps } from 'react'

export interface TooltipPros extends ComponentProps<typeof TooltipText> {
  text: string
}

export function TooltipComponent(props: TooltipPros) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <TooltipText {...props}>27</TooltipText>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <TooltipContent sideOffset={-14}>
            {props.text}
            <Tooltip.Arrow />
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

TooltipComponent.displayName = 'Tooltip'
