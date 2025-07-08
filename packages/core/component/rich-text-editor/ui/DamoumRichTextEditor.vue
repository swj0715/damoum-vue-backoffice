<script setup lang="ts">
import { VBtnToggle, VSheet } from 'vuetify/lib/components/index.mjs'
import { EditorContent, AnyExtension, Editor } from '@tiptap/vue-3'
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import ActionButton from './ActionButton.vue'
import ColorButton from './ColorButton.vue'
import { TiptapOnChange } from '../constants/type'
import { getCssUnitWithDefault } from '../utils/utils'
import { computed, watch, onBeforeUnmount } from 'vue'

interface Props {
  dense?: boolean
  outlined?: boolean
  flat?: boolean
  disabled?: boolean
  label?: string
  removeDefaultWrapper?: boolean
  maxWidth?: string | number
  minHeight?: string | number
  maxHeight?: string | number
  extensions?: AnyExtension[]
  editorClass?: string | string[] | Record<string, any>
  errorMessages?: string | string[] | null
}

interface Emits {
  (event: 'enter'): void
  (event: 'change', value: TiptapOnChange): void
}

const props = withDefaults(defineProps<Props>(), {
  dense: false,
  outlined: true,
  flat: true,
  disabled: false,
  label: undefined,
  removeDefaultWrapper: false,
  maxWidth: undefined,
  minHeight: undefined,
  maxHeight: undefined,
  errorMessages: () => [],
  // Editor
  extensions: () => [],
  editorClass: undefined
})

const content = defineModel<string>()

const editor = new Editor({
  extensions: [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    TextStyle,
    StarterKit,
    Underline
  ],
  content: content.value,
  injectCSS: true,
  autofocus: false,
  editable: !props.disabled,
  onUpdate: ({ editor }) => {
    content.value = editor.getHTML()
  }
})

const contentDynamicStyles = computed(() => {
  const maxWidth = getCssUnitWithDefault(props.maxWidth)

  const maxHeightStyle = {
    maxWidth: maxWidth,
    width: !maxWidth ? undefined : '100%',
    margin: !maxWidth ? undefined : '0 auto'
  }

  const minHeight = getCssUnitWithDefault(props.minHeight)
  const maxHeight = getCssUnitWithDefault(props.maxHeight)

  return {
    minHeight,
    maxHeight,
    overflowY: 'auto',
    ...maxHeightStyle
  }
})

watch(
  () => props.disabled,
  (newValue) => {
    editor.setEditable(!newValue)
  }
)

watch(
  () => content.value,
  (newValue) => {
    if (editor && editor?.getHTML() !== newValue) {
      editor?.commands.setContent(newValue ?? '')
    }
  }
)

if (editor) {
  editor.on('update', () => {
    const htmlContent = editor?.getHTML()
    if (htmlContent !== content.value) {
      content.value = htmlContent
    }
  })
}

