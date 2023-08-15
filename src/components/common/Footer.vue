<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <a class="footer__logo" href="/" aria-label="Hotel Stavropol">
        <LogoIcon/>
      </a>
      <p class="footer__copyright"><span>&#169;</span>{{ copyright }}</p>

      <div class="footer__content-right">
        <p class="footer__social-text">{{ social.title }}</p>
        <ul class="footer__social">
          <li class="footer__social-item" v-for="(item, index ) in social.items" :key="index">
            <button-social :name="item.name" :link="item.link" type="gray"/>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import LogoIcon from '@/assets/icons/header/LogoIcon.vue';
import ButtonSocial from '@/components/ui/ButtonSocial.vue';

export default {
  name: 'common-footer',
  components: {
    ButtonSocial,
    LogoIcon
  },
  props: {
    copyright: {
      type: String,
    },
    social: {
      type: Object,
    },
  }
};
</script>

<style lang="scss">
.footer {
  width: 100%;
  font-size: #{$font-size}px;
  border-radius: 20px 20px 0 0;
  background: $grey;

  &__wrapper {
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-template-columns: max-content 1fr max-content;

    @include sides-offset();
    width: 100%;

    @include media-breakpoint-down('md') {
      padding-left: 36px;
      padding-right: 36px;
    }
  }

  &__logo {
    padding-top: 64px;
    grid-row: 1 / 2;
    grid-column: 1 / 2;

    @include media-breakpoint-down('md') {
      padding-top: 40px;
    }

    & .logo-char{
      fill: $white;
    }
  }

  &__copyright {
    grid-row: 2 / 3;
    grid-column: 1 / 2;

    @include media-breakpoint-down('md') {
      grid-row: 3 / 4;
      grid-column: 1 / 2;
    }

    color: $white;
    font-family: $font-lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 142.857%;
  }

  &__content-right {
    padding-top: 48px;
    padding-bottom: 44px;
    padding-right: 58px;
    grid-row: 1 / 2;
    grid-column: 3 / 4;

    @include media-breakpoint-down('md') {
      padding-top: 40px;
      padding-bottom: 60px;
      grid-row: 2 / 3;
      grid-column: 1 / 2;
    }
  }

  &__social-text {
    color: $white;
    font-family: $font-lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
  }

  &__social {
    display: flex;
    flex-direction: row;
    margin-top: 16px;

    :last-child {
      margin-right: 0;
    }
  }

  &__social-item {
    margin-right: 20px;
  }
}
</style>
