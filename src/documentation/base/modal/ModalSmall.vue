<script setup lang="ts">
import { modalProps, modalSmall } from '/@src/data/docs/base/modal'

const modalSmallOpen = ref(false)
</script>

<template>
  <Section
    id="modal-small-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="Modal"
            subtitle="Modal small variation"
          />
          <div class="pt-4">
            <Button
              bold
              @click="modalSmallOpen = true"
            >
              Open Small Modal
            </Button>

            <Modal
              title="Small Modal"
              :open="modalSmallOpen"
              size="small"
              actions="center"
              noscroll
              @close="modalSmallOpen = false"
            >
              <template #content>
                <PlaceholderSection
                  title="Go Premium"
                  subtitle="Unlock more features and business tools by going premium"
                >
                  <template #image>
                    <DarkImage
                      src="/assets/illustrations/features/vr.svg"
                      src-dark="/assets/illustrations/features/vr-dark.svg"
                      alt=""
                    />
                  </template>
                </PlaceholderSection>
              </template>
              <template #action>
                <Button
                  color="primary"
                  :long="2"
                  raised
                >
                  Confirm
                </Button>
              </template>
            </Modal>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="modalSmall"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="modalProps"
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
              Modals are a very important part of modern dynamic applications.
              Vulk Modals ship with props that help with customization. They
              also provide slots for actions (#action, #cancel) and content
              (#content). You can customize the actions alignment by using the
              <code>actions</code>
              prop. You can also make the buttons rounded using the
              <code>rounded</code>
              prop. The modal can also disable page scroll using the
              <code>noscroll</code>
              prop and disabled backdrop closing with the
              <code>noclose</code>
              prop. .
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
