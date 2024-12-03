import { defineStore } from "pinia";
import { ref } from "vue";
export const useToken = defineStore("token",()=>{
    const token = ref("")
    const setToken = (val:string)=> {
        token.value = val
    }
    const getToken = ()=> token.value
    return {token,setToken,getToken}
},
{
    persist:{
        key:"token",
        pick:["token"],
        storage:localStorage
    }
})