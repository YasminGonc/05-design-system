import { StoryObj, Meta } from '@storybook/react'
import { TooltipComponent, TooltipPros } from '@yas-ignite-ui/react'

export default {
  title: 'Data Display/Tooltip',
  component: TooltipComponent,
  args: {
    text: '26 de Outubro - Disponível',
  },
  argTypes: {
    disponibility: {
      options: ['available', 'notAvailable'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TooltipPros>

export const Available: StoryObj<TooltipPros> = {}

export const NotAvailable: StoryObj<TooltipPros> = {
  args: {
    disponibility: 'notAvailable',
    text: '26 de Outubro - Indispinível',
  },
}
