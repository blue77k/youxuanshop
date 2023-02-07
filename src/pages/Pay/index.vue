<template>
  <div class="pay-main">
    <div class="pay-container">
      <div class="checkout-tit">
        <h4 class="tit-txt">
          <span class="success-icon"></span>
          <span class="success-info"
            >订单提交成功，请您及时付款，以便尽快为您发货~~</span
          >
        </h4>
        <div class="paymark">
          <span class="fl"
            >请您在提交订单<em class="orange time">10分钟</em
            >之内完成支付，超时订单会自动取消。
          </span>
          <span class="fr"
            ><em class="lead">应付金额：</em
            ><em class="orange money">$99</em></span
          >
        </div>
      </div>

      <div class="checkout-steps">
        <div class="step-tit">
          <h1>支付平台 :</h1>
        </div>
        <div class="step-cont">
          <ul class="payType">
            <li><img src="./images/pay2.jpg" /></li>
            <li><img src="./images/pay3.jpg" /></li>
          </ul>
        </div>
        <div class="hr"></div>

        <div class="payshipInfo">
          <div class="step-tit">
            <h1>支付网银 :</h1>
          </div>
          <div class="step-cont">
            <ul class="payType">
              <li><img src="./images/pay10.jpg" /></li>
              <li><img src="./images/pay11.jpg" /></li>
              <li><img src="./images/pay12.jpg" /></li>
              <li><img src="./images/pay13.jpg" /></li>
              <li><img src="./images/pay14.jpg" /></li>
              <li><img src="./images/pay15.jpg" /></li>
              <li><img src="./images/pay16.jpg" /></li>
              <li><img src="./images/pay17.jpg" /></li>
              <li><img src="./images/pay18.jpg" /></li>
              <li><img src="./images/pay19.jpg" /></li>
              <li><img src="./images/pay20.jpg" /></li>
              <li><img src="./images/pay21.jpg" /></li>
            </ul>
          </div>
        </div>
        <div class="hr"></div>

        <div class="submit">
          <a class="btn" @click="open">立即支付</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcode";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pay",
  data() {
    return {
      payInfo: {},
      //定时器
      timer: null,
      //支付状态码
      code: "",
      //
      url: this.$store.state.payList.imgUrl,
    };
  },
  computed: {
    orderId() {
      return this.$route.query.orderId;
    },
  },
  mounted() {
    this.getPayInfo();
  },
  methods: {
    //获取支付信息
    async getPayInfo() {
      let result = await this.$API.reqPayInfo(this.orderId);
      if (result.code == 200) {
        this.payInfo = result.data;
      }
    },
    //弹出框
    open() {
      this.$alert(
        `<img height="280px" width="200px" src="${require("./images/12.jpg")}"  / >`,
        "请扫码支付",
        {
          dangerouslyUseHTMLString: true,
          //中间布局
          center: true,
          //是否显示取消按钮
          showCancelButton: true,
          //取消按钮的文本内容
          cancelButtonText: "支付遇见问题",
          //确定按钮的文本
          confirmButtonText: "已支付成功",
          //右上角的叉子没了
          showClose: false,
          //关闭弹出框的配置值
          //type:区分取消
          //instance：当前组件实例
          //done：关闭当前弹窗方法
          beforeClose: (type, instance, done) => {
            if (type == "cancel") {
              alert("请联系汪汪队，也许它们会帮到您");
              //清除定时器
              clearInterval(this.timer);
              this.timer = null;
              //关闭弹窗
              done();
            } else {
              //正常来说，是需要判断一下是否支付成功的，但是为了省钱，就无所谓了
              clearInterval(this.timer);
              this.timer = null;
              done();
              this.$router.push("/paysuccess");
            }
          },
        }
      );
      //支付成功，路由跳转，支付失败，提示信息
      //定时器没有开启，给开启
      /*   if (!this.timer) {
           this.timer = setInterval(async () => {
             //发请求获取用户支付状态
             let result = await this.$API.reqPayStatus(this.orderId);
               //第一步：清除定时器
               clearInterval(this.timer);
               this.timer = null;
               //保存支付成功返回的code
               this.code = result.code;
               //关闭弹出框
               this.$msgbox.close();
               //跳转到下一路由
               this.$router.push("/paysuccess");
           }, 2500);
         }*/
    },
  },
};
</script>

<style lang="less" scoped>
.pay-main {
  margin-bottom: 20px;

  .pay-container {
    margin: 0 auto;
    width: 1200px;
    font-size: 18px;

    a:hover {
      color: #4cb9fc;
    }

    .orange {
      color: #e1251b;
      font-weight: 800;
    }

    .money {
      font-size: 18px;
    }

    .zfb {
      color: #e1251b;
      font-weight: 700;
    }

    .checkout-tit {
      padding: 10px;

      .tit-txt {
        font-size: 14px;
        line-height: 21px;

        .success-icon {
          width: 30px;
          height: 30px;
          display: inline-block;
          background: url(./images/icon.png) no-repeat 0 0;
        }

        .success-info {
          padding: 0 8px;
          line-height: 30px;
          vertical-align: top;
          font-size: 25px;
        }
      }

      .paymark {
        overflow: hidden;
        line-height: 26px;
        text-indent: 38px;
        color: rgb(123, 120, 120);

        .fl {
          float: left;
        }

        .fr {
          float: right;

          .lead {
            margin-bottom: 18px;
            font-size: 15px;
            font-weight: 400;
            line-height: 22.5px;
          }
        }
      }
    }

    .checkout-info {
      padding-left: 25px;
      padding-bottom: 15px;
      margin-bottom: 10px;
      border: 2px solid #e1251b;

      h4 {
        margin: 9px 0;
        font-size: 14px;
        line-height: 21px;
        color: #e1251b;
      }

      ol {
        padding-left: 25px;
        list-style-type: decimal;
        line-height: 24px;
        font-size: 14px;
      }

      ul {
        padding-left: 25px;
        list-style-type: disc;
        line-height: 24px;
        font-size: 14px;
      }
    }

    .checkout-steps {
      border: 1px solid #ddd;
      padding: 25px;

      .hr {
        height: 1px;
        background-color: #ddd;
      }

      .step-tit {
        line-height: 36px;
        margin: 25px 20px;
      }

      .step-cont {
        margin: 0 10px 12px 20px;

        ul {
          font-size: 0;

          li {
            margin: 2px;
            display: inline-block;
            padding: 5px 20px;
            border: 1px solid #ddd;
            cursor: pointer;
            line-height: 18px;
            border-radius: 10px;
            &:hover {
              border: 2px solid rgb(35, 232, 21);
              cursor: pointer;
            }
          }
        }
      }
    }

    .submit {
      text-align: center;

      .btn {
        display: inline-block;
        padding: 15px 45px;
        margin: 15px 0 10px;
        font: 18px "微软雅黑";
        font-weight: 700;
        border-radius: 0;
        background-color: #e1251b;
        border: 1px solid #e1251b;
        border-radius: 20px;
        color: #fff;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        user-select: none;
        text-decoration: none;
      }
    }
  }
}
</style>
