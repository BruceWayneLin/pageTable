<template>
  <div class="home">
    <img class="logo" src="@/assets/logo.png" alt="">
    <Table/>
  </div>
</template>

<script>
// @ is an alias to /src
import Table from '@/components/Table.vue'

export default {
  name: 'home',
  components: {
    Table
  }
}
</script>

<style scoped lang="scss">
  .home {
    background: url('~@/assets/bg.png');
    height: 100%;
    width: 100%;
    .logo {
      margin: 10px;
    }
  }
</style>
