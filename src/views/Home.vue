<template>
  <div class="home">
    <NoticeComp style="padding:0 !important; height: 30px"/>
    <HelloWorld  style="padding:0 !important"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NoticeComp from "@/components/NoticeComp.vue"
export default {
  name: 'home',
  components: {
    HelloWorld,
    NoticeComp
  }
}
</script>
