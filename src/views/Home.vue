<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <School msg="โรงเรียน จ จาน"/>
  </div>
</template>

<script>
// @ is an alias to /src
import School from '@/components/School.vue'

export default {
  name: 'Home',
  components: {
    School
  }
}
</script>
