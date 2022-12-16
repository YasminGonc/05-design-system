import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default { //configuração global do botão
    title: 'Button',
    component: Button,
    args: {
        children: 'Enviar'
    },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
    args: {
        size: 'big',
    },
}