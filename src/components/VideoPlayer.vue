<script setup>
import {ref, computed} from "vue";

const props = defineProps(['src']);
const video = ref(null);
const paused = ref(true)
const start = () => {
  video.value.play();
  paused.value = false;
}
const pause = () => {
  video.value.pause();
  paused.value = true;
}
</script>

<template>
  <video class="mb-2" ref="video" loop muted playsinline :src="props.src" width="600"></video>
  <button v-if="paused" @click="start" class="border-black border rounded p-5">Start</button>
  <button v-else @click="pause" class="border-black border rounded p-5">Pause</button>
</template>