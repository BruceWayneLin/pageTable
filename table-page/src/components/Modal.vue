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
                  <td>pillarLeft</td>
                  <td>ball</td>
                  <td>pillarRight</td>
                  <td>combinationType</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{{item['pillarLeft']}}</td>
                  <td>
                    {{item['ball']}}
                    <i class="fa-spade" style="color: white;"></i>
                  </td>
                  <td>{{item['pillarRight']}}</td>
                  <td>{{item['combinationType']}}</td>
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