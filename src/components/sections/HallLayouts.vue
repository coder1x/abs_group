<template>
  <section class="hall-layouts">
    <h2 class="hall-layouts__title">{{ title }}</h2>
    <Tabs :tabs="tabs"/>
  </section>
</template>

<script>
import Tabs from '@/components/blocks/Tabs.vue';

export default {
  name: 'hall-layouts',
  components: {
    Tabs
  },
  props: {
    title: {
      type: String
    },
    tabs: {
      type: Array
    }
  }
};
</script>

<style lang="scss">
.hall-layouts {
  padding-top: 26px;
  padding-bottom: 32px;

  &__title {
    margin-bottom: 24px;
    color: $dark-grey;
    @include font-rem(40);
    font-style: normal;
    font-weight: 700;
    line-height: 120%;

    @include media-breakpoint-down('xl') {
      text-align: center;
    }
  }
}
</style>
