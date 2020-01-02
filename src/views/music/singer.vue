<template>
  <div>
    <div class="main-box">
      <div class="music-box left">
       <singer-list :songListData="music.singerList"></singer-list>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import singerList from "@c/singerList.vue"
export default {
  name: "singer",
  components:{
    "singer-list":singerList
  },
  created() {
    this.getSingerListAction();
  },
  computed: {
    ...mapState(["music"])
  },
  methods: {
    ...mapActions(["getSingerListAction"])
  }
};
</script>
<style lang="less" scoped>
.main-box {
  display: flex;
  .music-box {
    flex: 1;
  }
  .music-box.left{
    background: #f9f8f9;
    padding: 10px;
    border: 1px dotted #eee;
  }
}

</style>