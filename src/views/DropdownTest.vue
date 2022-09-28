<template>
  <div>
    1{{ value }}2
    <Dropdown @on-change="selected" v-model="value">
      <Button
        >hello
        <Icon name="angle-down" size="16"></Icon>
      </Button>
      <template #content>
        <DropdownItem name="aa">aa</DropdownItem>
        <DropdownItem name="bb">bb</DropdownItem>
      </template>
    </Dropdown>
    <Button @on-click="value = 'aa'"></Button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    selected(name) {
      console.log("name", name);
      // this.$message.success(name);
    },
  },
};
</script>
