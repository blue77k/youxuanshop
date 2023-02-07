<template>
  <div class="order-main">
    <div class="container">
      <div class="order-body">
        <!-- 右侧内容 -->
        <!-- 路由组件出口的位置 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "",
};
</script>

<style lang="less">
.order-main {
  .container {
    margin: 0 auto;
    width: 1200px;

    .order-body {
      padding: 10px;
      color: #333;

      &:after {
        content: "";
        display: block;
        clear: both;
      }

      //左边

      //右边
      .order-right {
        //订单部分
        .order-content {
          margin: 0 20px;
          color: #666;

          //标题
          .title {
            margin-bottom: 22px;

            h2 {
              padding: 12px 0px;
              font-size: 18px;
              font-weight: 700;
              span {
                color: black;
              }
            }
          }

          //表头
          .chosetype {
            margin-bottom: 15px;
            color: #666;

            table {
              border: 1px solid #fcf9f9;
              border-collapse: separate;
              border-radius: 2px;
              width: 100%;
              max-width: 100%;
              border-spacing: 0;

              th {
                padding: 6px 8px;
                color: #666;
                font-weight: 700;
                vertical-align: bottom;

                height: 30px;
                line-height: 30px;
                border-bottom: 1px solid #e6e6e6;
                font-size: 18px;
                text-align: left;
              }
            }
          }

          // 表单内容
          .orders {
            font-size: 12px;

            a {
              &:hover {
                color: #4cb9fc;
              }
            }

            table {
              border: 1px solid #e6e6e6;
              border-collapse: collapse;
              border-radius: 2px;
              width: 100%;
              margin-bottom: 18px;
              max-width: 100%;

              th {
                padding: 6px 8px;
                line-height: 18px;
                text-align: left;
                vertical-align: bottom;
                background-color: #f4f4f4;
                font-size: 12px;
                color: #666;

                .pull-right {
                  float: right;
                  cursor: pointer;

                  img {
                    margin-right: 10px;
                    vertical-align: middle;
                  }
                }
              }

              td {
                font-size: 12px;
                color: #666;
                padding: 6px 8px;
                line-height: 18px;
                text-align: left;
                vertical-align: middle;
                border: 1px solid #e6e6e6;

                &.center {
                  text-align: center;
                }

                .typographic {
                  img {
                    float: left;
                    margin-right: 10px;
                  }

                  a {
                    float: left;
                    min-width: 80px;
                    max-width: 250px;
                    color: #e1251b;

                    &.service {
                      color: #666;
                    }
                  }

                  span {
                    float: left;
                    min-width: 80px;
                    max-width: 250px;
                    text-align: center;
                  }
                }
              }
            }
          }

          // 分页
          .choose-order {
            .pagination {
              margin: 38px 0;

              ul {
                font-size: 0;
                display: inline-block;

                li {
                  display: inline-block;
                  padding: 4px 9px;
                  font-size: 14px;
                  border: 1px solid #e0e9ee;

                  &.prev,
                  &.next {
                    background-color: #fafafa;
                  }

                  &.prev {
                    border-right-color: #28a3ef;
                  }

                  &.page {
                    border-color: #28a3ef;
                    border-left: 0;

                    &.actived {
                      background-color: #28a3ef;

                      a {
                        color: #fff;
                      }
                    }
                  }
                }
              }

              div {
                display: inline-block;
                font-size: 14px;
                color: #333;
              }
            }
          }
        }

        // 猜你喜欢
        .like {
          margin: 40px 20px;

          .kt {
            margin: 0;
            margin-bottom: 20px;
            padding: 12px;
            padding-left: 0px;
            font-size: 24px;
            i {
              font-size: 28px;
              font-weight: 700;
              color: #e1251b;
            }
          }

          .bb {
            display: flex;
            li {
              flex: 1;

              text-align: center;
              margin-right: 20px;

              border-radius: 20px;
              box-shadow: 0 0 2px 0;
              &:hover {
                transform: scale(1.05);
                transition: all 0.3s;
              }
              a {
                text-decoration: none;

                img {
                  padding-top: 5px;
                }
                p {
                  padding-top: 10px;
                  font-weight: 700;
                  font-size: 14px;
                }
                .price {
                  color: rgb(203, 3, 3);
                  font-size: 25px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
