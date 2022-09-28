<template>
  <div class="dropdown" v-clickout="closeDropdown">
    <div class="dropdown-trigger" @click="toggleActive">
      <slot></slot>
    </div>
    <div :class="{ 'dropdown-menu': true, 'is-active': this.active }">
      <div class="dropdown-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  provide() {
    return {
      Dropdown: this,
    };
  },
  props: {
    //⚠️  value 改成 modelValue
    modelValue: String,
  },
  watch: {
    //⚠️  value  的监听改成 modelValue
    modelValue(n) {
      this.currentValue = n;
    },
  },
  data() {
    return {
      active: false,
      currentValue: this.modelValue,
    };
  },
  methods: {
    toggleActive() {
      this.active = !this.active;
    },
    closeDropdown() {
      this.active = false;
    },
    triggerClick(name) {
      console.log("triggerClick", name);
      this.currentValue = name;
      // 改成update:modelValue
      //⚠️ this.$emit("input", name);
      this.$emit("update:modelValue", name);
      this.toggleActive();
      this.$emit("on-change", name);
    },
  },
};
</script>
<style lang="sass" scoped>
.dropdown-menu
  display: block
  opacity: 0
  top: 0
  z-index: -1
  transition: all 0.2s linear
  &.is-active
      opacity: 1
      top: 100%
      z-index: 1
      transition: all 0.2s linear
a.dropdown-item.is-active
  background-color: #00d1b2
</style>
