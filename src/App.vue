<script setup>
import { useColorMode } from '@vueuse/core';
import Toast from '@/components/Toast.vue';
useColorMode();
</script>

<template>
    <Toast />
    <router-view></router-view>
</template>

<style></style>
