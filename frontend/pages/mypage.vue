<template>
  <div>
    <p>Hi from {{ name }}</p>
    <NLink to="/">Home page</NLink>
    <button @click="handleClick">Press</button>
  </div>
</template>

<script>
const data = {
  handleClick: function() {
    console.log("CLICKED!");
  }
};

const asyncData = {
  name: process.static ? "static" : process.server ? "server" : "client"
};

export default {
  data() {
    return data;
  },
  asyncData() {
    return asyncData;
  },
  head: {
    title: "About page"
  }
};
</script>


<style lang="scss">
.ymca {
  @include center; // will be resolved as position:absolute....
  color: $gray; // will be resolved to #333
}
</style>