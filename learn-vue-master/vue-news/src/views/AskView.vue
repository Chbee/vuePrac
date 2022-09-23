<template>
  <div>
      <div v-for="item in fetchedAsk" v-bind:key='item'>
      <a :href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </div>
  </div>
</template>

<script>
import { ViewType } from '../utils/ViewTypeEnum'
import { mapGetters } from 'vuex'

export default {
  computed: {
    // 객체가 오는 경우 : 명명을 달리할경우, 동일한 명칭을 쓸거면 배열 내에 선언
    ...mapGetters([ 'fetchedAsk' ])
    // ...mapState({
    //   asks: state => state.datas
    // })

    // ,
    // ask() {
    //   return this.$store.state.datas
    // }
  },
  created() {
    this.$store.dispatch('FETCH_DATAS', ViewType.ASK)
  }
}
</script>

<style>

</style>