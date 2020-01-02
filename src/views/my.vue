<template>
  <div>
    用户信息
    {{user.username}}
    <button @click="toast">显示taost弹出框</button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "my",
  computed: {
    ...mapState(["user"])
  },
  methods: {
    toast() {
      this.$toast("你好");
    }
  }
};
</script>