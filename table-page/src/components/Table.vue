<template>
  <div class="Table">
    <div style="display:none;">{{getTableData}}</div>
    <table id="example" class="table-striped table-bordered" style="width:100%">
      <thead>
        <tr>
          <th>流水號</th>
          <th>押注金額</th>
          <th>餘額</th>
          <th>日期時間</th>
          <th>操作行為</th>
          <th>總押注</th>
          <th>總贏分</th>
          <th>贏分</th>
        </tr>
      </thead>
      <tbody></tbody>
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
    computedStatus(value) {
      switch (value) {
        case 0:
          return "換匯";
        case 1:
          return "結算";
        case 2:
          return "正在玩";
        case 3:
          return "普通押注";
        case 4:
          return "加倍押注";
        case 5:
          return "壓大";
        default:
      }
    },
    appendData(value) {
      let data = {
        ball: "",
        combinationType: "",
        pillarLeft: "",
        pillarRight: ""
      };
      if (value["jsonGameResultHistory"]) {
        this.clickData = JSON.parse(value["jsonGameResultHistory"]);
      } else {
        this.clickData = data;
      }
    }
  },
  computed: {
    getTableData() {
      this.tableArr = this.$store.state.tableData["mTableWagers"];
      var dataGet;
      var vm = this;
      if (this.tableArr) {
        var table = $("#example").DataTable({
          data: this.tableArr,
          responsive: true,
          columns: [
            { data: "id" },
            { data: "bet" },
            { data: "credit" },
            { data: "datetime" },
            { data: "operationType" },
            { data: "totalBet" },
            { data: "totalWin" },
            { data: "win" }
          ],
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
        $(document).ready(() => {
          $("#example tbody").on("click", "tr", function() {
            dataGet = table.row(this).data();
            vm.appendData(dataGet);
            $("#myModal").modal("show");
            $("#myModal").on("shown.bs.modal", function() {
              document.getElementById("FocusTo").focus();
            });
          });
        });
      } else {
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
  mounted() {}
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
