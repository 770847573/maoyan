<template>
	<div class="detail">
		<my-header></my-header>
		<div class="header-placeholder"></div>
		<div class="banner">
			<div class="wrapper clearfix">
				<div class="celeInfo-left">
					<div class="avatar-shadow">
						<img class="avatar" :src=this.filmForm.poster alt="" />
						<div class="movie-ver"><i class="imax2d"></i></div>
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
							<a class="wish" data-wish="false" :class="{ active: isActive }">
								<div>
									<i class="icon wish-icon" ></i>
									<span class="wish-msg" @click="addlike">想看</span>
								</div>
							</a>
							<a class="score-btn ">
								<div>
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
								<span class="index-left info-num "><span class="stonefont">{{filmForm.grade}}</span></span>
								<div class="index-right">
									<div class="star-wrapper"><div class="star-on" :style="{width:(filmForm.grade)*10+'%'}"></div></div>
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
											<span class="dra">
												{{this.filmForm.info}}
											</span>
										</div>
									</div>
									<div class="module">
										<div class="mod-title">
											<h3>主要演职人员</h3>
										</div>
										<div class="mod-content">
											<div class="celebrity-container clearfix">
												<div class="celebrity-group">
													<div class="celebrity-type">
														导演 
													</div>
													<ul class="celebrity-list clearfix">
														<li class="celebrity" v-for="d in this.director">
															<img :src=d.src>
															<div class="info">
																<span class="name">{{d.name}}</span>
															</div>
														</li>
													</ul>
												</div>
												<div class="celebrity-group">
													<div class="celebrity-type">
														演员
													</div>
													<ul class="celebrity-list clearfix">
														<li class="celebrity actor" v-for="a in this.actors">
															<img :src=a.src>
															<div class="info">
																<span class="name">{{a.name}}</span>
															</div>
														</li>
													</ul>
												</div>
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
		<my-footer></my-footer>
	</div>
</template>

<script>
export default {
	data() {
		return {
			imax: '',
			isActive:false,
			wish: '想看',
			wished: '已想看',
			activeName: 'first',
			filmForm:{},
			director:[],
			actors:[],
			likeform:{
				fid:'',
				aid:''
			}
		};
	},
	methods: {
		handleClick(tab, event) {
			console.log(tab);
			console.log(event);
			// console.log(this.filmForm.director)
		},
		addlike(){
			this.axios.post('/addlike',this.likeform)
			.then(res=>{
				if(res.data.r == 'add success'){
					alert("添加成功")
					this.isActive = !this.isActive;
					console.log(this.isActive)
					return
				}
			})
			.catch(err => {
			    console.error(err); 
			})
		}
	},
	mounted() {
	    //this.$route.query  接受 get 传值， 就是? 后面的值
		let localdata = JSON.parse(window.localStorage.getItem('userinfo'));
		let aid = localdata.aid;
		this.likeform.fid = this.$route.query.fid;
		this.likeform.aid = aid
	    this.axios.get('/getfilm',{
	        params:{
	            fid:this.$route.query.fid
	        }
	    })
	    .then(res => {
	        console.log(res)
	        this.filmForm = res.data;
			// console.log(this.filmForm.director);
			this.director= this.filmForm.director
			this.actors = this.filmForm.actors
			
	    })
	    .catch(err => {
	        console.error(err); 
	    });
		
		// this.director= JSON.parse(this.filmForm.director)
		
	},
	computed: {
		// director() {
		// 	return JSON.parse(this.filmForm.director)
		// }
	},
};
</script>

<style scoped="scoped">
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
	background: #392f59 url('https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:5788b470/banner_bg.f7fd103e3b8c16b6f449cce43fc57f45.png') no-repeat
		50%;
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
	content: ' ';
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
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAAyAgMAAAAfG76+AAAADFBMV鈥�VPEI076YAUGbzfwrAqOYRormcAjCANodSAEY1j2oexJoBlx1+yE7RXIIAAAAASUVORK5CYII=)
		no-repeat bottom;
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
	background-image: url('../../img/imax2d.png');
}
i.imax3d {
	width: 69px;
	height: 25px;
	background-image: url('../../img/imax3d.png');
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
	content: ' ';
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
	background: url('../../img/wish.png');
}
.action-buyBtn .action .wish.active i.wish-icon {
	background: url('../../img/wished.png');
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
	background: url('../../img/grade.png');
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
	background-image: url('../../img/biggrade.png');
	background-repeat: repeat-x;
	margin-bottom: 4px;
}
.star-on {
	height: 12px;
	background-image: url('../../img/gradeed.png');
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
	content: '';
	display: inline-block;
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
.celebrity-container .celebrity  img {
    width: 128px;
    height: 170px;
}
.default-img {
    background-image: url('../../img/kongimg.png');
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
.celebrity-container .celebrity .name, .celebrity-container .celebrity .role {
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
