<template>
    <header class="flex items-center justify-center h-screen wrapper">
        <div class="flex flex-col items-center justify-around h-full">
            <div class="mb-20">
                <img src="../assets/images/image%207.png" alt="oops sorry something wrong!">
            </div>
            <div class="card flex flex-col items-center bg-white shadow-lg p-14 rounded-lg">
                <form class="flex flex-col w-full mb-4">
                    <input v-model="inputLogin" type="text" name="login" placeholder="Ваш логин" :class="{'border-red-500' : inputLogin === ''}" class="h-14 w-full border  mb-3 px-4 rounded text-lg" required>
                    <p class="text-red-500" v-if="!inputLogin">Введите Ваш Логин</p>
                    <input v-model="inputPassword" type="password" name="password" placeholder="Ваш пароль" :class="{'border-red-500' : inputPassword === ''}" class=" h-14 w-full border  mb-7 px-4 rounded text-lg" required>
                    <p class="text-red-500" v-if="!inputPassword">Введите Ваш Логин</p>
                    <button @click.prevent="goToLogin" class="text-center bg-blue-500 text-white h-14 w-full rounded font-semibold text-lg">Войти в кабинет</button>
                </form>

                <a href="#" class="text-base text-gray-400 border-b border-gray-400 leading-none">Забыли пароль?</a>
                <p class="text-red-500" v-if="trueData">Неправильный Логин или Пароль</p>
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
        data() {
            return{
                inputLogin: 'yugrusi',
                inputPassword: 12345,
                trueData: false
            }

        },
        methods: {
            goToLogin() {
                if (this.inputLogin === 'yugrusi' && this.inputPassword === 12345) {
                    this.$router.push('/votepage')
                } else if (this.inputPassword !== '' && this.inputLogin !== '' && this.inputPassword !== 12345 && this.inputLogin !== 'yugrusi'){
                    this.trueData = true
                }
            },
        },
        components: {
            VoteList: VoteList,
            UploadPage: UploadPage,
        }
    }
</script>
<style lang="scss">
    .inputLogin{
        border: 2px solid red;
    }
    .wrapper{
        background: linear-gradient(to bottom, #EFF1F2 41%, #4484D8 0);
        .card{
            width: 421px;
            height: 349px;
        }
    }
</style>