onBeforeUnmount(() => {
  editor?.destroy()
})
</script>
<template>
  <VCard :flat="false" :outlined="true">
    <div class="damoum-tiptap-editor__toolbar">
      <VToolbar density="compact" flat height="auto" class="py-1 ps-1">
        <VBtnToggle>
          <ActionButton
            :icon="'bold'"
            :tooltip="'Bold'"
            :disabled="!editor?.can().toggleBold() || props.disabled"
            :action="() => editor?.chain().focus().toggleBold().run()"
            :color="'primary'"
            :isActive="() => editor?.isActive('bold') || false"
          />
          <ActionButton
            :icon="'italic'"
            :tooltip="'italic'"
            :disabled="!editor?.can().toggleItalic() || props.disabled"
            :action="() => editor?.chain().focus().toggleItalic().run()"
            :color="'primary'"
            :isActive="() => editor?.isActive('italic') || false"
          />
          <ActionButton
            :icon="'underline'"
            :tooltip="'underline'"
            :disabled="!editor?.can().toggleUnderline() || props.disabled"
            :action="() => editor?.chain().focus().toggleUnderline().run()"
            :color="'primary'"
            :isActive="() => editor?.isActive('underline') || false"
          />
          <ActionButton
            :icon="'strike'"
            :tooltip="'strike'"
            :disabled="!editor?.can().toggleStrike() || props.disabled"
            :action="() => editor?.chain().focus().toggleStrike().run()"
            :color="'primary'"
            :isActive="() => editor?.isActive('strike') || false"
          />
          <VDivider vertical class="mx-1 me-2" />
          <ActionButton
            :icon="'bulletList'"
            :tooltip="'bulletList'"
            :disabled="!editor?.can().toggleBulletList() || props.disabled"
            :action="() => editor?.chain().focus().toggleBulletList().run()"
            :color="'primary'"
            :isActive="() => editor?.isActive('bulletList') || false"
          />
          <ActionButton
            :icon="'orderedList'"
            :tooltip="'orderedList'"
            :disabled="!editor?.can().toggleOrderedList() || props.disabled"
            :action="() => editor?.chain().focus().toggleOrderedList().run()"
            :color="'primary'"
            :isActive="() => editor?.isActive('orderedList') || false"
          />
          <VDivider vertical class="mx-1 me-2" />
          <ActionButton
            :icon="'h1'"
            :tooltip="'h1'"
            :disabled="!editor?.can().toggleHeading({ level: 1 }) || props.disabled"
            :action="() => editor?.chain().focus().toggleHeading({ level: 1 }).run()"
            :color="'primary'"
            :isActive="() => editor?.isActive('heading', { level: 1 }) || false"
          />
          <ActionButton
            :icon="'h2'"
            :tooltip="'h2'"
            :disabled="!editor?.can().toggleHeading({ level: 2 }) || props.disabled"
            :action="() => editor?.chain().focus().toggleHeading({ level: 2 }).run()"
            :color="'primary'"
            :isActive="() => editor?.isActive('heading', { level: 2 }) || false"
          />
          <ActionButton
            :icon="'h3'"
            :tooltip="'h3'"
            :disabled="!editor?.can().toggleHeading({ level: 3 }) || props.disabled"
            :action="() => editor?.chain().focus().toggleHeading({ level: 3 }).run()"
            :color="'primary'"
            :isActive="() => editor?.isActive('heading', { level: 3 }) || false"
          />
          <ActionButton
            :icon="'h4'"
            :tooltip="'h4'"
            :disabled="!editor?.can().toggleHeading({ level: 4 }) || props.disabled"
            :action="() => editor?.chain().focus().toggleHeading({ level: 4 }).run()"
            :color="'primary'"
            :isActive="() => editor?.isActive('heading', { level: 4 }) || false"
          />
          <ActionButton
            :icon="'h5'"
            :tooltip="'h5'"
            :disabled="!editor?.can().toggleHeading({ level: 5 }) || props.disabled"
            :action="() => editor?.chain().focus().toggleHeading({ level: 5 }).run()"
            :color="'primary'"
            :isActive="() => editor?.isActive('heading', { level: 5 }) || false"
          />
          <ActionButton
            :icon="'h6'"
            :tooltip="'h6'"
            :disabled="!editor?.can().toggleHeading({ level: 6 }) || props.disabled"
            :action="() => editor?.chain().focus().toggleHeading({ level: 6 }).run()"
            :color="'primary'"
            :isActive="() => editor?.isActive('heading', { level: 6 }) || false"
          />
          <ActionButton
            :icon="'p'"
            :tooltip="'paragraph'"
            :disabled="!editor?.can().setParagraph() || props.disabled"
            :action="() => editor?.chain().focus().setParagraph().run()"
            :color="'primary'"
            :isActive="() => editor?.isActive('paragraph') || false"
          />
          <ColorButton
            :editor="editor"
            :icon="'color'"
            :tooltip="'color'"
            :disabled="!editor?.can().setColor('') || props.disabled"
            :action="(color? : unknown) => {if(typeof color === 'string') editor?.chain().focus().setColor(color).run()}"
            :color="'primary'"
            :isActive="() => {
              const { color } = editor!.getAttributes('textStyle')
              if (!color) return false
              return editor!.isActive({ color }) || false
            }"
          />
          <VDivider vertical class="mx-1 me-2" />
        </VBtnToggle>
      </VToolbar>
    </div>
    <VSheet class="pa-4 tiptap-content">
      <EditorContent :editor="editor" :style="contentDynamicStyles" />
    </VSheet>
  </VCard>
</template>
<style>
.tiptap-content {
  .ProseMirror {
    min-height: 32px;
    padding: 6px 12px;
    &[contenteditable='false'] {
      cursor: not-allowed;
      color: #cccccc;
    }
  }

  p {
    padding: 0;
    line-height: 1.2rem;
  }
}

.tiptap-content ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}

.tiptap-content ol {
  list-style-type: decimal;
  padding-left: 1.5rem;
}

.tiptap-content li {
  margin-bottom: 0.5rem;
}
</style>
