<template>
  <div>
    <div class="bcc">
      <img src="./images/bcc.jpg" alt="" />
    </div>
    <div class="main">
      <div class="header">
        <h3>优选企业购</h3>
        <ul>
          <li><router-link to="/plus">会员中心</router-link></li>
          <li>企业采购</li>
          <li>大中型客户采购</li>
        </ul>
      </div>
      <div class="conter">
        <transition
          name="hello"
          enter-active-class="animate__bounceIn"
          appear
        >
          <div class="title">企业会员<span>专享权益</span></div>
        </transition>

        <div class="title1">
          <ul>
            <li><i class="el-icon-circle-check"></i> 采购降本</li>
            <li><i class="el-icon-circle-check"></i> 专属服务</li>
            <li><i class="el-icon-circle-check"></i> 便捷管理</li>
            <li><i class="el-icon-circle-check"></i> 超值特权</li>
          </ul>
        </div>
        <div class="title2">
          <div>
            <div><img src="./images/ba.png" alt="" /></div>
            <h3>企业专项价</h3>
            <p>精选商品，企业专项低价</p>
          </div>
          <div>
            <div><img src="./images/ba.png" alt="" /></div>
            <h3>企业专项价</h3>
            <p>精选商品，企业专项低价</p>
          </div>
          <div>
            <div><img src="./images/ba.png" alt="" /></div>
            <h3>企业专项价</h3>
            <p>精选商品，企业专项低价</p>
          </div>
          <div>
            <div><img src="./images/ba.png" alt="" /></div>
            <h3>企业专项价</h3>
            <p>精选商品，企业专项低价</p>
          </div>
          <div>
            <div><img src="./images/ba.png" alt="" /></div>
            <h3>企业专项价</h3>
            <p>精选商品，企业专项低价</p>
          </div>
          <div>
            <div><img src="./images/ba.png" alt="" /></div>
            <h3>企业专项价</h3>
            <p>精选商品，企业专项低价</p>
          </div>
        </div>
        <div class="btn">
          <button>
            <router-link to="/register">立即注册 | 得200元新人礼包</router-link>
          </button>
          <p><router-link to="/login">已是会员，立即登录</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css";
export default {};
</script>

<style lang="less" scoped>
.bcc {
  position: absolute;
  z-index: -1;
  img {
    height: 800px;
    width: 100%;
  }
}
.main {
  width: 1200px;
  margin: auto;
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    h3 {
      flex: 1;
      font-size: 38px;
      font-family: 'YouYuan';
      color: #1a2445;
      margin: 20px 0 10px 0;
    }

    ul {
      width: 400px;
      display: flex;
      justify-content: end;
      li {
        a{
          text-decoration: none;
        }
        line-height: 80px;
        margin-left: 10px;
        font-size: 20px;
        font-weight: 700;
        color: #474646;
      }
    }
  }
  .conter {
    background-image: url(./images/bc1.jpg);
    width: 100%;
    height: 605px;
    background-color: #111d42;
    background-size: cover;
    border-radius: 24px 18px 18px 18px;
    overflow: hidden;
    box-shadow: 0 0 20px 4px rgb(0 16 42 / 30%);
    z-index: 1;
    margin-bottom: 20px;
    .title {
      text-align: center;
      margin-top: 50px;
      font-size: 50px;
      font-weight: 700;
      color: #fff;
      span {
        color: rgb(226, 169, 23);
      }
    }
    .title1 {
      margin-top: 50px;
      color: #fff;
      font-size: 28px;
      ul {
        display: flex;
        justify-content: space-between;
        li {
          text-align: center;
          flex: 1;
          font-family: "Microsoft Yahei";
          i {
            font-size: 26px;
          }
        }
      }
    }
    .title2 {
      margin-top: 10px;
      display: flex;
      color: #fff;
      text-align: center;
      div {
        flex: 1;
        h3 {
          margin-bottom: 10px;
        }
      }
    }
    .btn {
      margin-top: 80px;
      display: flex;
      flex-direction: column;

      align-items: center;
      button {
        border-radius: 50px;
        width: 500px;
        height: 80px;
        background-color: #e3b871;
        font-size: 28px;
          
        font-weight: 700;
        a {
          text-decoration: none;
          color: black;
        }
      }
      p {
        margin-top: 20px;
        a {
          color: #fff;
          font-size: 20px;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
