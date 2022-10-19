<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const { params } = useRoute();

const task = computed(() => store.getters.getTaskById(params.id));
console.log(task.value.title);

</script>

<template>
	<h1>{{ task.title }}</h1>
	<p>{{ task.description }}</p>

</template>

<style scoped></style>
