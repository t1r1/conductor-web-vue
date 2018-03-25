<template>
  <div class="content">
    <page-header/>
    <router-view/>
    <page-footer/>
  </div>
</template>

<script>
import PageHeader from './PageHeader'
import PageFooter from './PageFooter'
export default {
  name: 'Layout',
  components: {
      PageHeader,
      PageFooter
  }
}
</script>

<style>

</style>
