<template>
    <div class="wrapper-vote-page">
        <Header />
        <section>
            <div class="container-default mx-auto">
                <div>
                    <div class="flex items-center mb-3">
                        <span class="text-gray-500">:-)</span>
                        <p class="text-sm text-gray-400 ml-3">Список голосований</p>
                    </div>
                    <h1 class="text-4xl font-bold mb-9">Список голосований</h1>
                    <div>
                        <!-- active votes -->
                        <div class="mb-6">
                            <div class="text-base text-gray-500 mb-3">Активные</div>
                            <div class="flex items-center justify-between w-full h-16 bg-white rounded px-4">
                                <div>Участок по погрузки - выгрузки №1-2</div>
                                <div class="flex items-center">
                                    <router-link to="/upload" class="text-base text-blue-400 cursor-pointer mr-2">Начать голосование</router-link>
                                    <div class="text-blue-400">
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- old votes -->
                        <div>
                            <div class="text-base text-gray-500 mb-3">Прошедшие</div>
                            <div class="flex items-center w-full h-16 gray-background rounded px-4">
                                <div class="gray-text">Участок по погрузки - выгрузки №1-2</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script>
    import Header from "../components/header/header.vue"
    import Footer from "../components/footer/footer.vue"
    export default {
        components: {
            Header,
            Footer
        }
    }
</script>

<style lang="scss">
body {
    background: #EFF1F2;

    .container-default {
        max-width: 1100px;

        .gray-text{
            color: #909090;
        }
        .gray-background{
            background: #E2E3E3;
        }
    }
}
</style>