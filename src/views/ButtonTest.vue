<template>
  <div>
    <Button type="success" @on-click="clicked">success</Button>
    <Button type="primary">primary</Button>
  </div>
</template>
<script>
export default {
  methods: {
    clicked() {
      console.log("clicked button");
    },
  },
};
</script>
