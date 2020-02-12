<template>
  <div class="headerlink">
    <!-- 咸鱼图标 -->
    <img class="headerimg" src="https://www.feizhouxianyu.cn/img/logo.82f65e68.png"/>
    <!-- 首页链接 -->
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
      view: [{
        id: '01',
        name: 'Home'
      }, {
        id: '02',
        name: 'Vue'
      }, {
        id: '03',
        name: 'Node'
      }, {
        id: '04',
        name: 'Other'
      }, {
        id: '05',
        name: 'Mood'
      }, {
        id: '06',
        name: 'Timeline'
      }]
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.headerlink
  position relative
  overflow hidden
  display flex
  line-height 50px
  background rgb(238, 238, 238)
  font-size 12px
  color #303133
  .headerimg
    width 50px
  .headerrouter
    float: right
    width 15%
</style>
