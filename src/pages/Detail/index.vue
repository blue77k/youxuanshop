<template>
  <div class="detail">
    <!-- 商品分类导航 -->
    <TypeNav />

    <!-- 主要内容区域 -->
    <section class="con">
      <!-- 导航路径区域 -->
      <div class="conPoin">
        <span v-show="categoryView.category1Name">{{
          categoryView.category1Name
        }}</span>
        <span v-show="categoryView.category2Name">{{
          categoryView.category2Name
        }}</span>
        <span v-show="categoryView.category3Name">{{
          categoryView.category3Name
        }}</span>
      </div>
      <!-- 主要内容区域 -->
      <div class="mainCon">
        <!-- 左侧放大镜区域 -->
        <div class="previewWrap">
          <!--放大镜效果-->
          <Zoom :skuImageList="skuImageList" />
          <!-- 小图列表 -->
          <ImageList :skuImageList="skuImageList" />
        </div>
        <!-- 右侧选择区域布局 -->
        <div class="InfoWrap">
          <div class="goodsDetail">
            <h3 class="InfoName">{{ skuInfo.skuName }}</h3>
            <p class="news">{{ skuInfo.skuDesc }}</p>
            <div class="priceArea">
              <div class="priceArea1">
                <div class="title">
                  价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格 :
                </div>
                <div class="price">
                  <i>¥</i>
                  <em>{{ skuInfo.price }}</em>
                  &nbsp; &nbsp;<span>降价通知</span>
                </div>
              </div>
              <div class="priceArea2">
                <div class="title">
                  <i>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销 :</i>
                </div>
                <div class="fixWidth">
                  <i class="red-bg">加价购</i>
                  <em class="t-gray"
                    >满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品</em
                  >
                </div>
              </div>
            </div>
            <div class="support">
              <div class="supportArea">
                <div class="title">
                  支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持 :
                </div>
                <div class="fixWidth">
                  以旧换新，闲置手机回收 4G套餐超值抢 礼品购
                </div>
              </div>
              <div class="supportArea">
                <div class="title">配 送 地 址 :</div>
                <div class="fixWidth">广东省 广州市 增城区</div>
              </div>
            </div>
          </div>

          <div class="choose">
            <div class="chooseArea">
              <div class="choosed"></div>
              <dl v-for="spuSaleAttr in spuSaleAttrList" :key="spuSaleAttr.id">
                <dt class="title">{{ spuSaleAttr.saleAttrName }} :</dt>
                <dd
                  changepirce="0"
                  :class="{ active: spuSaleAttrValue.isChecked == 1 }"
                  v-for="spuSaleAttrValue in spuSaleAttr.spuSaleAttrValueList"
                  :key="spuSaleAttrValue.id"
                  @click="
                    changeActive(
                      spuSaleAttrValue,
                      spuSaleAttr.spuSaleAttrValueList
                    )
                  "
                >
                  {{ spuSaleAttrValue.saleAttrValueName }}
                </dd>
              </dl>
            </div>
            <div class="cartWrap">
              <div class="controls">
                <input
                  autocomplete="off"
                  class="itxt"
                  v-model="skuNum"
                  @change="changeSkuNum"
                />
                <a href="javascript:" class="plus" @click="skuNum++">+</a>
                <a
                  href="javascript:"
                  class="mins"
                  @click="skuNum > 1 ? skuNum-- : (skuNum = 1)"
                  >-</a
                >
              </div>
              <div class="add">
                <!-- 以前咱们的路由跳转：从A路由跳转到B路由，这里在加入购物车，进行路由跳转之前，发请求
                 把你购买的产品的信息通过请求的形式通知服务器，服务器进行相应的存储
               -->
                <a @click="addShopcar">加入购物车</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 内容详情页 -->
    <section class="product-detail">
      <div class="detail">
        <div class="fitting">
          <h1 class="kt">店长推荐</h1>
          <div class="good-suits">
            <div class="master">
              <img src="./images/f206b732cc20f671.jpg" />
              <p>￥6299</p>
              <i class="el-icon-plus"></i>
            </div>
            <ul class="suits">
              <li class="suitsItem">
                <img src="./images/a.jpg" />
                <p>任天堂 Switch</p>
                <label>
                  <input type="checkbox" value="39" />
                  <span>39</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="./images/f.jpg" />
                <p>b600 重炮手</p>
                <label>
                  <input type="checkbox" value="50" />
                  <span>50</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="./images/sw.jpg" />
                <p>Apple Watch</p>
                <label>
                  <input type="checkbox" value="59" />
                  <span>59</span>
                </label>
              </li>
              <li class="suitsItem">
                <img src="./images/dp04.png" />
                <p>Feless费勒斯VR</p>
                <label>
                  <input type="checkbox" value="99" />
                  <span>99</span>
                </label>
              </li>
            </ul>
            <div class="result">
              <div class="num">已选购0件商品</div>
              <div class="price-tit">套餐价</div>
              <div class="price">￥6299</div>
              <button class="addshopcar">加入购物车</button>
            </div>
          </div>
        </div>
        <div class="intro">
         <h1>商品详情</h1>
          <div class="tab-content">
            <div id="one" class="tab-pane active">
              <ul class="goods-intro">
                <li>分辨率：1920*1080(FHD)</li>
                <li>后置摄像头：1200万像素</li>
                <li>前置摄像头：500万像素</li>
                <li>核 数：其他</li>
                <li>频 率：以官网信息为准</li>
                <li>品牌： Apple</li>
                <li>商品名称：APPLEiPhone 14pro MAX</li>
                <li>商品编号：1861098</li>
                <li>商品毛重：0.51kg</li>
                <li>商品产地：中国大陆</li>
                <li>热点：人脸识别，Apple Pay，金属机身，拍照神器</li>
                <li>系统：苹果（IOS）</li>
                <li>像素1亿</li>
                <li>机身内存：1TB </li>
              </ul>
              <div class="intro-detail">
                <img src="./images/06c412686a1cf811.jpg.avif" />
                <img src="./images/11ba182576be5ee5.jpg.avif" />
                <img src="./images/0264ccc428213e77.jpg.avif" />
                <img src="./images/f282d9da678a10c9.jpg.avif" />
              </div>
            </div>
            <div id="two" class="tab-pane">
              <p>规格与包装</p>
            </div>
            <div id="three" class="tab-pane">
              <p>售后保障</p>
            </div>
            <div id="four" class="tab-pane">
              <p>商品评价</p>
            </div>
            <div id="five" class="tab-pane">
              <p>手机社区</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ImageList from "./ImageList/ImageList";
