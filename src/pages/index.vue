<route lang="yaml">
  meta:
    footer:
      enabled: false
  </route>
  
  <script setup lang="ts">
  import { customerLogos } from '/@src/data/pages/logos'
  import {
    insuranceFeatures,
    values,
    testimonials,
  } from '/@src/data/pages/insurance'
  import { socialLinks } from '/@src/data/blocks/advanced/social'
  import {
  marketingProcess,
  marketingStats,
  testimonialsMarquee,
} from '/@src/data/pages/marketing'
import { features } from '/@src/data/blocks/features'

import { genericFaq } from '/@src/data/blocks/advanced/faq'

import {
 
  faq,
} from '/@src/data/pages/commerce'

import {marketingIconFeatures} from '/@src/data/pages/marketing'

  </script>
  
<template>
  <div>
    <HeroA />
  
  

  
    <Section color="grey">
      <Container>
        <LogoStats
          title="40% of companies"
          subtitle="have posted fake job listings in 2024"
          heading="Join us and grow"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis negat? Fortemne possumus dicere eundem illum Torquatum? De illis, cum volemus."
          :logos="customerLogos"
        />
  
        <!--Company Values-->
        <ValuesSection :values="values" />
      </Container>
    </Section>
  
   
  
    <Section color="white">
      <Container>
        <Container>
          <SectionTitle
            title="Your solution to cut through the noise"
            subtitle="Your solution to cut through the noise"
          />

          <IconSection :features="marketingIconFeatures" />

          <SimpleCta />
        </Container>
      </Container>
    </Section>
  
    
  
    <Section
      color="grey"
      wave="wave-1"
      shape-color="white"
    >
      <Container>
        <SectionTitle
          title="Take the time to read our FAQs"
          subtitle="Frequently Asked"
        />

        <DoubleFaqCollapse
          :left="faq.left"
          :right="faq.right"
          chevrons
        />
      </Container>
    </Section>
  
    <Section wave="wave-2">
      <Container>
        <div class="mx-auto max-w-9">
          <PageTitle
            title="Receive your invitation "
            subtitle=" Ready to join us?"
          >
            <template #content>
              <!-- <div class="mx-auto max-w-6 mt-2">
                <p class="paragraph rem-115">
                  Be among the first to explore and enrich our platform. 
                </p>
              </div> -->

              <div class="mx-auto max-w-4 mt-4">
                <SubscriptionCompact
                  label="Subscribe"
                  placeholder="Enter your email"
                />
              </div>
              <br>
              <Subtitle
                tag="h5"
                :size="5"
                weight="thin"
                leading
              >
                Contact us at: hello@ghostjobs.io
              </Subtitle>
            </template>
          </PageTitle>
        </div>
      </container>
    </Section>
    <!-- <FooterA
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones."
      color="grey"
      :social-links="socialLinks"
    /> -->
  </div>
</template>
  