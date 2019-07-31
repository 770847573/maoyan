<template>
     <ul>
        <li class="p-li-f" v-if="mouvlist[0]">
          <div class="rtl">
            <i class="guan"></i>
            <img
              :src= "mouvlist[0].poster "
            />
          </div>
          <div class="rtr">
            <span class="h-m-n">{{mouvlist[0].filmname}}</span>
            <p class="h-whms">{{mouvlist[0].piaofang}}</p>
          </div>
        </li>
        
        <li v-for="(msr,ind) in mouvlist" :key="msr.fid" v-if="ind">
          <span :class="{ 'ranking-index': true, 'ranking-gray': ind>2  }">{{ind+1}}</span>
          <span class="r-m-name">{{msr.filmname}}</span>
          <span class="stonefont">{{msr.piaofang}}</span>
        </li>
      </ul>
</template>
<script>
export default {
    props:{mouvlist: {
      type: Array,
      default: function () {
        return [{poster:'1'}]
      }
    }},
    methods:{
       
    } 
}

</script>


<style>
.panel ul {
  list-style: none;
  width: 360px;
}
 .guan {
   display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    width: 22px;
    height: 25px;
    background: url('../../img/下载 (3).png')
 }
.panel li:not(.p-li-f) {
  width: 100%;
  /* border: 1px solid red; */
  /* display: inline-block; */
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  box-sizing: border-box;
}
.panel li span {
  /* display: inline-block; */
  line-height: 35px;
  /* width: 20px; */
}
.panel li:not(.p-li-f) > span:nth-child(2) {
  flex-grow: 1;
  width: 220px;
  text-align: left;
}
.panel ul .p-li-f {
  height: 80px;
  width: 100%;
  overflow: hidden;
}
.panel ul .p-li-f .rtl {
  float: left;
  position: relative;
  height: 100%;
  width: 40%;
}
.panel ul .p-li-f .rtl img {
  width: 100%;
  height: 100%;
}
.panel ul .p-li-f .rtr {
  float: right;
  height: 100%;
  width: 60%;
  text-align: left;
  padding-left: 10px;
  box-sizing: border-box;
}
.panel .rtr p {
  font-size: 14px;
  color: #ef4238;
}
.panel .rtr span {
  font-size: 18px;
  color: #333;
  line-height: 50px;
}
.panel ul li {
  width: 100%;
  height: 45px;
}

.panel .normal-link {
  display: block;
  height: 45px;
  line-height: 45px;
}
.panel .ranking-index {
  line-height: 45px;
  font-size: 18px;
  color: #ef4238;
}

.panel .ranking-gray {
  color: #999;
}

.panel .r-m-name {
  display: inline-block;
  /* max-width: 190px; */
  overflow: hidden;
  font-size: 16px;
  color: #333;
  margin-left: 15px;
  line-height: 45px;
}
.panel .stonefont {
  color: #ef4238;
  font-size: 14px;
  line-height: 45px;
}
</style>
