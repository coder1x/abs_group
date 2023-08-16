<template>
  <section class="banquet-price">
    <h2 class="banquet-price__title">{{ title }}</h2>
    <p class="banquet-price__text" v-html="banner.text"/>
    <div class="banquet-price__wrapper">
      <Questionnaire :essence="progressBar.essence" :separator="progressBar.separator" :options-list="optionsList"
                     :class="{visible: !isMobile || isQuestionnaire}"/>
      <Banner :text="banner.text" :background="banner.background" :decor="banner.decor" :button="banner.button"
              @event-banner="parentMethod" :class="{visible: !isMobile || !isQuestionnaire}"/>
    </div>
  </section>
</template>

<script>
import Questionnaire from '@/components/blocks/Questionnaire.vue';
import Banner from '@/components/blocks/Banner.vue';
import { isWindowSizeEqualToPoint, Throttle } from '@/shared/helpers';

export default {
  name: 'banquet-price',
  components: {
    Questionnaire,
    Banner
  },
  methods: {
    parentMethod() {
      this.isQuestionnaire = true;
    },
    handleResize() {
      this.isMobile = isWindowSizeEqualToPoint('xl');
      this.isQuestionnaire = false;
    },
  },
  props: {
    title: {
      type: String
    },
    progressBar: {
      type: Object
    },
    banner: {
      type: Object
    },
    optionsList: {
      type: Array
    }
  },
  data() {
    return {
      isMobile: isWindowSizeEqualToPoint('xl'),
      isQuestionnaire: false,
      throttle: null,
    };
  },
  mounted() {
    this.throttle = new Throttle(this.handleResize);
  },
  beforeUnmount() {
    this.throttle.destructor();
  }
};
</script>

<style lang="scss">
.banquet-price {
  padding-top: 17px;

  &__wrapper {
    display: flex;
    flex-direction: row;
    position: relative;

    @include media-breakpoint-down('xl') {
      flex-direction: column;
    }
  }

  &__title {
    color: $dark-grey;
    @include font-rem(40);
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    margin-bottom: 19px;

    @include media-breakpoint-down('xl') {
      margin-bottom: 14px;
    }

    @include media-breakpoint-down('md') {
      padding-left: 16px;
    }
  }

  &__text{
    display: none;

    @include media-breakpoint-down('xl') {
      display: inline-block;
      color: $dark-grey1;
      font-size: 14px;
      line-height: 142.857%;
      padding-bottom: 16px;
    }

    @include media-breakpoint-down('md') {
      padding-left: 16px;
    }
  }

  .questionnaire {
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: -1;

    @include media-breakpoint-down('xl') {
      margin-bottom: 40px;
    }
  }

  .questionnaire.visible {
    position: relative;
    z-index: 1;
    animation-name: opacity-animation;
    animation-duration: 0.8s;
    animation-fill-mode: forwards;
  }

  .banner {
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: -1;

    @include media-breakpoint-up('xl') {
      margin-left: 20px;
    }

    @include media-breakpoint-down('xl') {
      margin-top: 7px;
    }
  }

  .banner.visible {
    position: static;
    z-index: 1;
    animation-name: opacity-animation;
    animation-duration: 0.8s;
    animation-fill-mode: forwards;
  }

}

@include opacity-animation();
</style>
