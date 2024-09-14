<script setup lang="ts">
import { ref } from 'vue';

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
];

const name = ref('');
const selectedOption = ref(options[0].value);

const submitForm = async () => {
  const payload = {
    name: name.value,
    option: selectedOption.value,
  };

  try {
    const response = await fetch('https://hook.us1.make.com/tjgxlhgou1pv32hbjn4vw5nyjmo5xoey', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Failed to send data to the webhook');
    }

    // If the submission is successful, redirect the user
    window.location.href = 'https://forms.gle/7kY88Jh5Z8FfCWR87';
  } catch (error) {
    console.error('Error submitting the form:', error);
    alert('There was an error submitting your report.');
  }
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="flex-form is-relative z-1">
      <Field grouped>
        <Control
          icon="feather:search"
          expanded
        >
          <VInput
            v-model="name"
            placeholder="Who are you looking to report?"
            required
          />
        </Control>
        <Control>
          <VSelect
            v-model="selectedOption"
            :options="options"
          />
        </Control>
      </Field>
      <div>
        <Button
          type="submit"
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