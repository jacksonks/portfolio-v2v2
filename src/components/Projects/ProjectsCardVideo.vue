<script>
export default {
  name: "ProjectsCardVideo",
  props: ["video"],
};
</script>

<template>
  <video
    height="200"
    width="350"
    controls
    controlsList="nodownload"
    autoplay
    loop
    muted
    poster
  >
    <source :src="video" type="video/mp4" />
  </video>
</template>

<style scoped></style>
