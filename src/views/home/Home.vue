<template>
  <div>
    <xyheader></xyheader>
    <xycontent></xycontent>
    <div class="test"></div>
  </div>
</template>

<script type="text/ecmascript-6">
// import axios from 'axios'
import Xyheader from '@/common/header/xyheader'
import Xycontent from './xycontent/xycontent'

export default {
  name: 'home',
  components: {
    Xyheader,
    Xycontent
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.test
  height 1000px
</style>
