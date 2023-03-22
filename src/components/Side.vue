<script setup>
import { ref } from 'vue';

const menus = [
    { name: '博客前言', key: 'introduction' },
    { name: '项目集合', key: 'projects' },
];
const key = ref('introduction');

const click = item => {
    key.value = item.key;
};
</script>

<template>
    <div class="aside">
        <header class="head" />
        <figure class="name">Kent</figure>

        <nav class="nav">
            <div v-for="item in menus" :key="item.key" @click="click(item)" :class="key === item.key && 'active'">
                <span>{{ item.name }}</span>
                <svg
                    v-if="key === item.key"
                    t="1679479303015"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="5054"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="200"
                    height="200"
                >
                    <path d="M64 192h333.8L960 512 397.8 832H64z" fill="#4A7CAE" p-id="5055"></path>
                </svg>
            </div>
        </nav>
    </div>
</template>

<style lang="less" scoped>
.aside {
    width: 350px;
    background: rgba(186, 177, 145, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
}

.head {
    width: 162px;
    height: 162px;
    border-radius: 100px;
    background: #fff;
    background-image: url(@/assets/head.jpeg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 90px;
}

.name {
    font-size: 24px;
    margin-top: 8px;
}

.nav {
    margin-top: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    font-weight: 400;
    width: 100%;
    color: rgb(49, 49, 54);

    > div {
        width: 100%;
        text-align: center;
        padding: 8px 0;
        cursor: pointer;
        position: relative;

        // &:not(:first-child) {
        //     margin-top: 8px;
        // }

        // &:hover {
        //     background: rgb(171, 186, 148);
        //     color: rgb(214, 214, 184);
        // }
    }

    svg {
        width: 16px;
        height: 16px;
        transform: rotate(180deg);
        position: absolute;
        right: 16px;
        top: 14px;

        path {
            fill: rgb(214, 214, 184);
        }
    }
}

.active {
    background: rgb(171, 186, 148);
    color: rgb(214, 214, 184);
}
</style>
