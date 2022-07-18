<template>
<div class="bloc">
    <div class="instagram-picture">
    <img :src="picture.linkCaption" :alt="picture.alt" :title="picture.title" class="image">
    <div class="overlay">
        <a :href="picture.linkInstagram" class="icon" title="Lien de redirection site instagram">
            <font-awesome-icon icon="fa-brands fa-instagram" />
        </a>
    </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'InstagramComponent',
  props: ['picture']
}
</script>
<style lang="scss" scoped> @import './InstagramPicture.scss';</style>