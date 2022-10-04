import { h, render } from "vue";
import Modal from "./modal.vue";
import Button from "../button/button.vue";
// 先定义一个组件 因为这里不能使用原来的new Vue来生成了
const ModalComponent = {
  data() {
    return {
      title: "",
      show: false,
      content: "",
      onOk: () => {},
    };
  },
  methods: {
    handleOk() {
      this.cancel();
      if (this.onOk) {
        this.onOk.apply(this);
      }
    },
    cancel() {
      this.show = false;
    },
  },
  render() {
    return h(
      Modal,
      {
        modelValue: this.show,
        title: this.title,
        // 监听modelValue事件
        "onUpdate:modelValue": value => {
          this.show = value;
        },
      },
      {
        // 注意⚠️ 渲染插槽 ，指定插槽名称
        default: () => this.content,
        footer: () =>
          h(
            "div",
            {
              class: "text-right",
            },
            [
              h(
                Button,
                {
                  // 监听点击事件
                  // on: {
                  onClick: () => {
                    this.handleOk();
                  },
                  // },
                },
                {
                  default: () => "确定",
                },
              ),
            ],
          ),
      },
    );
  },
};
// 预支一个全局变量
let instance;
// 创建实例
const initInstance = app => {
  if (!instance) {
    let dom = document.createElement("div");
    // 渲染组件
    const vnode = h(ModalComponent);
    // 类似$mount
    render(vnode, dom);
    // 添加到body中
    document.body.appendChild(dom.firstElementChild);
    instance = vnode.component;
  }
  // 添加全局方法
  app.config.globalProperties.$confirm = opt => {
    instance.data.show = true;
    instance.data.title = opt.title;
    instance.data.content = opt.content;
    instance.data.onOk = opt.onOk;
  };
};

// app.use(Modal)时,构造实例
Modal.install = app => {
  initInstance(app);
  app.component("Modal", Modal);
};
export default Modal;
