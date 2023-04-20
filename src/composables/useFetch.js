import {ref} from "vue";

export const useFetch = (url) => {
    const loading = ref(true);
    const data = ref(null);
    fetch(url).then((res) => {
        return res.json()
    }).then((json) => {
        data.value = json;
        loading.value = false;
    });
    return {loading, data};
}
