<script setup lang="ts">
import { baseTestimonials } from '/@src/data/blocks/testimonials'
import {
  testimonialsBlockA,
  testimonialsBlockAProps,
  testimonialsBlockASample,
} from '/@src/data/docs/blocks/testimonials/blockA'
</script>

<template>
  <Section
    id="block-a-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 1"
        link="block-a-props"
      />

      <TestimonialBlockA
        :testimonials="baseTestimonials"
        :limit="6"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 2"
        link="block-a-props"
      />

      <TestimonialBlockA
        :testimonials="baseTestimonials"
        squared
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 3"
        link="block-a-props"
      />

      <TestimonialBlockA
        :testimonials="baseTestimonials"
        :limit="8"
        :columns="3"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 4"
        link="block-a-props"
      />

      <TestimonialBlockA
        :testimonials="baseTestimonials"
        boxed
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 4"
        link="block-a-props"
      />

      <TestimonialBlockA
        :testimonials="baseTestimonials"
        boxed
        :columns="3"
        :limit="8"
      />
    </Container>
  </Section>

  <Section
    id="block-a-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="Block A Props"
        subtitle="Available props for block A"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="testimonialsBlockA"
          />
        </template>
        <template #props>
          <DemoProps :props="testimonialsBlockAProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="testimonialsBlockASample"
          />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk ships with highly customizable and versatile Testimonial blocks
            that you can use in any page. Each block comes with it's own styles
            and props. Use the props to build your own examples or use one of
            the prebuilt examples.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
