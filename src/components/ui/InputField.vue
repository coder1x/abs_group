<template>
  <label class="input-field">
    {{ label }}
    <input class="input-field__field" v-if="type === 'tel'" :type="type" v-maska data-maska="+7 (###) ###-##-##"
           placeholder="+7 (___) ___-__-__" v-model="valueTel" :name="fieldName">
    <input class="input-field__field" v-if="type === 'fio'" type="text" placeholder="ФИО" v-model="valueFio"
           @input="handleInput" :name="fieldName">
  </label>
</template>

<script>
import { vMaska } from 'maska';

export default {
  name: 'input-field',
  directives: {
    maska: vMaska
  },
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    fieldName: {
      type: String,
      required: true
    }
  },
  data: () => ({
    valueTel: '',
    valueFio: '',
  }),
  methods: {
    handleInput(event) {
      const text = event.target.value;
      this.valueFio = text.replace(/[^\w\sа-яА-Я]/g, '');
    }
  },
};
</script>

<style lang="scss">
.input-field{
  display: flex;
  flex-direction: column;

  color: $dark-grey2;
  font-family: $font-roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;

  &__field{
    border-radius: 4px;
    background-color: $grey-light2;
    border: 0;
    padding: 16px;
    color: $input-text;
    font-family: $font-roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 142.857%;
    outline: none;
    margin-bottom: 17px;
    margin-top: 2px;
  }
}
</style>
