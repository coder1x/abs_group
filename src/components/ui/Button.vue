<template>
  <button class="button-action" v-if="!link" :type="type">
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
    type: {
      type: String,
    },
    link: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.button-action {
  color: $white;
  transition: color 0.5s;
  font-family: $font-roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 133.333%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background-color: $golden;
  padding: 14px 32px;

  @include hover(){
    color: $input-text;
  }

  @include media-breakpoint-down('xl') {
    padding: 8px 16px;
  }
}
</style>
