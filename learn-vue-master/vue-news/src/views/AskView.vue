<template>
  <div>
      <div v-for="ask in asks">{{ ask.title }}</div>
  </div>
</template>

<script>
import { fetchList } from '../api/index'

export default {
  data() {
    return {
      asks: []
    }
  },
  created() {
    fetchList('ask')
      .then(response => this.asks = response.data)
      .catch(error => console.log(error))
  }
}
</script>

<style>

</style>