<template>
  <div class="trade-container">
    <h3 class="title">填写并核对订单信息</h3>

    
    <div class="content">
      <h5 class="receive">收件人信息</h5>
 <div
        @click="changeDefault(address, addressInfo)"
        class="address clearFix"
        v-for="address in addressInfo"
        :key="address.id"
      >
        <span class="username" :class="{ selected: address.isDefault == 1 }">{{
          address.consignee
        }}</span>
        <p>
          <span class="s1">{{ address.fullAddress }}</span>
          <span class="s2">{{ address.phoneNum }}</span>
          <span class="s3" v-show="address.isDefault == 1">默认地址</span>
        </p>
      </div> 
      <el-button :plain="true" class="ad" @click="open1">添加地址</el-button>
      <div class="line"></div>
       
    
      <h5 class="pay">送货清单</h5>
      <div class="way">
        <h5>配送方式</h5>
        <div class="info clearFix">
          <span class="s1">顺风快递</span>
          <p>配送时间：预计8月10日（周三）09:00-15:00送达</p>
        </div>
      </div>
      <div class="detail">
        <h5>推荐商品 :</h5>
        <ul class="list clearFix">
          <li>
            <img
              src="./images/dunk.jpg"
              alt=""
              style="width: 100px; height: 100px"
            />
          </li>

          <li>
            <p></p>
            <h4>7天无理由退货</h4>
          </li>
          <li>
            <h3>￥799.00</h3>
          </li>

          <li>
            <el-button :plain="true" @click="open2">加购</el-button>
          </li>
        </ul>
      </div>

      <div class="trade">
        <h1>金额明细</h1>

        <div class="money">
          <dl>
            <dt>商品件数:</dt>
            <dd>2件</dd>
          </dl>
          <dl>
            <dt>商品总价:</dt>
            <dd>¥278</dd>
          </dl>
          <dl>
            <dt>运&nbsp; 费:</dt>
            <dd>¥3</dd>
          </dl>
          <dl>
            <dt>应付总额:</dt>
            <dd>¥281</dd>
          </dl>
           <div class="sub clearFix">
      <a class="subBtn" @click="submitOrder">提交订单</a>
    </div>
        </div>

      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Trade",
  data() {
    return {
      //收集买家的留言信息
      msg: "",
      //订单号
      orderId: "",
    };
  },
  //生命周期函数:挂载完毕
  mounted() {
    //派发action
    this.$store.dispatch("getUserAddress");
    this.$store.dispatch("getOrderInfo");
  },
  computed: {
    ...mapState({
      addressInfo: (state) => state.trade.address,
      orderInfo: (state) => state.trade.orderInfo,
    }),
    //将来提交订单最终选中地址
    userDefaultAddress() {
      //用户最终选中的那个结果
      //find:查找数组当中符合条件的元素返回，最为最终结果
      return this.addressInfo.find((item) => item.isDefault == 1) || {};
    },
  },
  methods: {
    open1() {
      this.$message("网络异常，无法添加");
    },
    open2() {
      this.$message({
        message: "恭喜你， 加购成功",
        type: "success",
      });
    },
    //修改默认地址
    changeDefault(address, addressInfo) {
      //遍历所需要的数组，全部的isDefault为零，而点击的则是1。
      addressInfo.forEach((item) => (item.isDefault = 0));
      address.isDefault = 1;
    },
    //提交订单
    async submitOrder() {
      //交易编码
      let { tradeNo } = this.orderInfo;
      //其余的六个参数
      let data = {
        consignee: this.userDefaultAddress.consignee, //最终收件人的名字
        consigneeTel: this.userDefaultAddress.phoneNum, //最终收件人的手机号
        deliveryAddress: this.userDefaultAddress.fullAddress, //收件人的地址
        paymentWay: "ONLINE", //支付方式
        orderComment: this.msg, //买家的留言信息
        orderDetailList: this.orderInfo.detailArrayList, //商品清单
      };
      //需要带参数的：tradeNo
      let result = await this.$API.reqSubmitOrder(tradeNo, data);
      //提交订单成功
      this.orderId = result.data;
      //路由跳转 + 路由传递参数
      this.$router.push("/pay?orderId=" + this.orderId);
    },
  },
};
</script>

