<template>
  <div>
    <list-item :type="viewType"></list-item>
  </div>
</template>

<script>

import ListItem from '../components/ListItem.vue'
import ListMixin from '../mixins/ListMixin'

export default {
  components: { ListItem },
  data() {
    return { viewType: 'ask' }
  },
  mixins: [ListMixin]
}
</script>

<style>
</style>