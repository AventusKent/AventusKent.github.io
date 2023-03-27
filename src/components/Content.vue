<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <div class="content">
        <article class="markdown-body">
            <RouterView />
        </article>
    </div>
</template>

<style scoped>
.content {
    flex: 1;
    background: rgba(196, 196, 196, 0.8);
    padding: 32px;
    overflow: auto;
}
</style>
