<template>
  <div>
    <list-item :type="viewType"></list-item>
  </div>
</template>

<script>

import ListItem from '../components/ListItem.vue'
import ListMixin from '../mixins/ListMixin'

export default {
  data() { return { viewType: 'jobs' } },
  components: { ListItem },
  mixins: [ListMixin]
}
</script>

<style>
</style>