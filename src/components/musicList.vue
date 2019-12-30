/* eslint-disable no-console */
<template>
  <div>
    <div v-for="(item, key) in songListData" :key="key">
      <section class="financial-list">
        <section class="collect">
          <aside>
            <h2>{{item.title}}</h2>
            <section class="Cleft clearfix">
              <!-- <img class="fl" src="./../assets/icon/eyes.png" style="width:0.24rem;height:0.2rem;" /> -->
              <span class="fl">{{item.author_name}}</span>
            </section>
            <section class="Cright">
              <!-- <img src="./../assets/icon/clock.png" style="width:0.2rem;height:0.2rem;" /> -->
              <span>{{item.date | getYMD}}</span>
            </section>
            <div style="clear: both"></div>
          </aside>
          <aside>
            <img :src="item.thumbnail_pic_s" style="border-radius: 0.5rem;" />
          </aside>
          <div style="clear: both"></div>
        </section>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "musicList",
  props: {
    songListData: Array
  },
  created() {
    // eslint-disable-next-line no-console
    console.log("songListData:", typeof(this.songListData));
  }
};
</script>
<style scoped>
.financial-list {
  width: 100%;
  height: 100%;
  padding: 18px 0;
  border-bottom: 1px solid #ccc;
}

.financial-list .collect {
  width: 92%;
  margin: 0 auto;
}

.financial-list .collect aside:nth-of-type(1) {
  width: 63%;
  float: left;
}

.financial-list .collect aside:nth-of-type(2) {
  width: 22%;
  height: 150px;
  float: left;
  margin-left: 10px;
}

.financial-list .collect h2 {
  width: 100%;
  height: 56px;
  font-size: 32px;
  color: #333333;
  line-height: 50px;
  text-align: left;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  overflow: hidden;
}

.financial-list .collect aside:nth-of-type(2) img {
  width: 100%;
  height: 100%;
}

.financial-list .collect aside .Cleft {
  width: 45%;
  float: left;
  margin-top: 36px;
}

.financial-list .collect aside .Cleft span {
  display: block;
  width: 100px;
  margin-left: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  overflow: hidden;
}

.financial-list .collect aside .Cright {
  width: 55%;
  float: right;
  margin-top: 36px;
}
.financial-list .collect aside .Cright span {
  display: inline-block;
  margin: 5px 0 0 5px;
}
.financial-list .collect aside span {
  font-size: 20px;
  color: #999999;
}

.financial-list .collecpxt aside .Cleft img,
.financial-list .collect aside .Cright img {
  width: 18px;
  height: 25px;
  margin-top: 9px;
}
</style>