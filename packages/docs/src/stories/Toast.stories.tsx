import { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@edu-ignite-ui/react'

export default {
  title: 'Data Display/Toast',
  component: Toast,

  args: {
    title: 'Appointment scheduled',
    description: 'Wednesday, October 3rd at 4pm',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
