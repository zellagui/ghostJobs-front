<script setup lang="ts">
import {
  contactBlockC,
  contactBlockCProps,
} from '/@src/data/docs/advanced/contact/blockC'
</script>

<template>
  <Section
    id="block-c-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Advanced block C variation 1"
        link="block-c-props"
        class="is-relative z-3"
      />

      <div class="py-4">
        <BlockContact
          title="Contact Us"
          subtitle="Fill out the form below to reach us"
          :lng="12.550343"
          :lat="55.665957"
          :zoom="16"
        />
      </div>
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
            :code="contactBlockC"
          />
        </template>
        <template #props>
          <DemoProps :props="contactBlockCProps.props" />
        </template>
        <template #sample>
          <div class="empty-text">
            <p class="paragraph rem-95">
              No data sample available for this component
            </p>
          </div>
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk ships with stunning advanced Contact blocks that you can use in
            any page. Each block comes with it's own styles and props. Use the
            props to build your own examples or use one of the prebuilt
            examples. Every block is natively supporting dark mode. See markup
            and props tab for more details about usage.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
