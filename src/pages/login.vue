<script lang="ts" setup>
import { useToken } from '@/store';
const token = useToken();
const login = () => {
    token.setToken('123');
    console.log(token.token);
}
</script>
<template>
    <div bg=" cyan"
        h-svh w-full
        flex items-center justify-center>
        <button @click="login" bg="green">登陆</button>
    </div>
</template>