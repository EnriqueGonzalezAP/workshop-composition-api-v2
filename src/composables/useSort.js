import {computed, ref} from "vue";

export const useSort = (array, sortKey, ascending) => {
    const orderBy = ref(sortKey);
    const desc = ref(ascending);
    const orderedArray = computed(() => {
        const cloned = JSON.parse(JSON.stringify(array.value));
        return cloned.sort((a, b) => {
            return desc.value
                ? b[orderBy.value] - a[orderBy.value]
                : a[orderBy.value] - b[orderBy.value];
        });
    });
    return {orderedArray, orderBy, desc}
}