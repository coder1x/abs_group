<template>
  <div class="tabs">
    <div class="tabs__navigation">
      <button class="tabs__button-tab" v-for="(tab, index) in tabs"
              :key="index"
              :class="{ 'tabs__button-tab_current': activeTab === index }"
              @click="changeTab(index)">
        {{ tab.title }}
      </button>
    </div>
    <div class="tabs__content">
      <div class="tabs__container" v-for="(tab, index) in tabs" :key="index"
           :class="{ 'tabs__container_current': activeTab === index }">
        <img class="tabs__hall-image" :src="images[tab.container.imageSrc]" alt="План рассадки"/>
        <HallDetails :title="tab.container.title" :properties="tab.container.properties"
                     :buttons="tab.container.buttons"/>
      </div>
    </div>
  </div>
</template>

<script>
import HallDetails from '@/components/blocks/HallDetails.vue';
import planOfDistribution1 from '@/assets/images/hall/planOfDistribution1.png';
import planOfDistribution2 from '@/assets/images/hall/planOfDistribution2.png';

export default {
  components: {
    HallDetails
  },
  props: {
    tabs: {
      type: Array
    }
  },
  data() {
    return {
      activeTab: 0,
      images: {
        planOfDistribution1,
        planOfDistribution2
      },
    };
  },
  methods: {
    changeTab(index) {
      this.activeTab = index;
    }
  }
};
</script>

<style lang="scss">
.tabs {
  position: relative;
  display: flex;
  flex-direction: column;

  &__navigation {
    display: flex;
    flex-direction: row;

    @include media-breakpoint-down('sm') {
      justify-content: center;
    }
  }

  &__button-tab {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: $dark-grey1;
    transition: color 0.3s;
    background-color: $grey-light2;
    padding: 14px 32px;
    border-radius: 16px 16px 0 0;
    font-family: $font-roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 133.333%;


    &:last-child {
      margin-right: 0px;
    }

    &_current {
      color: $dark-grey;
      background-color: $grey-block;
    }
  }

  &__content {
    width: 100%;
    background-color: $grey-block;
    border-radius: 0 16px 16px 16px;
  }

  &__container {
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: -1;
    display: flex;
    flex-direction: row;
    align-items: center;

    @include media-breakpoint-down('xl') {
      flex-direction: column;
      align-items: center;
      padding-left: 16px;
      padding-right: 16px;
    }

    @include media-breakpoint-down('md') {
      padding-top: 16px;
    }

    &_current {
      position: static;
      z-index: 1;
      animation-name: opacity-animation;
      animation-duration: 0.8s;
      animation-fill-mode: forwards;
    }
  }

  &__hall-image {
    margin-right: auto;
    max-height: 469px;
    @include smooth-offset(margin-left, 30, 60, 100, 160, 231);

    @include media-breakpoint-down('xl') {
      margin-left: auto;
    }

    @include media-breakpoint-down('md') {
      width: 100%;
      max-width: 118.414px;
    }
  }

}

@include opacity-animation();
</style>
