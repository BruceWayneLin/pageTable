<template>
  <div class="home">
    <img class="logo" src="@/assets/logo.png" alt>
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
    console.log(this.$route.query.p1);

    var agent_id = this.$route.query.p1;
    var game_id = this.$route.query.p2;
    var user_id = this.$route.query.p3;
    var payload = this.$route.query.p4;
    var data = {};
    data["agent_id"] = 0;
    data["game_id"] = 0;
    data["user_id"] = 48;
    data["payload"] =
      "fjsapfe8wpuevjaur539woeitroiewlvlsnvdwaur9813up9HY(*Y(HPNfhdoahfe923uwhofhe12y34321yrhehefpfjdsajfh09e2urjpfp";
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
