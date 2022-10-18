<script setup>
import { computed, ref } from "vue";

import Dialog from "../components/Dialog.vue";
import Form from "../components/Form.vue";
import Task from "../components/Task.vue";

const tasks = ref([]);

const handleEmptyDesc = computed(() => {
	return tasks.value.map((task) => {
		if (!task.desc) return {...task, desc: "Sem descrição"};

		return task;
	});
});

function handleAddTask(taskTitle, taskDescription) {
	tasks.value.push({id: Math.random(), title: taskTitle, desc: taskDescription});
}

</script>

<template>
	<Dialog buttonText="Adicionar tarefa">
		<Form @receiveTaskInfo="handleAddTask" title="Adicionar tarefa"/>
	</Dialog>

	<ul v-for="task in handleEmptyDesc" :key="task.id">
		<Task :title="task.title" :description="task.desc" />
	</ul>
</template>

<style scoped></style>
