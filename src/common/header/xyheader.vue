<template>
<div>
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
  <div class="headerlinkmin" v-show="!overlow">
    <!-- 公共  -->
    <div class="backtop"></div>
    <router-link
      class="headerroutermin"
      v-for="page of view"
      :key="page.id"
      :to="page.name"
      @click="handlecss(page.name)"
      :ref="page.name"
    >
      {{page.name}}
    </router-link>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Xyheader',
  data () {
    return {
      overlow: true,
      clickway: 'Home',
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
  mounted () {
    window.addEventListener('scroll', this.handlescroll)
    window.addEventListener('trunpage', this.handlecss)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handlescroll)
  },
  methods: {
    handlescroll () {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (top > 30) {
        this.overlow = false
      } else {
        this.overlow = true
      }
    },
    handlecss () {
      this.clickway = this.$ref.page.name
      this.$refs.page.name.style.color = 'black'
    }
  },
  watch: {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.headerlink
  position relative
  overflow hidden
  display flex
  left 0
  top 0
  line-height 50px
  background rgb(238, 238, 238)
  font-size 12px
  .headerimg
    width 50px
  .headerrouter
    color rgb(144, 147, 153)
    float left
    width 15%
.headerlinkmin
  z-index 2
  position fixed
  overflow hidden
  display flex
  left 0
  right 0
  top 0
  height 20px
  font-size 12px
  color black
  background rgb(238, 238, 238)
  .backtop
    width 50px
    float left
  .headerroutermin
    float left
    width 15%
    color rgb(144, 147, 153)
</style>
