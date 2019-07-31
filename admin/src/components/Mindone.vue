<template>
  <div id="bangdan">
    <div class="subnav">
      <ul>
        <li>
          <a href>热映口碑榜</a>
        </li>
        <li>
          <a href>热映口碑榜</a>
        </li>
        <li>
          <a href>国内票房榜</a>
        </li>
        <li>
          <a href>北美票房榜</a>
        </li>
        <li>
          <a href>TOP100榜</a>
        </li>
      </ul>
    </div>
    <div class="main1">
      <p class="update-time">
        2019-07-30
        <span class="p-u-f">已更新</span>
      </p>
      <p class="upti">榜单规则：将昨日国内热映的影片，按照评分从高到低排列取前10名，每天上午10点更新。相关数据来源于“猫眼专业版”及“猫眼电影库”。</p>
      <div class="board-wrapper bw-ul">
        <div class="sci">
          <img src="../../img/下载 (4).png" alt />
        </div>
        <div class="lia">
          <a href="1">
            <img
              src="https://p0.meituan.net/movie/005955214d5b3e50c910d7a511b0cb571445301.jpg@464w_644h_1e_1c"
              alt
            />
          </a>
        </div>
        <div class="cc fr">
          <div class="pl">
            <div>哪吒之魔童降世</div>
            <div>主演：吕艳婷,囧森瑟夫,瀚墨</div>
            <div>上映时间：2019-07-26</div>
          </div>
          <div class="pr">
            <i>9.</i>
            <i>7</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#bangdan {
  margin-top: 81px;
  width: 100%;
  height: 100%;
}
.subnav {
  background-color: #47464a;
  height: 60px;
  width: 100%;
  min-width: 1200px;
  text-align: center;
}
.subnav ul {
  margin: 0 auto;
  padding: 0;
  list-style: none;
  height: 60px;
  width: 796px;
  line-height: 60px;
  overflow: hidden;
}
.subnav ul li {
  display: inline-block;
}
.subnav li a {
  display: block;
  font-size: 16px;
  color: #999;
  height: 60px;
  line-height: 60px;
  padding: 0 40px;
}

/* .subnav li a::before {
  content: "";
  width: 2px;
  height: 0;
  display: inline-block;
  position: absolute;
  left: 50%;
  margin-left: -5px;
  top: 53px;
  border-bottom: 7px solid #fff;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: none;
} */
#bangdan .main1 {
  width: 950px;
  margin: 0 auto;
  margin-top: 30px;
  border: 1px solid #000;
  font-size: 0px;
}
#bangdan .main1 .update-time {
  margin: 0 auto;
  text-align: center;
  font-weight: normal;
  color: #999;
  font-size: 12px;
}
#bangdan .main1 .update-time .p-u-f {
  color: #ffb400;
  margin-left: 4px;
}
#bangdan .main1 .upti {
  margin-top: 6px;
  text-align: center;
  font-size: 12px;
  color: #999;
}
#bangdan .board-wrapper {
  margin-top: 40px;
  background-color: rgb(70, 133, 138);
}
.bw-ul {
  display: flex;
  align-items: center;
}
/* #bangdan .board-wrapper .bw-ul li {
  margin-bottom: 30px;
  height: 220px;
  line-height: 220px;
  overflow: hidden;
} */
#bangdan .bw-ul .lia {
  width: 160px;
  height: 220px;
  margin: 0 20px;
}
#bangdan .bw-ul  .lia img {
  width: 100%;
  height: 100%;
}
.bw-ul .sci {
  width: 50px;
}

.cc {
  width: 680px;
  height: 220px;
  background-color: rgb(47, 192, 136);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pr {
  width: 60px;
  background-color: rgb(228, 57, 57);
  font-size: 20px;
  text-align: right;
}
.pl {
  background-color: rgb(105, 30, 30);
  font-size: 20px;
}
</style>
