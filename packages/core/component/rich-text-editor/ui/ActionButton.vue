<script setup lang="ts">
import { getIcon } from '../setup/icons'
import { ButtonViewReturnComponentProps } from '../constants/type'
import { computed } from 'vue'

interface Props {
  icon?: string
  tooltip?: string
  disabled?: boolean
  color?: string
  action?: ButtonViewReturnComponentProps['action']
  isActive?: ButtonViewReturnComponentProps['isActive']
}

const props = withDefaults(defineProps<Props>(), {
  icon: undefined,
  tooltip: undefined,
  disabled: false,
  color: undefined,
  action: undefined,
  isActive: undefined
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
    <VIcon v-if="icon" :icon="btnIcon" :color="color" />
    <VTooltip :eager="false" activator="parent" location="top" :text="props.tooltip" />
    <slot></slot>
  </VBtn>
</template>
