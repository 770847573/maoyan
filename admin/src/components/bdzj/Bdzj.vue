 <template>
  <div>
    <div class="subnav">
      <ul>
        <li @click="fl(1)"  :class="[numm == 1 ? 'san': '']">
          <a href="###">热映口碑榜</a>
        </li>
       <li @click="fl(2)"  :class="[numm == 2 ? 'san': '']">
          <a href="###">国内票房榜</a>
        </li>
         <li @click="fl(3)"  :class="[numm == 3 ? 'san': '']">
          <a href="##">北美票房榜</a>
        </li>
        <li @click="fl(4)"  :class="[numm == 4 ? 'san': '']">
          <a href="##">TOP100榜</a>
        </li>
      </ul>
    </div>
    <div class="mainn" v-for="(nn,i) in ry" :key="i">
      <p class="uptime">
        2019-07-30
        <span class="p-u-f">已更新</span>
      </p>
      <p class="upti">榜单规则：将昨日国内热映的影片，按照评分从高到低排列取前10名，每天上午10点更新。相关数据来源于“猫眼专业版”及“猫眼电影库”。</p>
      <div class="board-wrapper bw-ul">
        <div class="sci">
          <img src="../../../img/one.png" alt />
        </div>
        <div class="lia">
          <a href="/detail?fid=0">
            <img :src="nn.poster" alt />
          </a>
        </div>
        <div class="cc fr">
          <div class="pl">
            <p>
              <a href="/detail?fid=0" class="p1">{{nn.filmname}}</a>
            </p>
            <p class="p2">{{JSON.parse(nn.director)[0].name}}</p>
            <p class="p3">{{nn.date}}</p>
          </div>
          <div class="pr">
            <i class="integer">{{nn.grade.toString().substring(0, 2)}}</i>
            <i class="fraction">{{nn.grade.toString().substr(2, 1)}}</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

 <script>
export default {
  data() {
    return {
      ry: [],
      numm:1,
      names:[]
    };
  },
  mounted(){
     this.qingqiu(1)
      this.isactive=true
  },
  methods: {
    qingqiu(fid){
       this.axios.get("/bang", {
          params: {
            fid
          }
        })
        .then(res => {
          this.ry = res.data
        })
        .catch(err => {
          console.error(err);
        });
    },
    fl(fid) {
      this.qingqiu(fid)
        this.numm = fid
    }
  }
};
</script>
 
 
 
<style scoped="scoped">
.subnav li.san a,.subnav li.san a:hover{
  color: #ef4238;
}

.san:before {
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
  position: relative;
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
.subnav li a:hover {
  color: #fff;
}

#bangdan .mainn {
  width: 950px;
  margin: 0 auto;
  margin-top: 30px;
  /* border: 1px solid #000;  */
  font-size: 0px;
}
#bangdan .mainn .uptime {
  margin: 0 auto;
  text-align: center;
  font-weight: normal;
  color: #999;
  font-size: 12px;
}
#bangdan .mainn .uptime .p-u-f {
  color: #ffb400;
  margin-left: 4px;
}
#bangdan .mainn .upti {
  margin-top: 6px;
  text-align: center;
  font-size: 12px;
  color: #999;
}
#bangdan .board-wrapper {
  margin-top: 40px;
  /* background-color: rgb(70, 133, 138); */
}
.bw-ul {
  display: flex;
  align-items: center;
}

#bangdan .bw-ul .lia {
  width: 160px;
  height: 220px;
  margin: 0 20px;
}
#bangdan .bw-ul .lia img {
  width: 100%;
  height: 100%;
}
.bw-ul .sci {
  width: 50px;
}
.aname {
  font-size: 26px;
  color: #333;
}
.cc {
  width: 680px;
  height: 220px;
  /* background-color: rgb(47, 192, 136); */
  display: flex;
  /* justify-content: space-between;
  align-items: center;  */
  margin: auto;
  border-bottom: 1px solid #e5e5e5;
}
.pr {
  width: 80px;
  height: 70px;
  /* background-color: rgb(228, 57, 57); */
  margin-top: 60px;
  color: #ffb400;
  font-size: 20px;
  text-align: right;
  display: inline-block;
}
.pr .integer {
  font-size: 56px;
  font-weight: 700;
}
.pr .fraction {
  font-size: 26px;
  font-weight: 700;
}
.pl {
  /* background-color: rgb(105, 30, 30); */
  margin-top: 60px;
  font-size: 16px;
  display: inline-block;
  width: 80%;
  vertical-align: middle;
}
.pl .p2 {
  margin-top: 18px;
  color: #333;
}
.pl .p3 {
  margin-top: 8px;
  color: #999;
}

.pl a {
  font-size: 26px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 420px;
  display: block;
}
</style>
