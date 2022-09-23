<template>
  <div>
    <ul class="item-list">
      <li v-for="item in fetchedDatas" v-bind:key='item' class="post">
        <!-- 포인트 영역 -->
        <div class="points">{{ item.points || 0 }}</div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="item-title">
            <a :href="item.url">{{ item.title }}</a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
          <router-link  v-if="type != 'jobs'" :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>  
          <a v-else :href="`${item.url}`">{{ item.domain }}</a>
          <!-- 
            <template v-if="type != 'jobs'">
                <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>  
            </template>
            <template v-else>
                <a :href="`${item.url}`">{{ item.domain }}</a>
            </template>
           -->
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    props: [ 'type' ],
    computed: {
        // 객체가 오는 경우 : 명명을 달리할경우, 동일한 명칭을 쓸거면 배열 내에 선언
        ...mapGetters([ 'fetchedDatas' ])
    },
    created() {
        this.$store.dispatch('FETCH_DATAS', this.type)
    }
}
</script>

<style scoped>
.item-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.item-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>