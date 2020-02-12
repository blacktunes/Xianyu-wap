<template>
  <div class="xyword">
    <router-link
      class="headerroutermin"
      tag="div"
      v-for="page of view"
      :key="page.id"
      :to="'/' + page.name + '/' + page.title"
    >
    <div>
      <div class="wordtitle">{{page.title}}</div>
      <div class="wordtitle">{{page.content}}</div>
    </div>
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
  props: {
    view: Array
  },
  methods: {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.xycontent
  margin-top 5px
  overflow hidden
  display flex
  line-height 50px
  background red
  font-size 14px
  color #303133
  height 3000px
</style>
