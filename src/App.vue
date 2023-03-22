<script setup>
import Side from '@/components/Side.vue';
import Content from '@/components/Content.vue';
</script>

<template>
    <div class="container">
        <Side />
        <Content />
    </div>
</template>

<style>
.container {
    display: flex;
    height: 100%;
}
</style>
