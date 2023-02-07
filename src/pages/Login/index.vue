<template>
  <div class="login-container">
    <!-- 登录 -->
    <div class="login-wrap">
      <div class="login">
        <div class="loginform">
      
          <h1>Login</h1>
          <div class="content">
            <form action="##">
              <div class="input-text clearFix">
                <span class="el-icon-user-solid"></span>

                <input
                  type="text"
                  placeholder="用户名/手机号"
                  v-model="phone"
                />
              </div>
              <div class="input-text clearFix">
                <span class="el-icon-lock"></span>
                <input
                  type="password"
                  placeholder="请输入密码"
                  v-model="password"
                />
              </div>
              <div class="setting clearFix">
                <label class="checkbox inline">
                  <input name="m1" type="checkbox" value="2" checked="" />
                  自动登录
                </label>
                <span class="forget">忘记密码？</span>
              </div>
              <button class="btn" @click.prevent="userLogin">
                登&nbsp;&nbsp;录
              </button>
            </form>

            <div class="call clearFix">
              <ul>
                <li><img src="./images/qq.png" alt="" /></li>
                <li><img src="./images/sina.png" alt="" /></li>
                <li><img src="./images/ali.png" alt="" /></li>
                <li><img src="./images/weixin.png" alt="" /></li>
              </ul>
              <router-link class="register" to="/register"
                >立即注册</router-link
              >
            </div>
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
  name: "Login",
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    //登录的回调函数
    async userLogin() {
      try {
        //查看是否满足条件，满足则派发给action
        const { phone, password } = this;
        phone &&
          password &&
          (await this.$store.dispatch("userLogin", { phone, password }));
        //登录的路由组件：看路由中是否包含query组件，有就跳到指定路由，没有跳到home
        let toPath = this.$route.query.redirect || "/home";
        this.$router.push(toPath);
      } catch (error) {
        alert("帅哥，你的密码或账号输错啦");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  .login-wrap {
    background: url(./images/111.png) no-repeat;
    height: 587px;
    margin: auto;
    background-color: #e0edfe;

    .login {
      width: 1200px;
      height: 487px;
      margin: 0 auto;
   
    }

    .loginform {
      border-radius:30px ;
      width: 500px;
      height: 486px;
      box-sizing: border-box;
      background: rgba(253, 253, 253, 0.8);
      float: right;
      top: 45px;
      right: -10px;
      
      position: relative;
      padding: 20px;
      h1 {
        text-align: center;
        color: #000;
        font-size: 30px;
      }
      .tab {
        li {
          width: 50%;
          float: left;
          text-align: center;

          a {
            width: 100%;
            display: block;
            height: 50px;
            line-height: 50px;
            font-size: 20px;
            font-weight: 700;
            color: #333;
            border: 1px solid #ddd;
            box-sizing: border-box;
            text-decoration: none;
          }

          .current {
            border-bottom: none;
            border-top-color: #28a3ef;
            color: #e1251b;
          }
        }
      }

      .content {
        width: 380px;
        height: 316px;
        box-sizing: border-box;
        margin: auto;
        margin-top: 30px;
        border-top: none;
        padding: 18px;

        form {
          margin: 15px 0 18px 0;
          font-size: 12px;
          line-height: 18px;

          .input-text {
            margin-bottom: 16px;

            span {
              float: left;
              width: 37px;
              height: 32px;
              font-size: 30px;
              box-sizing: border-box;
            }

            .pwd {
              background-position: -72px -201px;
            }

            input {
              width: 302px;
              height: 32px;
              box-sizing: border-box;
              border: none;
              border-bottom: 1px solid rgb(30, 30, 30);
              background-color: rgba(244, 242, 242, 0);
              float: left;
              padding-top: 6px;
              padding-bottom: 6px;
              font-size: 16px;
              line-height: 22px;
              padding-right: 8px;
              padding-left: 16px;
              margin-bottom: 45px;
              border-radius: 0 2px 2px 0;
              outline: none;
            }
          }

          .setting { 
            label {
              float: left;
              font-size: 16px;
              font-weight: 700;
            }

            .forget {
              float: right;
               font-size: 16px;
              font-weight: 700;
            }
          }

          .btn {
            background-color: #0b0b0b;
            padding: 6px;
            border-radius: 10px;
            font-size: 18px;
            font-family: 微软雅黑;
            word-spacing: 4px;
             
            color: #fff;
            width: 100%;
            height: 46px;
            margin-top: 25px;
            outline: none;
          }
        }

        .call {
          margin-top: 30px;

          ul {
            float: left;

            li {
              float: left;
              margin-right: 5px;
            }
          }

          .register {
            float: right;
            font-size: 15px;
            line-height: 38px;
          }

          .register:hover {
            color: #4cb9fc;
            text-decoration: underline;
          }
        }
      }
    }
    .loginform:hover{
      top: 46px;
      
			box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6x);
      transform:  scale(1.05);
			transition: all 0.2s linear;
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
        font-size: 16px;
        font-family: STKaiti;
      }
    }
  }
}
</style>
