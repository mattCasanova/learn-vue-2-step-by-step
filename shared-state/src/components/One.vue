<template>
  <div>
      <h1>{{ this.user }}</h1>
  </div>
</template>

<script>

import Store from '../Store'

export default {
  name: 'One',

    data() {
        return Store
    }

}
</script>

<style>
</style>
