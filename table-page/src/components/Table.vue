<template>
  <div class="Table">
   <table id="example" class=" table-striped table-bordered" style="width:100%">
        <thead>
            <tr>
                <th>時間</th>
                <th>注單編號</th>
                <th>遊戲類別</th>
                <th>結果</th>
                <th>總投注</th>
                <th>總派彩</th>
                <th>彩金資料</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in tableArr" @click="appendData(item)" data-toggle="modal" data-target="#myModal">
                <td>{{item['dateTime']}}</td>
                <td>{{item['bitNumber']}}</td>
                <td>{{item['bitGame']}}</td>
                <td>{{item['gameResult']}}</td>
                <td>{{item['totalBit']}}</td>
                <td>{{item['totalPai']}}</td>
                <td>{{item['info']}}</td>
            </tr>
        </tbody>
        <tfoot>
            
        </tfoot>
    </table>
    <customModal :item="clickData"/>
  </div>
</template>

<script>
import customModal from '@/components/Modal.vue'
export default {
  name: 'Table',
  data(){
    return {
        tableArr: [
            {
                'dateTime': '2019-01-02 06:50:55',
                'bitNumber': '144396509904',
                'bitGame': '紅狗',
                'gameResult': '輸',
                'totalBit': '1.00',
                'totalPai': '2.00',
                'info': ''
            },
            {
                'dateTime': '2019-01-02 06:50:55',
                'bitNumber': '144396509904',
                'bitGame': '彩卷',
                'gameResult': '輸',
                'totalBit': '1.00',
                'totalPai': '2.00',
                'info': ''
            },
            {
                'dateTime': '2019-01-02 06:50:55',
                'bitNumber': '144396509904',
                'bitGame': '象棋',
                'gameResult': '輸',
                'totalBit': '1.00',
                'totalPai': '2.00',
                'info': ''
            },
            {
                'dateTime': '2019-01-02 06:50:55',
                'bitNumber': '144396509904',
                'bitGame': '籃球',
                'gameResult': '輸',
                'totalBit': '1.00',
                'totalPai': '2.00',
                'info': ''
            },
            {
                'dateTime': '2019-01-02 06:50:55',
                'bitNumber': '144396509904',
                'bitGame': '棒球',
                'gameResult': '輸',
                'totalBit': '1.00',
                'totalPai': '2.00',
                'info': ''
            },
            {
                'dateTime': '2019-01-02 06:50:55',
                'bitNumber': '144396509904',
                'bitGame': '伍柒玖',
                'gameResult': '輸',
                'totalBit': '1.00',
                'totalPai': '2.00',
                'info': ''
            },
            {
                'dateTime': '2019-01-02 06:50:55',
                'bitNumber': '144396509904',
                'bitGame': '紅狗',
                'gameResult': '輸',
                'totalBit': '1.00',
                'totalPai': '2.00',
                'info': ''
            },
            {
                'dateTime': '2019-01-02 06:50:55',
                'bitNumber': '144396509904',
                'bitGame': '撞球',
                'gameResult': '輸',
                'totalBit': '1.00',
                'totalPai': '2.00',
                'info': ''
            },
            {
                'dateTime': '2019-01-02 06:50:55',
                'bitNumber': '144396509904',
                'bitGame': '21點',
                'gameResult': '輸',
                'totalBit': '1.00',
                'totalPai': '2.00',
                'info': ''
            },
            {
                'dateTime': '2019-01-02 06:50:55',
                'bitNumber': '144396509904',
                'bitGame': '紅狗',
                'gameResult': '輸',
                'totalBit': '1.00',
                'totalPai': '2.00',
                'info': ''
            },
            {
                'dateTime': '2019-01-02 06:50:55',
                'bitNumber': '144396509904',
                'bitGame': '紅狗',
                'gameResult': '輸',
                'totalBit': '1.00',
                'totalPai': '2.00',
                'info': ''
            },
            {
                'dateTime': '2019-01-02 06:50:55',
                'bitNumber': '144396509904',
                'bitGame': '5PK',
                'gameResult': '輸',
                'totalBit': '1.00',
                'totalPai': '2.00',
                'info': ''
            },
            {
                'dateTime': '2019-01-02 06:50:55',
                'bitNumber': '144396509904',
                'bitGame': '紅狗',
                'gameResult': '輸',
                'totalBit': '1.00',
                'totalPai': '2.00',
                'info': ''
            },
            {
                'dateTime': '2019-01-02 06:50:55',
                'bitNumber': '144396509904',
                'bitGame': '輪盤',
                'gameResult': '輸',
                'totalBit': '1.00',
                'totalPai': '2.00',
                'info': ''
            },
            {
                'dateTime': '2019-01-02 06:50:55',
                'bitNumber': '144396509904',
                'bitGame': '德普克牌',
                'gameResult': '輸',
                'totalBit': '1.00',
                'totalPai': '2.00',
                'info': ''
            },
            {
                'dateTime': '2019-01-02 06:50:55',
                'bitNumber': '144396509904',
                'bitGame': '小瑪莉',
                'gameResult': '輸',
                'totalBit': '1.00',
                'totalPai': '2.00',
                'info': ''
            },
            {
                'dateTime': '2019-01-02 06:50:55',
                'bitNumber': '144396509904',
                'bitGame': '紅狗',
                'gameResult': '輸',
                'totalBit': '1.00',
                'totalPai': '2.00',
                'info': ''
            },
            {
                'dateTime': '2019-01-02 06:50:55',
                'bitNumber': '144396509904',
                'bitGame': '射龍門',
                'gameResult': '輸',
                'totalBit': '1.00',
                'totalPai': '2.00',
                'info': ''
            }
        ],
        clickData: {}        
    }
  }, 
  methods: {
    appendData(value) {
       this.clickData = value;
    }
  },
  computed: {
  },
  props: {
    msg: String
  },
  components: {
      customModal
  },
  mounted() {
    $(document).ready(function() {
        $('#example').DataTable({
            'language' : {
                "emptyTable": "無資料...",
                "processing": "處理中...",
                "loadingRecords": "載入中...",
                "lengthMenu": "顯示 _MENU_ 項結果",
                "zeroRecords": "沒有符合的結果",
                "info": "顯示第 _START_ 至 _END_ 項結果，共 _TOTAL_ 項",
                "infoEmpty": "顯示第 0 至 0 項結果，共 0 項",
                "infoFiltered": "(從 _MAX_ 項結果中過濾)",
                "infoPostFix": "",
                "search": "搜尋:",
                "paginate": {
                    "first": "第一頁",
                    "previous": "上一頁",
                    "next": "下一頁",
                    "last": "最後一頁"
                },
                "aria": {
                    "sortAscending": ": 升冪排列",
                    "sortDescending": ": 降冪排列"
                }
            }
        })
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .Table {
        padding: 15px;
        background-color: white;
        .dataTables_filter, .dataTables_length, .paginate_button {
            color: white!important;
        }
        .paginate_button {
            background-color: gray!important;
        }
    }
</style>
