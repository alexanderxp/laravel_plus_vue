<template>
    <div uk-spinner class="spin"></div>   
</template>


<script>

    export default {
        name: "Spin"
    }

</script>

<style scoped>
    .spin {
        position: absolute;
        left: 50%;
        top: 65%;
        transform: translate(-50%, -50%);
    }
</style>