<template>
  <div id="school">
      <!-- <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a> -->
      <div class="data">
        <h1>{{ msg }}</h1>
        <img alt="percent" src="../assets/percent.png">
        <h2>ปีการศึกษา : </h2>
        <div class="number"><h3>นักเรียน : คน</h3> <h3>สำหรับ : วัน</h3></div>
        <h3>เป็นงบประมาณ : บาท</h3>
        <h3>งบฯที่ได้รับแล้ว : บาท</h3>
      </div>
      <div class="menu">
        <button><router-link to="/project">บันทึกโครงการที่ขอไป</router-link></button>
        <button><router-link to="/budget">รายการงบฯที่ได้รับ</router-link></button>
        <button><router-link to="/used">แจ้งงบฯที่ใช้</router-link></button>
        <button><router-link to="/">สถานการณ์งบฯที่จัดสรร</router-link></button>
        <button class="alert"><router-link to="/">แจ้งสถานการณ์</router-link></button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'School',
  props: {
    msg: String
  }
}
</script>


<style scoped>
#school{
  background-color: #203E5F;
}
h1{
  font-size: 20px;
  margin: 30px;
}
h2{
  font-size: 16px;
  margin-top: 20px;
}
h3{
  font-size: 16px;
  font-weight: inherit;
}

.data{
  color: white;
  padding: 10px;
}
.data .number h3{
display: inline;
}

.menu{
  background: white;
  border-radius: 40px 40px 0px 0px;
  width: 100%;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.menu button{
  width: 300px;
  padding: 10px 20px 10px 20px;
  margin: 10px;
  font-size: 18px;
  background-color: #EDEAE4;
  border: #C4C4C4;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.menu button a{
  color: black;
}
.menu .alert{
  background-color: #B32208;
  font-weight: bolder;
}
.menu .alert a{
  color: white;
}
</style>
