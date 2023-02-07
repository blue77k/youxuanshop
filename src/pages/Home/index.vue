<template>
<div>
<!--使用三三级联动组件-->
  <TypeNav></TypeNav>
  <ListContainer></ListContainer>
  <Rank></Rank>
  <Recommend></Recommend>
  <Like></Like>
  <Floor v-for="floor in floorList" :key="floor.id" :list="floor" />
  <Brand></Brand>
</div>
</template>
<script>
import {mapState} from "vuex";
import Brand from "@/pages/Home/Brand";
import Floor from "@/pages/Home/Floor";
import Like from "@/pages/Home/Like";
import Rank from "@/pages/Home/Rank";
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "index",
 components:{ListContainer,Recommend,Rank,Like,Floor,Brand},
 mounted() {
    this.$store.dispatch("getFloorList")
   this.$store.dispatch('getUserInfo');
 },
  computed:{
    ...mapState({
      floorList:state => state.home.floorList,
    })
  }
}
</script>

<style scoped>

</style>
