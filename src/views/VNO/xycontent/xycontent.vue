<template>
<div>
  <div
    class="xyword"
    v-for="page of view"
    :key="page.id"
  >
    <div class="xytitle border-bottom">
      <router-link
        tag="div"
        class="xytitle-h1"
        :to="page.name + '/' + page.id"
      >
        {{page.title}}
      </router-link>
      <div class="xytitle-h2">
        {{page.time}}
      </div>
    </div>
    <div
      class="xycontent border-bottom"
      :class="{'xycontent-max': page.content.lenght >= max}"
    >
      {{page.content}}
      <!-- 隐藏代码块 -->
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">

export default {
  max: 500,
  name: 'Xyheader',
  data () {
    return {
    }
  },
  props: {
    // view: Array
  },
  methods: {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~@/assets/style/mixins.styl'
.xyword
  overflow hidden
  float top
  margin 20px 35px
  border 1px solid rgb(153, 153, 153)
  border-radius: 5px
  .xytitle
    text-align center
    padding 10px
    height 50vh
    color #999999
    .xytitle-h1
      font-size 22px
    .xytitle-h2
      margin-top 10px
      font-size 17px
  .xycontent-max
    overflow hidden
    display -webkit-box
    -webkit-line-clamp 13
    -webkit-box-orient vertical
    margin 0 10px
    padding 0 10px
    line-height 30px
    background #fff
    font-size 20x
    height 400px
    text-overflow ellipsis
</style>
