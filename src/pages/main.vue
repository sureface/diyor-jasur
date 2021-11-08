<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    import LoginPage from "./LoginPage.vue";
    import VoteList from "./VoteList.vue";
    import UploadPage from "./UploadPage.vue";
    export default {
        components: {LoginPage, VoteList, UploadPage}
    }
</script>

<style scoped>

</style>