<template>
  <div>用户信息
{{user.username}}
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "my",
  computed:{
      ...mapState(["user"])
  }
};
</script>