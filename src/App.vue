<template>
    <div id="app">
        <div class="nav">
            <v-header></v-header>
        </div>
        <div class="content">
            <router-view/>
        </div>
        <div class="footer">
            <v-footer></v-footer>
        </div>
    </div>
</template>

<script>
    import vHeader from './components/header/header'
    import vFooter from './components/footer/footer'
    export default {
        name: 'app',

        data () {
            return{

            }
        },

        components: {
            'v-header': vHeader,
            'v-footer': vFooter
        },

        mounted: function(){
            this.$nextTick(function(){
                this.$router.push('/home')
                document.querySelector(".content").style.height = window.screen.availHeight - 120 + 'px';
            })
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 0;
    }

    .nav{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
    }

    .content{
        margin-top: 70px;
    }

    .footer{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
    }
</style>
