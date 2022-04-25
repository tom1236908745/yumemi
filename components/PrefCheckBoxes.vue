<template>
  <div class="container">
    <div v-show="prefectures !== null && prefectures !== undefined">
      <div class="checkBoxGroup">
        <label
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
        </label>
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
</style>