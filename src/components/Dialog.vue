<script setup>
import { defineProps } from "vue";

const html = document.documentElement;
const props = defineProps({
	buttonText: {
		type: String,
		required: true
	},
	isActive: {
		type: Boolean,
		required: true
	},
	handleOpen: Function,
	handleClose: Function
});

function showDialog() {
	props.handleOpen();

	html.classList.add("overflow-hidden");
}

function hideDialog() {
	props.handleClose();

	if (html.classList.contains("overflow-hidden")) {
		html.classList.remove("overflow-hidden");
	}
}
</script>

<template>
	<button @click="showDialog" class="button dialog__open-btn">{{ props.buttonText }}</button>

	<div v-if="props.isActive">
		<div class="overlay" @click="hideDialog" />

		<div role="dialog" class="dialog">
			<div class="dialog__content">
				<button @click="hideDialog" class="dialog__close-btn" title="Fechar">X</button>

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

	border-radius: 8px;
	padding: 4px;

	transform: translate(-50%, -50%);

	background: #313131;
}

.dialog__content {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	position: relative;

	padding: 24px;
}

.dialog__open-btn {
	background: #353535;
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
