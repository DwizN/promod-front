<template>
    <div class="container instagram-pictures">
        <div v-for="(picture, index) in pictures" :key="index">
            <InstagramComponent class="instagram-component" :picture="picture" />
        </div>
    </div>
</template>
<script>
import pictures from "./InstagramPicturesData.json"
import InstagramComponent from "../InstagramPicture/InstagramPicture.vue";
export default {
    name: 'InstagramPicturesComponent',
    components: {
            InstagramComponent
        },
    data() {
        return {
            pictures: pictures
        };
    }
};
</script>
<style lang="scss" scoped> @import './InstagramPictures.scss';</style>