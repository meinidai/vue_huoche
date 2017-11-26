<template>
    <div class="home_content">
        <div class="home_info">
            <div class="home_baoguo">
                <div class="home_detail_info">
                    <div class="home_label">出发站</div>
                    <input type="text" v-model="start_station" ref="start_input" v-on:blur="varify_cor()">
                </div>
                <div class="home_detail_info">
                    <div class="home_label">返程</div>
                    <input type="button" value="转换" v-on:click="str_transform">
                </div>
                <div class="home_detail_info">
                    <div class="home_label">到达站</div>
                    <input type="text" v-model="stop_station" ref="stop_input" v-on:blur="varify_cor2()">
                </div>
            </div>
            <div class="home_info_search" v-on:click="home_detail_search">查询</div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import station_name from '../assets/chezhan'
    import bus from '../assets/eventBus'

    export default {
        data () {
            return {
                start_station: '',
                stop_station: '',
                start_no: '',
                stop_no: '',
                s_to_s_list: '',
            }
        },

        mounted: function(){
            this.$nextTick(function(){

            })
        },

        destroyed: function () {

        },

        methods: {
            str_transform: function(){
                let tmp;
                if(this.start_station != '' && this.stop_station != ''){
                    tmp = this.stop_station;
                    this.stop_station = this.start_station;
                    this.start_station = tmp;
                }
            },

            varify_cor: function(){
                let s;
                let str = this.start_station;
                for(let i in station_name.station_name){
                    if(str == station_name.station_name[i]){
                        s = i;
                        this.start_no = s;
                        break;
                    }
                }
                if(s == undefined){
                    alert("请输入正确的车站");
                    this.$refs.start_input.value = ''
                }
            },

            varify_cor2: function(){
                let s;
                let str = this.stop_station;
                for(let i in station_name.station_name){
                    if(str == station_name.station_name[i]){
                        s = i;
                        this.stop_no = s;
                        break;
                    }
                }
                if(s == undefined){
                    alert("请输入正确的车站")
                    this.$refs.stop_input.value = ''
                }
            },

            home_detail_search: function(){
                var self = this;
                if(this.start_station != '' && this.stop_station != ''){
                    this.$http.jsonp('http://apis.juhe.cn/train/s2swithprice?key=aedc23d9eaabc12d660ef0b532c8bbb3&start=' + this.start_station + '&end=' + this.stop_station)
                        .then(function(res){
                            self.s_to_s_list = res;
                            console.log(self.s_to_s_list)
                            bus.$emit('get_station',self.s_to_s_list)
                        }).catch(function(){

                    })
                    this.$router.push('/train_list')
                }else{
                    alert("请输入车站")
                }
            }
        }
    }
</script>

<style>
    .home_content{
        width: 100%;
        height: inherit;
    }

    .home_info{
        width: 90%;
        margin: 0px auto;
        height: inherit;
        font-size: 21px;
    }

    .home_baoguo{
        width: 100%;
        height: 100px;
    }

    .home_detail_info{
        float: left;
        width: 33%;
    }

    .home_detail_info .home_label{
        margin-bottom: 10px;
    }

    .home_detail_info input[type="text"]{
        border: none;
        display: block;
        width: 100%;
        height:40px;
        font-size: 21px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
    }

    .home_info_search{
        width: 90%;
        height: 50px;
        background-color: #df3d2d;
        margin: 20px auto;
        font-size: 30px;
        border-radius: 10px;
        line-height: 50px;
    }
</style>
