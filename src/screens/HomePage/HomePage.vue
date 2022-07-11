<template>
<div>
    <News />
    <Insurances />
</div>
</template>
<script>
import Insurances from "../../components/Insurances/Insurances.vue"
import News from "../../components/News/News.vue"
export default {
    components: { 
        Insurances,
        News
    }
};
</script>