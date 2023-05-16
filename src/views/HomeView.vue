<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="goToDaybook" class="btn btn-primary">primary</button>
    <button @click="goToDaybook" class="btn btn-secondary">secondary</button>
    <button @click="goToDaybook" class="btn btn-success">success</button>
    <h1>home</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  methods: {
    goToDaybook() {
      this.$router.push({ name: "no-entry" });
    },
  },
};
</script>
