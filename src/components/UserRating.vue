<template>
        <transition name="fade" appear>
            <div class="commend-modal" v-if="showModal" @click="showModalM = true">
                <div class="relative w-full h-full">
                    <div class="openM bg-white rounded-lg">
                        <div class="relative w-full h-full p-6">
                            <div class="openM-peace"></div>
                            <div class="flex items-center justify-between mb-9" v-if="showModal">
                                <div>
                                    <p class="text-base text-gray-400">Комментарий для</p>
                                    <h1 class="text-lg font-semibold">Корчагин Алексей Сергеевич</h1>
                                </div>
                                <i @click="showModal = false" class="far fa-times-circle text-2xl"></i>
                            </div>
                            <form>
                                <textarea aria-label="leave comment" class="h-36 w-full rounded-lg border border-gray-200 mb-8" required/>
                                <div class="w-full flex items-center justify-end">
                                    <button id="showToast" type="submit" class="h-16 bg-blue-500 px-10 text-lg font-semibold text-white rounded-lg">Отправить комментарий</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <div class="flex items-center justify-between w-full h-20 bg-white rounded px-5 mb-4">
            <div>
                <div class="text-xl font-semibold">Корчагин Алексей Сергеевич</div>
                <div class="text-sm text-gray-400">АО оаРВ РВп, Участок, длиный текст</div>
            </div>

            <div class="flex items-center">
                <div class="mr-5 flex items-center">
                    <!--                <span class="flex items-center text-3xl text-gray-400 mr-4">-->
                    <!--                    0-->
                    <!--                    <i class="fas fa-star ml-3 text-3xl text-gray-400"></i>-->
                    <!--                </span>-->
                    <star-rating />
                </div>
                <button type="button" @click="showModal = true" class="flex items-center px-4 py-3 border border-blue-500 bg-white rounded-lg text-lg font-bold text-blue-500"><i class="fas fa-comment-alt-lines text-blue-500 mr-3 text-2xl"></i> Комментарий</button>
            </div>
        </div>
</template>

<script>
    import StarRating from 'vue-star-rating'
    export default {
        components: {StarRating },
            data(){
                return{
                    showModal: false
                }
            },
            methods: {
                showModalM(){
                    if (this.showModal === false){
                        document.querySelector('.commend-modal').classList.remove("hidden");
                    }
                    console.log(this.showModal);
                },
            }
    }

</script>

<style lang="scss">
    body{
        position: relative;
        z-index: 1;
        .commend-modal {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            z-index: 9999;
            background: rgba(0,0,0, 0.4);

            .openM {
                position: fixed;
                top: calc(50% - 230px);
                right: calc(50% - 250px);
                width: 585px;
                height: 389px;

                .openM-peace {
                    position: absolute;
                    bottom: -37px;
                    right: 50px;
                    width: 37px;
                    height: 37px;
                    background: #ffffff;
                    border-bottom-right-radius: 100%;
                }
            }
        }
    }
</style>