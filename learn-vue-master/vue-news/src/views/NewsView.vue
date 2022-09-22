<template>
  <div>
      <div v-for="user in users">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchList } from '../api/index'

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    fetchList('news')
      .then(response => 
        this.users = response.data
      )
      .catch(error => console.log(error))
  }
}
</script>

<style>

</style>