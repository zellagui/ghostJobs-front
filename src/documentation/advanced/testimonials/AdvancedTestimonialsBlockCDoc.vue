<script setup lang="ts">
import { vehicleTestimonials } from '/@src/data/pages/vehicle'

import {
  testimonialsBlockC,
  testimonialsBlockCProps,
  testimonialsBlockCSample,
} from '/@src/data/docs/advanced/testimonials/blockC'
</script>

<template>
  <Section
    id="block-c-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Advanced block A variation 1"
        link="block-c-props"
      />

      <div class="py-4" />

      <TestimonialCards :items="vehicleTestimonials" />
    </Container>
  </Section>

  <Section
    id="block-c-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="Block C Props"
        subtitle="Available props for block C"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="testimonialsBlockC"
          />
        </template>
        <template #props>
          <DemoProps :props="testimonialsBlockCProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="testimonialsBlockCSample"
          />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk ships with stunning advanced Testimonial blocks that you can
            use in any page. Each block comes with it's own styles and props.
            Use the props to build your own examples or use one of the prebuilt
            examples. Every block is natively supporting dark mode. See markup
            and props tab for more details about usage.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
