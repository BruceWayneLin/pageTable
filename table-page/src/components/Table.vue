<template>
  <div class="Table">
    <div style="display:none;">{{getTableData}}</div>
    <table id="example" class="table-striped table-bordered" style="width:100%">
      <thead>
        <tr>
          <th>bet</th>
          <th>credit</th>
          <th>datetime</th>
          <th>ID</th>
          <th>operationType</th>
          <th>totalBet</th>
          <th>totalWin</th>
          <th>win</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in tableArr"
          @click="appendData(item)"
          data-toggle="modal"
          data-target="#myModal"
        >
          <td>{{item['bet']}}</td>
          <td>{{item['credit']}}</td>
          <td>{{item['datetime']}}</td>
          <td>{{item['id']}}</td>
          <td>{{item['operationType']}}</td>
          <td>{{item['totalBet']}}</td>
          <td>{{item['totalWin']}}</td>
          <td>{{item['win']}}</td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
    <customModal :item="clickData"/>
  </div>
</template>

<script>
import customModal from "@/components/Modal.vue";
export default {
  name: "Table",
  data() {
    return {
      tableData: {},
      tableArr: [],
      clickData: {}
    };
  },
  methods: {
    appendData(value) {
      this.clickData = JSON.parse(value["jsonGameResultHistory"]);
    }
  },
  computed: {
    getTableData() {
      this.tableArr = this.$store.state.tableData["mTableWagers"];
      if (this.tableArr) {
        $(".dataTables_empty").hide();
      } else {
        $(".dataTables_empty").show();
      }
      return this.$store.state.tableData;
    }
  },
  props: {
    msg: String
  },
  components: {
    customModal
  },
  mounted() {
    $(document).ready(function() {
      $("#example").DataTable({
        language: {
          emptyTable: "無資料...",
          processing: "處理中...",
          loadingRecords: "載入中...",
          lengthMenu: "顯示 _MENU_ 項結果",
          zeroRecords: "沒有符合的結果",
          info: "顯示第 _START_ 至 _END_ 項結果，共 _TOTAL_ 項",
          infoEmpty: "顯示第 0 至 0 項結果，共 0 項",
          infoFiltered: "(從 _MAX_ 項結果中過濾)",
          infoPostFix: "",
          search: "搜尋:",
          paginate: {
            first: "第一頁",
            previous: "上一頁",
            next: "下一頁",
            last: "最後一頁"
          },
          aria: {
            sortAscending: ": 升冪排列",
            sortDescending: ": 降冪排列"
          }
        }
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Table {
  padding: 15px;
  background-color: white;
  .dataTables_filter,
  .dataTables_length,
  .paginate_button {
    color: white !important;
  }
  .paginate_button {
    background-color: gray !important;
  }
}
</style>
