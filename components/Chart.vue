<template>
  <div class="chartGroup">
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";

export default {
  components: {
    highcharts: Chart,
  },
  props: ["checkedNames", "prefData"],
  data() {
    return {
      prefectures: [],
      seriesTmpArr: [],
      seriesArr: [],
      seriesDef: {
        name: "",
        data: [],
      },
      prefPopArr: [],
    };
  },
  computed: {
    chartOptions() {
      return {
        title: {
          text: "都道府県別人口",
        },
        xAxis: {
          title: {
            text: "年度",
          },
          categories: [
            "1960",
            "1965",
            "1970",
            "1975",
            "1980",
            "1985",
            "1990",
            "1995",
            "2000",
            "2005",
            "2010",
            "2015",
            "2020",
            "2025",
            "2030",
            "2035",
            "2040",
            "2045",
          ],
        },
        yAxis: {
          title: {
            text: "人口",
          },
        },
        series: this.seriesArr,
      };
    },
  },
  watch: {
    checkedNames(val) {
      this.seriesArr = [];
      val.forEach((v) => {
        this.seriesTmpArr.forEach((s) => {
          if (v.prefName === s.name) {
            this.seriesArr.push(s);
          }
        });
      });
    },
    async prefData(val) {
      if (val.result !== undefined || val.result !== null) {
        this.prefectures = val.result;
        const url =
          "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear";
        await Promise.all(
          this.prefectures.map(async (pref) => {
            const res = await this.$axios.$get(url, {
              headers: { "X-API-KEY": process.env.API_KEY },
              params: {
                prefCode: pref.prefCode,
              },
            });
            this.prefPopArr = [];
            res.result.data[0].data.forEach((r) => {
              this.prefPopArr.push(r.value);
            });
            this.seriesDef.name = pref.prefName;
            this.seriesDef.data = this.prefPopArr;
            const tmp = JSON.parse(JSON.stringify(this.seriesDef));
            this.seriesTmpArr.push(tmp);
          })
        );
      }
      this.reverceLoading();
    },
  },
  methods: {
    reverceLoading: function () {
      this.$store.commit("reverceLoading");
    },
  },
};
</script>
<style scoped>
.chartGroup {
  margin: 0 1rem;
}
</style>