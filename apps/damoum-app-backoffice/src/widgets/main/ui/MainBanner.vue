<script setup lang="ts">
import illustrationJohnDark from '@core/assets/images/cards/illustration-john-dark.png'
import illustrationJohnLight from '@core/assets/images/cards/illustration-john-light.png'
import { computed } from 'vue'
import { useTheme } from 'vuetify/lib/framework.mjs'
const { global } = useTheme()
const illustrationJohn = computed(() =>
  global.name.value === 'dark' ? illustrationJohnDark : illustrationJohnLight
)
</script>

<template>
  <VCard class="text-center text-sm-start">
    <VRow no-gutters>
      <VCol cols="12" sm="8" order="2" order-sm="1">
        <VCardItem>
          <VCardTitle class="text-md-h5 text-primary">
            환영합니다. 다모음 APP 백오피스 입니다. 🎉
          </VCardTitle>
        </VCardItem>

        <VCardText>
          <span>
            오늘도 즐거운 하루 보내시길 바랍니다.
            <br />
          </span>
          <br />
        </VCardText>
      </VCol>

      <VCol cols="12" sm="4" order="1" order-sm="2" class="text-center">
        <img
          :src="illustrationJohn"
          :height="$vuetify.display.xs ? '110' : '135'"
          :class="$vuetify.display.xs ? 'mt-6 mb-n2' : 'position-absolute'"
          class="john-illustration flip-in-rtl"
        />
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
.john-illustration {
  inset-block-end: -0.0625rem;
  inset-inline-end: 3rem;
}
</style>
