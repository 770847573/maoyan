<template>
  <div class="detail">
    <my-header></my-header>
    <div class="header-placeholder"></div>
    <div class="banner">
      <div class="wrapper clearfix">
        <div class="celeInfo-left">
          <div class="avatar-shadow">
            <img class="avatar" :src="this.filmForm.poster" alt />
            <div class="movie-ver">
              <i class="imax2d"></i>
            </div>
          </div>
        </div>

        <div class="celeInfo-right clearfix">
          <div class="movie-brief-container">
            <h3 class="name">{{this.filmForm.filmname}}</h3>
            <div class="ename ellipsis">{{this.filmForm.englishname}}</div>
            <ul>
              <li class="ellipsis">{{this.filmForm.type}}</li>
              <li class="ellipsis">{{this.filmForm.region}}/{{this.filmForm.time}}</li>
              <li class="ellipsis">{{this.filmForm.date}}</li>
            </ul>
          </div>
          <div class="action-buyBtn">
            <div class="action clearfix">
              <a class="wish"  :class="{ active: isActive }">
                <div>
                  <i class="icon wish-icon"></i>
                  <span class="wish-msg" @click="addlike">想看</span>
                </div>
              </a>
              <a class="score-btn">
                <div @click="showGrade">
                  <i class="icon score-btn-icon"></i>
                  <span class="score-btn-msg">评分</span>
                </div>
              </a>
            </div>
            <a class="btn buy" href="##" target="_blank">特惠购票</a>
          </div>
          <div class="movie-stats-container">
            <div class="movie-index">
              <p class="movie-index-title">用户评分</p>
              <div class="movie-index-content score normal-score">
                <span class="index-left info-num">
                  <span class="stonefont">{{filmForm.grade}}</span>
                </span>
                <div class="index-right">
                  <div class="star-wrapper">
                    <div class="star-on" :style="{width:(filmForm.grade)*10+'%'}"></div>
                  </div>
                  <span class="score-num">
                    <span class="stonefont">7</span>
                    人评分
                  </span>
                </div>
              </div>
            </div>

            <div class="movie-index">
              <p class="movie-index-title">累计票房</p>
              <div class="movie-index-content box">
                <span class="stonefont">{{this.filmForm.piaofang}}</span>
                <span class="unit">万</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="main-content-container clearfix">
        <div class="main-content">
          <div class="tab-container">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="介绍" name="first">
                <div class="tab-desc tab-content">
                  <div class="module">
                    <div class="mod-title">
                      <h3>剧情简介</h3>
                    </div>
                    <div class="mod-content">
                      <span class="dra">{{this.filmForm.info}}</span>
                    </div>
                  </div>
                  <div class="module">
                    <div class="mod-title">
                      <h3>主要演职人员</h3>
                    </div>
                    <div class="mod-content">
                      <div class="celebrity-container clearfix">
                        <div class="celebrity-group">
                          <div class="celebrity-type">导演</div>
                          <ul class="celebrity-list clearfix">
                            <li class="celebrity" v-for="d in this.director" :key="d.fid">
                              <img :src="d.src" />
                              <div class="info">
                                <span class="name">{{d.name}}</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="celebrity-group">
                          <div class="celebrity-type">演员</div>
                          <ul class="celebrity-list clearfix">
                            <li class="celebrity actor" v-for="a in this.actors" :key="a.fid">
                              <img :src="a.src" />
                              <div class="info">
                                <span class="name">{{a.name}}</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="module">
                    <div class="mod-title">
                      <h3>热门短评</h3>
                    </div>
                    <div class="mod-content">
                      <div class="comment-list">
                        <ul>
                          <li class="comment-contanier" v-for="(s,index) in showcomment" :key="index">
                            <div class="portrait-container">
                              <img
                                class="portrait"
                                :src=s.imgsrc
                                alt
                              />
                            </div>
                            <div class="main">
                              <div class="main-header clearfix">
                                <div class="user">
                                  <span>{{s.name}}</span>
                                </div>
                                <div class="time">
                                  <span>{{new Date(s.addtime).toLocaleDateString()}}</span>
                                  <span class="userscore">评分:{{s.grade}}分</span>
                                </div>
                              </div>
                              <div class="comment-content">
                                {{s.comment}}
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="演职人员" name="second">演职人员</el-tab-pane>
              <el-tab-pane label="奖项" name="third">奖项</el-tab-pane>
              <el-tab-pane label="图集" name="fourth">图集</el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>

    <div class="grade_comment_box" v-show="showgrade">
      <div class="position">
      <div class="grade_comment_contanier">
        <div class="score_box">
          <span class="score_num" v-if="showscore">{{this.value1}}分</span>
          <span class="score_text" v-if="showscore1">点击星星进行评分</span>
        </div>
        <el-rate v-model="value" show-text text-color="#ff9900" score-template="{value}" allow-half></el-rate>
        <div class="comment" :class="{focus:isfocus}">
          <textarea
            name
            id
            cols="30"
            rows="30"
            placeholder="快来说说你的看法吧"
            @focus="onFocus"
            @blur="onBlur"
            v-model="comment"
          ></textarea>
        </div>

        <input type="button" value="提交" @click="submit" class="submit" />
      </div>
      <div class="close" @click="closecomment">
        <span>×</span>
        </div>
    </div>
    </div>

    <div class="comment-over" v-show="showover" @click="closeover"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isfocus: false,
      kkk:9,
      value: "",
      value1: "",
      comment: "",
      showcomment:[],
      showgrade: false,
      showscore: false,
      showover:false,
      imax: "",
      isActive: false,
      wish: "想看",
      wished: "已想看",
      activeName: "first",
      filmForm: {},
      director: [],
      actors: [],
      likeform: {
        fid: "",
        aid: ""
      }
    };
  },
  watch: {
    value() {
      if (this.value != 0) {
        console.log(this.value);
        this.value1 = this.value * 2;
        this.showscore = true;
      }
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab);
      console.log(event);
      // console.log(this.filmForm.director)
    },
    showGrade() {
      this.showgrade = true;
      this.showover = true;
    },
    closecomment(){
      this.showgrade = false;
      this.showover = false;
    },
    closeover(){
      this.closecomment();
    },
    addlike() {
      this.axios
        .post("/addlike", this.likeform)
        .then(res => {
          if (res.data.r == "add success") {
            alert("添加成功");
            this.isActive = !this.isActive;
            
            return;
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    onFocus() {
      this.isfocus = true;
    },
    onBlur() {
      this.isfocus = false;
    },
    submit() {
      let localdata = JSON.parse(window.localStorage.getItem("userinfo"));
      let mydate = new Date();
      let myyear = mydate.getFullYear();
      let mymonth = mydate.getMonth() + 1;
      if (mymonth < 10) {
        mymonth = "0" + mymonth;
      }
      let myday = mydate.getDate();
      if (myday < 10) {
        myday = "0" + myday;
      }
      let nowdate = myyear + "-" + mymonth + "-" + myday;
      let comform = {
        aid: localdata.aid,
        fid: this.$route.query.fid,
        grade: this.value1,
        comment: this.comment,
        addtime: nowdate
      };
      this.axios
        .post("/addcomment", comform)
        .then(res => {
          if (res.data.r == "ok") {
            console.log("评论成功");
            this.showgrade = false;
            this.getcomment();
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    //将获取评论内容封装成一个方法
    getcomment(){
        this.axios.get('/getcomment',{
        params: {
          fid: this.$route.query.fid
        }
      })
      .then(res=>{
         console.log(res);
         this.showcomment = res.data;
      })
      .catch(err=>{
        console.error(err);
      });
    }
  },
  mounted() {
    //this.$route.query  接受 get 传值， 就是? 后面的值
    let localdata = JSON.parse(window.localStorage.getItem("userinfo"));
    let aid = localdata.aid;
    this.likeform.fid = this.$route.query.fid;
    this.likeform.aid = aid;

    this.axios
      .get("/getfilm", {
        params: {
          fid: this.$route.query.fid
        }
      })
      .then(res => {
        console.log(res);
        this.filmForm = res.data;
        // console.log(this.filmForm.director);
        this.director = this.filmForm.director;
        this.actors = this.filmForm.actors;
      })
      .catch(err => {
        console.error(err);
      });
 this.getcomment();

    this.axios.get('/checklike',{
      params:{
        fid:this.$route.query.fid
      }
    })
    .then(res=>{
      if (res.data.r == 'already like') {
        console.log(res)
         this.isActive = true;
         return;
      }
    })
    .catch(err=>{
      console.log(err)
    });

  },
  computed: {
    showscore1() {
      return !this.showscore;
    }
  }
};
</script>
<style>
.grade_comment_contanier .el-rate__icon {
  font-size: 40px !important;
}
.grade_comment_contanier .el-rate__text {
  font-size: 30px !important;
}
button,
input,
select,
textarea {
  font: inherit;
  margin: 0;
}
.clearfix:after {
  clear: both;
}
.clearfix:after,
.clearfix:before {
  content: " ";
  display: table;
}
div.grade_comment_box .el-rate{
  text-align: center!important;
}
</style>

<style scoped="scoped">
.close {
    cursor: pointer;
    position: absolute;
    top: -71px;
    right: -71px;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    background: rgba(0,0,0,.3);
    padding-top: 34px;
    padding-right: 34px;
    
    line-height: 100px;
    font-size: 38px;
    color: #fff;
}
.close span{
  margin-left: 18px
}
div {
  text-align: left;
}
.wish div,
.score-btn div {
  text-align: center;
}
.btn {
  display: inline-block;
  padding: 2px 15px;
  line-height: 25px;
  font-size: 15px;
  color: #fff;
  background-color: #df2d2d;
}
.module {
  position: relative;
  margin-bottom: 60px;
}
.main{
  margin-left: 70px;
}
.comment-contanier {
  margin-top: 20px;
}
.comment-contanier .portrait-container {
  margin-right: 20px;
  float: left;
  position: relative;
  width: 50px;
  height: 50px;
}
.comment-contanier .portrait {
  border-radius: 50%;
  overflow: hidden;
  width: 50px;
  height: 50px;
  display: block;
}
.comment-container .main {
  margin-left: 70px;
}
.comment-container .main-header {
  position: relative;
  font-size: 16px;
}
.comment-container .main-header .user {
  margin-top: 2px;
}
.userscore{
  color: #ffc600;
  font-size: 16px;
  /* display: inline-block; */
  margin-left: 20px;
  float: right;
 

}
.comment-content{
  margin-top: 20px;
    padding-bottom: 30px;
    border-bottom: 1px solid #e5e5e5;
    color: #666;
    line-height: 26px;
    font-size: 14px;
}
.comment {
  position: relative;
  width: 488px;
  height: 158px;
  margin: 38px 15px 14px;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  padding: 10px 10px 30px;
}
.comment textarea {
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  overflow: auto;
  outline: none;
}
.comment.focus {
  border-color: #df2d2d;
}
.submit {
  cursor: pointer;
  float: right;
  margin-right: 15px;
  width: 90px;
  height: 40px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  line-height: 16px;
  color: #fff;
  background-color: #df2d2d;
}
.comment-over{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: #000;
  background-color: rgba(0,0,0,.6);
  z-index: 9999;
}
.position{
  border-radius: 3px;
  position: relative;
    word-break: break-word;
}
.grade_comment_box {
  overflow: hidden;
  -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  border-color: #b2b2b2;
  border: 10px solid rgba(0, 0, 0, 0.3);
  position: fixed;
  /* opacity: 1; */
  z-index: 10000;
  left: 50%;
  top: 50%;
  margin-left: -285px;
  margin-top: -235px;
  animation: chuxian 0.3s;
  width: 550px;height: 420px;
  /* transition: display,0.3s,opacity,0.3s; */
}
@keyframes chuxian{
  0%{display: none; opacity: 0;width: 580px;height: 450px;}
  100%{display: block;opacity: 1; width: 550px;height: 420px;}

}

.grade_comment_contanier {
  
  overflow: hidden;
  background: #fff;
  overflow: hidden;
  padding: 12px 15px;
}
div.grade_comment_box .score_box{
  text-align: center !important;
}
.score_box {
  font-size: 40px;
  color: #ffc600;
  padding-top: 25px;
}

.header-placeholder {
  height: 81px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.main-content-container {
  margin-top: 80px;
}
.main-content-container > div.main-content {
  width: 730px;
  float: left;
}
.banner {
  width: 100%;
  min-width: 1200px;
  background: #392f59
    url("https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:5788b470/banner_bg.f7fd103e3b8c16b6f449cce43fc57f45.png")
    no-repeat 50%;
}
.wrapper {
  width: 1200px;
  margin: 0 auto;
  height: 376px;
  position: relative;
}
.action-buyBtn {
  position: absolute;
  bottom: 20px;
}
.clearfix:after,
.clearfix:before {
  content: " ";
  display: table;
}
.clearfix:after {
  clear: both;
}
.celeInfo-left {
  width: 300px;
  float: left;
  position: relative;
  top: 70px;
  overflow: hidden;
  z-index: 9;
}
.celeInfo-left .avatar-shadow,
.cinema-left .avatar-shadow {
  position: relative;
  margin: 0 30px;
  width: 240px;
  height: 330px;
  padding-bottom: 40px;
  /* background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAAyAgMAAAAfG76+AAAADFBMV鈥�VPEI076YAUGbzfwrAqOYRormcAjCANodSAEY1j2oexJoBlx1+yE7RXIIAAAAASUVORK5CYII=) */
    /* no-repeat bottom; */
}
.avatar {
  border: 4px solid #fff;
  height: 322px;
  width: 232px;
}
.movie-ver {
  position: absolute;
  top: 4px;
  left: -2px;
  font-size: 12px;
  color: #fff;
}
.movie-ver i {
  display: inline-block;
}
i.imax2d {
  width: 69px;
  height: 25px;
  background-image: url("../../img/imax2d.png");
}
i.imax3d {
  width: 69px;
  height: 25px;
  background-image: url("../../img/imax3d.png");
}
i.imaxnone {
  display: none;
}
.celeInfo-right {
  position: relative;
  margin-right: 30px;
  margin-left: 300px;
  margin-top: 70px;
}
.clearfix:after,
.clearfix:before {
  content: " ";
  display: table;
}
.clearfix:after {
  clear: both;
}
.movie-brief-container {
  position: absolute;
  color: #fff;
  font-size: 14px;
  z-index: 1;
}
.movie-brief-container .name {
  width: 900px;
  margin-top: 0;
  font-size: 26px;
  line-height: 32px;
  font-weight: 700;
  margin-bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;

  max-height: 64px;
}
.ename {
  width: 340px;
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 14px;
}
.ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.movie-brief-container ul {
  width: 250px;
  list-style: none;
  padding-left: 0;
  margin-bottom: 20px;
}
.movie-brief-container ul li {
  margin: 12px 0;
  line-height: 100%;
}
.action a {
  cursor: pointer;
  float: left;
  display: block;
  width: 120px;
  height: 25px;
  background-color: #756189;
  margin-right: 10px;
  padding-top: 11px;
  text-align: center;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
  border-radius: 2px;
}
.wish i.wish-icon {
  background: url("../../img/wish.png");
}
.action-buyBtn .action .wish.active i.wish-icon {
  background: url("../../img/wished.png");
}
.action-buyBtn .action i.icon {
  display: inline-block;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 2px;
  width: 16px;
  height: 16px;
}
.action-buyBtn .action .score-btn i.score-btn-icon {
  background: url("../../img/grade.png");
}
.action-buyBtn .btn.buy {
  margin-top: 10px;
  width: 250px;
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  border-radius: 2px;
  padding: 0;
}
.movie-stats-container {
  position: absolute;
  top: 158px;
  left: 342px;
}
.movie-index {
  margin-bottom: 16px;
  color: #fff;
}
.movie-index-title {
  font-size: 12px;
  margin-bottom: 8px;
}
.movie-stats-container .movie-index {
  margin-bottom: 16px;
  color: #fff;
}
.movie-index-content {
  overflow: hidden;
}
.movie-stats-container .movie-index .movie-index-content .index-left {
  float: left;
}
.movie-stats-container .movie-index .movie-index-content .info-num {
  font-size: 30px;
  color: #ffc600;
  height: 30px;
  line-height: 30px;
}
.stonefont {
  font-family: stonefont;
}
.movie-stats-container .movie-index .movie-index-content .index-right {
  margin-left: 54px;
  font-size: 12px;
}
.star-wrapper {
  width: 60px;
  height: 12px;
  position: relative;
  background-image: url("../../img/biggrade.png");
  background-repeat: repeat-x;
  margin-bottom: 4px;
}
.star-on {
  height: 12px;
  background-image: url("../../img/gradeed.png");
  background-repeat: repeat-x;
}
.movie-stats-container .movie-index .box .stonefont {
  font-size: 30px;
}
.box .unit {
  font-size: 12px;
  padding-left: 4px;
}
.tab-desc {
  margin-top: 40px;
}
.module .mod-title h3 {
  display: inline-block;
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 18px;
  color: #333;
  line-height: 18px;
}
.module .mod-title h3:before {
  float: left;
  content: "";
  display: block;
  width: 4px;
  height: 18px;
  margin-right: 6px;
  background-color: #ef4238;
}
.mod-content {
  margin-top: 20px;
  color: #333;
}
.tab-desc .dra {
  font-size: 14px;
  line-height: 26px;
}
.celebrity-container {
  font-size: 16px;
  color: #333;
}
.tab-desc .celebrity-container .celebrity-group:first-child {
  margin-left: 0;
}
.tab-desc .celebrity-container .celebrity-group {
  float: left;
  margin-left: 30px;
}
.celebrity-container .celebrity-type {
  margin-bottom: 16px;
}
.celebrity-container .celebrity-list {
  margin-left: -20px;
}
.tab-desc .celebrity-container .celebrity-group .celebrity {
  margin-bottom: 0;
}
.celebrity-container .celebrity {
  float: left;
  width: 128px;
  margin-left: 20px;
  margin-bottom: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.celebrity-container .celebrity img {
  width: 128px;
  height: 170px;
}
.default-img {
  background-image: url("../../img/kongimg.png");
  background-position: 50%;
  background-size: 68px 62px;
  background-repeat: no-repeat;
  margin-bottom: 6px;
}
.celebrity-container .celebrity .name {
  margin-top: 8px;
  line-height: 1.2;
  color: #333;
}
.celebrity-container .celebrity .name,
.celebrity-container .celebrity .role {
  display: inline-block;
  width: 128px;
  text-align: center;
  padding-bottom: 1px;
  margin-bottom: -1px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
