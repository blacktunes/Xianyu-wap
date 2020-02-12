<template>
  <div>
    <keep-alive>
      <xyheader></xyheader>
      <xyheader-min></xyheader-min>
    </keep-alive>
    <xycontent></xycontent>
  </div>
</template>

<script type="text/ecmascript-6">
// import axios from 'axios'
import Xyheader from '@/common/header/xyheader'
import XyheaderMin from '@/common/header/headermin'
import Xycontent from './xycontent/xycontent'

export default {
  name: 'home',
  components: {
    Xyheader,
    XyheaderMin,
    Xycontent
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
