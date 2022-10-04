import { openBlock, createElementBlock, normalizeClass, renderSlot, createTextVNode, toDisplayString, h, resolveDirective, withDirectives, createElementVNode, resolveComponent, normalizeStyle, createVNode, withCtx, render as render$4 } from 'vue';

// https://bulma.io/documentation/elements/button/
const types = [
  "primary",
  "success",
  "warning",
  "danger",
  "info",
  "link",
  "dark",
  "default",
];
const sizes = ["small", "normal", "medium", "large"];
var script$4 = {
  name: "sm-button",
  props: {
    // 按钮文字 可以用slot覆盖
    text: [String, Number],
    // 按钮大小
    size: {
      type: String,
      default: "normal",
      validator(v) {
        return sizes.includes(v);
      },
    },
    //  按钮类型
    type: {
      type: String,
      default: "primary",
      validator(v) {
        return types.includes(v);
      },
    },
    // 禁用状态
    disabled: Boolean,
    // 边框按钮
    outline: Boolean,
    // 圆角按钮
    round: Boolean,
    // loading状态
    loading: Boolean,
  },
  computed: {
    // 按钮的class
    classes() {
      return {
        button: true,
        "is-loading": this.loading,
        "is-outlined": this.outline,
        "is-rounded": this.round,
        [`is-${this.type}`]: this.type,
        [`is-${this.size}`]: this.size,
      };
    },
  },
  methods: {
    handleClick() {
      this.$emit("on-click");
    },
  },
};

const _hoisted_1$3 = ["disabled"];

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", {
    class: normalizeClass($options.classes),
    disabled: $props.disabled,
    onClick: _cache[0] || (_cache[0] = (...args) => ($options.handleClick && $options.handleClick(...args)))
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createTextVNode(toDisplayString($props.text), 1 /* TEXT */)
    ])
  ], 10 /* CLASS, PROPS */, _hoisted_1$3))
}

script$4.render = render$3;
script$4.__file = "src/ui/button/button.vue";

var script$3 = {
  props: {
    name: String,
    size: {
      type: [String, Number],
      default() {
        return 14;
      },
    },
  },
  render() {
    return h("i", {
      class: {
        fa: true,
        [`fa-${this.name}`]: this.name,
      },
      style: {
        fontSize: this.size + "px",
      },
    });
  },
};

script$3.__file = "src/ui/icon/icon.vue";

var script$2 = {
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

const _hoisted_1$2 = { class: "dropdown" };
const _hoisted_2$2 = { class: "dropdown-content" };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_clickout = resolveDirective("clickout");

  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$2, [
    createElementVNode("div", {
      class: "dropdown-trigger",
      onClick: _cache[0] || (_cache[0] = (...args) => ($options.toggleActive && $options.toggleActive(...args)))
    }, [
      renderSlot(_ctx.$slots, "default")
    ]),
    createElementVNode("div", {
      class: normalizeClass({ 'dropdown-menu': true, 'is-active': this.active })
    }, [
      createElementVNode("div", _hoisted_2$2, [
        renderSlot(_ctx.$slots, "content")
      ])
    ], 2 /* CLASS */)
  ])), [
    [_directive_clickout, $options.closeDropdown]
  ])
}

script$2.render = render$2;
script$2.__scopeId = "data-v-117d6eed";
script$2.__file = "src/ui/dropdown/dropdown.vue";

// 引入h
var DropdownItem = {
  inject: ["Dropdown"],
  props: {
    name: String,
    active: Boolean
  },

  // 删除 h
  render() {
    return h("a", {
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
        "is-active": this.active || this.Dropdown.currentValue === this.name
      }
    }, // 这里改成函数
    this.$slots.default());
  }

};

var Dropdown = {
  install(app) {
    app.component("Dropdown", script$2);
    app.component("DropdownItem", DropdownItem);
  }

};

