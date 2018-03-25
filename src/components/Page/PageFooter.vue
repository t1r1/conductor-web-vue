<template>
  <footer class="PageFooter">
    Conductor {{conductorVersion}} / flask {{flaskVersion}} / mongodb {{mongoVersion}}
  </footer>
</template>

<script>
import Api from '@/api'
export default {
  created () {
    Api.Open.AppInfo().then(response => {
      let { conductor_info } = response.data
      this.conductorVersion = conductor_info.app.version
      this.flaskVersion = conductor_info.flask_version
      this.mongoVersion = conductor_info.mongodb.version
    })
  },
  data () {
    return {
      conductorVersion: '',
      flaskVersion: '',
      mongoVersion: ''
    }
  }
}
</script>

<style>
  .PageFooter, .PageHeader {
    display: flex;
    width: 100%;
    height: 54px;
    box-sizing: border-box;
    justify-content: space-between;
    font-size: 0.8rem;
}

.PageFooter {
    align-items: center;
    padding: 0 20px;
    border-top: 1px solid #eee;
}
</style>
