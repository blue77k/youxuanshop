<template>
  <div class="cart">
    <h2><span>首页</span> <i class="el-icon-arrow-right"></i> 购物车</h2>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul
          class="cart-list"
          v-for="(cart ) in cartInfoList"
          :key="cart.id"
        >
          <li class="cart-list-con1">
            <input
              type="checkbox"
              name="chk_list"
              :checked="cart.isChecked == 1"
              @change="updateChecked(cart, $event)"
            />
          </li>
          <li class="cart-list-con2">
            <img :src="cart.imgUrl" />
            <div class="item-msg">{{ cart.skuName }}</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">$  {{ cart.skuPrice }}</span>
          </li>
          <li class="cart-list-con5">
            <a
              href="javascript:void(0)"
              class="mins"
              @click="handler('minus', -1, cart)"
              >-</a
            >
            <input
              autocomplete="off"
              type="text"
              minnum="1"
              class="itxt"
              :value="cart.skuNum"
              @change="handler('change', $event.target.value * 1, cart)"
            />
            <a
              href="javascript:void(0)"
              class="plus"
              @click="handler('add', 1, cart)"
              >+</a
            >
          </li>
          <li class="cart-list-con6">
            <span class="sum">$ {{ cart.skuNum * cart.skuPrice }}</span>
          </li>
          <li class="cart-list-con7">
            <!-- <a class="sindelet" @click="deleteCartById(cart)">删除</a> -->
            <el-button class="sindelet"  @click="deleteCartById(cart)">删除</el-button>
            <br />
            <!-- <a href="#none">移到收藏</a> -->
            <el-button :plain="true" @click="open2">收藏·</el-button>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input
          class="chooseAll"
          type="checkbox"
          :checked="isAllCheck && cartInfoList.length > 0"
          @change="updateAllCartChecked"
        />
        <span> 全选</span>
      </div>
      <div class="option">
        
        <a @click="deleteAllCheckedCart">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        
      </div>
      <div class="money-box">
        <div class="chosed">已选择 <span>0</span>件商品</div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney"> ${{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
          <router-link class="sum-btn" to="/trade">结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import throttle from "lodash/throttle";
export default {
  name: "ShopCart",
  mounted() {
    this.getData();
  },
  methods: {
    //弹出提示框
    open2() {
        this.$message({
          message: '收藏成功,大帅哥',
          type: 'success'
        });
      },
    //获取个人购物车数据
    getData() {
      this.$store.dispatch("getCartList");
    },
    //修改某一个产品的个数(节流)
    handler: throttle(async function (type, disNum, cart) {
      //type：为了区分三个元素
      //disNum形参：变化量（1，-1） input最终的个数（并不是变化量）
      //cart：哪一个产品身上有id
      //向服务器发送请求，修改数量
      switch (type) {
        //加号的条件
        case "add":
          disNum = 1;
          break;
        //减号的条件，如果产品个数大于一，传递给服务器-1，如果出现产品的个数是小于等于1的
        //传递的值是0（数据不变化）
        case "minus":
          disNum = cart.skuNum > 1 ? -1 : 0;
          break;
        //中间input框改变，如果是非法的或者小于1，传递参数0，如果正常则是
        //     用户输入的量取整-起始的个数
        case "change":
          if (isNaN(disNum) || disNum < 1) {
            disNum = 0;
          } else {
            disNum = parseInt(disNum) - cart.skuNum;
          }
          break;
      }
      //派发action(将产品添加进购物车)
      try {
        await this.$store.dispatch("addOrUpdateShopCart", {
          skuId: cart.skuId,
          skuNum: disNum,
        });
        //发送请求后，再次获取数据，令最新的数据进行展示
        this.getData();
      } catch (error) {
        console.log("要不再看看");
      }
    }, 500),
    //删除购物车内的东西
    async deleteCartById(cart) {
      //如果删除成功再次发请求获取新的数据进行展示
      try {
        await this.$store.dispatch("deleteCartListBySkuId", cart.skuId);
        this.getData();
      } catch (error) {
        alert(error.message);
      }
    },
    //修改购物车中商品的勾选状态
    async updateChecked(cart, event) {
      try {
        //带给服务器的说明了特定值，系统自带的是布尔值，需要修改状态
        let isChecked = event.target.checked ? "1" : "0";
        await this.$store.dispatch("updateCheckedById", {
          skuId: cart.skuId,
          isChecked,
        });
        this.getData();
      } catch (error) {
        alert(error.message);
      }
    },
    //删除全部选中的产品，
    //这个回调函数咱们没办法收集到有用数据，要派发一个action
    async deleteAllCheckedCart() {
      try {
        await this.$store.dispatch("deleteAllCheckedCart");
        this.getData();
      } catch (error) {
        alert(error.message);
      }
    },
    //修改全部产品的选中状态
    async updateAllCartChecked(event) {
      try {
        let isChecked = event.target.checked ? "1" : "0";
        await this.$store.dispatch("updateAllCartIsChecked", isChecked);
        this.getData();
      } catch (error) {
        alert(error.message);
      }
    },
  },
  computed: {
    ...mapGetters(["cartList"]),
    //购物车数据
    cartInfoList() {
      return this.cartList.cartInfoList || [];
    },
    //计算购买产品的总价
    totalPrice() {
      let sum = 0;
      this.cartInfoList.forEach((item) => {
        sum += item.skuNum * item.skuPrice;
      });
      return sum;
    },
    //判断底部复选框是否勾选【全部产品都选中，采勾选】
    isAllCheck() {
      //遍历数组里面原理，只要全部元素isChecked属性都为1===>真 true
      //只要有一个不是1======>假false
      return this.cartInfoList.every((item) => item.isChecked == 1);
    },
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h2 {
    font-size: 18px;
    margin: 9px 0;

    span {
      color: rgb(135, 135, 135);
    }
  }
  .cart-main {
    .cart-th {
      font-size: 18px;
      font-weight: 700;
      color: rgb(81, 82, 81);
      padding: 10px;

      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid rgb(244, 244, 244);

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        position: relative;
        height: 100px;
        line-height: 100px;
        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 15%;
        }

        .cart-list-con2 {
          width: 35%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con4 {
          width: 10%;
          font-size: 18px;
          font-weight: 700;
        }

        .cart-list-con5 {
          width: 17%;
          line-height: 6px;
          margin-top: 36px;
          margin-left: 10px;
          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 22px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 10%;

          .sum {
            margin-left: -20px;
            font-size: 18px;
            color: rgb(164, 1, 1);
            font-weight: 700;
          }
        }

        .cart-list-con7 {
          width: 13%;
          position: absolute;
          right: 0px;
          top: 10px;
          line-height: 50px;
          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
 font-weight: 700;
 font-size: 16px;
    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {cursor: pointer;
        text-decoration: none;
        float: left;
        padding: 0 10px;
        color: #666;
        &:first-child:hover{
          color: red;
        }
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 10px;
      }

      .sumprice {
        width: 250px;
        line-height: 20px;
        float: left;
        padding:10px;
 
        .summoney {
          color: #a3040e;
          font-size: 18px;
          font-weight: 700;
        }
      }

      .sumbtn {
        float: right;
        padding-bottom: 10px;
        margin-right: 10px;
 
        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
            border-radius: 10px;
        }
      }
    }
  }
}
</style>
