<template>
  <div id="school">
      <div class="head"><span class="material-icons">power_settings_new</span></div>
      <div class="data">
        <h1>{{ msg }}</h1>
        <div id="chart">
        <apexchart type="radialBar" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
        <h2>ปีการศึกษา : </h2>
        <div class="number"><h4>นักเรียน : คน</h4> <h4>สำหรับ : วัน</h4></div>
        <h4>เป็นงบประมาณ : บาท</h4>
        <h4>งบฯที่ได้รับแล้ว : บาท</h4>
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
  },
  data() {
    return{
          series: [50],
          chartOptions: {
            chart: {
              height: 350,
              type: 'radialBar',
            },
            plotOptions: {
              radialBar: {
                hollow: {
                  size: '70%',
                },
                dataLabels: {
                  name: {
                    show: false,
                    color: '#fff'
                  },
                  value: {
                    show: true,
                    color: '#fff',
                    fontSize: '30px'
                  }
                }
              },
              
            },
            labels: ['ccccc'],
          },
    }
        },
}
</script>


<style scoped>
#school{
  background-color: #203E5F;
}
.material-icons{
  font-size: 30px;
}
.head{
  position: absolute;
  top: 20px;
  right: 20px;
}
h1{
  margin: 30px;
}
h2,h4{
  margin: 20px 0px 10px 0px;
}

.data{
  color: white;
  padding: 10px;
}
.data .number h4{
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
