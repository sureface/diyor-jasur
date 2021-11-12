<template>
    <div class="flex items-center justify-between w-full h-20 bg-white rounded px-5 mb-4">
        <div>
            <div class="text-xl font-semibold">Корчагин Алексей Сергеевич</div>
            <div class="text-sm text-gray-400">АО оаРВ РВп, Участок, длиный текст</div>
        </div>

        <div class="flex items-center">
            <div class="mr-5 flex items-center">
                <span class="flex items-center text-3xl text-gray-400 mr-4">
                    0
                    <i class="fas fa-star ml-3 text-3xl text-gray-400"></i>
                </span>
                <star-rating />
            </div>
            <button type="button" class="flex items-center px-4 py-3 border border-blue-500 bg-white rounded-lg text-lg font-bold text-blue-500"><i class="fas fa-comment-alt-lines text-blue-500 mr-3 text-2xl"></i> Комментарий</button>
        </div>
    </div>

</template>

<script>
    import StarRating from 'vue-star-rating'
    export default {
components: {StarRating }
    }
</script>

<style scoped>

</style>