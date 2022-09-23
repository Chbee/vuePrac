<template>
  <div>
      <section>
          <!-- user detail -->
          <user-profile :info="fetchedAskDetail">
              <!-- <div slot="username">{{ fetchedAskDetail.user }}</div> -->
              <router-link slot="username" :to="`/user/${fetchedAskDetail.user}`">{{ fetchedAskDetail.user }}</router-link>
              <template slot="time">{{ 'Posted ' + fetchedAskDetail.time_ago }}</template>
          </user-profile>
      </section>
      <section>
          <h2>{{ fetchedAskDetail.title }}</h2>
      </section>
      <section>
          <!-- comment -->
          <div v-html="fetchedAskDetail.content" />
      </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserProfile from '../components/UserProfile.vue'

export default {
    computed: {
        ...mapGetters([ 'fetchedAskDetail' ])
    },
    created() {     
        const itemId = this.$route.query.id
        this.$store.dispatch('FETCH_ASK_DETAIL', itemId)
    },
    components: { UserProfile }
}
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
.fa-user {
    font-size: 2.5rem;
}
.user-description {
    padding-left: 8px;
}
.time {
    font-size: 0.7rem;
}
</style>