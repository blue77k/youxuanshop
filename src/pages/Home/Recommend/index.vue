<template>
  <div class="container">
    <div class="head">
      <h3> &nbsp; 新鲜好物 <i class="el-icon-s-shop"> </i></h3>
      <a href=""> <span>查看全部</span> <i class="el-icon-arrow-right"></i></a>
    </div>
    <div class="center">
      <ul>
        <li>
          <a href=""
            ><img src="./images/1.jpg" alt="" />
            <div class="boor">
              <p>KENROLL吾皇潮趣男女室外拖鞋</p>
              <p class="price">¥139.00</p>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/2.png" alt="" />
            <div class="boor">
              <p>简约两条带女式高跟凉鞋</p>
              <p class="price">¥39.00</p>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/3.png" alt="" />
            <div class="boor">
              <p>男女同款情侣抗菌夜视休闲跑鞋</p>
              <p class="price">¥171.00</p>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <img src="./images/4.jpg" alt="" />
            <div class="boor">
              <p>冰与火的碰撞威士忌杯2支装</p>
              <p class="price">¥149.00</p>
            </div></a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "index  ",
};
</script>

<style lang="less" scoped>
.container {
  width: 1200px;
  margin: auto;
  .head {
    display: flex;
    align-items: flex-end;
    padding-bottom:25px;
    a{
      text-decoration: none;
      &:hover{
        color: aqua;
      }
    }
    h3 {
      font-size: 24px;
      flex: 1;
    }
    span {
      color: #999;
      font-size: 16px;
      &:hover{
        color: rgb(65, 241, 77);
      }
    }
  }
  .center {
    height: 406px;
    ul {
      height: 406px;
      display: flex;

      li {
      
        height: 406px;
        flex: 1;
        a {
          text-decoration: none;
          width: 280px;
          img {
            margin-bottom: -4px;
            width: 280px;
            height: 306px;
          }
          div {
            width: 280px;
            background-color: #f0f9f4;
            p {
              text-align: center;
              padding-top: 10px;
              font-size: 16px;
            }
            .price {
              color: rgb(192, 0, 0);
            }
          }
        }
      }
      li:hover {
        transition: all 0.3s linear;
        transform: scale(1.06);
        
      }
    }
  }
}
</style>
