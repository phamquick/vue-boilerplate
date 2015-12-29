<template>
    <h1>Home</h1>
    <a v-link="{name:'home'}">TEST</a>
    <a v-link="'Test2'">TEST</a>
</template>

<script>
    export default {
        route: {
            activate: function (transition) {
                console.log("xx");
                transition.next();
            }
        }
    }
</script>