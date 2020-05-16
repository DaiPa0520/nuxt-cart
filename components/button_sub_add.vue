<template>
  <div class="input-group">
    <div class="input-group-prepend">
      <button
        style="min-width: 2.5rem"
        class="btn btn-decrement btn-outline-secondary"
        type="button"
        @click="Add(-1)"
      >
        <strong>-</strong>
      </button>
    </div>
    <input
      type="text"
      inputmode="decimal"
      style="text-align: center"
      class="form-control"
      v-model="total"
      @change="Change()"
    />
    <div class="input-group-append">
      <button
        style="min-width: 2.5rem"
        class="btn btn-increment btn-outline-secondary"
        type="button"
        @click="Add(1)"
      >
        <strong>+</strong>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: function() {
        return 1;
      }
    },
  },
  data() {
    return {
      total:this.count
    };
  },
  watch: {
    //監聽值
    count(to, from) {
      this.total = to;
    }
  },
  methods: {
    // 初始
    Add(value) {
      this.$emit("update:count", Number(this.total)+Number(value) );
    },
    Change() {
      this.$emit("update:count", Number(this.total) );
    }
  },
};
</script>
<style lang="scss" scoped>
.logo {
  height: 50px;
}
.nav-wrapper.list {
  background-color: white;
  border-bottom: 1px solid #ccc;
}
li {
  padding-left: 20px;
  padding-right: 20px;
  border-left: 1px solid #ccc;
  &:first-child {
    border-left: 0px solid;
  }
}
</style>