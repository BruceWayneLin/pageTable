<template>
  <div class="customModal">
    <!-- Modal -->
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">下注紀錄</h4>
          </div>
          <div class="modal-body">
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <td>左龍柱</td>
                  <td>球</td>
                  <td>右龍柱</td>
                  <td>遊戲結果</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{{item['pillarLeft'] ? calPattern(item['pillarLeft']): '無資料'}}</td>
                  <td>{{item['ball'] ? calPattern(item['ball']): '無資料'}}</td>
                  <td>{{item['pillarRight'] ? calPattern(item['pillarRight']): '無資料'}}</td>
                  <td>{{item['combinationType'] ? computedText(item['combinationType']): '無資料'}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "customModal",
  props: {
    item: Object
  },
  computed: {},
  methods: {
    calPattern(index) {
      let value = index % 4;
      let number = Math.floor(index / 4 + 1);
      if (number == 11) {
        number = "J";
      } else if (number == 12) {
        number = "Q";
      } else if (number == 13) {
        number = "K";
      }
      switch (value) {
        case 0:
          return `梅花${number}`;
        case 1:
          return `方塊${number}`;
        case 2:
          return `紅心${number}`;
        case 3:
          return `黑桃${number}`;
        default:
      }
    },
    computedText(value) {
      switch (value) {
        case 0:
          return "同花順";
        case 1:
          return "三條";
        case 2:
          return "單吊";
        case 3:
          return "雙喜";
        case 4:
          return "三門";
        case 5:
          return "射龍門";
        case 6:
          return "比大小";
        case 7:
          return "相鄰";
        case 8:
          return "撞龍柱";
        case 9:
          return "沒贏";
        default:
      }
    }
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
.modal-title {
  width: 100%;
}
.modal-dialog {
  max-width: 80% !important;
}
</style>