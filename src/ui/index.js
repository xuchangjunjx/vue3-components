// 记得把main.js这个删了
import "./style/index.sass";
import "./style/css/font-awesome.css";

import Button from "./button/button.vue";
import Icon from "./icon/icon.vue";
import Dropdown from "./dropdown";
import directives from "./directives";
export default {
  install(app) {
    app.use(directives);
    app.component("Button", Button);
    app.component("Icon", Icon);
    app.use(Dropdown);
  },
};
