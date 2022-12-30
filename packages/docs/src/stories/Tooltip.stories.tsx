import { StoryObj, Meta } from '@storybook/react'
import { TooltipComponent, TooltipPros } from '@yas-ignite-ui/react'

export default {
  title: 'Data Display/Tooltip',
  component: TooltipComponent,
  args: {},
  argTypes: {
    disponibility: {
      options: ['available', 'notAvailable'],
      control: {
        type: 'inline-radio',
      },
    },
    date: {
      control: {
        type: 'date',
      },
    },
  },
} as Meta<TooltipPros>

export const Available: StoryObj<TooltipPros> = {
  args: {
    date: new Date(),
    disponibility: 'available',
  },
}

export const NotAvailable: StoryObj<TooltipPros> = {
  args: {
    date: new Date(),
    disponibility: 'notAvailable',
  },
}
