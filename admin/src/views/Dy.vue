<template>
<div>
   <my-header shownum="2"></my-header>
  <div class="dianyin">
   
    <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
      <el-radio-button label="top">top</el-radio-button>
      <el-radio-button label="right">right</el-radio-button>
      <el-radio-button label="bottom">bottom</el-radio-button>
      <!-- <el-radio-button label="left">left</el-radio-button> -->
    </el-radio-group>

    <el-tabs :tab-position="tabPosition" style="height: 200px;">
      <el-tab-pane label="正在热映">
        <!-- 导航电影 -->
        <div class="tags-panel">
          <div class="tags-line">
            <div class="tags-title">类型 :</div>
            <ul class="tags">
              <li class="active">
                <a href="#">全部</a>
              </li>
              <li>
                <a href="#">爱情</a>
              </li>
              <li>
                <a href="#">喜剧</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
            </ul>
          </div>
          <div class="tags-line tags-line-border">
            <div class="tags-title">类型 :</div>
            <ul class="tags">
              <li class="active">
                <a href="#">全部</a>
              </li>
              <li>
                <a href="#">爱情</a>
              </li>
              <li>
                <a href="#">喜剧</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
            </ul>
          </div>
          <div class="tags-line tags-line-border">
            <div class="tags-title">类型 :</div>
            <ul class="tags">
              <li class="active">
                <a href="#">全部</a>
              </li>
              <li>
                <a href="#">爱情</a>
              </li>
              <li>
                <a href="#">喜剧</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
              <li>
                <a href>爱情</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 筛选栏 -->
        <div class="movies-panel">
          <div class="movies-sorter">
            <div class="cat-sorter">
              <ul>
                <li>
                  <span class="sort-control sort-radio"></span>
                  <span class="sort-control-label">热门排序</span>
                </li>
                <li>
                  <span class="sort-control sort-radio sort-radio-checked"></span>
                  <span class="sort-control-label">热门排序</span>
                </li>
                <li>
                  <span class="sort-control sort-radio sort-radio-checked"></span>
                  <span class="sort-control-label">热门排序</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 电影展示 -->
        <div class="movies-list">
          <ul class="movie-list">
            <li>
              <div class="movie-item">
                <span class="movie-vera">3d</span>
                <div class="channel-action channel-action-sale">
                  <a href="#">购票</a>
                </div>
                <img
                  class="imgg"
                  src="https://p0.meituan.net/movie/b6e77d67efdc6ac89a52b956ead366ae5785152.jpg@464w_644h_1e_1c"
                />
              </div>
              <div class="channel-detail">
                <a href>哪吒之魔童降世</a>
              </div>
              <div class="channel-detail channel-detail-orange">
                <i class="integer">9.</i>
                <i class="fraction">5</i>
              </div>
            </li>

            <li>
              <div class="movie-item">
                <span class="movie-vera">3d</span>
                <div class="channel-action channel-action-sale">
                  <a href="#">购票</a>
                </div>
                <img
                  class="imgg"
                  src="https://p0.meituan.net/movie/b6e77d67efdc6ac89a52b956ead366ae5785152.jpg@464w_644h_1e_1c"
                />
              </div>
              <div class="channel-detail">
                <a href>哪吒之魔童降世</a>
              </div>
              <div class="channel-detail channel-detail-orange">
                <i class="integer">9.</i>
                <i class="fraction">5</i>
              </div>
            </li>

            <li>
              <div class="movie-item">
                <span class="movie-vera">3d</span>
                <div class="channel-action channel-action-sale">
                  <a href="#">购票</a>
                </div>
                <img
                  class="imgg"
                  src="https://p0.meituan.net/movie/b6e77d67efdc6ac89a52b956ead366ae5785152.jpg@464w_644h_1e_1c"
                />
              </div>
              <div class="channel-detail">
                <a href>哪吒之魔童降世</a>
              </div>
              <div class="channel-detail channel-detail-orange">
                <i class="integer">9.</i>
                <i class="fraction">5</i>
              </div>
            </li>

            <li>
              <div class="movie-item">
                <span class="movie-vera">3d</span>
                <div class="channel-action channel-action-sale">
                  <a href="#">购票</a>
                </div>
                <img
                  class="imgg"
                  src="https://p0.meituan.net/movie/b6e77d67efdc6ac89a52b956ead366ae5785152.jpg@464w_644h_1e_1c"
                />
              </div>
              <div class="channel-detail">
                <a href>哪吒之魔童降世</a>
              </div>
              <div class="channel-detail channel-detail-orange">
                <i class="integer">9.</i>
                <i class="fraction">5</i>
              </div>
            </li>

            <li>
              <div class="movie-item">
                <span class="movie-vera">3d</span>
                <div class="channel-action channel-action-sale">
                  <a href="#">购票</a>
                </div>
                <img
                  class="imgg"
                  src="https://p0.meituan.net/movie/b6e77d67efdc6ac89a52b956ead366ae5785152.jpg@464w_644h_1e_1c"
                />
              </div>
              <div class="channel-detail">
                <a href>哪吒之魔童降世</a>
              </div>
              <div class="channel-detail channel-detail-orange">
                <i class="integer">9.</i>
                <i class="fraction">5</i>
              </div>
            </li>

            <li>
              <div class="movie-item">
                <span class="movie-vera">3d</span>
                <div class="channel-action channel-action-sale">
                  <a href="#">购票</a>
                </div>
                <img
                  class="imgg"
                  src="https://p0.meituan.net/movie/b6e77d67efdc6ac89a52b956ead366ae5785152.jpg@464w_644h_1e_1c"
                />
              </div>
              <div class="channel-detail">
                <a href>哪吒之魔童降世</a>
              </div>
              <div class="channel-detail channel-detail-orange">
                <i class="integer">9.</i>
                <i class="fraction">5</i>
              </div>
            </li>

            <li>
              <div class="movie-item">
                <span class="movie-vera">3d</span>
                <div class="channel-action channel-action-sale">
                  <a href="#">购票</a>
                </div>
                <img
                  class="imgg"
                  src="https://p0.meituan.net/movie/b6e77d67efdc6ac89a52b956ead366ae5785152.jpg@464w_644h_1e_1c"
                />
              </div>
              <div class="channel-detail">
                <a href>哪吒之魔童降世</a>
              </div>
              <div class="channel-detail channel-detail-orange">
                <i class="integer">9.</i>
                <i class="fraction">5</i>
              </div>
            </li>
          </ul>
        </div>

        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
     

      </el-tab-pane>

      <el-tab-pane label="即将上映">即将上映</el-tab-pane>
      <el-tab-pane label="经典影片">经典影片</el-tab-pane>
       <my-footer></my-footer>
      <!-- <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane> -->
    </el-tabs>
    
  </div>
 
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabPosition: "top"
    };
  }
};
</script>
<style>
.el-tabs__nav-wrap {
  background-color: #47464a;
  height: 70px;
  width: 100%;
  min-width: 1200px;
  text-align: center;
}
.el-tabs__nav-scroll {
}
.el-tabs__active-bar {
  
}
.el-tabs__nav {
  float: none !important;
  line-height: 70px;
  width: 284px;
  margin: 0 auto;
}
.el-tabs__nav .el-tabs__item {
  padding: 0 40px;
  height: 70px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 70px;
  display: inline-block;
  list-style: none;
  font-size: 16px;
  font-weight: 500;
  color: #999;
  position: relative; 
}
.el-tabs__nav .el-tabs__item:hover {
 color: #fff;
}
.el-tabs__item.is-active {
  color: #ef4238 !important;
}

