<template>
  <div>
      <div v-for="item in this.$store.state.news" v-bind:key='item'>
        <a :href="item.url">{{ item.title }}</a>
        <small>
          {{ item.time_ago }} by
          <!-- <router-link :to="'/user/' + item.user">{{ item.user }}</router-link> -->
          <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
        </small>
      </div>
  </div>
</template>

<script>

import { ViewType } from '../utils/ViewTypeEnum'

export default {
  created() {
    this.$store.dispatch('FETCH_DATAS', ViewType.NEWS)
  }
}
</script>

<style>

</style>