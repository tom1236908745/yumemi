<template>
  <div>
    <Loading v-show="loading === true" />
    <PrefCheckBoxes v-show="loading === false" />
  </div>
</template>

<script>
import Vue from "vue";
import PrefCheckBoxes from "~/components/PrefCheckBoxes.vue";
import Loading from "../components/Loading.vue";

export default Vue.extend({
  components: { PrefCheckBoxes, Loading },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
});
</script>
