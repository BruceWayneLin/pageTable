<template>
  <div class="home">
    <img class="logo" src="@/assets/logo.png" alt="">
    <Table/>
  </div>
</template>

<script>
// @ is an alias to /src
import Table from '@/components/Table.vue'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    Table
  },
  methods: {
    callApi() {
          axios.post('https://stage.ucoin.club:20000/api/values', {Body:
    {
    "userid":"I`m userid",
    "gameid":"I`m gameid",
    "token":"I`m toekn"
    }})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  mounted() {
    this.callApi();

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
