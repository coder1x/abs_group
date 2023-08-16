<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__top">
        <button class="header__toggle-menu" ref="toggleMenu" v-on:click="toggleMenu" type="button" :aria-expanded="isVisibleMenu"
                aria-controls="menu"
                aria-label="Меню гамбургер">
          <span class="header__toggle-line" :class="{'header__toggle-line_visible':isVisibleMenu}"/>
        </button>
        <a class="header__logo" href="/" aria-label="Hotel Stavropol">
          <LogoIcon/>
        </a>
        <map-point :address="address" :is-visible="isMobile"/>
        <ul class="header__social">
          <li class="header__social-item" v-for="(item, index ) in social" :key="index">
            <button-social :name="item.name" :link="item.link" type="golden"/>
          </li>
        </ul>
        <div class="header__contacts">
          <a class="header__contacts-link" v-if="telephone.link && telephone.title && isMobile"
             :href="telephone.link">{{ telephone.title }}</a>
          <button-action v-else-if="telephone.link" :link="telephone.link" title="Позвонить"/>
          <button class="header__contacts-modal" v-if="buttonModal.modal || buttonModal.title"
                  :class="buttonModal.modal" v-show="isMobile">
            {{ buttonModal.title }}
          </button>
        </div>
      </div>
      <div class="header__bottom" :class="{'header__bottom_visible':isVisibleMenu}" ref="hamburger">
        <div class="header__hamburger-top">
          <map-point :address="address"/>
          <ul class="header__hamburger-social">
            <li class="header__hamburger-social-item" v-for="(item, index ) in social" :key="index">
              <button-social :name="item.name" :link="item.link" type="golden"/>
            </li>
          </ul>
          <button class="header__contacts-modal" v-if="buttonModal.modal || buttonModal.title"
                  :class="buttonModal.modal">
            {{ buttonModal.title }}
          </button>
        </div>
        <nav class="header__menu-wrapper" id="menu" aria-label="Главное меню">
          <ul class="header__menu-list">
            <li class="header__menu-item" v-for="item in menu" :key="item.id">
              <a class="header__menu-link" :href="item.link">
                {{ item.title }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import MapPoint from '@/components/ui/MapPoint.vue';
import ButtonSocial from '@/components/ui/ButtonSocial.vue';
import ButtonAction from '@/components/ui/Button.vue';
import LogoIcon from '@/assets/icons/header/LogoIcon.vue';
import { isWindowSizeEqualToPoint, Throttle } from '@/shared/helpers/';

export default {
  name: 'common-header',
  components: {
    ButtonAction,
    MapPoint,
    ButtonSocial,
    LogoIcon,
  },
  props: {
    address: {
      type: String,
    },
    social: {
      type: Object,
    },
    telephone: {
      type: Object,
    },
    buttonModal: {
      type: Object
    },
    menu: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isMobile: !isWindowSizeEqualToPoint('xl'),
      isVisibleMenu: false,
    };
  },
  mounted() {
    new Throttle(this.handleResize);

    document.addEventListener('mousedown', this.handleClickOutside);
  },
  methods: {
    toggleMenu() {
      this.isVisibleMenu = !this.isVisibleMenu;
    },
    handleClickOutside(event) {
      if (!this.$refs.hamburger || !this.$refs.toggleMenu) return;

      const isHamburger = this.$refs.hamburger.contains(event.target);
      const isToggleMenu = this.$refs.toggleMenu.contains(event.target);

      if (!isHamburger && !isToggleMenu) {
        this.isVisibleMenu = false;
      }
    },
    handleResize() {
      this.isMobile = !isWindowSizeEqualToPoint('xl');
      this.isVisibleMenu = false;
    },
  },
  beforeUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
};
</script>

