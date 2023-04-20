import {ref, isRef, computed, watch} from "vue";
export const useFetch = (url) => {
  const computedUrl = computed(() => isRef(url) ? url.value : url)
  const loading = ref(true);
  const data = ref(null);

  function makeRequest() {
    loading.value = true;
    fetch(computedUrl.value).then(async (res) => {
      data.value = await res.json();
      loading.value = false;
    });
  }

  watch(computedUrl, makeRequest)

  makeRequest();
  return { data, loading };
};
