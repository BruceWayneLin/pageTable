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
                  <td>
                    <img
                      v-if="calPattern(item['pillarLeft'])"
                      style="background-color:white;"
                      :src="`../imgs/cardPattern/${calPattern(item['pillarLeft'])}.png`"
                    >
                    <span>{{item['pillarLeft'] ? calNumber(item['pillarLeft']) : '無資料'}}</span>
                  </td>
                  <td>
                    <img
                      v-if="calPattern(item['ball'])"
                      style="background-color:white;"
                      :src="`../imgs/cardPattern/${calPattern(item['ball'])}.png`"
                    >
                    <span>{{item['pillarLeft'] ? calNumber(item['ball']) : '無資料'}}</span>
                  </td>
                  <td>
                    <img
                      v-if="calPattern(item['pillarRight'])"
                      style="background-color:white;"
                      :src="`../imgs/cardPattern/${calPattern(item['pillarRight'])}.png`"
                    >
                    <span>{{item['pillarLeft'] ? calNumber(item['pillarRight']) : '無資料'}}</span>
                  </td>
                  <td>{{item['combinationType'] ? computedText(item['combinationType']): '無資料'}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button
              id="closeBtn"
              type="button"
              class="btn btn-default"
              data-dismiss="modal"
              autofocus
            >關閉</button>
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
    calNumber(index) {
      var number = Math.floor(index / 4 + 1);
      if (number == 11) {
        number = "J";
      } else if (number == 12) {
        number = "Q";
      } else if (number == 13) {
        number = "K";
      }
      return number;
    },
    calPattern(index) {
      if (!index) {
        return "";
      }
      let value = index % 4;
      switch (value) {
        case 0:
          return `club`;
        case 1:
          return `diamond`;
        case 2:
          return `heart`;
        case 3:
          return `spade`;
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
tbody span {
  padding-left: 5px;
  position: relative;
  top: 3px;
}
.modal-title {
  width: 100%;
}
.modal-dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%) !important;
}
button {
  display: inline-block;
  margin: auto;
  background-color: red;
  color: white;
  font-weight: bold;
}

@media screen and (max-width: 768px) {
}
</style>