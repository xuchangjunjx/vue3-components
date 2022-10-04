import { h, render } from "vue";
import MessageComponent from "./message.vue";
// 构造一个唯一的实例
let instance;
const showMessage = ({ text, type }) => {
  if (!instance) {
    return;
  }
  const show = () => {
    instance.data.text = text;
    instance.data.show = true;
    instance.data.type = type;
    // 2秒后关闭
    setTimeout(() => {
      instance.data.show = false;
    }, 2000);
  };
  // 如果当前已经出现了
  if (instance.data.show) {
    instance.data.show = false;
    // 延迟100毫秒在打开
    setTimeout(() => {
      show();
    }, 100);
  } else {
    show();
  }
  console.log("instance", instance);
};

const newinstance = app => {
  if (!instance) {
    let dom = document.createElement("div");
    // 渲染组件
    const vnode = h({
      data() {
        return {
          show: false,
          text: "",
          type: "",
        };
      },
      render() {
        return h(MessageComponent, {
          // 初始化属性
          text: this.text,
          modelValue: this.show,
          type: this.type,
          // 监听事件
          "onUpdate:modelValue": n => {
            this.show = n;
          },
          // on: {
          //   input: n => {
          //     this.show = n;
          //   },
          // },
          // props: {
          //   text: this.text,
          //   value: this.show,
          //   type: this.type,
          // },
        });
      },
    });
    // 类似$mount
    render(vnode, dom);
    // 添加到body中
    document.body.appendChild(dom.firstElementChild);
    instance = vnode.component;
  }

  // 在Vue原型上暴露一个$modal方法 方法包含三个参数
  app.config.globalProperties.$message = showMessage;
  app.config.globalProperties.$message.success = text => {
    showMessage({ text, type: "success" });
  };
  app.config.globalProperties.$message.error = text => {
    showMessage({ text, type: "error" });
  };
  app.config.globalProperties.$message.warning = text => {
    showMessage({ text, type: "warning" });
  };
  app.config.globalProperties.$message.info = text => {
    showMessage({ text, type: "info" });
  };
};
// 这里就不暴露组件了
export default {
  install: app => {
    newinstance(app);
  },
};
//  暴露出方法
export function Message(config) {
  showMessage(config);
}
