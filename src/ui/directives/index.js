/**
 *  自定义指令
 *  */
import clickout from "./clickout";

const directives = [clickout];
export default {
  install(app) {
    directives.forEach(el => {
      app.directive(el.name, el);
    });
  },
};
