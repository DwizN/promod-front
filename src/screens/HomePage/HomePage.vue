<template>
<div>
    <News />
    <Insurances />
    <InstagramPictures />
</div>
</template>
<script>
import Insurances from "../../components/Insurances/Insurances.vue";
import News from "../../components/News/News.vue";
import InstagramPictures from "@/components/InstagramPictures/InstagramPictures/InstagramPictures.vue";
export default {
    components: {
    Insurances,
    News,
    InstagramPictures
}
};
</script>