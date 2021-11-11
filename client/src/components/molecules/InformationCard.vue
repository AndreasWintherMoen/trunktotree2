<template>
  <div class="bg-custom-green-100">
      <div class="flex justify-around px-8">
        <div class="flex flex-row pt-2 items-center">
          <img class="w-4 h-4" :src="`${publicPath}lightbulb-outline.png`">
          <h2 class="text-lg pl-2">How do we know this?</h2>
        </div>
      </div>
      <div class="pb-3 px-6 pt-0 flex flex-col text-left">
          <h2 class="text-md font-semibold">Other clients</h2>
          <p class="text-sm">We use anonymized data from other clients, and compare it with your latest transactions.</p>
          <h2 class="text-md font-semibold">Utilities</h2>
          <p class="text-sm">Statistical data from sources such as NorStat, SSB and Norsk Gallup are used to compare your utility bills to others in your economical situation.</p>
      </div>
  </div>
</template>

<script>
export default {
    setup() {
        const publicPath = process.env.BASE_URL;
        return { publicPath };
    },
    data() {
        return {

        }
    }
}
</script>

<style>

</style>