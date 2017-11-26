<template>
    <div class="train_list">
        <div v-if="!guodu">
            <div class="train_list_info">
                <table class="hovertable">
                    <tr>
                        <th>车次</th>
                        <th class="train_station">出发站</th>
                        <th>到点</th>
                        <th class="train_station">到达站</th>
                        <th>开点</th>
                        <th class="train_station">历时</th>
                        <th>车型</th>
                    </tr>
                    <tr v-for="item in train_list">
                        <td>{{item.train_no}}</td>
                        <td class="train_station">{{item.start_station}}</td>
                        <td>{{item.start_time}}</td>
                        <td class="train_station">{{item.end_station}}</td>
                        <td>{{item.end_time}}</td>
                        <td class="train_station">{{item.run_time}}</td>
                        <td>{{item.train_type}}</td>
                    </tr>
                </table>

            </div>
        </div>
        <spinner v-if="guodu"></spinner>
    </div>
</template>

<script>
    import spinner from '../components/spinner/spinner'
    import bus from '../assets/eventBus'

    export default {
        data () {
            return {
                guodu: true,
                val: '',
                train_list: []
            }
        },

        components: {
            'spinner': spinner
        },

        created: function(){

        },

        mounted: function(){
            this.$nextTick(function(){
                var self = this;
                bus.$on('get_station',function(s_to_s_list){
                    self.train_list = s_to_s_list.body.result.list;
                    console.log(self.train_list)
                })
                this.guodu = false;
            })
        },

        methods: {

        }
    }
</script>

<style>
    .train_list{
        font-size: 20px;
        position: absolute;
        left:20px;
        height:inherit;
        width: 668px;
    }

    .train_list_info{
        margin-bottom: 50px;
    }

    table.hovertable {
        font-family: verdana,arial,sans-serif;
        font-size:20px;
        color:#333333;
        border-width: 1px;
        border-color: #999999;
        border-collapse: collapse;
    }
    table.hovertable th {
        background-color:#c3dde0;
        border-width: 1px;
        width: 70px;
        height:35px;
        border-style: solid;
        border-color: #a9c6c9;
    }
    table.hovertable tr {
        background-color:#d4e3e5;
    }
    table.hovertable td {
        border-width: 1px;
        width: 70px;
        height:35px;
        border-style: solid;
        border-color: #a9c6c9;
    }

    table tr .train_station{
        width:120px;
    }
</style>
