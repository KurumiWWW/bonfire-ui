<script>
export default {
  name: "b-button",
  props: {
    type: {
      default: "default",
      type: String,
      required: false,
    },
  },
  data() {
    return {
      typeList: ["default", "primary", "success", "warning", "danger", "info"],
    }
  },
  created() {
    this.checkType()
  },
  methods: {
    checkType() {
      if (this.typeList.indexOf(this.type) === -1) {
        console.error(`unexpected type:'${this.type}'`)
      }
    },
  },
}
</script>

<template>
  <button :class="['--b-button', `--b-button-${type}`]"><slot></slot></button>
</template>

<style lang="scss" scoped>
.--b-button {
  cursor: pointer;
  padding: 10px;
  background: #fff;
  border: 1px solid $gray;
  color: $black;
  border-radius: 4px;
  user-select: none;
  transition: 0.1s;
  &:hover {
    background: $main-color-5;
    color: $main-color;
    border-color: $main-color-4;
  }
  &:active {
    border-color: $main-color;
  }
}
.--b-button-primary {
  color: #fff;
  background: $main-color-2;
  border-color: $main-color-2;
  &:hover {
    background: $main-color-3;
    color: #fff;
  }
  &:active {
    background: $main-color-2;
    border-color: $main-color-2;
  }
}
</style>
