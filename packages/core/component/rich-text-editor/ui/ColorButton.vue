<script setup lang="ts">
import ColorPicker from './ColorPicker.vue'
import type { Editor } from '@tiptap/vue-3'
import { ButtonViewReturnComponentProps } from '../constants/type'
import { getIcon } from '../setup/icons'
import { watchEffect, computed } from 'vue'

interface Props {
  editor: Editor
  icon?: string
  tooltip?: string
  color?: string
  disabled?: boolean
  action?: ButtonViewReturnComponentProps['action']
  isActive?: ButtonViewReturnComponentProps['isActive']
}

const props = withDefaults(defineProps<Props>(), {
  icon: undefined,
  tooltip: undefined,
  disabled: false,
  action: undefined,
  isActive: undefined
})

const propsColor = defineModel<string>()

function onChange(color: string) {
  props.action?.(color)
}

watchEffect(() => {
  const { color: colorValue } = props.editor.getAttributes('textStyle')
  propsColor.value = colorValue
})

const btnIcon = computed(() => getIcon(props.icon))
</script>
<template>
  <VBtn
    class="rounded me-1 ms-0"
    density="comfortable"
    size="small"
    :disabled="disabled"
    :color="color"
    icon
    :active="isActive?.()"
    @click="action"
  >
    <VIcon v-if="icon" :icon="btnIcon" :color="propsColor" />
    <VTooltip :eager="false" activator="parent" location="top" :text="props.tooltip" />
    <slot
      ><ColorPicker
        v-model="propsColor"
        activator="parent"
        :nudge-top="-4"
        :nudge-left="8"
        @change="onChange"
    /></slot>
  </VBtn>
</template>
