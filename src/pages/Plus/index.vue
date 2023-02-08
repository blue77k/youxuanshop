<template>
  <div class="main">
    <div class="header">
      <img src="./images/下载.png" alt="" />
      <div class="right">
        <span> <i class="el-icon-menu"></i> PLUS会员首页</span>
        <span class="kk">PLUS权益</span>
      </div> 
    </div>
    <div class="container">
      <transition name="hello"   appear>
        <h1 class="animate__animated animate__tada">PLUS会员 享专属特权</h1>
      </transition>
      <p>尊敬的等等zkew，根据您最近一年的消费情况</p>
      <h2>
        开通PLUS年卡会员预计可节省
        <span>￥1847元 <i class="el-icon-s-order"></i> </span>
      </h2>
      <el-button type="text" class="btn" @click="dialogVisible = true">
        <b>立即开通</b> <br />
        您的京享值为3363，专属价为 <b>￥248/年</b></el-button
      >
      <el-dialog
        title="如需开会员请扫码支付"
        :visible.sync="dialogVisible"
        width="35%"
        :before-close="handleClose"
      >
        <img
          style="width: 250px; margin-left: 0px"
          src="./images/12.jpg"
          alt=""
        />
        <span></span>

        <span slot="footer" class="dialog-footer">
          <el-button @click="handleClose">取 消</el-button>
          <el-button type="primary" @click="open2">确 定</el-button>
        </span>
      </el-dialog>

      <div class="car"><i class="left"></i> 卡种选择<i class="right"></i></div>
    </div>
  </div>
</template>

<script>
 
export default {
  name: "PLUS",
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    
    handleClose(done) {
      
      this.$confirm("确定不开通会员吗？")
        .then((_) => {
          this.dialogVisible=false;
          done();
        
        })
        .catch((_) => {});
         
    },
    open2() {
      this.dialogVisible = false
      this.$message({
        message: "恭喜你，成功开通PLUS会员",
        type: "success",
      });
    },
  },
};
</script>

<style lang="less" scoped>
// .hello-enter-active {
//   animation: hello 0.8s linear;
// }
// .hello-leave-active {
//   animation: hello 0.5s linear reverse;
// }
// @keyframes hello {
//   from {
//     transform: translateX(-100%);
//   }
//   to {
//     transform: translateX(0px);
//   }
// }
.main {
  // background-image:
  background-color: #d7d7bc;
  width: 1200px;
  margin: auto;
  margin-top: -40px;

  height: 550px;

  background: url(//img20.360buyimg.com/uba/jfs/t13513/356/1496704754/78184/d6468bd4/5a2152b6N3039a885.jpg)
    no-repeat top center/100% 100%;
  .header {
    background-color: rgba(46, 50, 68, 0.35);
    height: 100px;

    img {
      margin: 40px 20px;
    }
    .right {
      float: right;
      color: #e0b44f;
      margin-top: 40px;
      font-size: 18px;
      .kk {
        color: #fff;
        margin: 0 20px;
      }
    }
  }
  .container {
    text-align: center;
    h1 {
      font-size: 40px;
      margin-top: 30px;
      color: #fff;
    }

    p {
      margin-top: 20px;
      font-size: 14px;
      color: #fff;
    }
    h2 {
      margin-top: 10px;
      font-size: 18px;
      color: #fff;
      &:hover {
        color: #e0b44f;
      }
      span {
        color: #e0b44f;
        i {
          font-size: 25px;
        }
      }
    }
    .btn {
   

      color: #2e3244;
      background-color: #e0b44f;

      &:hover{
        transform: scale(1.05);
        transition: all 0.2s linear;
      }
      b {
        font-weight: 700;
        font-size: 25px;
      }
      margin-top: 50px;
      height: 80px;
      width: 500px;
      border-radius: 50px;
      border: 0;
      font-size: 18px;
    }
    .car {
      margin-top: 60px;
      font-size: 40px;
      color: #fff;
      i {
        display: inline-block;
        width: 68px;
        height: 16px;
      }
      .left {
        background-image: url(./images/2.png);
      }
      .right {
        background-image: url(./images/1.png);
        margin-left: 14px;
      }
    }
  }
}
</style>
