<template>
  <div class="rank">
    <div class="tab">
      <div class="tab-tit clearfix">
        <a href="javascript:;" class="on">
          <p class="img">
            <i></i>
          </p>
          <p class="text">热卖排行</p>
        </a>
        <a href="javascript:;">
          <p class="img">
            <i></i>
          </p>
          <p class="text">特价排行</p>
        </a>
        <a href="javascript:;">
          <p class="img">
            <i></i>
          </p>
          <p class="text">新品排行</p>
        </a>
      </div>
    </div>
    <div class="content">
      <ul>
        <li>
          <div class="img-item">
            <p class="tab-pic">
              <a href="#">
                <img src="./images/2.jpg" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#"
                  >华硕ROG系列32英寸电竞显示器电脑显示器游戏显示器4K
                  144Hz显示器G-Sync HDMI2.1 HDR600量子点PG32UQ超神32</a
                >
              </div>
              <p class="info-price">售价：¥6899.00</p>
            </div>
          </div>
          <div class="img-item">
            <p class="tab-pic">
              <a href="#">
                <img src="./images/sl.jpg" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#"
                  >IGIFTFIRE仿海贼王手办 儿童玩具男孩GK 三千世界索隆大型 超大
                  模型摆件 红衣和服索隆《高25cm)</a
                >
              </div>
              <p class="info-price">售价：¥5908.00</p>
            </div>
          </div>
          <div class="img-item">
            <p class="tab-pic">
              <a href="#">
                <img src="./images/3.jpg" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#"
                  >技嘉（GIGABYTE） RTX4090 24G 魔鹰超级雕
                  台式机电脑电竞游戏旗舰独立显卡 RTX4090 魔鹰【注册四年保修】</a
                >
              </div>
              <p class="info-price"> 售价：￥31999.00</p>
            </div>
          </div>
          <div class="img-item">
            <p class="tab-pic">
              <a href="#">
                <img src="./images/4.jpg" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#"
                  >【官网价直降1100】Apple iPhone 8 Plus 256GB 银色
                  移动联通电信4G手机</a
                >
              </div>
              <p class="info-price">售价：￥14998.00</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "index",
};
</script>

<style lang="less" scoped>
.rank {
  height: 480px;
  width: 1200px;
  margin: 23px auto;

  .tab {
    margin: 0 auto;

    width: 312px;

    .tab-tit {
      text-align: center;
      margin-bottom: 20px;

      a {
        display: block;
        padding: 0 18px;
        float: left;
        text-decoration: none;
        font-size: 16px;
        color: #999;

        p {
          margin: 5px 0;
        }

        .img {
          i {
            width: 35px;
            height: 35px;
            display: block;
            background: url(./images/bg0.png);
            margin-left: 10px;
          }
        }

        .text {
          line-height: 28px;
        }
      }

      .on {
        color: #e60012;

        .img {
          i {
            background-position: -35px 0;
          }
        }
      }
    }
  }

  .content {
    overflow: hidden;
    padding: 10px;

    ul {
      li {
        list-style: none;
        line-height: 18px;

        .img-item {
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          border: rgb(222, 215, 215) 1px solid;
          width: 269px;
          float: left;
          overflow: hidden;
          margin: 0 12px 10px;
          background: rgb(255, 254, 254);

          .tab-pic {
            width: 230px;
            height: 210px;
            overflow: hidden;
            text-align: center;
            margin: 5px auto 18px;

            a {
              img {
                width: 200px;
                height: 200px;
              }
            }
          }

          .tab-info {
            background: #fafafa;

            .info-title {
              height: 50px;
              line-height: 28px;
              overflow: hidden;
              margin: 0 auto;
              padding-left: 10px;

              a {
                color: #333;
                text-decoration: none;
              }
            }

            .info-price {
              font-size: 20px;
              color: #e1251b;
              height: 35px;
              padding-left: 10px;
              display: block;
              line-height: 24px;
              margin: 10px auto 0;
            }
          }
        }
        .img-item:hover {
          transition: all 0.3s linear;
          transform: scale(1.06);
        }
      }
    }
  }
}
</style>
