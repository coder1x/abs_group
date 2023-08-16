<template>
  <dl class="options-list">
    <dt class="options-list__title">{{ title }}</dt>
    <dd class="options-list__wrapper">
      <ul class="options-list__items">
        <li class="options-list__item" v-for="(item, index) in options" :key="index">
          <label class="options-list__wrapper-radio">
            <input class="options-list__input visually-hidden" type="radio" :name="item.name" :aria-label="item.name" :checked="index === 0">
            <span class="options-list__text">{{ item.title }}</span>
            <span class="options-list__dot"></span>
          </label>
        </li>
      </ul>
    </dd>
  </dl>
</template>

<script>
export default {
  name: 'options-list',
  props: {
    title: {
      type: String
    },
    options: {
      type: Array
    }
  }
};
</script>

<style lang="scss">
.options-list {
  margin: 0;
  padding-top: 32px;
  padding-bottom: 31px;

  &__title {
    color: $grey;
    font-family: $font-lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 133.333%;
    margin-bottom: 8px;

    @include media-breakpoint-down('md') {
      font-size: 16px;
    }
  }

  &__wrapper {
    margin-left: 0;
  }

  &__items {
    display: flex;
    flex-wrap: wrap;

    :last-child {
      margin-right: 0;
    }
  }

  &__item {
    margin-right: 16px;
  }

  &__wrapper-radio {
    position: relative;
    display: flex;
    cursor: pointer;
    padding: 12px;
    border-radius: 4px;
    background-color: $white;
    margin-top: 16px;
  }

  &__text{
    padding-left: 40px;
    padding-right: 20px;
    color: $dark-grey1;
    font-family: $font-lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 175%;

    @include media-breakpoint-down('md') {
      font-size: 14px;
      padding-left: 28px;
      padding-right: 5px;
    }
  }

  &__input:checked + &__text {
    color: $black;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      border: 1px solid $golden;
      border-radius: 4px;
      width: 100%;
      height: 100%;
      box-shadow: 0 8px 16px 0 rgba(34, 35, 36, 0.10);
    }
  }

  &__dot{
    position: absolute;
    left: 15px;
    top:50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    border: 2px solid $dark-grey2;
    border-radius: 50%;
  }

  &__input:checked ~ &__dot{
    border-color: $golden;

    &::before{
      position: absolute;
      content: "";
      width: 6px;
      height: 6px;
      background-color: $golden;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }


}
</style>
