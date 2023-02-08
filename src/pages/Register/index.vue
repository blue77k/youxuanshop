<template>
  <div class="register-container">
    <!-- 注册内容 -->
     <div class="bb">
      <div class="register">
       
       <div class="center">
         <h1>Register</h1>
         <div class="content">
           <label>手机号 <i class="el-icon-mobile-phone"></i>:</label>
 
           <input
             placeholder="请输入你的手机号"
             v-model="phone"
             name="phone"
             v-validate="{ required: true, regex: /^1\d{10}$/ }"
             :class="{ invalid: errors.has('phone') }"
           />
           <span class="error-msg">{{ errors.first("phone") }}</span>
         </div>
         <div class="content">
           <label>验证码 <i class="el-icon-chat-dot-square"></i>:</label>
           <input
             placeholder="请输入你的验证码"
             v-model="code"
             name="code"
             v-validate="{ required: true, regex: /^\d{6}$/ }"
             :class="{ invalid: errors.has('code') }"
           />
 
          <i class="el-icon-s-promotion" @click="getCode">&nbsp; 发送验证码</i>
           
           
           <span class="error-msg">{{ errors.first("code") }}</span>
         </div>
         <div class="content">
           <label>登录密码 <i class="el-icon-lock"></i>:</label>
           <input
            type="password"
             placeholder="请输入你的密码"
             v-model="password"
             name="password"
             v-validate="{ required: true, regex: /^[0-9A-Za-z]{8,20}$/ }"
             :class="{ invalid: errors.has('password') }"
           />
           <span class="error-msg">{{ errors.first("password") }}</span>
         </div>
         <div class="content">
           <label>确认密码 <i class="el-icon-lock"></i>:</label>
           <input
           type="password"  
             placeholder="请确认密码"
             v-model="password1"
             name="password1"
             v-validate="{ required: true, is: password }"
             :class="{ invalid: errors.has('password1') }"
           />
           <span class="error-msg">{{ errors.first("password1") }}</span>
         </div>
         <div class="controls">
           <input
             type="checkbox"
             v-model="agree"
             name="agree"
             v-validate="{ required: true, tongyi: true }"
             :class="{ invalid: errors.has('agree') }"
           />
           <span>同意协议并注册《尚品汇用户协议》</span>
           <span class="error-msg">{{ errors.first("agree") }}</span>
         </div>
         <div class="btn">
           <button @click="userRegister">注册</button>
           <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <router-link to="/login" style="font-size: 15px; margin-left: 20px;">去登录？</router-link></span>
         </div>
       </div>
     </div>
 
     </div>
    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机优选购</li>
        <li>销售联盟</li>
        <li>优选购社区</li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号</div>
    </div>
  </div>
  
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",
  data() {
    return {
      // 收集表单数据--手机号
      phone: "",
      //验证码
      code: "",
      //密码
      password: "",
      //确认密码
      password1: "",
      //是否同意
      agree: true,
    };
  },
  methods: {
    //获取验证码
    async getCode() {
      //简单判断一下，至少要用的数据
      try {
        const { phone } = this;
        //如果有手机号填充后，便是派发action拿到验证码
        phone && (await this.$store.dispatch("getCode", phone));
        //令验证码直接敷在文本框上
        this.code = this.$store.state.user.code;
      } catch (error) {
        alert("ma  cuoLe");
      }
    },
    //用户注册
    async userRegister() {
      //验证表单是否成功，向服务器发请求，进行注册
      //一个错误都不会发请求
      const success = await this.$validator.validateAll();
      if (success) {
        try {
          const { phone, code, password, password1 } = this;
          await this.$store.dispatch("userRegister", {
            phone,
            code,
            password,
          });
          //注册成功进行路由的跳转
          this.$router.push("/login");
        } catch (error) {
          alert("该手机号已被注册");
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.register-container {
 
  .bb{
    background: url(./111.png) no-repeat;
  background-color: #e0edfe;
  height: 587px;
    .register {
   
     width: 1200px;
    height: 587px;
     
    position: relative;
    margin: 0 auto;
    
    .center {
      position: absolute;
      right: 10px;
      top: 50px;
      width: 430px;
      height: 400px;
      margin: auto;
      margin-top: 15px;
      background-color: rgba(255, 247, 247,0.9);
      border-radius: 20px;
      padding: 30px;
      padding-top: 40px;
     
      h1 {
        font-family: 'STXinwei';
        text-align: center;
        font-size: 30px;
        margin-bottom: 20px;
      }
      .content {
        margin-bottom: 18px;
        position: relative;
        font-weight: 700;

        label {
          font-size: 14px;
          width: 96px;
          text-align: right;
          display: inline-block;
          font-size: 14px;
        }
     

        input {
          width: 180px;
          height: 38px;
          font-size: 14px;
          padding-left: 8px;
          box-sizing: border-box;
          margin-left: 20px;
          margin-bottom: 10px;
          outline: none;
          border: none;
          border-bottom: 1px solid #999;
          background-color: rgba(244, 242, 242, 0);
        }

        img {
          vertical-align: sub;
        }

        .error-msg {
       
          top: 100%;
          left: 495px;
          color: red;
        }
      }

      .controls {
        text-align: center;
        position: relative;

        input {
          vertical-align: middle;
        }

        .error-msg {
          position: absolute;
          top: 100%;
          left: 495px;
          color: red;
        }
      }

    

        button {
          margin-top: 25px;
          margin-left:117px;
          outline: none;
          width: 170px;
          height: 36px;
         background-color: black;
          color: #fff !important;
          font-size: 16px;
           border-radius:10px ;
        
        }
     
    }
    .center:hover{
 
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6px);
      transform:  scale(1.1);
			transition: all 0.3s linear;
    }
  }
  }

  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
        font-family: STKaiti;
        font-size: 16px;
      }
    }
  }
}
</style>
