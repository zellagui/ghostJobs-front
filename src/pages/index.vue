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
import { features5 } from '/@src/data/blocks/features'

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

          <!-- <SimpleCta /> -->
        </Container>
      </Container>
    </Section>
  
    
  
    <Section color="grey">
      <Container>
        <SectionTitle
          title="Be our beta user &#8212; It's Free"
          subtitle="Ready to join us?"
        />

        <!--Subscribe-->
        <SubscriptionCompactBlock
          text="Early user get a private access to the Discord, where your idea's are part of the solution."
          label="Subscribe"
          placeholder="Enter your email"
        />

        <!-- <TestimonialBlockA :testimonials="testimonials" /> -->

        <!-- <CtaBlockA
          title="Ready to join us?"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam
        dissimile?"
          cta-primary="Subscribe"
          cta-primary-link="index"
          cta-secondary="Learn More"
          cta-secondary-link="index"
          :logos="customerLogos"
          boxed
          shapes
        /> -->
      </Container>
    </Section>

    <Section color="grey">
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

    <FooterA
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones."
      color="grey"
      :social-links="socialLinks"
    />
  </div>
</template>
