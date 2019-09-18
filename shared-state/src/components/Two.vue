<template>
  <div>
      <h1>{{ this.user }}</h1>
  </div>
</template>

<script>

import Store from '../Store'

export default {
  name: 'Two',

    data() {
        return Store
    }

}
</script>

<style>
</style>
