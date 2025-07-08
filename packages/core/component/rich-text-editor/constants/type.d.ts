import { JSONContent } from '@tiptap/vue-3'
import { IconsOptions } from '../setup/icons'

export interface GeneralOptions<T> {
  /** Divider 포함 유무 */
  divider: boolean
  /** Spacer 포함 유무 */
  spacer: boolean
  /** Button view function */
  button: ButtonView<T>
}

/**
 * onChange Event
 */
export type TiptapOnChange = {
  /** Editor object */
  editor: CoreEditor
  /** Output content, can be a string or JSON content */
  output: string | JSONContent
}

/**
 * Represents the props for the ButtonView component.
 */
export interface ButtonViewReturnComponentProps {
  /** Method triggered when action is performed */
  action?: (value?: unknown) => void
  /** Whether it is in the active state */
  isActive?: () => boolean
  /** Button icon */
  icon?: keyof IconsOptions
  /** Text displayed on hover */
  tooltip?: string
  [x: string]: any
}
