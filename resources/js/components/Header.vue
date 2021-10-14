<template>
    <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-center">

            <ul class="uk-navbar-nav">
<!--              class="uk-active"-->
                <li><a href="#">Active</a></li>

            </ul>

        </div>
    </nav>    

</template>


<script>
    export default {
        data() {
            return {
                links: [
                    {
                        title: "Главная",
                        href: "/"
                    }
                ]
            }
        }
    }
</script>

<style scoped>


</style>