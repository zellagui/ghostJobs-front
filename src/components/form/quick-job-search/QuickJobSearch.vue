<script setup lang="ts">
const options = [
  {
    value: 'job posting',
    label: 'job posting',
  },
  {
    value: 'company',
    label: 'company',
  },
  {
    value: 'recruiters',
    label: 'recruiters',
  },
]

</script>

<template>
  <form>
    <div class="flex-form is-relative z-1">
      <Field grouped>
        <Control
          icon="feather:search"
          expanded
        >
          <VInput placeholder="Who are you looking to report?" />
        </Control>
        <Control>
          <VSelect
            :options="options"
            placeholder="All"
          />
        </Control>
      </Field>
      <div>
        <Button
          href="https://forms.gle/7kY88Jh5Z8FfCWR87"
          color="primary"
          bold
          raised
          fullwidth
        >
          Report
        </Button>
      </div>
    </div>
  </form>
</template>

<style scoped lang="scss">
.flex-form {
  :deep(.control) {
    .form-icon {
      height: 48px;
      width: 48px;

      .iconify {
        font-size: 1.25rem;
      }
    }
  }

  :deep(.input) {
    height: 48px;
    padding-left: 48px;
  }

  :deep(.select) {
    select {
      height: 48px;
    }

    &::after {
      top: 58%;
    }
  }
}

@media only screen and (width <= 767px) {
  .flex-form {
    margin-bottom: 2rem;

    :deep(.control) {
      margin-right: 0 !important;
      margin-bottom: 0.75rem !important;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .flex-form {
    max-width: 580px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