<style lang="less" scoped>
.trade-container {
  .title {
    width: 1200px;
    margin: 0 auto;
    font-size: 22px;
    font-weight: 700;
    line-height: 21px;
    font-family: "微软雅黑";
    color: #237f04;
    margin-bottom: 20px;
  }
 
  .content {
     
    width: 1200px;
    margin: 10px auto 0;
    border: 1px solid rgb(221, 221, 221);
    padding: 25px;
    box-sizing: border-box;
    .ad {
      font-weight: 700;
      background-color: rgb(247, 51, 51);
      color: #fff;
      margin-left: 22px;
      margin-bottom: 10px;
    }
    .receive,
    .pay {
      line-height: 36px;
      margin: 18px 0;
      font-size: 18px;
      font-weight: 700;
    }

    .address {
      padding-left: 20px;
      margin-bottom: 15px;
  

      .username {
        float: left;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-weight: 700;
        font-size: 14px;
        position: relative;
      }

      .username::after {
        content: "";
        display: none;
        width: 13px;
        height: 13px;
        position: absolute;
        right: 0;
        bottom: 0;
        background: url(./images/choosed.png) no-repeat;
      }

      .username.selected {
        border-color: #f10606;
      }

      .username.selected::after {
        display: block;
      }

      p {
        width: 610px;
        float: left;
        line-height: 30px;
        margin-left: 10px;
        padding-left: 5px;
        cursor: pointer;

        .s1 {
          float: left;
        }

        .s2 {
          float: left;
          margin: 0 5px;
        }

        .s3 {
          float: left;
          width: 56px;
          height: 24px;
          line-height: 24px;
          margin-left: 10px;
          background-color: #878787;
          color: #fff;
          margin-top: 3px;
          text-align: center;
        }
      }

      p:hover {
        background-color: #ddd;
      }
    }

    .line {
      margin-top:10px ;
      height: 1px;
      background-color: #ddd;
     
    }

    .way {
      width: 1080px;
      height: 110px;
      background: #f4f4f4;
      padding: 15px;
      margin: 0 auto;

      h5 {
        line-height: 50px;
      }

      .info {
        margin-top: 20px;

        .s1 {
          float: left;
          border: 1px solid #ddd;
          width: 120px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          margin-right: 10px;
        }

        p {
          line-height: 30px;
        }
      }
    }

    .detail {
      width: 1080px;

      background: rgb(220, 231, 235);
      padding: 15px;
      margin: 2px auto 0;

      h5 {
        line-height: 50px;
      }

      .list {
        display: flex;
        justify-content: space-between;

        li {
          line-height: 30px;

          p {
            margin-bottom: 20px;
          }

          h4 {
            color: #c81623;

            font-size: 18px;
            font-weight: 400;
          }

          h3 {
            margin-top: 20px;
            color: #e12228;
          }
        }
      }
    }
    .trade {
      height: 400px;
      h1 {
        margin-top: 30px;
        font-size: 18px;
        border-bottom: 1px solid #ddd;
        padding-bottom: 20px;
      }
      .money {
        dl {
          display: flex;
          justify-content: flex-end;
         
          margin-top: 20px;
          font-size: 18px;
     
          dt {
            line-height: 50px;
          }
          dd{
            line-height: 50px;
            width: 240px;
            text-align: right;
            padding-right: 70px;
            
          }
          &:last-child{
              color: #e12228;
            }
        }
        .subBtn {
        float: right;
        width: 164px;
        height: 56px;
        font: 700 18px "微软雅黑";
        line-height: 56px;
        text-align: center;
        color: #fff;
        border-radius: 10px;
        margin-right: 120px;
        margin-top: 20px;
        background-color: #e1251b;
        cursor: pointer;
      }
      }
    }
    .sub {
      width: 1200px;
      margin: 0 auto 10px;

       
    }
  }
}
</style>
