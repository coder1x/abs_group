<template>
  <article class="hall-details">
    <h3 class="hall-details__title" v-if="title">{{ title }}</h3>
    <ul class="hall-details__list">
      <li class="hall-details__list-item" v-for="(data, index) in properties" :key="index">
        <span class="hall-details__property">{{ data.property }}</span>
        <span class="hall-details__value">{{ data.value }}</span>
      </li>
    </ul>
    <div class="hall-details__wrapper-buttons">
      <button-action v-for="(button, index) in buttons" :key="index" :class="button.modal" :title="button.title"
              :link="button.link"/>
    </div>
  </article>
</template>

<script>
import ButtonAction from '@/components/ui/Button.vue';

export default {
  name: 'hall-details',
  components: {
    ButtonAction,
  },
  props: {
    title: {
      type: String
    },
    properties: {
      type: Array
    },
    buttons: {
      type: Array
    }
  }
};
</script>

<style lang="scss">
.hall-details {
  display: flex;
  flex-direction: column;
  height: fit-content;
  background-color: $white;
  padding: 36px 40px 48px 40px;
  border-radius: 16px;
  box-shadow: 0 8px 16px 0 rgba(34, 35, 36, 0.10);
  margin-left: 56px;
  margin-right: 56px;
  width: 100%;
  max-width: 536px;

  @include smooth-offset(margin-top, 16, 20, 40, 50, 56);
  @include smooth-offset(margin-bottom, 16, 20, 40, 50, 56);

  @include media-breakpoint-down('xl') {
    margin-left: 0;
    margin-right: 0;
    padding: 24px 16px 24px 16px;
    max-width: unset;
  }

  &__title {
    color: $dark-grey;
    @include font-rem(32);
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    margin-bottom: 22px;

    @include media-breakpoint-down('md') {
      font-size: 20px;
      line-height: 123%;
      margin-bottom: 14px;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;

    :last-child {
      border-bottom: 0;
    }
  }

  &__list-item {
    border-bottom: 2px solid $grey-light2;
    padding-top: 8px;
    padding-bottom: 8px;
    @include media-breakpoint-down('md') {
      padding-top: 6px;
      padding-bottom: 6px;
    }
  }

  &__property {
    display: inline-block;
    color: $dark-grey2;
    font-family: $font-lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 175%;
    width: 44%;

    @include media-breakpoint-down('md') {
      font-size: 14px;
      width: 47%;
    }
  }

  &__value {
    color: $dark-grey;
    font-family: $font-lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 175%;

    @include media-breakpoint-down('md') {
      font-size: 14px;
    }
  }

  a.button-action {
    background-color: $white;
    color: $golden;
    border: 2px solid $golden;

    @include hover() {
      color: $input-text;
    }
  }

  &__wrapper-buttons {
    display: flex;
    flex-direction: row;
    padding-top: 25px;

    @include media-breakpoint-down('sm') {
      flex-direction: column;
      padding-top: 18px;
      :first-child {
        margin-bottom: 16px;
      }
    }

    @include media-breakpoint-up('sm') {
      :first-child {
        margin-right: 16px;
      }
    }

    .button-action {
      @include media-breakpoint-down('sm') {
        padding-top: 14px;
        padding-bottom: 14px;
      }
    }
  }

}
</style>
