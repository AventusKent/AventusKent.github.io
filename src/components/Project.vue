<script setup>
import router from '../router';

const data = [
    {
        name: 'tiptap-react 超轻量富文本编辑器',
        path: 'tiptap-react',
    },
];

const click = item => {
    router.push({ path: item.path });
};
</script>

<template>
    <div class="markdown-body">
        <h1>项目集合</h1>
        <ol class="ol">
            <h3>
                <li v-for="item in data" :key="item.path" @click="click(item)">{{ item.name }}</li>
            </h3>
        </ol>
    </div>
</template>

<style lang="less" scoped>
.ol {
    li {
        cursor: pointer;

        &:hover {
            color: rgb(186, 177, 145);
        }
    }
}
</style>
