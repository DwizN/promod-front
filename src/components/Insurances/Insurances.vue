<template>
  <div class="insurances container">
    <div v-for="(insurance, index) in insurances" :key="index" class="insurance-component">
        <InsuranceItem :item="insurance"/>
    </div>
  </div>
</template>

<script>
import liste from "./Insurances.json"
import InsuranceItem from "./Insurance/Insurance.vue";
export default {
    name: 'InsurancesTest',
    components: {
            InsuranceItem
        },
    data() {
        return {
            insurances: liste
        };
    }
};
</script>
<style lang="scss" scoped> @import './Insurances.scss';</style>