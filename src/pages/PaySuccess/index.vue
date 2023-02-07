<template>
  <div class="paysuccess">

    <div class="success">
      <h3>
        <img src="./images/right.png" width="48" height="48">
        恭喜您，支付成功啦！
      </h3>
      <div>
        <img src="./images/d55cb70ab69635a9a9e99596a6f1ee5.png" alt="">
        <h1>添加客服 咨询售后</h1>
      </div>
      <div class="paydetail">
        <p class="button">
          <router-link class="btn-look" to="/center">查看订单</router-link>
          <router-link class="btn-goshop" to="/">继续购物</router-link>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'PaySuccess',
    //组件内守卫
    //进去前
    beforeRouteEnter(to,from,next){
      //在渲染该组件的对应路由被confirm前调用
      //不能获取组件实例this，因为还没加载出来
      if (from.path == "/pay") {
        next();
      } else {
        next(false);
      }
    },
    //数据变化时候
    beforeRouteUpdate(to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      console.log("辉辉还是牛的！！！！");
    },
    //导航离开该组件的对应路由时候调用
    beforeRouteLeave(to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      next();
    }
  }
</script>

<style lang="less" scoped>
  .paysuccess {
    margin: 20px auto;
    padding: 25px;
   border: 1px solid rgb(211, 211, 211); 
   border-radius: 10px;
   box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    width: 1200px;
    width: 1148px;

    .success {
      width: 500px;
      margin: 0 auto;

      h3 {
        margin: 20px 115px;
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;

        img {
          max-width: 100%;
          vertical-align: middle;
          border: 0;
          margin-right: 14px;
        }
      }
    div{
      text-align: center;
      img{
        width: 242px;
       
      }
    }

      .paydetail {
        margin-left: 20px;
        font-size: 15px;

        .button {
          margin: 40px 0;
          line-height: 26px;

          a {
            display: inline-block;
            box-sizing: border-box;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
            border-radius: 2px;
            user-select: none;
            font-size: 18px;
            padding: 10px 20px;
            line-height: 22px;
            text-decoration: none;
border-radius: 10px;
            &.btn-look {
              font-weight: 700;
              margin-right: 13px;
              color: #fff;
              background-color: #e1251b;
              border: 1px solid #e1251b;
            }
            

            &.btn-goshop {
              color: #666;
              background-color: #eee;
              border: 1px solid #e1e1e1;   
              font-weight: 700;
            }
          }
        }
      }
    }
  }
</style>
