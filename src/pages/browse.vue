<route lang="yaml">
    meta:
      footer:
        enabled: false
    </route>
    
    <script setup lang="ts">
    import { customerLogos } from '/@src/data/pages/logos'
    import {
      jobs,
      jobTopics,
      jobCategories,
      candidates,
      testimonials,
    } from '/@src/data/pages/jobs'
    import { socialLinks } from '/@src/data/blocks/advanced/social'

    import {
        businessSolutions,
      
        } from '/@src/data/pages/banking'
            


    

    </script>
    
<template>
  <div>
    <HeroG />
    
    <!-- <LogoMarquee
      :logos="customerLogos"
      compact
    /> -->

    <Section color="grey">
      <Container>
        <SectionTitle
          title="How to Spot Suspicious Job Postings"
          subtitle="Did you know ?"
        />
    
        <FeatureBlockA
          alignment="centered"
          :features="jobCategories"
          :columns="3"
          :limit="8"
          size="medium"
          links
        />
    
        <div class="my-4">
          <Buttons alignment="centered">
            <Button
              color="primary"
              :long="3"
              raised
              bold
              to="blog-page"
            >
              See More
            </Button>
          </Buttons>
        </div>
      </Container>
    </Section>
    
    
    <Section
      id="job-offers"
      wave="wave-1"
    >
      <Container>
        <SectionTitle
          title="Coming soon"
          subtitle="Access postings reviews & companies opening historical data"
        />
        <br>

        <FullJobSearch />
        <Countdown date="Sep 30, 2024" />
        
        <!-- <JobGrid :jobs="jobs" /> -->
        <br>
      </Container>
    </Section>

    <br>
   
    <Section>
      <Container>
        <div class="box-carousel-title max-w-7 mb-6">
          <Subtitle
            tag="h3"
            :size="6"
            weight="bold"
            class="pb-2"
          >
            <span class="text-gradient">WE MAKE IT EASY</span>
          </Subtitle>
          <Title
            tag="h2"
            :size="3"
            weight="bold"
          >
            <span>No more second-guessing every decision you need to make</span>
          </Title>
          <p class="paragraph rem-115">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te
            quidem video minime esse deterritum. Quae cum dixisset, finem ille cum
            dolor.
          </p>
        </div>
        <br>
        <SideSection
          subtitle="One-on-One"
          title="Schedule a call real quick"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Duo Reges: constructio interrete. Ad eas enim res ab Epicuro praecepta dantur."
          cta="Learn More"
          to="index"
          image="/assets/illustrations/features/advisors-feature-2.png"
          dark-image="/assets/illustrations/features/advisors-feature-2-dark.png"
          image-width="776"
          image-height="647"
          reverse
          blob
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SideSection
          subtitle="Assistance"
          title="Mentors will apply to help you"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Duo Reges: constructio interrete. Ad eas enim res ab Epicuro praecepta dantur."
          cta="Learn More"
          to="index"
          image="/assets/illustrations/features/advisors-feature-3.png"
          dark-image="/assets/illustrations/features/advisors-feature-3-dark.png"
          image-width="776"
          image-height="647"
          blob
        />
      </Container>
    </Section>

    <Section
      wave="wave-2"
      shape-color="darker"
    >
      <Container>
        <SideSection
          subtitle="Subscriptions"
          title="Go beyond one-off calls and seminars"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Duo Reges: constructio interrete. Ad eas enim res ab Epicuro praecepta dantur."
          cta="Learn More"
          to="index"
          image="/assets/illustrations/features/advisors-feature-4.png"
          dark-image="/assets/illustrations/features/advisors-feature-4-dark.png"
          image-width="776"
          image-height="647"
          reverse
          blob
        />
      </Container>
    </Section>

    
    
    <FooterD
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
                  non possum. Apparet statim, quae sint officia, quae actiones."
      color="dark"
      :social-links="socialLinks"
    />
  </div>
</template>
    