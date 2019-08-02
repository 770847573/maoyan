<template>
	<div class="user-profile-nav">
		<h1>个人中心</h1>
		<a href="/likelist" class="orders" :class="active1" @click="changeactive1"><router-link to='/admincenter/likelist'>喜欢列表</router-link></a>
		<a href="/admincenter" class="profile" :class="active2" @click="changeactive2"><router-link to='/admincenter/'>基本信息</router-link></a>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				active1:'no',
				active2:'active'
			}
		},
		methods: {
			changeactive1() {
				if (this.active1 == 'no'){
					
					this.active1 = 'active'
				
					this.active2 = 'no'
					return
				}
			},
			changeactive2(){
				if(this.active2 == 'no'){
					this.active2 = "active"
					this.active1 = 'no'
				}
			}
		},
	}
</script>

<style scoped="scoped">
	.info-content .user-profile-nav {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 200px;
		background-color: #f4f3f4;
		text-align: center;
		border-right: 1px solid #e1e1e1;
	}
	.info-content .user-profile-nav h1 {
		margin-top: 40px;
		margin-bottom: 30px;
		font-size: 22px;
		color: #222;
		font-weight: 400;
	}
	.main h1 {
		color: red;
	}
	.info-content .user-profile-nav a {
		display: block;
		font-weight: 400;
		color: #333;
		height: 40px;
		width: 202px;
		margin-left: -1px;
		line-height: 40px;
		font-size: 18px;
	}
	.info-content .user-profile-nav a.active {
		background-color: #ed3931;
	}
	.info-content .user-profile-nav a.active a{
		color: #fff;

	}
</style>
