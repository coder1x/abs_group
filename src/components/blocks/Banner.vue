<template>
  <div class="banner">
    <div class="banner__wrapper">
    <img class="banner__background" :src="images[background]" alt="фон баннера">
    <img class="banner__decor" :src="images[decor]" alt="декор баннера">
    <p class="banner__text" v-html="text"/>
      <button-action :title="button" is-arrow @click="callParentMethod"/>
    </div>
  </div>
</template>

<script>
import background from '@/assets/images/banner/background.webp';
import decor from '@/assets/images/banner/decor.webp';
import ButtonAction from '@/components/ui/Button.vue';

export default {
  components: { ButtonAction },
  props:{
    text: {
      type: String
    },
    background: {
      type: String
    },
    decor: {
      type: String
    },
    button: {
      type: String
    }
  },
  data() {
    return {
      images: {
        background,
        decor
      },
    };
  },
  methods: {
    callParentMethod() {
      this.$emit('event-banner');
    },
  },
};
</script>

<style lang="scss">
.banner{
  position: relative;
  width: 100%;
  max-width: 650px;
  min-height: 369px;
  display: flex;
  flex-direction: column;

  @include media-breakpoint-down('xl') {
    height: 369px;
    min-height: unset;
  }

  @include media-breakpoint-down('md') {
    height: 279px;
  }


  &__wrapper{
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
  }

  &__background{
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
  }

  &__decor{
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    max-width: 292px;

    @include media-breakpoint-down('md') {
      max-width: 214px;
    }
  }

  &__text{
    margin: auto 40px 32px;
    width: 100%;
    max-width: 476px;
    color: $dark-grey;
    font-family: $font-lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 133.333%;

    @include media-breakpoint-down('xl') {
      display: none;
    }
  }

  .button-action{
    display: none;
    margin: auto auto 28px 17px;

    @include media-breakpoint-down('xl') {
     display: flex;
      flex-direction: row;
      align-items: center;
    }

    @include media-breakpoint-down('md') {
      padding: 14px 30px 14px 32px;
    }
  }
}

</style>
