<route lang="yaml">
meta:
  transition: no-transition
  footer:
    enabled: false
</route>

<script setup lang="ts">
import { socialLinks } from '/@src/data/blocks/advanced/social'

const route = useRoute()
const active = computed(
  () => route.path.split('/').filter(Boolean).pop() ?? 'profile',
)
</script>

<template>
  <div>
    <ProfileHeader :active="active" />

    <RouterView v-slot="{ Component }">
      <Transition
        name="fade-fast"
        mode="out-in"
      >
        <component :is="Component" />
      </Transition>
    </RouterView>

    <FooterD
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones."
      color="dark"
      :social-links="socialLinks"
    />
  </div>
</template>
