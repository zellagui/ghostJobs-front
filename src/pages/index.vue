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
    appFeatures,
    featureMatrix,
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


  </script>
  
<template>
  <div>
    <HeroA />
  
  

  
    <Section color="grey">
      <Container>
        <LogoStats
          title="Over $1 billion"
          subtitle="Transactions from our clients in 2021"
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
            title="Goal based campaign creation made easy"
            subtitle="A solution to instantly reach your customers"
          />

          <ProcessSection
            :steps="marketingProcess.steps"
            image-width="800"
            image-height="800"
          />

          <FeatureBlockA
            :features="features"
            :columns="3"
            :limit="8"
          />

          <SimpleCta />
        </Container>
        <TestimonialBlock
          image="data:image/gif;base64,replace_with_your_image"
          title="I had trouble finding a fair deal. Then I simply decided to start
            using Vulk and it actually worked!"
          content="Isabella's insurance policy deals that were found on our platform
            completely changed her life and removed all the hassle."
          link-label="Read Isabella's Story"
          link="/about"
        />
      </Container>
    </Section>
  
    
  
    <!-- <Section wave="wave-2">
      <Container>
        <CenteredMedia
          title="The Tool made for people like you"
          cta-text="Start My Free-Trial"
          cta-link="/about"
        >
          <p class="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Zenonis
            est, inquam, hoc Stoici. Neutrum vero, inquit ille. Immo alio
            genere; Mihi enim satis est, ipsis non satis. Tum mihi Piso: Quid
            ergo? Cur
          </p>
          <p class="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Zenonis
            est, inquam, hoc Stoici. Neutrum vero, inquit ille. Immo alio
            genere; Mihi enim satis est, ipsis non satis. Tum mihi Piso: Quid
            ergo? Cur
          </p>
          <p class="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Zenonis
            est, inquam, hoc Stoici. Neutrum vero, inquit ille. Immo alio
            genere; Mihi enim satis est, ipsis non satis. Tum mihi Piso: Quid
            ergo? Cur
          </p>
        </CenteredMedia>
      </Container>
    </Section> -->
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
            subtitle=" Ready to be a pioneer?"
          >
            <template #content>
              <div class="mx-auto max-w-6 mt-2">
                <p class="paragraph rem-115">
                  Be among the first to explore and enrich our platform. 
                </p>
              </div>

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
                Contact Us At: anis@naholabs.com
              </Subtitle>
            </template>
          </PageTitle>
        </div>
      </container>
    </Section>
    <FooterD
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones."
      color="grey"
      :social-links="socialLinks"
    />
  </div>
</template>
  