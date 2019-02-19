<template>
  <div class="home">
    <img id="logo" class="logo" src="@/assets/logo.png" alt>
    <Table/>
  </div>
</template>

<script>
// @ is an alias to /src
import Table from "@/components/Table.vue";

export default {
  name: "home",
  data: () => {
    return {};
  },
  components: {
    Table
  },
  methods: {},
  mounted() {
    // http://localhost:8081/#/?p1=0&p2=0&p3=48&p4=fjsapfe8wpuevjaur539woeitroiewlvlsnvdwaur9813up9HY%28%2aY%28HPNfhdoahfe923uwhofhe12y34321yrhehefpfjdsajfh09e2urjpfp
    var agent_id = this.$route.query.p1;
    var game_id = this.$route.query.p2;
    var token = this.$route.query.p3;
    var payload = this.$route.query.p4;
    // window.location.pathName = this.$router.push({ path: "/", replace: true });
    var data = {};
    data["agent_id"] = agent_id;
    data["game_id"] = game_id;
    data["token"] = token;
    data["payload"] = payload;
    data["url"] = "https://stage.ucoin.club:30001/api/history";
    this.$store.dispatch("callApi", data);
  }
};
</script>

<style scoped lang="scss">
.home {
  background: url("~@/assets/bg.png");
  height: 100%;
  width: 100%;
  .logo {
    margin: 10px;
  }
}
</style>
