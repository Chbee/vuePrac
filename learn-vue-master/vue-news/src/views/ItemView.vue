<template>
  <div>
      <section>
          <!-- detail -->
          <div class="user-container">
              <div>
                  <i class="fas fa-user"></i>
              </div>
              <div class="user-description">
                  <router-link :to="`/user/${fetchedAskDetail.user}`">{{ fetchedAskDetail.user }}</router-link>
                  <div class="time">{{ fetchedAskDetail.time_ago }}</div>
              </div>
          </div>
          <h2>{{ fetchedAskDetail.title }}</h2>
      </section>
      <section>
          <!-- comment -->
          <div v-html="fetchedAskDetail.content" />
      </section>
      <!-- <p>{{ fetchedAskDetail.title }}</p>
      <div>
          <p>{{ fetchedAskDetail.content }}</p>
      </div> -->
      <!-- <div v-for="item in fetchedAskDetail.comments" :key="item">{{ item }}</div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters([ 'fetchedAskDetail' ])
    },
    created() {     
        const itemId = this.$route.query.id
        this.$store.dispatch('FETCH_ASK_DETAIL', itemId)
    }
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