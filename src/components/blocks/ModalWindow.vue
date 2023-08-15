<template>
  <div class="modal-window" :class="{'modal-window_visible':isVisibleModal}">
    <div class="modal-window__top">
      <button class="modal-window__close" type="button" title="Закрыть" @click="closeModal">
        <CloseIcon/>
      </button>
    </div>
    <div class="modal-window__header">
      <p class="modal-window__header-title" v-if="title">{{title}}</p>
      <p class="modal-window__header-text" v-if="text">{{text}}</p>
    </div>
    <div class="modal-window__body">
      <form method="post" :action="action" @submit="handleSubmit">
        <InputField type="fio" label="Ваше имя" field-name="fio"/>
        <InputField type="tel" label="Ваш номер телефона" field-name="tel"/>
        <Button :title="submitName" type="submit"/>
      </form>
    </div>
    <div class="modal-window__footer">
      <p class="modal-window__footer-description" v-if="description" v-html="description"/>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button.vue';
import CloseIcon from '@/assets/icons/modalWindow/CloseIcon.vue';
import InputField from '@/components/ui/InputField.vue';
import { isWindowSizeEqualToPoint } from '@/shared/helpers';

export default {
  name: 'modal-window',
  components: {
    Button,
    CloseIcon,
    InputField
  },
  props: {
    title:{
      type: String
    },
    text: {
      type:String
    },
    description: {
      type:String
    },
    action:{
      type:String,
      required: true
    },
    submitName:{
      type:String,
      required: true
    }
  },
  data() {
    return {
      isVisibleModal: false,
    };
  },
  methods: {
    openModal() {
      this.isVisibleModal = true;
    },
    closeModal() {
      this.isVisibleModal = false;
    },
    handleSubmit(event) {
      const data = Array.from(new FormData(event.currentTarget).entries());

      if (data.length) {
        data.forEach((item) => {
          if (!item[1]) {
            event.preventDefault();
          }
        });
      } else {
        event.preventDefault();
      }
    },
  },
};
</script>

<style lang="scss">

.modal-window {
  display: none;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: 1fr 1fr;
  position: absolute;
  top: 18vh;
  left: 50%;
  width: 100%;
  max-width: 842px;
  background-color: $white;
  box-shadow: 0 8px 16px 0 rgba(34, 35, 36, 0.10);
  border-radius: 16px;
  transform: translate(-50%);
  padding: 18px 10px 16px 40px;

  @include media-breakpoint-down('lg') {
    max-width: 600px;
  }

  &_visible {
    display: grid;
  }

  &__top{
    display: flex;
    grid-row: 1 / 2;
    grid-column: 1 / 3;

  }

  &__close {
    width: 35px;
    height: 35px;
    margin-left: auto;
    padding: 0;
    font-size: 30px;
    background-color: $white;
    border: 0;
    cursor: pointer;
    margin-left: auto;

    @include hover(){
      svg{
        fill: $grey;
      }
    }
  }

  &__header{
    grid-row: 2 / 3;
    grid-column: 1 / 2;

    @include media-breakpoint-down('lg') {
      grid-column: 1 / 3;
    }

    &-title{
      color: $golden;
      font-family: $font-title;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 34%;
      margin-bottom: 23px;
    }

    &-text{
      color: $dark-grey2;
      font-family: $font-lato;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 175%;
    }

  }

  &__body{
    grid-row: 2 / 4;
    grid-column: 2 / 3;
    width: 100%;
    max-width: 302px;
    margin-bottom: 54px;
    margin-left: 25px;

    @include media-breakpoint-down('lg') {
      grid-row: 3 / 4;
      grid-column: 1 / 3;
      margin-top: 50px;
      margin-left: 0;
      max-width: unset;
      padding-right: 26px;
    }
  }

  &__footer{
    grid-row: 3 / 4;
    grid-column: 1 / 2;

    @include media-breakpoint-down('lg') {
      grid-row: 4 / 5;
      grid-column: 1 / 3;
    }

    &-description{
      width: 100%;
      max-width: 320px;
      color: $dark-grey2;
      font-family: $font-roboto;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;

      a{
        font-family: inherit;
        color: inherit;
        font-size: inherit;
        font-style: inherit;
        font-weight: inherit;
        line-height: inherit;
        text-decoration-line: underline;
      }
    }

  }
}

</style>
