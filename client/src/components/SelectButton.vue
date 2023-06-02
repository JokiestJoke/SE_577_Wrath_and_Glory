<template>

  <button class="selectButton">
    Create a {{ character }}
  </button>

</template>

<script lang="ts">
export default {
  name: 'CharacterCreationPage',
  props: {
    character: {
      type: String
    }
  },
};
</script>

