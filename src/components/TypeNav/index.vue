<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveShow" @mouseenter="enterShow">
        <h1 class="all">全部商品分类</h1>
        <!--三级联动-->
        <transition name="sort">
          <div class="sort" v-show="show">
            <!-- 利用事件委派+编程式导航实现路由的跳转和传参-->
            <div class="all-sort-list2" @click="goSearch">
              <div
                class="item bo"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{ cur: currentIndex == index }"
              >
                <h3 @mouseenter="changeIndex(index)">
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <!--二三级分类-->
                <div
                  class="item-list clearfix"
                  :style="{ display: currentIndex == index ? 'block' : 'none' }"
                >
                  <div
                    class="subitem"
                    v-for="c2 in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                          >{{ c2.categoryName }}&nbsp;</a
                        >
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c1.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">严选</a>
        <a href="###">美妆馆</a>
        <a href="###">居家</a>
        <a href="###">全球购</a>
        <a href="###">团购</a>
        <a href="###">母婴</a>
        <a href="###">运动</a>
        <a href="###">数码</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "TypeNav",
  data() {
    return {
      //存取用户鼠标移入的位置
      currentIndex: -1,
      show: true,
    };
  },
  //组件挂载完毕，可以向服务器发请求
  mounted() {
    if (this.$route.path != "/home") {
      this.show = false;
    }
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    //进行节流操作
    changeIndex: throttle(function (index) {
      //修改当前currentIndex索引值
      //函数节流:在20MS时间之内只能执行一次
      this.currentIndex = index;
    }, 20),

    //进行路由跳转的回调函数
    goSearch(event) {
      //event.target:获取到的是出发事件的元素(div、h3、a、em、dt、dl)
      let node = event.target;
      //给a标签添加自定义属性data-categoryName,全部的字标签当中只有a标签带有自定义属性，别的标签名字----dataset纯属扯淡
      let { categoryname, category1id, category2id, category3id } =
        node.dataset;
      //第二个问题解决了：点击的到底是不是a标签（只要这个标签身上带有categoryname）一定是a标签
      //当前这个if语句：一定是a标签才会进入
      if (categoryname) {
        //准备路由跳转的参数对象
        let loction = { name: "search" };
        let query = { categoryName: categoryname };
        //一定是a标签：一级目录
        if (category1id) {
          query.category1Id = category1id;
          //一定是a标签：二级目录
        } else if (category2id) {
          query.category2Id = category2id;
          //一定是a标签：三级目录
        } else {
          query.category3Id = category3id;
        }
        //判断：如果路由跳转的时候，带有params参数，捎带脚传递过去
        if (this.$route.params) {
          loction.params = this.$route.params;
          //动态给location配置对象添加query属性
          loction.query = query;
          //路由跳转
          this.$router.push(loction);
        }
      }
    },
    //当鼠标移入的时候，让商品分类列表进行展示
    enterShow() {
      if (this.$route.path != "/home") {
        this.show = true;
      }
    },
    //当鼠标离开的时候，让商品分类列表进行隐藏
    leaveShow() {
      this.currentIndex = -1;
      //判断如果是Search路由组件的时候才会执行
      if (this.$route.path != "/home") {
        this.show = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #fc0303;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      border-radius: 5px;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 23px;
        line-height: 45px;
        font-size: 20px;
        font-weight: 500;
        color: #333;
        text-decoration: none;
      }
      a:hover {
        color: #e0b44f;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: rgba(0, 0, 0, 0.3);
      z-index: 999;

      .all-sort-list2 {
        overflow: hidden;
        height: 461px;
        .item {
          h3 {
            font-family: Helvetica Neue;
            line-height: 52px;
            font-size: 16px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 18px;
            margin: -1px;

            a {
              color: #fff;  
              cursor: pointer;
             
            }
            &.cur {
              background: skyblue;
            }
          }
          h3:hover {
            background: rgb(187, 189, 188);
           
          }

          .item-list {
          
            display: none;
            position: absolute;

            width: 734px;
            min-height: 460px;
            background: rgba(253, 252, 252, 1);
            left: 210px;
            border: 1px solid #ddd;
            top: 0;

            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid rgb(255, 255, 255);
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                 line-height: 30px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                  font-size: 18px;
                 

                  a {
                    cursor: pointer;
                    color: rgb(0, 0, 0);
                  }
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;
                  color: rgb(252, 250, 250);
                  em {
                    font-family: STKaiti;
                    float: left;
                    height: 20px;
                    font-size: 18px;
                    line-height: 20px;
                    padding: 0 10px;
                    margin-top: 5px;

                    a {
                      color: rgb(13, 13, 13);
                      cursor: pointer;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    //过渡动画的样式
    //过渡动画开始状态（进入）
    .sort-enter {
      height: 0px;
    }
    // 过渡动画结束状态（进入）
    .sort-enter-to {
      height: 461px;
    }
    // 定义动画时间、速率
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>
