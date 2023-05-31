import { StoryObj, Meta } from '@storybook/react'
import { Button, Tooltip } from '@edu-ignite-ui/react'
import { PlusCircle } from 'phosphor-react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,

  args: {
    children: (
      <Button>
        <PlusCircle weight="bold" />
      </Button>
    ),
    message: 'Add new item',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta

export const Primary: StoryObj = {}
