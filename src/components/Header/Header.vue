<template>
    <header>
        <div class="container">
            <div class="header">
                <!-- Logo -->
                <a href="#" class="logo"><img src="@/assets/logo.png"></a>
                <!-- Menu -->
                <nav class="nav">
                    <ul class="menu">
                        <li><a href="#">Produits</a></li>
                        <li><a href="#">Blog</a> </li>
                        <li><a href="#">La marque</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <div class="right-side">
                    <div class="icon-badge-group">
                        <div class="icon-badge-container">
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="lg"  />
                        </div>
                        <div class="icon-badge-container">
                            <font-awesome-icon icon="fa-solid fa-cart-arrow-down" size="lg"  />
                            <div class="icon-badge">16</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
  name: 'HeaderComponent'
}
</script>
<style lang="scss" scoped> @import './Header.scss';</style>
