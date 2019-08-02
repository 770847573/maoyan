<template>
	<li class="movie">
		<div class="movie-poster">
			<div class="movie-poster-one" >
				<span class="imax3d" :class="[ms.imax == '2' ? 'dd' : '']" v-if="ms.imax !== '1'"></span>
				<div class="info">
					<span>{{ ms.filmname }}</span>
					<div class="movie-grade">
						<i class="m-g-ic">{{ big }}</i>
						<i class="fraction">{{ bic }}</i>
					</div>
				</div>

				<img :src="ms.poster" @click="todetail"/>
			</div>
		</div>
		<div class="purchase"><a href="#" class="active">购票</a></div>
	</li>
</template>
<script>
export default {
	computed: {
		big: function() {
			// `this` 指向 vm 实例
			let tmg = this.ms.grade + '';
			return tmg.substring(0, 2);
		},
		bic: function() {
			let tmc = this.ms.grade + '';
			return tmc.substr(2, 1);
		}
	},
	methods:{
		todetail(){
			console.log(456)
			this.$router.push('/detail?fid='+this.ms.fid)
		}
	},
	props: ['ms']
};
</script>
<style scoped="scoped">
.movie {
	height: 40%;
	width: 160px;
	/* border: 1px solid red; */
	display: inline-flex;
	margin: 5px 0;
	position: relative;
}
.movie:hover {
	box-shadow: 5px 5px 6px #000;
	transform: rotateY(5px) rotateX(3px) scale(0.8);
	cursor: pointer;
}
.movie .movie-poster {
	height: 90%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
}
.movie .movie-poster .info {
	height: 22px;
	line-height: 22px;
	position: absolute;
	bottom: 7px;
	z-index: 1;
	color: #fff;
	font-size: 0px;
	padding: 0 5px;
	width: 100%;
	box-sizing: border-box;
	overflow: hidden;
}
.movie .movie-poster .info span {
	font-size: 16px;
	margin: 0 5px;
	float: left;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.movie .movie-poster .info .movie-grade {
	margin-right: 5px;
	height: 22px;
	line-height: 22px;
	color: #ffb400;
	float: right;
	padding-right: 5px;
}
.movie .info .movie-grade .m-g-ic {
	font-size: 20px;
	font-style: italic;
}
.movie .info .movie-grade .fraction {
	font-style: italic;
	font-size: 16px;
}

.movie .movie-poster .movie-poster-one {
	width: 100%;
	height: 100%;
	position: relative;
}
.movie-poster-one .imax3d {
	width: 69px;
	height: 25px;
	background-image: url('../../img/下载.png');
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	color: red;
	background-color: rgb(18, 36, 197);
}
.movie-poster-one .dd {
	background-image: url('../../img/下载 (1).png');
}

.movie .movie-poster .movie-poster-one img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.movie .purchase {
	width: 100%;
	height: 27px;
	line-height: 27px;
	position: absolute;
	bottom: 0;
	left: 0;
	border: 1px solid #efefef;
	border-top: 0px;
	text-align: center;
}
.movie .purchase:hover {
	background-color: #ef4238;
	border: 0px;
}
.movie .purchase a {
	display: block;
	width: 100%;
	height: 26px;

	font-size: 14px;
	color: #ef4238;
}
.movie .purchase a:hover {
	color: #fdfcfc;
}
</style>
