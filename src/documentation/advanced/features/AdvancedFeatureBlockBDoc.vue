<script setup lang="ts">
import { marketingProcess } from '/@src/data/pages/marketing'
import {
  featureBlockB,
  featureBlockBProps,
  featureBlockBSample,
} from '/@src/data/docs/advanced/feature/blockB'
</script>

<template>
  <Section
    id="block-b-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Advanced block B variation 1"
        link="block-b-props"
      />

      <ProcessSection :steps="marketingProcess.steps" />
    </Container>
  </Section>

  <Section
    id="block-b-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="Block B Props"
        subtitle="Available props for block B"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="featureBlockB"
          />
        </template>
        <template #props>
          <DemoProps :props="featureBlockBProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="featureBlockBSample"
          />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk ships with stunning advanced Feature blocks that you can use in
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
