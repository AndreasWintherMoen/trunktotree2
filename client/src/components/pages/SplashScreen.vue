<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
    <!-- <img
      class="w-10/12 mb-8"
      src="../../assets/images/LogoFull.png"
      alt="Logo"
    /> -->

    <img
      class="w-10/12 mt-16"
      src="../../assets/images/LogoText.png"
      alt="Logo"
    />

    <img class="w-6/12" src="../../assets/images/LogoTree.png" alt="Logo" />

    <p class="loadingText mb-16">Loading ...</p>
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: ["isLoading"],
};
</script>

<style>
.loader {
  background-color: #81d4bd;
  bottom: 0;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 32px;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
}

.fadeout {
  animation: fadeout 2s forwards;
}

.loadingText {
  color: rgb(37, 109, 244);
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
