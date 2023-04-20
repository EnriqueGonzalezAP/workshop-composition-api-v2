<script setup>
import {ref, computed, watch} from "vue";
import ProductCard from "./components/ProductCard.vue";
import { useFetch } from "./composables/useFetch";
import {useSort} from "./composables/useSort";

// loading products
const numberOfProducts = computed(() => products.value.length);
const searchQuery = ref("")
const url = computed(() => `https://dummyjson.com/products/search?q=${searchQuery.value}`)

const { data, loading } = useFetch(url);
const products = computed(() => data.value?.products || []);
const {orderedArray: orderedProducts, orderBy, desc} = useSort(products, "price", false);
</script>

<template>
  <div v-if="loading">loading...</div>
  <div v-else>
    <h1 class="text-2xl mb-5">Products ({{ numberOfProducts }})</h1>
    <label class="w-1/3"
      >Order by
      <select class="border-2 border-gray-300 rounded w-1/3" v-model="orderBy">
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </select>
      <input type="text" class="border-2 border-gray-300 rounded pl-1 ml-3" placeholder="query" v-model="searchQuery"/>
      <label class="pl-3 w-1/3">
        <input type="checkbox" v-model="desc" />
        Descending
      </label>
    </label>

    <ul class="flex gap-4 flex-wrap flex-grow justify-center">
      <ProductCard
        v-for="product in orderedProducts"
        :key="product.id"
        :product="product"
        class="w-80"
      />
    </ul>
  </div>
</template>

<style>
body {
  padding: 30px;
}
</style>
