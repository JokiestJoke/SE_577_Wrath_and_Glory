<template>

  <button @click="onClick" class="selectArchetypeButton">
    Create a '{{ character }}'
  </button>

</template>

<script lang="ts">
export default {
  name: 'SelectArchetypeButton',
  props: {
    character: {
      type: String
    },
    onClick: {
      type: Function,
      required: true
    },
  },
};
</script>

