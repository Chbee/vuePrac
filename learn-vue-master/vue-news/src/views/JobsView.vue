<template>
  <div>
      <div v-for="job in jobs">{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchList } from '../api/index'

export default {
  data() {
    return {
      jobs: []
    }
  },
  created() {
    fetchList('jobs')
      .then(response => this.jobs = response.data)
      .catch(error => console.log(error))
  }
}
</script>

<style>

</style>