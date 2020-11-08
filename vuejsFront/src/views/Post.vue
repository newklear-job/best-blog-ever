<template>
  <div class="container mx-auto flex flex-wrap py-6">
    <post-component/>
    <sidebar/>
  </div>
</template>

<script>
import Sidebar from '../layouts/components/Sidebar'
import PostComponent from '../components/post/Post'

export default {
  name: 'Post',
  components: { Sidebar, PostComponent },
  data () {
    return {}
  }
}
</script>
