<template>
    <div class="train_information">
        <div v-if="!guodu">
            <div train_information_list>
                <table class="hovertable">
                    <tr>
                        <th>站号</th>
                        <th class="train_station">车站</th>
                        <th>到点</th>
                        <th>开点</th>
                        <th>里程</th>
                        <th>停车</th>
                    </tr>
                    <tr v-for="value in train_no_list">
                        <td>{{value.train_id}}</td>
                        <td class="train_station">{{value.station_name}}</td>
                        <td>{{value.arrived_time}}</td>
                        <td>{{value.leave_time}}</td>
                        <td>{{value.mileage}}</td>
                        <td>{{value.stay}}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div v-if="guodu"></div>
    </div>
</template>

<script>
    import bus from '../assets/eventBus'

    export default {
        data () {
            return {
                guodu: true,
                train_no_list: ''
            }
        },

        mounted: function(){
            this.$nextTick(function(){
                var self = this;
                bus.$on('get_trainno',function(train_no){
                    self.train_no_list = train_no.body.result.station_list;
                    console.log(self.train_no_list)
                })
                this.guodu = false;
            })
        },

        methods: {

        }
    }
</script>

<style>
    .train_information{
        font-size: 20px;
        position: absolute;
        left:20px;
        height:inherit;
        width: 510px;
    }

    .train_information{
        margin-bottom: 50px;
    }

    table.hovertable {
        font-family: verdana,arial,sans-serif;
        font-size:20px;
        color:#333333;
        border-width: 1px;
        border-color: #999999;
        border-collapse: collapse;
        margin-bottom: 50px;
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
