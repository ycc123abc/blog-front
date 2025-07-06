import { defineStore } from "pinia";


export const user = defineStore("user", {
    persist: {
    // enabled: true, //开启数据持久化
        key: "userState", //给一个要保存的名称
        storage: localStorage, //localStorage 存储方式
  },
  state: ()=> {
    return {
      userId: 1,
    };
  },
  getters: {
    getUserId(): number {
      return this.userId;
    },
  },
  actions: {
    setUserId() {
      this.userId++;
    },
  },
});