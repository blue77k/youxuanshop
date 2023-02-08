<template>
  <div class="main1">
    <el-container class="main">
      <el-header>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </el-header>

      <div class="conter">
        <div class="left">
          <div class="aside1"></div>
          <div class="aside2"></div>
        </div>
        <div class="center">
           <h1>试试鼠标移入</h1>
        </div>
        <div class="right">
          <div class="aside3"></div>
          <div class="aside4"></div>
          <div class="aside5"></div>
        </div>
      </div>
      <div class="footer"></div>

      <!-- <div class="swiper1" ref="cur2">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./images/gd.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="./images/gd.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="./images/gd.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="./images/gd.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="./images/gd2.jpg" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div> -->
    </el-container>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Lz",
  mounted() {
    var swiper1 = new Swiper(this.$refs.cur2, {
      effect: "cube",
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
</script>

<style lang="less" scoped>
.main1 {
  height: 1000px;
  background-image: url(./images/bgm.png);
  background-size: 100% 100%;
  .main {
    width: 1200px;
    margin: auto;
    // .swiper1 {
    //   width: 300px;
    //   height: 300px;
    //   // position: absolute;
    //   // left: 50%;
    //   // top: 50%;

    //   margin-top: 10px;
    //   .swiper-slide {
    //     background-position: center;
    //     background-size: cover;
    //     img {
    //       display: block;
    //       width: 100%;
    //     }
    //   }
    // }
    .el-header {
      margin-top: 10px;
      border-radius: 10px;
      background-color: skyblue;
      ul {
        display: flex;

        li {
          margin-top: 15px;
          flex: 1;
          font-size: 18px;
        }
      }
    }
    .conter {
      margin-top: 10px;
      display: flex;
      .left {
        flex: 1;

        .aside1 {
          border-radius: 10px;
          margin-bottom: 20px;
          height: 200px;
          background-color: rgb(40, 65, 76);
        }
        .aside2 {
          border-radius: 10px;
          height: 300px;
          background-color: aquamarine;
        }
      }
      .center {
        
        display: flex;
        justify-content: center;
        align-items: center;
       color: #e7066f;
        border-radius: 10px;
        flex: 4;
        transition: all 0.6s linear;
        background-color: rgba(0, 0, 0, 0.1);
        margin: 0 20px;
        &:hover{
          transition: all 0.6s linear;
          background-color: rgba(0, 0, 0, 0.7);
          // background: url(./images/gd.jpg) no-repeat ;
         
          color: #fff;
        }
       
      }
      .right {
        flex: 1;

        .aside3 {
          border-radius: 10px;
          height: 300px;
          background-color: #fff;
        }
        .aside4 {
          border-radius: 10px;
          height: 50px;
          margin: 10px 0;
          background-color: pink;
        }
        .aside5 {
          border-radius: 10px;
          height: 150px;
          margin-top: 10px;
          background-color: goldenrod;
        }
      }
    }
    // background-color: brown;
    .footer {
      height: 200px;
      background-color: rgb(210, 230, 36);
      border-radius: 10px;
      margin-top: 10px;
    }
  }
}
</style>
