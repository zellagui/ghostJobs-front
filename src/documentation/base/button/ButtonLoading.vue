<script setup lang="ts">
import { buttonProps, buttonLoading } from '/@src/data/docs/base/button'
</script>

<template>
  <Section
    id="button-loading-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="Button Loading"
            subtitle="Loading button state"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Buttons>
              <Button
                :long="1"
                loading
              >
                Default
              </Button>
              <Button
                color="primary"
                :long="1"
                loading
              >
                Primary
              </Button>
              <Button
                color="success"
                :long="1"
                loading
              >
                Success
              </Button>
              <Button
                color="info"
                :long="1"
                loading
              >
                Info
              </Button>
              <Button
                color="warning"
                :long="1"
                loading
              >
                Warning
              </Button>
              <Button
                color="danger"
                :long="1"
                loading
              >
                Danger
              </Button>
            </Buttons>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="buttonLoading"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="buttonProps"
            />
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
              Buttons are a central part in all web and mobile application. Vulk
              buttons come in different flavors. Buttons can have a loading
              state. To show a loading button, use the
              <code>loading</code>
              prop.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
