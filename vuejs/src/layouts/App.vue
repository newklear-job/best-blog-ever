<template>
  <nav-header/>
  <app-header/>
  <nav-topic/>
  <router-view/>
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
