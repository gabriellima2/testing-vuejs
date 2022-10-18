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
	<li>
		<h1>{{ props.title }}</h1>
		<p>{{ props.description }}</p>
	</li>
</template>

<style scoped>

</style>
