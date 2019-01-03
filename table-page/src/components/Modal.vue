<template>
    <div class="customModal">
        <!-- Modal -->
        <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">{{item['bitGame']}}-下注紀錄</h4>
                    </div>
                    <div class="modal-body">
                        <table class="table table-dark">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">下注種類</th>
                                <th scope="col">總投注</th>
                                <th scope="col">金額</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                    <td>{{item['bitGame']}}</td>
                                    <td>{{item['totalBit']}}</td>
                                    <td>{{item['totalPai']}}</td>
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
        name: 'customModal',
        props: {
            item: Object
        }
    }
</script>

<style scoped lang="scss">
    .modal-title {
        width: 100%;
    }
    .modal-dialog {
        max-width: 80%!important;
    }
</style>