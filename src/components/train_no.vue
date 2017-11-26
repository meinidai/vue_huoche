<template>
    <div class="train_no_content">
        <div class="train_no_span">车次</div>
        <div class="train_no_query"><input type="text" v-model="query" v-on:blur="varify_no"></div>
        <div class="train_no_btn" v-on:click="search_no">查询</div>
    </div>
</template>

<script>
    import checi from '../assets/checi'
    import bus from '../assets/eventBus'

    export default {
        data () {
            return {
                val: false,
                query: '',
                train_no: ''
            }
        },

        mounted: function(){
            this.$nextTick(function(){

            })
        },

        methods: {
            varify_no: function(){
                var self = this;
                if(self.query != ''){
                    let str = self.query.substr(0,1).toUpperCase();
                    console.log(checi.train_list)
                    for(let i in checi.train_list){
                        console.log(i)
                        if(str == i){
                            for(var j=0;j<checi.train_list[i].length;j++){
                                console.log(self.query,checi.train_list[i][j])
                                if(self.query.toUpperCase() == checi.train_list[i][j]){
                                    this.val = true;
                                    break;
                                }
                            }
                        }else{

                        }
                    }
                }
                console.log()
                if(this.val == false){
                    alert("ha")
                }
            },

            search_no: function(){
                let self = this;
                if(this.val){
                    this.$http.jsonp('http://apis.juhe.cn/train/s?key=aedc23d9eaabc12d660ef0b532c8bbb3&name=' + this.query).then(function(res){
                        self.train_no = res;
                        bus.$emit('get_trainno',self.train_no);
                        console.log(self.train_no)
                    })
                    this.$router.push('/train_info')
                }
            }
        }
    }
</script>

<style>
    .train_no_content{
        width: 90%;
        margin: 0px auto;
    }

    .train_no_span{
        font-size: 21px;
        width: 90%;
        margin: 0px auto;
    }

    .train_no_query{
        margin: 20px auto;
        width: 90%;
    }

    .train_no_query input{
        border: none;
        display: block;
        width: 100%;
        height:50px;
        line-height: 50px;
        font-size: 21px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
    }

    .train_no_btn{
        width: 90%;
        height: 50px;
        background-color: #df3d2d;
        margin: 20px auto;
        font-size: 30px;
        border-radius: 10px;
        line-height: 50px;
    }
</style>


