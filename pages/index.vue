<template>
  <div>
    <Header />
    <Loading v-show="loading === true" />
    <Body v-show="loading === false" />
  </div>
</template>

<script>
import Vue from "vue";
import Body from "~/components/Body.vue";
import Loading from "../components/Loading.vue";
import Header from "~/components/Header.vue";

export default Vue.extend({
  components: { Body, Loading, Header },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
});
</script>
