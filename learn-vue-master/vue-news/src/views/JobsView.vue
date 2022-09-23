<template>
  <div>
    <div v-for="item in fetchedJobs" v-bind:key='item'>
      <a :href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }} by {{ item.domain }}</small>
    </div>
  </div>
</template>

<script>
import { ViewType } from '../utils/ViewTypeEnum'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([ 'fetchedJobs' ])
  },
  created() {
    this.$store.dispatch('FETCH_DATAS', ViewType.JOBS)
  }
}
</script>

<style>

</style>