<template>
  <button class="button-action" v-if="!link" :type="type">
    {{ title }}
    <Arrow v-if="isArrow"/>
  </button>
  <a class="button-action" v-else :href="link">
    {{ title }}
    <Arrow v-if="isArrow"/>
  </a>
</template>

<script>
import Arrow from '@/assets/icons/button/Arrow.vue';

export default {
  components:{
    Arrow
  },
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
    isArrow: {
      type: Boolean
    }
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
  padding: 14px 31px;

  svg{
    fill: $white;
    transition: fill 0.5s;
  }

  @include hover(){
    color: $input-text;

    svg{
      fill: $input-text;
    }
  }

  @include media-breakpoint-down('xl') {
    padding: 8px 16px;
  }
}
</style>
