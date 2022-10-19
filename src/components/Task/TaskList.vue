<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

import TaskItem from "./TaskItem.vue";

const store = useStore();

const tasks = computed(() => store.getters.getTasks());
</script>

<template>
	<ul class="list" v-for="task in tasks" :key="task.id">
		<TaskItem :id="task.id" :title="task.title" :description="task.description" />
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
