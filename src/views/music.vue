<template>
  <div>
    music
    <ul>
      <li :key="index" v-for="(song,index) in music.songList">{{song.name}}</li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "music",
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