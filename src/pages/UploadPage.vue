<template>
    <div class="wrapper-vote-page">
        <Header />
        <section>
            <div class="container-default mx-auto">
                <div>
                    <div class="flex items-center mb-3">
                        <span class="text-gray-500"><i class="fas fa-home"></i></span>
                        <p class="text-sm text-gray-400 ml-3">Список голосований > Участок по погрузки - выгрузки №1-2</p>
                    </div>
                    <h1 class="text-4xl font-bold mb-9">Участок по погрузки - выгрузки №1-2</h1>
                    <div>
                        <!-- peoples -->
                        <div class="mb-12">
                            <div class="text-lg text-gray-500 mb-3">Сотрудники</div>
                            <UserRating></UserRating>
                            <UserRating></UserRating>
                            <UserRating></UserRating>
                            <UserRating></UserRating>
                            <UserRating></UserRating>
                        </div>
                        <div class="w-full flex items-center justify-end">
                            <button type="button" class="h-20 bg-blue-500 text-white text-lg font-bold px-16 rounded-lg">Проголосовать</button>
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
    import UserRating from "../components/UserRating.vue"
    export default {
        components: {
            Header,
            Footer,
            UserRating
        },
        data() {
          return {
          }
        },
    }
</script>

<style lang="scss">
    body {
        background: #EFF1F2;
        .wrapper-vote-page {

            .fa-star {
                cursor: pointer;
            }

            .container-default {
                max-width: 1100px;

                .gray-text {
                    color: #909090;
                }

                .gray-background {
                    background: #E2E3E3;
                }
            }
        }
    }
</style>