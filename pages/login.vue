<template>
  <div>
    登录页
    <br />
    <button @click="test">查询</button>
    res: {{res}}
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import {login} from '@/api/login'
export default Vue.extend({
  data() {
    return {
      res: "",
    };
  },
  methods: {
    async test() {
      login().then((res:Object)=>{
        console.log(res)
      })
    },
  },
  mounted() {},
});
</script>
<style scoped>
</style>