import Zoom from "./Zoom/Zoom";
import { mapGetters } from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Detail",
  data() {
    return {
      //购买产品的个数
      skuNum: 1,
    };
  },
  components: {
    ImageList,
    Zoom,
  },
  mounted() {
    this.$store.dispatch("getGoodInfo", this.$route.params.skuid);
  },
  computed: {
    ...mapGetters(["categoryView", "skuInfo", "spuSaleAttrList"]),
    //给子组件数据
    skuImageList() {
      //如果服务器数据没有回来，skuInfo这个对象是空对象
      return this.skuInfo.skuImageList || [];
    },
  },
  methods: {
    //产品的售卖属性值切换高亮
    changeActive(saleAttrValue, arr) {
      //遍历全部售卖属性值isChecked为零没有高亮了
      arr.forEach((item) => {
        item.isChecked = 0;
      });
      //点击的那个售卖属性值变为1
      saleAttrValue.isChecked = 1;
    },
    changeSkuNum(event) {
      //令用户文本输入*1,这样后得到的答案便要是不合法，便会NAN
      let value = event.target.value * 1;
      //进行判断操作
      if (isNaN(value) || value < 1) {
        this.skuNum = 1;
      } else {
        //取整
        this.skuNum = parseInt(value);
      }
    },
    //加入购物车
    async addShopcar() {
      //发请求将产品加入到数据库
      /*
       *点击购物车按钮的时候，做的第一件事就是发请求，通知服务器加入购物车的产品是谁
       * 然后调用vuex仓库里面的那个函数
       * 发送请求，成功路由跳转，失败给用户提示
       * */
      try {
        await this.$store.dispatch("addOrUpdateShopCart", {
          skuId: this.$route.params.skuid,
          skuNum: this.skuNum,
        });
        /*
         * 进行路由跳转的时候需要将产品的信息带给下一级路由组件
         * 一些简单的数据skuNum可以直接带着query参数传递过去
         * 产品信息比较复杂的就要通过会话存储传递
         * 本地存储||会话存储  ，一般存的是字符串
         * */
        sessionStorage.setItem("SKUINFO", JSON.stringify(this.skuInfo));
        this.$router.push({
          name: "addcartsuccess",
          query: { skuNum: this.skuNum },
        });
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.detail {
  .con {
    width: 1200px;
   
    margin: 15px auto 0;

    .conPoin {
      padding: 9px 15px 9px 0;
      font-weight: 700;
      font-size: 16px;
      & > span + span:before {
        content: "/\00a0";
        padding: 0 5px;
        color: #ccc;
      }
    }

    .mainCon {
      overflow: hidden;
      margin: 5px 0 15px;

      .previewWrap {
        float: left;
        width: 400px;
        position: relative;
      }

      .InfoWrap {
        width: 700px;
        float: right;

        .InfoName {
          font-size: 14px;
          line-height: 21px;
          margin-top: 15px;
        }

        .news {
          color: #e12228;
          margin-top: 15px;
        }

        .priceArea {
          background: #f5f5f5;
          padding: 17px;
          margin: 13px 0;
          border-radius: 14px;
          .priceArea1 {
            overflow: hidden;
            line-height: 28px;
            margin-top: 10px;

            .title {
              float: left;
              margin-right: 15px;
              font-weight: 700;
              font-size: 18px;
            }

            .price {
              float: left;
              color: #c81623;

              i {
                font-size: 16px;
              }

              em {
                font-size: 24px;
                font-weight: 700;
              }

              span {
                font-size: 14px;
                color: rgb(97, 215, 7);
                font-weight: 700;
              }
            }
          }

          .priceArea2 {
            overflow: hidden;
            line-height: 28px;
            margin-top: 10px;

            .title {
              margin-right: 15px;
              float: left;
              i {
                font-size: 18px;

                font-weight: 700;
              }
            }

            .fixWidth {
              width: 520px;
              float: left;

              .red-bg {
                background: #c81623;
                color: #fff;
                padding: 6px;
                border-radius: 4px;
                margin-right: 10px;
              }

              .t-gray {
                font-size: 14px;
                color: #999;
              }
            }
          }
        }

        .support {
          border-bottom: 1px solid #ededed;
          padding-bottom: 5px;

          .supportArea {
            overflow: hidden;
            line-height: 28px;
            margin-top: 10px;

            .title {
              margin-right: 15px;
              float: left;
            }

            .fixWidth {
              width: 520px;
              float: left;
              color: #999;
            }
          }
        }

        .choose {
          .chooseArea {
            overflow: hidden;
            line-height: 28px;
            margin-top: 10px;

            dl {
              overflow: hidden;
              margin: 13px 0;

              dt {
                margin-top: 10px;
                margin-right: 20px;
                float: left;
                font-size: 19px;
                font-weight: 700;
                color: #999;
              }

              dd {
                cursor: pointer;
                font-size: 16px;
                font-weight: 500;
                float: left;
                margin-right: 5px;
                color: #666;
                height: 50px;
                line-height: 50px;
                padding: 2px 14px;
                border-top: 1px solid #eee;
                border-right: 1px solid #bbb;
                border-bottom: 1px solid #bbb;
                border-left: 1px solid #eee;
                border-radius: 10px;
                &.active {
                  color: rgb(243, 243, 241);

                  background-color: #45b8f6;
                }
              }
            }
          }

          .cartWrap {
            .controls {
              width: 48px;
              position: relative;
              float: left;
              margin-right: 15px;

              .itxt {
                width: 38px;
                height: 37px;
                border: 1px solid #ddd;
                color: #555;
                float: left;
                border-right: 0;
                text-align: center;
              }

              .plus,
              .mins {
                width: 15px;
                text-align: center;
                height: 17px;
                line-height: 17px;
                background: #f1f1f1;
                color: #666;
                position: absolute;
                right: -8px;
                border: 1px solid #ccc;
              }

              .mins {
                right: -8px;
                top: 19px;
                border-top: 0;
              }

              .plus {
                right: -8px;
              }
            }

            .add {
              float: left;

              a {
                background-color: #27ba9b;
                border-radius: 10px;
                padding: 0 25px;
                margin-left: 10px;
                font-size: 16px;
                color: #fff;
                height: 40px;
                font-weight: 700;
                line-height: 40px;
                display: block;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }

  .product-detail {
    width: 1200px;
    margin: 30px auto 0;
    overflow: hidden;

    .detail {
      .fitting {
        border: 1px solid #ddd;
        border-radius: 10px;
        margin-bottom: 15px;

        .kt {
          font-size: 25px;
          border-bottom: 1px solid #ddd;
          background: #f1f1f1;
          color: #333;
          padding: 10px 15px;
        }

        .good-suits {
          height: 170px;
          padding-top: 10px;

          .master {margin-left: 20px;
            width: 127px;
            height: 165px;
            text-align: center;
            position: relative;
            float: left;

            img {
              margin-top: 8px;
              width: 117px;
            }

            p {
              margin-left: -8px;
              margin-top: 10px;
              color: #c81623;
              font-size: 16px;
              font-weight: 700;
            }

            i {
              position: absolute;
              top: 60px;
              right: -8px;
              font-size: 18px;
              font-weight: 700;
            }
          }

          .suits {
            width: 668px;
            height: 165px;
            float: left;
            font-weight: 700;
            margin-right: 60px;
            .suitsItem {
              float: left;
              width: 127px;
              padding: 0 20px;
              text-align: center;

              img {
                width: 120px;
                height: 130px;
              }

              p {
                font-size: 12px;
              }

              label {
                display: block;
                position: relative;

                input {
                  vertical-align: middle;
                }

                span {
                  vertical-align: middle;
                }
              }
            }
          }

          .result {
            border-left: 1px solid #ddd;
            width: 153px;
            height: 165px;
            padding-left: 120px;
            float: left;
            text-align: center;
            .num {
              font-size: 18px;
              color: #999;
              margin-bottom: 10px;
              margin-top: 10px;
            }

            .price-tit {
              font-weight: bold;
              margin-bottom: 10px;
              font-weight: 700;
              font-size: 20px;
            }

            .price {
              color: #b1191a;
              font-size: 16px;
              font-weight: 700;
              margin-bottom: 10px;
            }

            .addshopcar {
              background-color: #e1251b;
              border-radius: 10px;
              border: 1px solid red;
              padding: 10px 25px;
              font-size: 16px;
              font-weight: 700;
              color: #fff;
              display: inline-block;
              box-sizing: border-box;
            }
          }
        }
      }

      .intro {
 margin-top: 80px;
          h1{
            font-size: 25px;
          border-bottom: 1px solid #ddd;
          background: #f1f1f1;
          color: #333;
          padding: 10px 15px;
          border-radius: 10px;
          }

        
        }

        .tab-content {
          .tab-pane {
            display: none;

            &.active {
              display: block;
            }

            &:nth-child(1) {
              .goods-intro {
                padding-left: 10px;

                li {
                  margin: 10px 0;
                  font-size: 20px;
                  font-weight: 700;;
                }
              }

              .intro-detail {
                img {
                  width: 100%;
                  border: 0;
    vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
 
</style>
