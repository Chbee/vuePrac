<template>
  <div>
    <list-item :type="viewType"></list-item>
  </div>
</template>

<script>

import ListItem from '../components/ListItem.vue'
import { ViewType } from '../utils/ViewTypeEnum'

export default {
  data() { return { viewType: ViewType.JOBS } },
  components: { ListItem }
}
</script>

<style>
</style>