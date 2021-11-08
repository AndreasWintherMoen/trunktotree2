<template>
  <div
    class="rounded shadow flex flex-row content-center px-1 py-3"
    :class="recommendation.isPositive ? ['bg-green-300'] : ['bg-red-300']"
  >
    <a v-if="recommendation.url" :href="recommendation.url" target="_blank">
      <div class="flex">
        <img
          :src="`${publicPath}categoryIcons/${recommendation.category}.png`"
          class="w-10 mx-2 self-center"
        />
        <div
          class="flex-col text-left ml-2"
          :class="isPositive ? ['bg-green'] : ['bg-red']"
        >
          <p class="text-lg font-bold">{{ recommendation.category }}</p>
          <p>{{ recommendation.text }}</p>
        </div>
      </div>
    </a>
    <div v-else class="flex">
      <img
        :src="`${publicPath}categoryIcons/${recommendation.category}.png`"
        class="w-10 mx-2 self-center"
      />
      <div class="flex-col text-left ml-2">
        <p class="text-lg font-bold">{{ recommendation.category }}</p>
        <p>{{ recommendation.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["recommendation"],
  setup() {
    const publicPath = process.env.BASE_URL;
    return { publicPath };
  },
};
</script>

<style></style>
