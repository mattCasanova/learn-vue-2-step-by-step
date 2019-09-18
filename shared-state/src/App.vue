<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<input type="text" v-model="coupon">-->
    <!--<input type="text" :value="coupon" @input="coupon = $event.target.value">-->
    <coupon v-model="coupon"></coupon>
    <One></One>
    <Two></Two>
  </div>
</template>

<script>
import One from './components/One'
import Two from './components/Two'
import Coupon from './components/Coupon'

export default {
  name: 'app',
  components: {
    One,
    Two,
    Coupon
  },

  data() {
    return {
      coupon: 'FREEBIE'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
