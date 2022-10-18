<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
	buttonText: {
		type: String,
		required: true
	}
});

const isActive = ref(false);

function showDialog() {
	isActive.value = true;
}

function hideDialog() {
	isActive.value = false;
}

</script>

<template>
	<button @click="showDialog" class="button dialog__open-btn">{{ props.buttonText }}</button>

	<div v-if="isActive">
		<div class="overlay" @click="hideDialog" />

		<div role="dialog" class="dialog">
			<div class="dialog__content">
				<button @click="hideDialog" class="dialog__close-btn">X</button>

				<slot></slot>
			</div>
		</div>
	</div>
</template>

<style scoped>
.overlay {
	width: 100vw;
	height: 100vh;

	position: absolute;
	top: 0;
	left: 0;
	z-index: 1000;

	background: rgba(0, 0, 0, 0.3);
}

.dialog {
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: 2000;

	transform: translate(-50%, -50%);

	background: #3f3f3f;
	border-radius: 4px;
}

.dialog__content {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	position: relative;

	padding: 20px;
}

.dialog__open-btn {
	background: #4d4d4d;
}

.dialog__close-btn {
	position: absolute;
	top: 4px;
	right: 4px;

	padding: 4px;
	border: none;

	cursor: pointer;
	background: none;
}
</style>
