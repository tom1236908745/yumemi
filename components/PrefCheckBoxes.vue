<template>
  <div class="container">
    <div v-show="prefectures !== null && prefectures !== undefined">
      <div class="checkBoxGroup">
        <label for="checkBox" v-for="p in prefectures" :key="p.prefCode">
          <input
            type="checkbox"
            v-model="checkedNames"
            :value="p"
            id="checkBox"
          />
          {{ p.prefName }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prefectures: [],
      checkedNames: [],
    };
  },
  async mounted() {
    console.log("process.env.API_KEY " + process.env.API_KEY);
    const url1 = "https://opendata.resas-portal.go.jp/api/v1/prefectures";
    const res = await this.$axios.$get(url1, {
      headers: { "X-API-KEY": process.env.API_KEY },
    });
    this.prefectures = res.result;
  },
};
</script>
<style scoped>
.checkBoxGroup {
  margin: 5rem;
}
</style>