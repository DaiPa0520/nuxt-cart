<template>
  <section class="banner">
    <div class="banner d-flex justify-content-center align-items-center">
      <img class="w-100" :src="res.image[0].src" alt data-aos="zoom-in" />
      <!-- 123 -->
    </div>
  </section>
</template>

<script>

export default {
  name: "",
  props: {
    // 父組件來源
    res: {
      type: Object,
      default: function() {
        return {};
      }
    },
  },
   data() {
    return {
      _:this.res,
    }
  },
  created(){
    // console.log(this.data)
  }
}
</script>