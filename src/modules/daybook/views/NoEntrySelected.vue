<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">no hay nada selecionado</h1>
  </div>
  <FabButton @on:click="goToCreateNewEntry"></FabButton>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    FabButton: defineAsyncComponent(() =>
      import("../components/FabButton.vue")
    ),
  },
  methods: {
    goToCreateNewEntry() {
      this.$router.push({ name: "entry", params: { id: "new" } });
    },
  },
};
</script>
<style lang="scss" scoped>
div {
  height: 100%;
}
</style>
