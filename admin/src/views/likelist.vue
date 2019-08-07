<template>
	<div class="list-container">
		<div class="profile-title">喜欢列表</div>
		<div class="like-box" v-for="(l,index) in likeData" :key="l" >
			<div class="like-header">
				<span class="like-title">想看电影</span>
			</div>
			<div class="like-body">
				<div class="poster">
					<img :src=l.poster alt="">
				</div>
				<div class="body-content">
					<p class="filmname">{{l.filmname}}</p>
					<p class="type">{{l.type}}</p>
					<p><span class="region">{{l.region}}</span>/<span class="time">{{l.time}}</span></p>
					<p class="addtime-box"><span>添加时间：</span><span class="addtime">{{new Date(l.addtime).toLocaleDateString()}}</span></p>
					
				</div>
				<div class="delete" @click="handleDelete(index, l.fid)">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				likeData:{}
			}
		},
		created(){
			this.axios.get('/getlike')
				
			.then(res => {
			  this.likeData = res.data;
			  console.log(this.likeData);
			  
			})
			.catch(err => {
			  console.error(err);
			});

		},
		methods: {
			handleDelete(index, row) {
			  this.$confirm("删除是不可恢复的, 是否继续?", "提示", {
			    confirmButtonText: "确定",
			    cancelButtonText: "取消",
			    type: "warning"
			  })
			    .then(() => {
			        // 到服务器删除对应数据
			        this.axios.post('/dellike', { fid:row})
			        .then(res => {
			            // 这里应该对操作结果进行判断
			            if(res.data.r == 'ok'){
			                // 删除当前数据  tableData  
			                this.likeData.splice(index, 1);
			                this.$message({
			                    type: "success",
			                    message: "删除成功!"
			                });
			            }
			            
			            console.log(res)
			        })
			        .catch(err => {
			            console.error(err); 
			        })
			      
			    })
			    .catch(() => {
			      this.$message({
			        type: "info",
			        message: "已取消删除"
			      });
			    });
			  console.log(index, row);
			}
		},
	}
</script>

<style scoped="scoped">
	.list-container{
		float: left;
    margin-left: 200px;
    padding-left: 40px;
    width: 922px;
    min-height: 900px;
	}
	.list-container .profile-title, .info-content .profile-container .profile-title {
    padding: 26px 0;
    color: #ec443f;
    font-size: 18px;
    border-bottom: 1px solid #e1e1e1;
    margin-bottom: 30px;
}
.like-box{
	border: #e5e5e5 1px solid;
	margin: 0 40px 30px 0;
}
.like-box .like-header {
    background-color: #f7f7f7;
    font-size: 14px;
    padding: 16px 20px;
	text-align: left;
}
.like-header span{
	color: #333;
    display: inline-block;
    margin-right: 30px;
	font-weight: 700;
    font-size: 20px
}
.like-body {
    padding: 20px;
    padding-right: 0;
	text-align: left;
}
.poster {
    border: 2px solid #fff;
    -webkit-box-shadow: 0 1px 2px 0 hsla(0,0%,53%,.5);
    box-shadow: 0 1px 2px 0 hsla(0,0%,53%,.5);
    margin-right: 11px;
    font-size: 0;
}
.like-box .like-body>div {
    display: inline-block;
    vertical-align: top;
}
.poster img {
    width: 66px;
    height: 91px;
}
.body-content{
	width: 50%;
}
.filmname {
    font-size: 16px;
    font-weight: 700;
    color: #333;
    margin: 4px 0 7px 0px;
}
.type,.region,.time{
	font-size: 15px;
    color: #666;
    margin-bottom: 4px;
}
.addtime{
	font-size: 14px;
	color: #333;
	margin-bottom: 4px;
}
.delete{
	float:right ;
	width: 45px;
    height: 25px;
    background: url('../../img/delete.png') no-repeat;
}
.delete:hover{
    cursor: pointer;
	
}

</style>