var script$1 = {
  components: {
    Button: script$4,
  },
  props: {
    modelValue: Boolean,
    title: String,
    top: {
      type: String,
      default() {
        return "50px";
      },
    },
    clickMaskHide: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  data() {
    return {
      currentValue: this.modelValue,
    };
  },
  watch: {
    modelValue(n) {
      this.currentValue = n;
    },
  },
  methods: {
    close() {
      this.currentValue = false;
      this.$emit("update:modelValue", false);
    },
    clickMask() {
      if (this.clickMaskHide) {
        this.close();
      }
    },
  },
};

const _hoisted_1$1 = { class: "modal-card-head" };
const _hoisted_2$1 = { class: "modal-card-title" };
const _hoisted_3 = { class: "modal-card-body" };
const _hoisted_4 = { class: "modal-card-foot" };
const _hoisted_5 = /*#__PURE__*/createTextVNode("取消");
const _hoisted_6 = /*#__PURE__*/createTextVNode("确定");

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Button = resolveComponent("Button");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass({ modal: true, 'is-active': !!this.currentValue })
  }, [
    createElementVNode("div", {
      class: "modal-background",
      onClick: _cache[0] || (_cache[0] = (...args) => ($options.clickMask && $options.clickMask(...args)))
    }),
    createElementVNode("div", {
      class: "modal-card shadow",
      style: normalizeStyle({ top: $props.top })
    }, [
      createElementVNode("header", _hoisted_1$1, [
        createElementVNode("p", _hoisted_2$1, toDisplayString($props.title), 1 /* TEXT */),
        createElementVNode("button", {
          class: "delete",
          "aria-label": "close",
          onClick: _cache[1] || (_cache[1] = (...args) => ($options.close && $options.close(...args)))
        })
      ]),
      createElementVNode("section", _hoisted_3, [
        renderSlot(_ctx.$slots, "default")
      ]),
      createElementVNode("footer", _hoisted_4, [
        renderSlot(_ctx.$slots, "footer", {}, () => [
          createVNode(_component_Button, {
            type: "default",
            onOnClick: $options.close
          }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["onOnClick"]),
          createVNode(_component_Button, {
            type: "primary",
            onOnClick: $options.close
          }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["onOnClick"])
        ])
      ])
    ], 4 /* STYLE */)
  ], 2 /* CLASS */))
}

script$1.render = render$1;
script$1.__scopeId = "data-v-3d834de9";
script$1.__file = "src/ui/modal/modal.vue";

const ModalComponent = {
  data() {
    return {
      title: "",
      show: false,
      content: "",
      onOk: () => {}
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
    }

  },

  render() {
    return h(script$1, {
      modelValue: this.show,
      title: this.title,
      // 监听modelValue事件
      "onUpdate:modelValue": value => {
        this.show = value;
      }
    }, {
      // 注意⚠️ 渲染插槽 ，指定插槽名称
      default: () => this.content,
      footer: () => h("div", {
        class: "text-right"
      }, [h(script$4, {
        // 监听点击事件
        // on: {
        onClick: () => {
          this.handleOk();
        } // },

      }, {
        default: () => "确定"
      })])
    });
  }

}; // 预支一个全局变量

let instance$1; // 创建实例

const initInstance = app => {
  if (!instance$1) {
    let dom = document.createElement("div"); // 渲染组件

    const vnode = h(ModalComponent); // 类似$mount

    render$4(vnode, dom); // 添加到body中

    document.body.appendChild(dom.firstElementChild);
    instance$1 = vnode.component;
  } // 添加全局方法


  app.config.globalProperties.$confirm = opt => {
    instance$1.data.show = true;
    instance$1.data.title = opt.title;
    instance$1.data.content = opt.content;
    instance$1.data.onOk = opt.onOk;
  };
}; // app.use(Modal)时,构造实例


script$1.install = app => {
  initInstance(app);
  app.component("Modal", script$1);
};

