<template>
  <button class="button-action" v-if="!link">
    {{ title }}
  </button>
  <a class="button-action" v-else :href="link">
    {{ title }}
  </a>
</template>

<script>
export default {
  name: 'button-action',
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.button-action {
  color: $white;
  font-family: $font-roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 133.333%;
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background-color: $golden;
}
</style>
