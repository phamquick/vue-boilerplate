<style src="./../assets/sass/app.scss"></style>
<template>
    <div>
        <a v-link="{name:'home'}">HOME</a>
        <a v-link="{name:'contact'}">CONTACT</a>

        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {}
        }
    }
</script>