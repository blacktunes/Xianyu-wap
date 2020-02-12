<template>
  <div class="headerlink" v-show="overlow">
    <!-- 公共  -->
    <div @click="backtop" class="backtop"></div>
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
  name: 'XyheaderMin',
  data () {
    return {
      overlow: true,
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
  activated () {
    window.addEventListener('scroll', this.handlescroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handlescroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 30) {
        this.overlow = false
      } else {
        this.overlow = true
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.headerlink
  position absolute
  overflow hidden
  display flex
  line-height 20px
  background rgb(238, 238, 238)
  font-size 12px
  color #303133
  .backtop
    width 50px
    float left
    text-align center
  .headerrouter
    margin-left 50px
    float: left
    width 15%
</style>
