<template>
  <div>
    <Header />
    <Loading v-show="loading === true" />
    <PrefCheckBoxes v-show="loading === false" />
  </div>
</template>

<script>
import Vue from "vue";
import PrefCheckBoxes from "~/components/PrefCheckBoxes.vue";
import Loading from "../components/Loading.vue";
import Header from "~/components/Header.vue";

export default Vue.extend({
  components: { PrefCheckBoxes, Loading, Header },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
});
</script>
