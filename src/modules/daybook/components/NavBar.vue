<template>
  <nav class="navbar bg-primary">
    <a class="navbar-brand text-white">
      <img
        src="@/assets/logo.png"
        alt="vue logo"
        class="d-inline-block align-text-top mx-2"
      />
      Daybook
    </a>
    <div class="d-flex">
      <button class="btn btn-outline-info mx-4">
        <i class="fa fa-sign-out-alt"></i>
      </button>
    </div>
  </nav>
</template>
<style scoped>
img {
  width: 40px;
  height: 40px;
  padding: 8px;
}
.navbar {
  display: flex;
  align-items: center;
  text-align: center;
}
</style>
