<template>
  <div class="container">
    <div v-show="prefectures !== null && prefectures !== undefined">
      <div class="checkBoxGroup">
        <div
          for="checkBox"
          v-for="p in prefectures"
          :key="p.prefCode"
          class="checkBox"
        >
          <input
            type="checkbox"
            v-model="checkedNames"
            :value="p"
            id="checkBox"
          />
          {{ p.prefName }}
        </div>
      </div>
      <Chart :checkedNames="checkedNames" :prefData="prefData" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prefectures: [],
      prefData: {},
      checkedNames: [],
    };
  },
  async mounted() {
    const url1 = "https://opendata.resas-portal.go.jp/api/v1/prefectures";
    this.prefData = await this.$axios.$get(url1, {
      headers: { "X-API-KEY": process.env.API_KEY },
    });
    this.prefectures = this.prefData.result;
  },
};
</script>
<style scoped>
.checkBoxGroup {
  margin: 5rem;
}
.checkBox {
  width: 6rem;
  line-height: 1.5rem;
  display: inline-block;
}
@media screen and (max-width: 750px) {
  .checkBoxGroup {
    margin: 3rem;
  }
  .checkBox {
    width: 5rem;
    font-size: 0.7rem;
  }
}
@media screen and (max-width: 550px) {
  .checkBoxGroup {
    margin: 1rem;
  }
  .checkBox {
    width: 4rem;
    font-size: 0.5rem;
  }
}
</style>