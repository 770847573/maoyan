<template>
  <header>
    <div class="header-inner">
      <a href="/" class="logo" data-act="icon-click"></a>
      <div class="nav">
        <ul class="navbar">
          <li @click="dianji(1)" :class="isshow == 1 ? 'active': ''">
               <router-link to="/">首页</router-link>
          </li>
          <li @click="dianji(2)" :class="isshow == 2 ? 'active': ''">
             <router-link to="/mt">电影</router-link>
          </li>
          
          <li @click="dianji(3)" :class="isshow == 3 ? 'active': ''">
             <router-link to="/mt">影院</router-link>
          </li>
          <li @click="dianji(4)" :class="isshow == 4 ? 'active': ''">
             <router-link to="/mt">演出</router-link>
          </li>

          <li @click="dianji(5)" :class="isshow == 5 ? 'active': ''">
             <router-link to="/mo">榜单</router-link>
          </li>
          <li @click="dianji(6)" :class="isshow == 6 ? 'active': ''">
            <router-link to="/mt">热点</router-link>
          </li>
          <li @click="dianji(7)" :class="isshow == 7 ? 'active': ''">
              <router-link to="/mt">商城</router-link>
          </li>
        </ul>
      </div>
      <div class="user-info">
        <div class="user-avatar J-login" v-if="loginState1">
          <img src="https://p0.meituan.net/movie/7dd82a16316ab32c8359debdb04396ef2897.png" />
          <span class="caret"></span>
          <ul class="user-menu">
            <li>
              <a href="/login">登录</a>
            </li>
            <li>
              <a href="/signup">注册</a>
            </li>
          </ul>
        </div>

        <div class="user-avatar has-login" v-if="loginState2">
          <img src="https://img.meituan.net/avatar/aaa409013d121f00b267eecd7ff347d8175930.jpg" />
          <span class="caret"></span>
          <ul class="user-menu">
            <li class="text">
              <a href="/profile/orders">我的订单</a>
            </li>
            <li class="text login-name" title="来瓶97年拉菲">
              <a href="javascript:void 0">基本信息</a>
            </li>
            <li class="text">
              <a href="javascript:void 0" class="J-logout" @click="logout">退出登录</a>
            </li>
          </ul>
        </div>
      </div>
      <form action="/query" target="_blank" class="search-form" data-actform="search-click">
        <input
          name="kw"
          class="search"
          type="search"
          maxlength="32"
          placeholder="找影视剧、影人、影院"
          autocomplete="off"
        />
        <input class="submit" type="submit" value />
      </form>
    </div>
  </header>
</template>

<script>
export default {
	data() {
		return {
			name: '游客',
			//true是未登录，false是登录
			loginState1:true,
			loginState2:false,
			imgsrc:'',
			isshow: 1,
			userinfo: {
			  name: '',
			  passwd: ''
			 
			}
		};
	},
	watch: {
		loginState1() {
			this.loginState2 = !this.loginState1
			return 
		},
		loginState2() {
			this.loginState1 = !this.loginState2
			return 
		}
	},
	methods: {
    dianji(num) {
      this.isshow = num;
    },
		logout() {
			this.axios.get('/logout')
			.then(res => {
			 
			  if (!res.data.aid) {
			  
			window.location.reload()
			    return;
			  }
			 
			})
			.catch(err => {
			  console.log(err);
			});
			
			
		},
		toCenter(){
			this.$router.push('/admincenter');
		}
	},
	created(){
		console.log(window.localStorage)
		this.axios.get('/check')
		.then(res => {
		
		  
		  if (res.data.aid&&JSON.parse(window.localStorage.getItem('userinfo')).aid) {
		   this.loginState1 = false;
		   this.imgsrc = res.data.imgsrc
		   this.userinfo.name = res.data.name;
		   this.userinfo.passwd = res.data.passwd
		  
		    return;
		  }
		 this.$router.push("/login")
		  
		})
		.catch(err => {
		  console.log(err);
		});
		
	}
};
</script>

<style scoped="scoped">
header{
		position:fixed;
      top:0;
		}
		
header {
	position: fixed;
	top: 0;
	z-index: 999;
	width: 100%;
	min-width: 1200px;
	background-color: #fff;
	border-bottom: 1px solid #d8d8d8;
}
header .header-inner {
	width: 1200px;
	margin: 0 auto;
	height: 80px;
}
header .logo {
	float: left;
	width: 133px;
	height: 80px;
	background: url('../../img/icon.png') no-repeat 0;
	background-size: contain;
}
header .nav {
	display: inline-block;
	background-color: #fff;
	overflow: hidden;
	float: left;
}
header ul {
	padding: 0;
	margin: 0;
	list-style: none;
	border: none;
}
header .nav .navbar li {
  float: left;
  margin: 0 5px;
}
header .nav .active {
  background-color: red;
}
header .nav .navbar li.active a {
  color: rgb(255, 255, 255);
}
header .nav .navbar li a {
	text-align: center;
	display: inline-block;
	height: 80px;
	line-height: 80px;
	width: 70px;
	font-size: 18px;
	color: #333;
}
header .navbar li a:hover {
  color: #ef4238;
}
header form {
	float: right;
	margin: 20px 10px 0 0;
	position: relative;
}

header form .search {
	display: inline-block;
	height: 40px;
	line-height: 1.2;
	width: 220px;
	padding: 0 40px 0 20px;
	border: 1px solid #ccc;
	font-size: 14px;
	border-radius: 30px;
	background-color: #faf8fa;
	overflow: hidden;
	color: #333;
}
header form .submit {
	display: inline-block;
	position: absolute;
	left: 180px;
	top: 0;
	height: 40px;
	width: 40px;
	background-color: #ef4238;
	border-radius: 30px;
	background-image: url('../../img/searchicon.png');
	cursor: pointer;
	outline: none;
}
header .user-info {
	float: right;
	position: relative;
	z-index: 9999;
	height: 100%;
}
.user-avatar {
    display: block;
    border: 1px solid transparent;
    border-top: none;
    border-bottom: none;
    padding: 0 10px;
    width: 56px;
    height: 100%;
}
 .user-avatar img {
    margin-top: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
}
.caret {
    position: absolute;
    top: 39px;
    right: 0px;
	display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 5px solid #666;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
}
header .user-info .user-avatar:hover .caret {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
}
.user-info .user-menu {
    display: none;
    position: absolute;
    right: 0;
    top: 80px;
    border: 1px solid #d8d8d8;
    background-color: #fff;
    font-size: 14px;
    color: #333;
    text-align: right;
    padding: 15px 22px 5px;
    text-align: center;
}
header .user-info .user-avatar:hover .user-menu {
    display: block;
}
.user-info .user-menu li {
    margin-bottom: 6px;
}
header .user-info .user-menu li.text {
    word-break: keep-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
header .user-info .user-menu li>a {
    color: #999;
    display: block;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

</style>
