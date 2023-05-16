<template>
  <div
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
    class="entry-container mb-3 pointer p-2"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">julio</span>
      <span class="mx-2 fs-light">2023</span>
    </div>
    <div class="entry-description">
      Aliqua elit occaecat est magna qui ut elit occaecat deserunt elit nisi ea.
      Aliqua est fugiat sint amet esse velit. Officia elit in ex amet fugiat.
      Fugiat commodo do id mollit anim. Est veniam eiusmod est irure enim
      nostrud ea exercitation officia consequat anim aliqua magna.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #1c3e50;
  transition: 02s all ease-in;
  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 02s all ease-in;
  }
}
.entry-description {
  font-size: 12px;
}
</style>
