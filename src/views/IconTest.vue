<template>
  <div class="flex">
    <Icon v-for="icon in icons" :key="icon" :name="icon"></Icon>
  </div>
</template>
<script>
export default {
  data() {
    return {
      icons: ["music", "heart", "star"],
    };
  },
};
</script>
