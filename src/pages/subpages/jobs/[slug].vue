<script setup lang="ts">
import { getJob } from '/@src/utils/api/job'
import type { Job } from '/@src/types'

const route = useRoute()
const router = useRouter()
const slug = route.params.slug as string

// get job data
const job = ref<Job>()
async function fetchJob() {
  try {
    job.value = await getJob(slug)
  } catch {
    router.replace({
      name: 'all',
      params: { all: `not-found-${route.params.slug}` },
    })
  }
}

onMounted(fetchJob)
onServerPrefetch(fetchJob)
watch(() => route.fullPath, fetchJob)
</script>

<template>
  <div>
    <Section overflown>
      <Container v-if="job">
        <JobDetails :job="job" />
      </Container>
    </Section>
  </div>
</template>
