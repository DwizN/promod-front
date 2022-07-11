<template>
  <div id="app">
    <HeaderComponent />
    <router-view class="app-content" ></router-view>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "@/components/Footer/Footer.vue"
import HeaderComponent from "@/components/Header/Header.vue"
export default {
  name: 'App',
  components: {
    FooterComponent,
    HeaderComponent
    
  }
}
</script>
