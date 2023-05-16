<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <span class="text-success fs-3 fw-bold">15</span>
    <span class="mx-1 fs-3">Julio</span>
    <span class="mx-2 fs-4 fw-light">2023</span>
  </div>
  <div>
    <button class="btn btn-danger mx-2">
      <i class="fa fa-trash-alt"></i>
      borrar
    </button>
    <button class="btn btn-primary">
      <i class="fa fa-upload"></i>
      Subir foto
    </button>
  </div>
  <hr />
  <div class="d-flex flex-colum px-3 h-75">
    <textarea placeholder="¿qué sucedió hoy?"> </textarea>
  </div>
  <FabButton icon="fa-save" />
  <img
    class="img-thumbnail"
    src="http://cmr-portfolio.com/static/media/intro-powerfans.46d324b6.png"
    alt="entry-pct"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    FabButton: defineAsyncComponent(() =>
      import("../components/FabButton.vue")
    ),
  },
};
</script>
<style lang="scss" scoped>
textarea {
  height: 100%;
  width: 100%;
  color: gray;
  font-size: 18px;
  border: none;
  &:focus {
    outline: none;
  }
}
img {
  width: 250px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
</style>
