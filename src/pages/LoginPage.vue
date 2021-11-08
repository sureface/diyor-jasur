<template>
    <header class="flex items-center justify-center h-screen wrapper">
        <div class="flex flex-col items-center justify-around h-full">
            <div class="mb-20">
                <img src="../assets/images/image%207.png" alt="oops sorry something wrong!">
            </div>
            <div class="card flex flex-col items-center bg-white shadow-lg p-14 rounded-lg">
                <form class="flex flex-col w-full mb-4">
                    <input type="text" name="login" placeholder="Ваш логин" class="h-14 w-full border border-gray-300 mb-3 px-4 rounded text-lg" required>
                    <input type="password" name="password" placeholder="Ваш пароль" class=" h-14 w-full border border-gray-300 mb-7 px-4 rounded text-lg" required>
                    <router-link to="/votepage">
                        <button type="submit" class="text-center bg-blue-500 text-white h-14 w-full rounded font-semibold text-lg">Войти в кабинет</button>
                    </router-link>
                </form>
                <a href="#" class="text-base text-gray-400 border-b border-gray-400 leading-none">Забыли пароль?</a>
            </div>
            <div class="flex flex-col items-center justify-center">
                <a href="#" class="mb-4"><img src="../assets/images/googlePlay.png" alt="oops sorry something wrong!"></a>
                <p class="text-white">Копирайт 2021</p>
            </div>
            <div></div>
        </div>
    </header>
</template>
<script >
    import VoteList from "./VoteList.vue";
    import UploadPage from "./UploadPage.vue";
    export default {
        components: {
            VoteList: VoteList,
            UploadPage: UploadPage,
        }
    }
</script>
<style lang="scss">
    .wrapper{
        background: linear-gradient(to bottom, #EFF1F2 41%, #4484D8 0);
        .card{
            width: 421px;
            height: 349px;
        }
    }
</style>