<style lang="scss">
.header {
  box-sizing: border-box;
  width: 100%;
  font-size: #{$font-size}px;
  border-radius: 0 0 16px 16px;
  border: 1px solid $grey-block;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(16px);
  padding-top: 12px;
  position: relative;
  z-index: 9;

  @include media-breakpoint-down('xl') {
    padding-top: 18px;
  }

  &__wrapper {
    @include sides-offset();
  }

  &__toggle-menu {
    position: absolute;
    cursor: pointer;
    visibility: hidden;
    padding: 0;
    border: 0;
    width: 1px;
    height: 1px;
    background: none;
    transform: rotateZ(0deg);
    transition: transform 0.5s;

    @include media-breakpoint-down('xl') {
      position: relative;
      visibility: unset;
      width: auto;
      height: 24px;
      margin: auto 20px auto 16px;
    }
  }

  &__toggle-line {
    display: block;
    background-color: $golden;
    width: 24px;
    height: 2px;
    transition: height 0.3s;

    &::after {
      position: absolute;
      content: "";
      top: 1px;
      left: 0;
      background-color: $golden;
      width: 24px;
      height: 2px;
      transform: rotateZ(0deg);
      transition: transform 0.5s;
    }

    &::before {
      position: absolute;
      content: "";
      bottom: 1px;
      left: 0;
      background-color: $golden;
      width: 24px;
      height: 2px;
      transform: rotateZ(0deg);
      transition: transform 0.5s;
    }

    &_visible {
      height: 0;
      transition: height 0.5s;

      &::before {
        transform: rotateZ(-50deg);
        transition: transform 0.3s;
        bottom: 11px;
        background-color: $golden;
      }

      &::after {
        transform: rotateZ(50deg);
        transition: transform 0.3s;
        top: 11px;
        background-color: $golden;
      }
    }
  }

  &__top {
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;

    @include media-breakpoint-down('xl') {
      margin-bottom: 16px;
    }
  }

  &__social {
    display: flex;
    flex-direction: row;
    margin-left: 93px;
    margin-right: 40px;

    @include media-breakpoint-down('xl') {
      display: none;
    }

    &-item {
      margin-right: 8px;

      :last-child {
        margin-right: 0;
      }
    }

    &_is-hiden {
      display: none;
    }
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    margin-right: 9px;

    &-link {
      color: $grey;
      font-family: $font-lato;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      margin-bottom: 4px;
    }

    &-modal {
      color: $golden;
      font-family: $font-roboto;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 133.333%;
      text-decoration-line: underline;
      text-align: end;

      @include media-breakpoint-down('xl') {
        width: fit-content;
      }
    }
  }

  &__logo {
    margin-right: auto;
  }

  &__bottom {
    display: flex;
    flex-direction: column;
    padding-bottom: 16px;
    background-color: $white;

    @include media-breakpoint-down('xl') {
      display: none;
    }

    &_visible {
      display: block;
      position: absolute;
      z-index: 9;
      top: 80px;
      left: 0;
      width: 100%;
      background-size: 8px 8px, 100%;
      box-shadow: 0 15px 13px rgba(3, 3, 3, 0.19);
      animation-name: HeaderMenuAnimation;
      animation-duration: 0.3s;
      animation-fill-mode: both;
      animation-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1);
      padding-top: 20px;
    }
  }

  &__menu {
    &-wrapper {
      display: flex;
      justify-content: center;
    }

    &-list {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      @include smooth-offset(width, 1405, 1405, 1405, 1405, 1405);

      @include media-breakpoint-down('xl') {
        flex-direction: column;
        padding: 20px 16px;
        width: 100%;
      }
    }

    &-item {
      color: $dark-grey;
      font-family: $font-lato;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 175%;

      @include media-breakpoint-down('xl') {
        margin-top: 20px;

        &:nth-child(odd) {
          background-color: $grey-block;
        }
      }
    }

    &-link {
      position: relative;
      &::after {
        content: '';
        opacity: 0;
      }

      @include media-breakpoint-up('xl') {
        @include hover() {
          color: $golden;
          transition: color 0.3s;
          &::after {
            opacity: 1;
            transition: opacity 0.8s;
            will-change: transition;
            position: absolute;
            bottom: -21px;
            height: 2px;
            width: 160%;
            background-color: $golden;
            content: '';
            left: 50%;
            transform: translate(-50%);
          }
        }
      }

      @include media-breakpoint-down('xl') {
        display: inline-block;
        width: 100%;
        padding-bottom: 10px;
        padding-top: 10px;
      }
    }
  }

  &__hamburger {
    &-top {
      display: none;
      padding-left: 16px;
      padding-right: 16px;

      @include media-breakpoint-down('xl') {
        display: flex;
        flex-direction: column;
      }
    }

    &-social {
      display: flex;
      flex-wrap: wrap;
      padding-top: 20px;
      padding-bottom: 40px;
    }

    &-social-item {
      margin-right: 8px;
    }
  }
}

@keyframes HeaderMenuAnimation {
  from {
    opacity: 0;
    transform: translateY(-5%);
  }
}
</style>
