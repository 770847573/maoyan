<template>
	<div class="profile-container">
		<div class="profile-title">基本信息</div>
		<div class="avatar-container">
			<div class="avatar-content">
				<img class="J-setted-avatar" :src="this.imgsrc" />
				<div class="J-upload-avatar-w upload-avatar-image">
					<input type="button" class="J-upload-avatar upload-btn" value="点击编辑资料" @click="toEdit" />
				</div>
			</div>
		</div>
		<div class="userexinfo-form">
			<div class="userexinfo-form-section">
				<p>昵称:</p>
				<span>{{ this.nickname }}</span>
			</div>
		</div>
		<div class="userexinfo-form">
			<div class="userexinfo-form-section">
				<p>性别:</p>
				<span>{{ this.gender }}</span>
			</div>
		</div>
		<div class="userexinfo-form">
			<div class="userexinfo-form-section">
				<p>生日:</p>
				<span>{{ this.birthday }}</span>
			</div>
		</div>
		<div class="userexinfo-form">
			<div class="userexinfo-form-section">
				<p>邮箱:</p>
				<span>{{ this.email }}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	data() {
			return {
				aid: '',
				nickname: '',
				gender: '',
				birthday: '',
				email: '',
				imgsrc: ''
			};
		},
		created() {
			//判断是否登录，如果没登陆跳转到登陆界面
			this.axios
				.get('/check')
				.then(res => {
					if (!res.data.aid) {
						this.$router.push('/login');
						return;
					}
				})
				.catch(err => {
					console.log(err);
				});
			let localdata = JSON.parse(window.localStorage.getItem('userinfo'));
			console.log(localdata);
			this.nickname = localdata.nickname;
			let birthdate = new Date(localdata.birthday);
			this.birthday = birthdate.getFullYear() + '年' + (birthdate.getMonth() + 1) + '月' + birthdate.getDate() + '日';
			this.gender = localdata.gender;
			this.email = localdata.email;
			this.imgsrc = localdata.imgsrc;
			this.aid = localdata.aid;
		},
		methods: {
			toEdit() {
				this.$router.push('/edituser');
			}
		}
	};
</script>

<style scoped="scoped">
	.info-content .orders-container,
	.info-content .profile-container {
		float: left;
		margin-left: 200px;
		padding-left: 40px;
		width: 922px;
		min-height: 900px;
	}
	.body-mask {
		z-index: 1000;
		display: none;
	}
	.img-cropper {
		width: 524px;
		height: 550px;
		position: fixed;
		top: 100px;
		left: 300px;
		z-index: 1001;
		display: none;
		left: 0;
		margin: 5% auto;
		right: 0;
	}
	.img-cropper .img-cropper-container {
		background-color: #fff;
		z-index: 1001;
	}
	.img-cropper .img-cropper-container .img-cropper-header {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		height: 50px;
		background-color: #ebebeb;
		font-size: 16px;
		padding: 16px;
		color: #333;
	}
	.img-cropper .img-cropper-container .img-cropper-header .close-icon {
		cursor: pointer;
		position: relative;
		display: inline-block;
		width: 20px;
		height: 20px;
		overflow: hidden;
		float: right;
	}
	.img-cropper .img-cropper-container .img-cropper-content {
		text-align: center;
		width: 100%;
		height: 100%;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: start;
		-webkit-align-items: flex-start;
		-ms-flex-align: start;
		align-items: flex-start;
		margin-top: 30px;
	}
	.img-cropper .img-cropper-container .img-cropper-content .img-main {
		display: inline-block;
		position: relative;
		border: 1px solid #e5e5e5;
		width: 350px;
		height: 350px;
	}
	.info-content .profile-container .profile-title {
		padding: 26px 0;
		color: #ec443f;
		font-size: 18px;
		border-bottom: 1px solid #e1e1e1;
		margin-bottom: 30px;
	}
	.avatar-container {
		text-align: center;
		float: left;
		color: #333;
		background: #fff;
		width: 270px;
	}
	.avatar-container .avatar-content img {
		width: 258px;
		height: 258px;
	}
	.avatar-container .upload-avatar-image {
		position: relative;
		cursor: pointer;
	}
	.avatar-container .upload-avatar-image .upload-btn {
		cursor: pointer;
		margin: 20px auto 0;
		width: 182px;
		height: 56px;
		line-height: 56px;
		color: #5b5b5b;
		background-color: #e6e6e6;
		border-radius: 10px;
		border: 1px;
		font-size: 18px;
		padding: 0;
	}
	.avatar-container .upload-avatar-image #fileUpload {
		position: absolute;
		top: 0;
		right: 0;
		opacity: 0;
		bottom: -50px;
		direction: ltr;
		font-size: 200px !important;
		cursor: pointer;
	}
	button,
	input {
		overflow: visible;
	}
	button,
	input,
	select,
	textarea {
		font: inherit;
		margin: 0;
	}
	input[type='file' i] {
		align-items: baseline;
		color: inherit;
		text-align: start !important;
	}
	.avatar-container .tips {
		margin-top: 10px;
		color: #999;
		font-size: 18px;
		line-height: 30px;
	}
	
	.userexinfo-form {
		float: left;
		width: 495px;
		margin-left: 58px;
	}
	.userexinfo-form .userexinfo-form-section:first-child {
		margin-top: 0;
	}
	.userexinfo-form .userexinfo-form-section {
		color: #666;
		position: relative;
		margin: 20px 0;
		padding-left: 90px;
		height: 30px;
		line-height: 30px;
		font-size: 14px;
	}
	.userexinfo-form .userexinfo-form-section p {
		font-size: 16px;
	}
	.userexinfo-form p {
		position: absolute;
		top: 0;
		left: 0;
		width: 80px;
		text-align: right;
		color: #333;
		padding: 0;
		margin: 0;
	}
	.userexinfo-form .userexinfo-form-section span {
		width: 240px;
		font-size: 12px;
		height: 30px;
		display: inline-block;
		padding-left: 10px;
		margin-left: -35px;
    text-align: center;
	}
</style>