/* 三角形 */
.el-tabs__nav .el-tabs__active-bar {
}

.el-tab-pane {
  width: 1120px;
  margin: 0 auto;
  overflow: hidden;
}
.tags-panel {
  border: 1px solid #e5e5e5;
  padding: 0 20px;
  margin-top: 40px;
}
.tags-line {
  padding: 10px 0;
  overflow: hidden;
}
.tags-title {
  height: 24px;
  line-height: 24px;
  color: #999;
  font-size: 14px;
  float: left;
}
.tags {
  margin-left: 40px;
}
.tags li.active {
  background: #f34d41;
  color: #fff;
}
.tags li.active a {
  color: #fff;
}
.tags li {
  margin: 0;
  border-radius: 14px;
  padding: 3px 9px;
  display: inline-block;
  margin-left: 12px;
  list-style-type: none;
}
.tags li a {
  color: #333;
  font-size: 14px;
  text-align: left;
}
.tags-line-border {
  border-top: 1px dotted #e5e5e5;
}
/* 电影展示 */
.movies-panel {
  margin-top: 40px;
  /* background-color: rgb(221, 185, 185); */
  /* height: 1000px; */
}
.movies-sorter {
  overflow: hidden;
}
.movies-sorter .cat-sorter {
  float: left;
  padding-left: 2px;
}
.movies-sorter li {
  display: inline-block;
  height: 16px;
  line-height: 18px;
  margin-right: 30px;
}
.sort-radio {
  background: url("../../public/img/下载 (1).png");
}
.sort-control {
  display: inline-block;
  vertical-align: top;
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
.sort-radio-checked {
  background: url("../../public/img/下载.png");
}
.sort-control-label {
  font-size: 14px;
  vertical-align: top;
}

.movies-list {
  /* overflow: hidden; */

 margin: -29px 0 20px -25px;
  /* height: 1000px; */
}
.movies-list .movie-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
  /* height: 200px; */
}

.movie-list li {
  margin: 44px 0 0 30px;
  display: inline-block;
  vertical-align: top;
  position: relative;
  height: 265px !important;
  width: 160px !important;
}
.movie-item {
  position: relative;
  border: 1px solid #efefef;
  margin: -1px;
}
.movie-list .imgg {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 160px !important;
  height: 265px !important;
}
.channel-action-sale {
  background-color: #f34d41;
}
.channel-action {
  position: absolute;
  right: 5px;
  bottom: -260px;
  padding: 0 3px;
  height: 18px;
  line-height: 18px;
  border-radius: 1px;
  z-index: 1;
}
.channel-action a {
  color: #fff;
  font-size: 12px;
  vertical-align: top;
}

.movie-vera {
  position: absolute;
  top: 4px;
  left: -2px;
  font-size: 12px;
  color: #fff;
  width: 69px;
  height: 25px;
  background-color: red;
  z-index: 1;
}

.channel-detail {
  width: 160px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  font-size: 16px;
  color: #333;
  margin-top: 10px;
  position: absolute;
  bottom: -21px;
  float: 0;
}

.channel-detail-orange,
.channel-detail-prescore {
  color: #ffb400;
  position: absolute;
  bottom: -45px;
  float: 0px;
}
.channel-detail-orange .integer {
  font-size: 18px;
}
.channel-detail-orange .fraction {
  font-size: 14px;
}
.el-pagination {
    white-space: nowrap;
    padding: 2px 260px !important;
    color: #303133;
    font-weight: 700;
    margin-top: 100px !important;
}
</style>

