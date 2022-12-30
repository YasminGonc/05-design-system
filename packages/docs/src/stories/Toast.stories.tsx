import { StoryObj, Meta } from '@storybook/react'
import { ToastComponent, ToastProps } from '@yas-ignite-ui/react'

export default {
  title: 'Data Display/Toast',
  component: ToastComponent,
  args: {},
  argTypes: {
    date: {
      control: {
        type: 'date',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    date: new Date(),
  },
}
