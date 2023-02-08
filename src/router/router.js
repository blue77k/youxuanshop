import Detail from "@/pages/Detail";
/*import Home from "@/pages/Home";
import Search from "@/pages/Search";*/
const Search = () => import("@/pages/Search");
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import addCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import trade from "@/pages/Trade";
import pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";
import MyOrder from "@/pages/Center/myOrder";
import Plus from "@/pages/Plus";
import Box from "@/pages/Box";
import Lz from "@/pages/Lz"
import Purchase from "@/pages/Purchase"
export default [
  {
    path: "/center",
    component: Center,
    children: [
      {
        path: "myorder",
        component: MyOrder,
      },

      //设置页面开始时候的默认页面
      {
        path: "",
        redirect: "myorder",
      },
    ],
  },
  {
    path: "/plus",
    component: Plus,
    meta: { show: true },
  },
  {
    path: "/purchase",
    component: Purchase,
    meta: { show: true },
  },
  {
    path: "/lz",
    component: Lz,
    // meta: { show: true },
  },
  {
    path: "/box",
    component: Box,
    meta: { show: true },
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    meta: { show: true },
  },
  {
    path: "/pay",
    component: pay,
    //只能从交易界面，才能跳转到支付界面
    beforeEnter(to, from, next) {
      if (from.path === "/trade") {
        next();
      } else {
        next("/trade");
      }
    },
  },
  {
    path: "/trade",
    component: trade,
    meta: { show: true },
    //只能从购物车界面，才能跳转到交易页面
    beforeEnter(to, from, next) {
      if (from.path == "/shopcart") {
        next();
      } else {
        next("/shopcart");
      }
    },
  },
  {
    path: "/shopcart",
    component: ShopCart,
    meta: { show: true },
  },
  {
    path: "/detail/:skuid",
    component: Detail,
    meta: { show: true },
  },
  {
    path: "/home",
    component: () => import("@/pages/Home"),
    meta: { show: true },
  },
  {
    name: "search",
    path: "/search/:keyword?",
    component: Search,
    meta: { show: true },
  },
  {
    path: "/login",
    component: Login,
    meta: { show: false },
  },
  {
    path: "/register",
    component: Register,
    meta: { show: false },
  },
  //重定向，在项目跑起来的时候，定位首页
  {
    path: "*",
    redirect: "/home",
  },
  {
    path: "/addcartsuccess",
    name: "addcartsuccess",
    component: addCartSuccess,
    meta: { show: true },
  },
];
