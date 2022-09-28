<script>
import { h } from "vue";
export default {
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
</script>
