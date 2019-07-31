<template>
	<div class="login">
		
	
		<my-header2></my-header2>
		<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  
  <el-breadcrumb-item>登录</el-breadcrumb-item>
  
</el-breadcrumb>
		<div class="lg_body">
			<div class='lg_img'>
				<img src="../../img/login.png" alt="" style="width: 480px; height: 370px;">
			</div>
			
			
			<div class="lg_section">
				
			
	<div class="contanier">
		<el-form
		  :model="ruleForm"
		  :rules="rules"
		  ref="ruleForm"
		  label-width="100px"
		  class="demo-ruleForm"
		>
		  <el-form-item label="账号" prop="name">
		    <el-input v-model="ruleForm.name"></el-input>
		  </el-form-item>
		 <el-form-item label="密码" prop="passwd">
		    <el-input v-model="ruleForm.passwd" type="password"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
		  </el-form-item>
		</el-form>
		</div>
	</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data() {
      return {
        ruleForm: {
          name: '',
          passwd: ''
         
        },
        rules: {
          name: [
            { required: true, message: '请输入管理员名称', trigger: 'blur' },
           
          ],
          passwd: [
            { required: true, message: '请输入密码', trigger: 'blur' },
           
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
			  this.axios.post('/login',this.ruleForm)
			  .then(res=>{
				   console.log(res)
				  if(res.data.r == 'name-not-exist'){
				      this.$message('账号不存在');
				      return ;
				  }
				  
				  if(res.data.r == 'passwd-err'){
				      this.$message('密码错误');
				      return ;
				  }
				  
				  if(res.data.r == 'ok'){
				      this.$router.push('/');
					  
					  this.$store.commit('addInfo',res.data);
                       window.localStorage.setItem('userinfo', JSON.stringify(res.data));

				      return ;
				  }
			  })
			  .catch(err => {
              console.error(err); 
          })
				  
			  
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
	}
</script>

<style scoped="scoped">
	  .contanier{
	    width: 100%;
	    height: 200px;
	    margin: 100px auto;
	}
	.lg_body{
		margin: 0 auto 70px;
    width: 980px;
	}
	.lg_img{
		float: left;
    height: 370px;
    margin: 0 ;
    width: 480px;
	}
	.lg_section{
		float: left;
    padding-top: 0;
	margin: 0 auto;
    width: 370px;
    background: #FFF;
	}
</style>
