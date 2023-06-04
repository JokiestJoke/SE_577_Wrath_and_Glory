<template>

  <button @click="onClick" class="BasicButton">
    {{ message }}
  </button>

</template>

<script lang="ts">
export default {
  name: 'BasicButton',
  props: {
    message: {
      type: String
    },
    onClick: {
      type: Function,
      required: true
    },
  },
};
</script>