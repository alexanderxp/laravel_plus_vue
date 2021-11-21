<template>
    <div>   
        <spin v-if="loading"></spin>
        <div style="display:flex; flex-wrap: wrap;" v-else>      
            
        </div>
    </div>
</template>


<script>
    import Spin from "../components/Spin";
    import axios from 'axios';
    export default {
        components: {
            Spin
        },
        data: () => ({           
           loading: true,
           posts: [] 
        }),
        mounted() {     
            this.loadPosts()                 
        },                 
        methods: {        
            loadPosts(){
                axios.get('/api/posts')
                .then( res => { 
                    this.posts = res.data;
                    setTimeout( () => {
                       this.loading = false;
                    }, 500)
                })
           }              
        }                                     
    }
</script>

<style scoped>


</style>