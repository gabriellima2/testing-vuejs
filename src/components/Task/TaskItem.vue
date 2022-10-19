<script setup>
import { defineProps } from "vue";
import { useStore } from "vuex";
import { RouterLink } from "vue-router";

const store = useStore();
const props = defineProps({
	id: {
		type: Number,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: false
	},
});

function handleRemove(id) {
	store.commit("removeTask", id);
}
</script>

<template>
	<li class="task">
		<RouterLink :to="{name: 'Details', params: { id: props.id }}">
			<section>
				<h1 class="task__title">{{ props.title }}</h1>
				<p>{{ props.description }}</p>
			</section>
			<button @click="handleRemove(props.id)">Remover</button>
		</RouterLink>
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
