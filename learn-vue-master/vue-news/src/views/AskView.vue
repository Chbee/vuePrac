<template>
  <div>
    <list-item :type="viewType"></list-item>
    <!-- <ul class="ask-list">
      <li v-for="item in fetchedAsk" v-bind:key='item' class="post">
        <div class="points">{{ item.points }}</div>
        <div>
          <p class="ask-title">
            <router-link :to="`${item.url}`">{{ item.title }}</router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
          <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>

import ListItem from '../components/ListItem.vue'
import { ViewType } from '../utils/ViewTypeEnum'

export default {
  components: { ListItem },
  data() {
    return { viewType: ViewType.ASK }
  }
}
</script>

<style>
</style>