import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

import home from "@/store/Home";
import search from "@/store/Search";
import detail from "@/store/detail";
import shopCart from "@/store/shopcart";
import user from "@/store/user";
import trade from "@/store/trade";
import pay from '@/store/pay'
export default new Vuex.Store({
    modules:{
        home,
        search,
        detail,
        shopCart,
        user,
        trade,
        pay,

    }

})
