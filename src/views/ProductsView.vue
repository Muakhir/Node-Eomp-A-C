<template>

<div v-if="products">

</div>

<div v-else>
    <spinnerComponent></spinnerComponent>
</div>

</template>

<script>
import spinnerComponent from '@/components/spinnerComponent.vue';

export default{
name:'ProductsView',
components: {
    spinnerComponent
}
}
 
</script>

<style>

</style>