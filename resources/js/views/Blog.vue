<template>
    <div style="display:flex; flex-wrap: wrap;">     
        <spin v-if="loading"></spin>         
        <div class="uk-card uk-card-default uk-width-1-2@m">
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-widh-auto">
                        <img class="uk-border-circle" widh="40" heigh="40" src="images/avatar.jpg">
                    </div>
                    <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
                        <p class="uk-text-meta uk-margin-remove-top">
                            <time datetime="2016-04-01T19:00">April 01,2016</time>
                        </p>
                    </div>
                </div>
            </div>
            <div class="uk-card-body">
                <p>Lora Lora color , commit abstract tell, many many ingredient.
                    Full HD resolution. Autosave button on.
                </p>
            </div>
            <div class="uk-card-footer">
                <a href="#" class="uk-button uk-button-text">Read more</a>
            </div>
        </div>
    </div>
</template>


<script>
    import Spin from "../components/Spin";
    export default {
        components: {
            Spin
        },
        data: () => ({           
           loading: true   
        })                       
    }
</script>

<style scoped>


</style>