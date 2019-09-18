<template>
  <input type="text" :value="code" @input="updateCode($event.target.value)" ref="input">
</template>

<script>

export default {
  name: 'coupon',
  props: ['code'],

  methods: {
      updateCode(code) {

          if (code === 'ALLFREE') {
              alert('This coupon is no longer value. Sorry')
              this.$refs.input.value = code =  "";
          }

          this.$emit('input', code);
      }
  },

}
</script>

<style>
</style>
