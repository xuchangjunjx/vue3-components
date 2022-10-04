<template>
  <div>
    <Modal v-model="isShow" title="1111">
      <h1 style="color: red">hello</h1>
    </Modal>
    <Button @on-click="show" type="primary">show</Button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    show() {
      this.$confirm({
        title: "123456",
        content: "aaaaaaaa",
        onOk() {
          console.log("onOK");
        },
      });
      // this.isShow = true;
    },
  },
};
</script>
