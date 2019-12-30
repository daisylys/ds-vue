<template>
  <div>
    music
    <div class="main-box">
      <div class="music-box left">
       <music-list :songListData="music.songList"></music-list>
      </div>
      <div class="music-box"></div>
       <div class="music-box"></div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import musicList from "@c/musicList.vue"
export default {
  name: "music",
  components:{
    "music-list":musicList
  },
  created() {
    this.getSongListAction();
  },
  computed: {
    ...mapState(["music"])
  },
  methods: {
    ...mapActions(["getSongListAction"])
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