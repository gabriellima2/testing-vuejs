<script setup>
import { useStore } from "vuex";

import TaskItem from "./TaskItem.vue";

const { state, ...store } = useStore();
</script>

<template>
	<ul class="list" v-for="task in state.tasks" :key="task.id">
		<TaskItem :id="task.id" :title="task.title" :description="task.desc" />
	</ul>
</template>

<style scoped>
.list {
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	gap: 24px;
}
</style>
