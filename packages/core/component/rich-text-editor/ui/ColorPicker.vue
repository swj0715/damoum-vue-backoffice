<script setup lang="ts">
import { COLORS_LIST } from '../constants/define'
import { getIcon } from '../setup/icons'
import { ref, watch } from 'vue'

interface Props {
  nudgeLeft?: string | number
  nudgeTop?: string | number
  more?: boolean
}

interface Emits {
  (event: 'change', color: string): void
}

const props = withDefaults(defineProps<Props>(), {
  nudgeLeft: 0,
  nudgeTop: 0,
  more: true
})

const colorProps = defineModel<string>()
const inutValue = ref<string>('')
const menu = ref<boolean>(false)
const emit = defineEmits<Emits>()

watch(menu, (val) => {
  inutValue.value = colorProps.value ?? ''
})

function setColor(color: string) {
  colorProps.value = color
  emit('change', color)

  inutValue.value = color
  menu.value = false
}
</script>
<template>
  <VMenu
    v-model="menu"
    :nudge-left="nudgeLeft || 255"
    :nudge-top="nudgeTop || 42"
    :close-on-content-click="false"
    transition="scale-transition"
    :origin="!nudgeLeft ? 'top right' : 'top left'"
    activator="parent"
  >
    <VList>
      <VSheet class="d-flex flex-wrap justify-between ma-1" fluid :max-width="230">
        <VBtn
          v-for="color in COLORS_LIST"
          :key="color"
          flat
          icon
          density="compact"
          @click="setColor(color)"
        >
          <VIcon :icon="getIcon('circle')" :color="color" />
        </VBtn>

        <VTextField
          v-model="inutValue"
          class="mt-2 mx-1"
          :append-inner-icon="getIcon('check')"
          density="compact"
          label="HEX"
          variant="outlined"
          flat
          hide-details
          single-line
          clearable
          @click:append-inner="setColor(inutValue)"
        >
          <template v-if="inutValue" #prepend-inner>
            <VIcon class="opacity-100" :icon="getIcon('circle')" :color="inutValue" />
          </template>
        </VTextField>
      </VSheet>
    </VList>
  </VMenu>
</template>
