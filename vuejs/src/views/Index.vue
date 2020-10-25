<template>
  <div class="container mx-auto flex flex-wrap py-6">
    <post-list></post-list>
    <sidebar />
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '../layouts/components/Sidebar'
import PostList from '../components/post/PostList'

export default {
  name: 'Index',
  components: { Sidebar, PostList }
}
</script>
