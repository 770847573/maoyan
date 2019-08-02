<template>
  <div class="main-one">
    <div class="panel-haeder">
      <span class="panel-title">即将上映(61)</span>
      <div class="panel-more">
        <a href="#">全部</a>
        <span class="el-icon-arrow-right"></span>
      </div>
    </div>
    
   <div class="movie-list">
      <ul>
     <MouvSum v-for="ms in mouvlist" :key="ms.fid" :ms='ms' />
</ul>
    </div>
    <div class="panel">
      <div class="clearfix">今日票房</div>
        <Mouvsonr :mouvlist='mouvlist'/>
    </div>
  </div>
</template>
<style scoped="scoped">
	.movie-list {
	  width: 775px;
	  height: 610px;
	  /* border: 1px solid rgb(32, 158, 89); */
	  position: absolute;
	  top: 30px;
	}
	.movie-list ul {
	  width: 775px;
	  height: 600px;
	  list-style: none;
	  display: -webkit-flex;
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: space-between;
	}
.main-one {
  width: 1200px;
  height: 650px;
  /* border: 1px solid rgb(201, 189, 26); */
  position: relative;
  margin-top: 30px;
  box-sizing: border-box; 
}
.panel-haeder {
  width: 775px;
  overflow: hidden;
  height: 26px;
  line-height: 26px;
  /* border: 1px solid rebeccapurple; */
}
.panel-haeder .panel-title {
  float: left;
  font-size: 26px;
  color: #2d98f3!important;
}
.panel-more {
  font-size: 14px;
  line-height: 16px;
  float: right;
  margin-top: 10px;
  color: #2d98f3!important;
}
.panel-more a {
  color: #2d98f3!important;
}
/* 电影图片展示开始 */


/* 电影图片展示结束 */
/* 侧边导航 */
.clearfix {
  height: 26px;
  line-height: 26px;
  font-size: 26px;
  color: #ef4238;
  text-align: left;
  margin-bottom: 10px;
}
.panel {
  width: 360px;
  height: 473px;
  position: absolute;
  right: 5px;
  top: 30px;
}


</style>
<script>
// 导入组件
import MouvSum from './MouvSon'
import Mouvsonr from './Mouvsonr'
export default {
   data(){
     return {
       mouvlist:[]
     }
   },
  components:{
    MouvSum,
    Mouvsonr
  },
  props:{},

  created(){
    this.axios.get('/mouvlist')
    .then(rex =>{
      console.log(rex)
      this.mouvlist = rex.data
     
    })
    .catch(err=>{
      console.error(err);
    })
  }
}
</script>
