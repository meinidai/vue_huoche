<template>
    <div class="v-footer">
        <div class="train_station_search" v-on:click="turn_to('home')">
            <div>站站查询</div>
        </div>
        <div class="train_no_search" v-on:click="turn_to('train_no')">
            <div>车次查询</div>
        </div>
    </div>
</template>

<style>
    .v-footer{
        width:100%;
        height:50px;
        line-height: 50px;
        font-size: 20px;
        background-color: #df3d2d;
        color: #ffffff;
    }

    .v-footer .train_station_search{
        float: left;
        width: 50%;
    }

    .v-footer .train_no_search{
        width: 50%;
        float: right;
    }
</style>

<script>
    import home from '../home'
    import train_no from '../train_no'
    export default {
        data () {
            return {

            }
        },

        components: {
            'home': home
        },

        methods: {
            turn_to : function(ren){
                this.$router.push(ren)
            }
        }
    }
</script>
