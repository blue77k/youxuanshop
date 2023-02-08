<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>优选购欢迎您！</p>
          <!-- 没有用户名：未登录 -->
          <p v-if="!userName">
            <span>请</span>
            <!-- 声明式导航：router-link务必要有to属性 -->
            <router-link to="/login" style="color:skyblue">登录</router-link>
            <router-link class="register" to="/register">免费注册</router-link>
          </p>
          <!-- 登录了 -->
          <p v-else>
            <a>{{userName}}</a>
            <a class="register" @click="logout">退出登录</a>
          </p>
        </div>
        <div class="typeList">
          <router-link to="/header">首页</router-link>
          <router-link to="/center/myorder">我的订单</router-link>
          <router-link to="/shopcart">我的购物车</router-link>
          <router-link to="/plus">优选购会员</router-link>
           <router-link to="/purchase">企业采购</router-link>
           <router-link to="/box">公共采购</router-link>
          <a href="###" class="jjk"><el-button type="text" @click="dialogVisible = true">靓仔网站</el-button>
            <el-dialog
  title="如需浏览请扫码支付"
  :visible.sync="dialogVisible"
  width="35%"
  :before-close="handleClose">
  
   <img style="width: 250px; margin-left: 125px;" src="./images/12.jpg" alt=""> <span></span>
 
   <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false"><router-link to="/lz">支付</router-link></el-button>
  </span>
</el-dialog></a>
          <a href="https://xiaofanzhou-code.github.io/test/" target="_blank" >商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" to="/home">
          <img src="./images/logo.png" alt="">
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
           
          <!-- <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch">
            搜索</button> -->
             
            <!-- <el-button type="primary" icon="el-icon-search" @click="goSearch">搜索</el-button> -->
           
          
         
             <el-button icon="el-icon-search" @click="goSearch"></el-button>  
             <input type="text" id="autocomplete"
             placeholder="搜索商品"
                 class="input-error input-xxlarge"
                 v-model="keyword"
          />
        </form>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "index",
  data(){
    return{
  keyword: '',
  dialogVisible: false,
    }
  },
  methods: {
    goSearch() {
      if(this.$route.query){
        let location={name:"search",params:{keyword: this.keyword||undefined}};
        location.query=this.$route.query;
        this.$router.push(location);
      }

    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch((_)=> {});
      },
   
    //退出登录
    async logout(){
      //退出登录需要做的事情
      //1:需要发请求，通知服务器退出登录【清除一些数据：token】
      //2:清除项目当中的数据【userInfo、token】
      try {
        await this.$store.dispatch('userLogout');
        this.$router.push('./home')
      }catch (e) {
      }
    }
  },
  mounted() {
    this.$bus.$on('clear',()=>{
      this.keyword="";
    })
  },
  computed:{
    //用户名信息
    userName(){
      return this.$store.state.user.userInfo.name;
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  
&>.top {
   background-color: rgba(11, 11, 11, 0.8);
   height: 50px;
   line-height: 50px;
   font-size: 16px;
 
   

.container {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  
.loginList {
  float: left;
  color: aliceblue;
p {
  float: left;
  margin-right: 10px;

.register {
  border-left: 1px solid #b3aeae;
  padding: 0 5px;
  margin-left: 5px;

}
}
}

.typeList {
  float: right;
 
  a{
    padding: 0 10px;
    color: aliceblue;
    text-decoration: none ;
  &:hover{
    color:#e0b44f;
  }
  .el-button{
    color: aliceblue;
    font-size: 16px;
  }
  }
  
 

}

}
}

&>.bottom {
   width: 1200px;
   margin: 0 auto;
   overflow: hidden;
   
.logoArea {
  float: left;
 
.logo {
img {
  width: 155px;
  margin: 25px 0px;
}
}
}

.searchArea {
  float: right;
  margin-top: 35px;
  margin-right: -200px;
.searchForm {
  overflow: hidden;
 

input {
  box-sizing: border-box;
  width: 400px;
  height: 39px;
  padding: 0px 4px;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid rgb(70, 69, 69) ;
 
  float: left;

&:focus {
   outline: none;
 }
}

button {
 
  background-color:  #947325;
  border: none;
  color: rgb(249, 250, 255);
  margin-right:7px;
  margin-top: 2px;
  float: left;
  cursor: pointer;
 
&:focus {
   outline: none;
 }
}
}
}
}
}

</style>
