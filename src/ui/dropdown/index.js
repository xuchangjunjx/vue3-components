import Dropdown from "./dropdown.vue";
import DropdownItem from "./dropdown-item";
export default {
  install(app) {
    app.component("Dropdown", Dropdown);
    app.component("DropdownItem", DropdownItem);
  },
};
