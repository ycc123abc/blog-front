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

interface Article {
  id: string;
  title: string;
  cover?: string;
  createtime: string;
  views: number;
  likes: number;
  category: string; // 修正拼写
  tags?: string[];
  
}

export const articleStore=defineStore("article",{
state:()=>{
  return {
    article:{
      id:"",
      title:"",
      cover:"",
      createtime:"",
      views:0,
      likes:0,
      category:"",
      tags:[]}
    }},    
    getters:{
      getArticle():Article{
          return this.article ;
      },
    },
    actions:{
      setArticle(val:Article){
        Object.assign(this.article, val); // 正确使用对象合并方法
      }
    }
}
  )