<template>
	<div class="signup">
		<my-header2></my-header2>
		<el-breadcrumb separator="/">
		<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
		
		<el-breadcrumb-item>注册</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="signup_body">
			
		
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="ruleForm.username"></el-input>
  </el-form-item>
 <el-form-item label="密码" prop="passw1">
   <el-input v-model="ruleForm.passw1"></el-input>
 </el-form-item>
  
     <el-form-item label="确认密码" prop="passw2">
      <el-input v-model="ruleForm.passw2"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
</el-form>
</div>
	</div>
</template>

<script>
	export default {
	data() {
		var validatePass = (rule, value, callback) => {
			if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.passw2 !== '') {
            this.$refs.ruleForm.validateField('passw2');
          }
          callback();
        }
      };
		var validatePass2 = (rule, value, callback) => {
		  if (value === "") {
		    callback(new Error("请再次输入密码"));
		  } else if (value !== this.ruleForm.passw1) {
		    callback(new Error("两次输入密码不一致!"));
		  } else {
		    callback();
		  }
		};
      return {
        ruleForm: {
         username:'',
         passw1:'',
		 paaaw2:''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
           
          ],
          passw1: [
            { required: true, message: "请输入密码", trigger: "blur" },
            
            { validator: validatePass, trigger: "blur" }
          ],
          passw2: [
            { required: true, message: "请输入密码", trigger: "blur" },
            { validator: validatePass2, trigger: "blur" }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
			  this.axios.post('/signup',this.ruleForm)
			  .then(res=>{
				  if(res.data.msg == "username_already_exist"){
					  console.log("用户已存在")
					  this.$alert('用户已存在,请重新注册', '用户已存在', {
          confirmButtonText: '确定'})
		        return
				  }if(res.data.msg == "reg_success"){
					   console.log("注册成功");
					   this.$alert('注册成功', '注册成功', {
					   confirmButtonText: '确定'})
					         return
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

<style>
	.signup_body{
		width: 500px;
		margin: 50px auto;
	}
</style>
