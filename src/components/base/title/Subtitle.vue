<script setup lang="ts">
export type SubtitleSize = 1 | 2 | 3 | 4 | 5 | 6
export type SubtitleWeight = 'thin' | 'stressed' | 'semi' | 'bold'
export type SubtitleTag = 'h3' | 'h4' | 'p'

export interface SubtitleProps {
  size?: SubtitleSize
  weight?: SubtitleWeight
  tag: SubtitleTag
  inverted?: boolean
  narrow?: boolean
  leading?: boolean
  uppercase?: boolean
  text?: string | number
}

const props = withDefaults(defineProps<SubtitleProps>(), {
  size: undefined,
  weight: undefined,
  tag: 'h3',
  narrow: false,
  leading: false,
  inverted: false,
  uppercase: false,
  text: undefined,
})

const subtitleClasses = computed(() => [
  props.size && `is-${props.size}`,
  props.weight && `is-${props.weight}`,
  props.narrow && `is-narrow`,
  props.leading && `is-leading`,
  props.inverted && `is-inverted`,
  props.uppercase && `is-uppercase`,
])
</script>

<template>
  <component
    :is="tag"
    class="subtitle"
    :class="subtitleClasses"
  >
    <slot>{{ text }}</slot>
  </component>
</template>

<style lang="scss" scoped>
.subtitle {
  font-family: var(--font);
  color: var(--medium-text);

  &.is-inverted {
    color: var(--title-color-inverted) !important;
  }

  &.is-narrow {
    margin-bottom: 0 !important;
  }

  &.is-leading {
    margin-bottom: 0.5rem !important;
  }

  &.is-uppercase {
    text-transform: uppercase;
  }

  &.is-thin {
    font-weight: 300;
  }

  &.is-heavy {
    font-weight: 600;
  }

  &.is-bold {
    font-weight: 700;
  }

  &.is-bolder {
    font-weight: 800;
  }
}
</style>
