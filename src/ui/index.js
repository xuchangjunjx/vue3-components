import "bulma/css/bulma.css";
import "./style/css/font-awesome.css";

import Button from "./button/button.vue";
import Icon from "./icon/icon.vue";
import Dropdown from "./dropdown";
import Modal from "./modal";
import { default as MessageComponent, Message } from "./message/index";
import directives from "./directives";
export { Button, Modal, Message, Dropdown, Icon };
const components = {
  Button,
  Icon,
  Dropdown,
  Modal,
  MessageComponent
};
export default {
  install(app) {
    app.use(directives);
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
