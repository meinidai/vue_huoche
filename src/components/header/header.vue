<template>
    <div>
        <div class="v-header">
            <div class="v-header-logo">
                <div>火车时刻表</div>
            </div>
            <div class="v-header-checkbox">
                <input type="checkbox" v-model="checked" class="v-header-input switch switch-anim" value="夜间模式" id="v-header-input">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                checked: ''
            }
        },

        updated: function(){
            if(this.checked){
                document.getElementsByTagName("body")[0].style.backgroundColor = "#bbbabb";
            }else{
                document.getElementsByTagName("body")[0].style.backgroundColor = "#e4e9f1";
            }
        }
    }
</script>

<style>
    .v-header{
        width:100%;
        height:50px;
        line-height: 50px;
        font-size: 20px;
        float: left;
        background-color: #df3d2d;
        color: #ffffff;
    }

    .v-header > div{
        float: left;
    }

    .v-header .v-header-logo{
        padding-left: 20px;
    }

    .v-header  .v-header-checkbox{
        float: right;
        padding-right: 20px;
    }

    .switch{
        float: right;
        vertical-align: middle;
        margin-top: 10px;
        width: 52px;
        height: 31px;
        position: relative;
        border: 1px solid #dfdfdf;
        background-color: #fdfdfd;
        box-shadow: #dfdfdf 0 0 0 0 inset;
        border-radius: 20px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        background-clip: content-box;
        display: inline-block;
        -webkit-appearance: none;
        user-select: none;
        outline: none;
    }

    .switch:before{
        content: '';
        width: 29px;
        height: 29px;
        position: absolute;
        top: 0px;
        left: 0;
        border-radius: 20px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    }

    .switch:checked {
        border-color: #64bd63;
        box-shadow: #64bd63 0 0 0 16px inset;
        background-color: #64bd63; }
    .switch:checked:before {
        left: 21px; }
    .switch.switch-animbg {
        transition: background-color ease 0.4s; }
    .switch.switch-animbg:before {
        transition: left 0.3s; }
    .switch.switch-animbg:checked {
        box-shadow: #dfdfdf 0 0 0 0 inset;
        background-color: #64bd63;
        transition: border-color 0.4s, background-color ease 0.4s; }
    .switch.switch-animbg:checked:before {
        transition: left 0.3s; }
    .switch.switch-anim {
        transition: border cubic-bezier(0, 0, 0, 1) 0.4s, box-shadow cubic-bezier(0, 0, 0, 1) 0.4s; }
    .switch.switch-anim:before {
        transition: left 0.3s; }
    .switch.switch-anim:checked {
        box-shadow: #64bd63 0 0 0 16px inset;
        background-color: #64bd63;
        transition: border ease 0.4s, box-shadow ease 0.4s, background-color ease 1.2s; }
    .switch.switch-anim:checked:before {
        transition: left 0.3s; }
</style>
