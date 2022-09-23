<template>
  <div>
      <user-profile :info="fetchedUser">
          <div slot="username">{{ fetchedUser.id }}</div>
           <span slot="time">{{ 'Joined ' + fetchedUser.created }}, </span>
           <span slot="karma">{{ fetchedUser.karma }}</span>
      </user-profile>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import UserProfile from '../components/UserProfile.vue'

export default {
    computed: {
        // 데이터 넘기기 :: 데이터 명시적
        ...mapGetters([ 'fetchedUser' ])
    },
    created() {
        const userName = this.$route.params.id
        this.$store.dispatch('FETCH_USER', userName)
    },
    components: { UserProfile }
}
</script>

<style>

</style>