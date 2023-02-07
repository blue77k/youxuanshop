<template>
  <div class="order-right">
    <div class="order-content">
      <div class="title">
        <h2>首页 <i class="el-icon-arrow-right"></i><span> 我的订单</span></h2>
      </div>
      <div class="chosetype">
        <table>
          <thead>
            <tr>
              <th width="29%">商品</th>
              <th width="31%">订单详情</th>
              <th width="13%">收货人</th>
              <th>金额</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="orders">
        <!-- 每一笔订单 -->
        <table
          class="order-item"
          v-for="order in myOrder.records"
          :key="order.id"
        >
          <thead>
            <tr>
              <th colspan="5">
                <span class="ordertitle"
                  >{{ order.createTime }} 订单编号：{{ order.outTradeNo }}
                  <span class="pull-right delete"
                    ><img src="../images/delete.png"
                  /></span>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cart, index) in order.orderDetailList" :key="cart.id">
              <td width="60%">
                <div class="typographic">
                  <img :src="cart.imgUrl" style="width: 100px; height: 100px" />
                  <a href="#" class="block-text">{{ cart.skuName }}</a>
                  <span>x{{ cart.skuNum }}</span>
                  <a href="#" class="service">售后申请</a>
                </div>
              </td>
              <td
                :rowspan="order.orderDetailList.length"
                v-if="index == 0"
                width="8%"
                class="center"
              >
                {{ order.consignee }}
              </td>
              <td
                :rowspan="order.orderDetailList.length"
                v-if="index == 0"
                width="13%"
                class="center"
              >
                <ul class="unstyled">
                  <li>总金额¥{{ order.totalAmount }}.00</li>
                  <li>在线支付</li>
                </ul>
              </td>
              <td
                :rowspan="order.orderDetailList.length"
                v-if="index == 0"
                width="8%"
                class="center"
              >
                <a href="#" class="btn">{{ order.orderStatusName }}</a>
              </td>
              <td
                :rowspan="order.orderDetailList.length"
                v-if="index == 0"
                width="13%"
                class="center"
              >
                <ul class="unstyled">
                  <li>
                    <a href="mycomment.html" target="_blank">评价|晒单</a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="choose-order">
        <!-- 分页器 -->
        <Pagination
          :pageNo="page"
          :pageSize="limit"
          :total="myOrder.total"
          :continues="5"
          @getPageNo="getPageNo"
        />
      </div>
    </div>
    <!--猜你喜欢-->
    <div class="like">
      <h1 class="kt"><i class="el-icon-sell"></i> 猜你喜欢</h1>
    
      <ul class="bb">
        <li><a href=""><img src="../images/11.jpg" alt=""><p>Apple iPhone14  （A2884）<br>iphone14全网通 5G手机 午夜色 128G </p><p class="price">$1999</p></a></li>
        <li><a href=""><img src="../images/14.jpg" alt=""><p>
          Apple iPhone 14 Pro Max (A2896) 256GB 暗紫色 支持移动联通电信5G 双卡 
        </p><p class="price">$6993</p></a></li>
        <li><a href=""><img src="../images/h.jpg" alt=""><p>浪莎丝袜女超薄性感黑丝显瘦刺青提花纯欲风长筒打底连裤袜 富贵猫</p><p class="price">***</p></a></li>
        <li><a href=""><img src="../images/gd.jpg" alt=""> <p>
          BANDAI万代高达Gundam拼插拼装模型玩具 HIRM零式飞翼EW新年礼物
        </p><p class="price">$199</p></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "",
  data() {
    return {
      //初始化参数
      //当前第几页
      page: 1,
      //每一页展示数据个数
      limit: 3,
      //存储我的订单的数据
      myOrder: {},
    };
  },
  mounted() {
    //获取我的订单的数据方法
    this.getData();
  },
  methods: {
    //获取我的订单的方法
    async getData() {
      //解构出参数
      const { page, limit } = this;
      let result = await this.$API.reqMyOrderList(page, limit);
      if (result.code == 200) {
        this.myOrder = result.data;
      }
    },
    //获取当前点击那一页
    getPageNo(page) {
      //修改组件响应式数据page
      this.page = page;
      this.getData();
    },
  },
};
</script>

<style scoped></style>
