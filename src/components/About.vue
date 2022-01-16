<script setup lang="ts">

interface Props {
msg: string
}

interface Emits {
    (e: 'personalNumber', id: string):void
}

const { msg } = defineProps<Props>()

const emit= defineEmits<Emits>()

const sendEmitData = () => {
    emit('personalNumber', '300-800-462');
}
</script>

<template>
    <h1>This is About page</h1>
    <h3>{{ msg }}</h3>
    <button @click="sendEmitData">Emit</button>
</template>
