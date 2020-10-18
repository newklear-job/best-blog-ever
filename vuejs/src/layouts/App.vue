<template>
  <nav-header/>
  <app-header/>
  <nav-topic/>
  <router-view v-slot="slotProps">
    <keep-alive>
      <component :is="slotProps.Component" :key="$route.fullPath"></component>
    </keep-alive>
  </router-view>
  <app-footer/>
</template>

<script>
import NavHeader from './components/NavHeader'
import AppHeader from './components/AppHeader'
import NavTopic from './components/NavTopic'
import AppFooter from './components/AppFooter'

export default {
  name: 'Index',
  components: { NavHeader, AppHeader, NavTopic, AppFooter }
}
</script>
