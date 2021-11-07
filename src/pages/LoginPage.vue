
<template>
  <header class="flex items-center justify-center h-screen">
    <div class="flex flex-col items-center justify-center h-full">
        <div class="mb-20">
          <img src="../assets/images/image%207.png" alt="oops sorry something wrong!">
        </div>
        <div class="card bg-white shadow-lg p-14 rounded-lg">
          <form class="flex flex-col">
            <input type="text" name="login" placeholder="Your Login" class="h-14 border border-gray-300 mb-3 px-4">
            <input type="password" name="password" placeholder="Your Password" class=" h-14 border border-gray-300 mb-3 px-4">
            <button type="submit" class="py-2 px-4 bg-blue-500 text-white">Login</button>
          </form>
        </div>
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
  .card{
    width: 421px;
    height: 349px;

  }
</style>
