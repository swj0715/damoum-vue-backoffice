<script setup lang="ts">
import { useTheme } from 'vuetify'
import { hexToRgb } from '@utils'
import { DamoumConfirmDialog } from '@damoum/vuetify-global-dialog'
const { global } = useTheme()
</script>

<template>
  <VApp :style="`--v-global-theme-primary: ${hexToRgb(global.current.value.colors.primary)}`">
    <DamoumConfirmDialog>
      <RouterView />
    </DamoumConfirmDialog>
  </VApp>
</template>
