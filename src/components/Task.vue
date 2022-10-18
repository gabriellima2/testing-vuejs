<script setup>
import { defineProps } from "vue";

const props = defineProps({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: false
	},
});
</script>

<template>
	<li class="task">
		<h1 class="task__title">{{ props.title }}</h1>
		<p>{{ props.description }}</p>
	</li>
</template>

<style scoped>
.task {
	list-style: none;
}

.task__title {
	text-transform: capitalize;
}
</style>
