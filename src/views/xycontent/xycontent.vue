<template>
  <div
  class="headerlink"
  >
    <router-link
      class="headerrouter"
      tag="div"
      v-for="page of view"
      :key="page.id"
      :to="page.name"
    >
      {{page.name}}
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Xyheader',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.headerlink
  overflow hidden
  display flex
  line-height 20px
  background rgb(238, 238, 238)
  font-size 14px
  color #303133
  .headerrouter
    float: right
    width 15%
</style>
