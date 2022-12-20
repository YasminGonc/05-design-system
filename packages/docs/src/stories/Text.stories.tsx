import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typografy/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum molestias dolor reiciendis delectus, natus nihil, assumenda ea provident aliquam debitis expedita, fugit eius suscipit eos. Reiciendis velit autem ab nostrum?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
