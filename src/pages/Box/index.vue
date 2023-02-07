<template>
  <div class="conter">
    <div ref="chart" style="width: 50%; height: 376px"></div>

    <div ref="chart1" style="width: 50%; height: 376px"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getEchartData();
    this.getEchartData1();
  },
  methods: {
    getEchartData() {
      const chart = this.$refs.chart;
      if (chart) {
        const myChart = this.$echarts.init(chart);
        const option = {
          title: {
            text: "采购清单",
            subtext: "Fake Data",
            left: "center",
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)",
          },
          legend: {
            left: "center",
            top: "bottom",
            data: [
              "rose1",
              "rose2",
              "rose3",
              "rose4",
              "rose5",
              "rose6",
              "rose7",
              "rose8",
            ],
          },
          toolbox: {
            show: true,
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              restore: { show: true },
              saveAsImage: { show: true },
            },
          },
          series: [
           
            {
              name: "Area Mode",
              type: "pie",
              radius: [20, 140],
              center: ["50%", "55%"],
              roseType: "area",
              itemStyle: {
                borderRadius: 5,
              },
              data: [
                { value: 30, name: "服装" },
                { value: 28, name: "电器" },
                { value: 26, name: "食品" },
                { value: 24, name: "手办" },
                { value: 22, name: "文具" },
                { value: 20, name: "书籍" },
                { value: 18, name: "日用品" },
                { value: 16, name: "运动器械" },
              ],
            },
          ],
        };

        myChart.setOption(option);
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      }
      this.$on("hook:destroyed", () => {
        window.removeEventListener("resize", function () {
          myChart.resize();
        });
      });
    },
    getEchartData1() {
      const chart1 = this.$refs.chart1;
      if (chart1) {
        const myChart = this.$echarts.init(chart1);
        const option = {
          title: {
            
          },
          tooltip: {
            trigger: "axis",
          },
          legend: {
            data: [
              "Email",
              "Union Ads",
              "Video Ads",
              "Direct",
              "Search Engine",
            ],
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          toolbox: {
            feature: {
              saveAsImage: {},
            },
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
              "一月",
              "二月",
              "三月",
              "四月",
              "五月",
              "六月",
              "七月",
              "八月",
              "九月",
              "十月",
              "十一月",
              "十二月",
            ],
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              name: "Email",
              type: "line",
              stack: "Total",
              data: [
                120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230,
              ],
            },
            {
              name: "Union Ads",
              type: "line",
              stack: "Total",
              data: [
                220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330,
              ],
            },
            {
              name: "Video Ads",
              type: "line",
              stack: "Total",
              data: [
                150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190, 330,
              ],
            },
            {
              name: "Direct",
              type: "line",
              stack: "Total",
              data: [
                320, 332, 301, 334, 390, 330, 320, 320, 332, 301, 334, 390, 330,
              ],
            },
            {
              name: "Search Engine",
              type: "line",
              stack: "Total",
              data: [
                820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290,
                1330,
              ],
            },
          ],
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      }
      this.$on("hook:destroyed", () => {
        window.removeEventListener("resize", function () {
          myChart.resize();
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.conter {
  display: flex;
  width: 1200px;
 
  margin:30px  auto;
  background-color:rgba(rgb(228, 226, 148), 0.1)
}
</style>
