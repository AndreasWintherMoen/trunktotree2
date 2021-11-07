<template>
  <div class="p-4">
    <h2 class="font-bold text-xl pb-4">Challenges</h2>
    <div class="flex flex-col gap-3">
      <challenge
        class="cursor-pointer"
        :challenge="challenge"
        v-for="(challenge, i) in challenges"
        :key="i"
      />
    </div>
  </div>
</template>

<script>
import Challenge from "../atoms/Challenge.vue";

export default {
  components: {
    Challenge,
  },

  data() {
    return {
      challenges: [
        {
          text: "Deposit 1200kr to DNB Grønn",
          reward: 999,
        },
        {
          text: "Reduce your café spending this month by at least 300kr",
          reward: 500,
        },
        {
          text: "Log in to the app 3 days in a row",
          reward: 200,
        },
        {
          text: "What do you think about the app? Answer this survey and get riksdaler!",
          reward: 150,
        },
      ],
    };
  },
};
</script>

<style></style>
