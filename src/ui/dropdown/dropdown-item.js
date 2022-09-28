// 引入h
import { h } from "vue";
export default {
  inject: ["Dropdown"],
  props: {
    name: String,
    active: Boolean,
  },
  // 删除 h
  render() {
    return h(
      "a",
      {
        // 不再需要on 直接提出来click
        // on: {
        //   click: () => {
        //     console.log("this.Dropdown", this.Dropdown);
        //     this.Dropdown.triggerClick(this.name);
        //   },
        // },
        // 原生事件
        onClick: () => {
          console.log("this.Dropdown", this.Dropdown);
          this.Dropdown.triggerClick(this.name);
        },
        class: {
          "dropdown-item": true,
          "is-active": this.active || this.Dropdown.currentValue === this.name,
        },
      },
      // 这里改成函数
      this.$slots.default(),
    );
  },
};