var script = {
  name: "Message",
  props: {
    modelValue: Boolean,
    text: String,
    type: String,
  },
  computed: {
    classes() {
      return {
        message: true,
        [`is-${this.mapper[this.type]}`]: this.type,
        active: this.active,
      };
    },
  },
  data() {
    return {
      mapper: {
        success: "success",
        error: "danger",
        warning: "warning",
        info: "info",
      },
      active: this.modelValue,
    };
  },
  watch: {
    modelValue(n) {
      this.active = n;
    },
  },
  methods: {
    handleClick() {
      this.active = false;
      this.$emit("update:modelValue", false);
    },
  },
};

const _hoisted_1 = { class: "message-header" };
const _hoisted_2 = { style: {"color":"#fff"} };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("article", {
    class: normalizeClass($options.classes)
  }, [
    createElementVNode("div", _hoisted_1, [
      createElementVNode("p", _hoisted_2, toDisplayString($props.text), 1 /* TEXT */),
      createElementVNode("button", {
        class: "delete",
        "aria-label": "delete",
        onClick: _cache[0] || (_cache[0] = (...args) => ($options.handleClick && $options.handleClick(...args)))
      })
    ])
  ], 2 /* CLASS */))
}

script.render = render;
script.__scopeId = "data-v-63dfbbc6";
script.__file = "src/ui/message/message.vue";

let instance;

const showMessage = _ref => {
  let {
    text,
    type
  } = _ref;

  if (!instance) {
    return;
  }

  const show = () => {
    instance.data.text = text;
    instance.data.show = true;
    instance.data.type = type; // 2秒后关闭

    setTimeout(() => {
      instance.data.show = false;
    }, 2000);
  }; // 如果当前已经出现了


  if (instance.data.show) {
    instance.data.show = false; // 延迟100毫秒在打开

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
    let dom = document.createElement("div"); // 渲染组件

    const vnode = h({
      data() {
        return {
          show: false,
          text: "",
          type: ""
        };
      },

      render() {
        return h(script, {
          // 初始化属性
          text: this.text,
          modelValue: this.show,
          type: this.type,
          // 监听事件
          "onUpdate:modelValue": n => {
            this.show = n;
          } // on: {
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
      }

    }); // 类似$mount

    render$4(vnode, dom); // 添加到body中

    document.body.appendChild(dom.firstElementChild);
    instance = vnode.component;
  } // 在Vue原型上暴露一个$modal方法 方法包含三个参数


  app.config.globalProperties.$message = showMessage;

  app.config.globalProperties.$message.success = text => {
    showMessage({
      text,
      type: "success"
    });
  };

  app.config.globalProperties.$message.error = text => {
    showMessage({
      text,
      type: "error"
    });
  };

  app.config.globalProperties.$message.warning = text => {
    showMessage({
      text,
      type: "warning"
    });
  };

  app.config.globalProperties.$message.info = text => {
    showMessage({
      text,
      type: "info"
    });
  };
}; // 这里就不暴露组件了


var MessageComponent = {
  install: app => {
    newinstance(app);
  }
}; //  暴露出方法

function Message(config) {
  showMessage(config);
}

var clickout = {
  name: "clickout",

  // eslint-disable-next-line
  bind(el, binding, vnode) {
    function documentHandler(e) {
      if (el.contains(e.target)) {
        return false;
      }

      if (binding.expression) {
        binding.value(e);
      }
    }

    el.__vueClickOutside__ = documentHandler;
    document.addEventListener("click", documentHandler);
  },

  update() {},

  // eslint-disable-next-line
  unbind(el, binding) {
    document.removeEventListener("click", el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }

};

/**
 *  自定义指令
 *  */
const directives = [clickout];
var directives$1 = {
  install(app) {
    directives.forEach(el => {
      app.directive(el.name, el);
    });
  }

};

const components = {
  Button: script$4,
  Icon: script$3,
  Dropdown,
  Modal: script$1,
  MessageComponent
};
var index = {
  install(app) {
    app.use(directives$1);
    Object.keys(components).forEach(key => {
      // 注册组件
      let cp = components[key];

      if (cp.install) {
        app.use(cp);
      } else {
        app.component(key, components[key]);
      }
    });
  }

};

export { script$4 as Button, Dropdown, script$3 as Icon, Message, script$1 as Modal, index as default };
