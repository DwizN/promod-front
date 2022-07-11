<template>
    <div class="insurance">
        <img class="icon" :src="require(`@/assets/insurances/${item.icon}`)" :alt='item.title' />
        <h2 class="title">{{item.title}}</h2>
        <p class="description">{{item.description}}</p>
    </div>
</template>
<script>
export default {
    name: 'InsuranceItem',
    props: ['item']
}
</script>
<style lang="scss" scoped> @import './Insurance.scss';</style>