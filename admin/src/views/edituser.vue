<template>
  <div class="main">
	  <my-header2></my-header2>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/admincenter'}">个人中心</el-breadcrumb-item>
      <el-breadcrumb-item>资料修改</el-breadcrumb-item>
    </el-breadcrumb>
		  
	  
	  
	  <div class="edit_container">

    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="昵称">
        <el-col :span="10">
          <el-input v-model="form.nickname"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="邮箱">
        <el-col :span="10">
          <el-input v-model="form.email"></el-input>
        </el-col>
      </el-form-item>
	  
	  <el-form-item label="出生日期">
	    <el-col :span="10">
	      <el-date-picker
      v-model="form.birthday"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
	    </el-col>
	  </el-form-item>

      <el-form-item label="头像">
        <el-col :span="10">
          <el-upload
            class="avatar-uploader"
            action="http://localhost:81/uploads/"
            :show-file-list="false"
            name="images"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="form.imgsrc" :src="form.imgsrc" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-col>
      </el-form-item>

      <el-form-item label="性别">
		   <el-col :span="10">
         <el-radio v-model="form.gender" label="男" border>男生</el-radio>
    <el-radio v-model="form.gender" label="女" border>女生</el-radio>
	</el-col>
      </el-form-item>
      
      <el-form-item>
		  <el-col :span="10">
        <el-button type="primary" @click="onSubmit">修改完成</el-button>
        <el-button>取消</el-button>
		</el-col>
      </el-form-item>
    </el-form>
	</div>
  </div>
</template>

<script>
export default {
  name: "addbook",
  data() {
    return {
      form: {
        nickname: "",
        email: "",
        imgsrc: "",
        gender: '',
        imageUrl: "",
        birthday:'',
		aid:''
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    //   把数据提交给服务器
        this.axios.post('/edituser', this.form)
        .then(res => {
            console.log(res)
            if(res.data.r == 'ok'){
                this.$router.push('/admincenter');
				 window.localStorage.setItem('userinfo', JSON.stringify(res.data));
            }
        })
        .catch(err => {
            console.error(err); 
        })
    },
    handleAvatarSuccess(res, file) {
      console.log(res);
      this.form.imageUrl = URL.createObjectURL(file.raw);
      this.form.imgsrc = res.imgsrc;
    },
    beforeAvatarUpload(file) {
      //   const isJPG = file.type === "image/jpeg";
      //   const isLt2M = file.size / 1024 / 1024 < 2;

      //   if (!isJPG) {
      //     this.$message.error("上传头像图片只能是 JPG 格式!");
      //   }
      //   if (!isLt2M) {
      //     this.$message.error("上传头像图片大小不能超过 2MB!");
      //   }
      //   return isJPG && isLt2M;
      return true;
    }
  },
  mounted() {
	  console.log(window.localStorage)
let localdata = JSON.parse(window.localStorage.getItem('userinfo'))
			
			this.form.nickname =localdata.nickname
			this.form.birthday = localdata.birthday
			this.form.gender = localdata.gender
			this.form.email = localdata.email
			this.form.imgsrc = localdata.imgsrc
			this.form.aid = localdata.aid

      //this.$route.query  接受 get 传值， 就是? 后面的值
      
  }
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 120px;
  height: 120px;
  display: block;
}
</style>
<style scoped>
.el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.edit_container{
	width: 900px;
	margin: 50px auto;
}
</style>

