<template>
  <div id="used">
    <div class="head">
      <div class="name">
        <h1>โรงเรียน จ จาน</h1>
        <h1>แจ้งงบที่ใช้</h1>
      </div>
    </div>
    <div class="title">
      <h2>รายละเอียดงบฯที่ใช้</h2>
    </div>
    <div class="section">
      <div class="input">
        <h3>โรงเรียน</h3>
        <div class="data"><h4>โรงเรียน จ จาน</h4></div>
      </div>
      <div class="input">
        <h3>ปีการศึกษา</h3>
        <input type="date" name="ว/ด/ป" placeholder="ว/ด/ป" value="2021-10-10"/>
        <div class="data"><h4>รวม 200 วัน</h4></div>
      </div>
    <div class="input">
        <h3>จำนวนนักเรียน</h3>
        <div class="data"><h4>รวม 100 คน</h4></div>
    </div>
    <div class="input">
        <h3>งบฯที่ได้รับ</h3>
        <div class="data"><h4>800,000 บาท</h4></div>
    </div>
    <div class="input">
        <h3>งบฯที่ใช้ไป</h3>
        <input type="text" name="bath" placeholder="จำนวนเงิน" value=""/>
      </div>
      <div class="save">
          <button><router-link to="#">บันทึก</router-link></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "used",
};
</script>

<style scope>
.head {
  background-color: #203e5f;
  width: 100%;
  height: 100px;
  color: white;
}
.head .name {
  padding: 5px 0;
  text-align: center;
}
.head h1 {
  font-size: 20px;
}

.title h2 {
  font-size: 18px;
  margin: 30px 0px 25px 0px;
}

.section{
    position: absolute;
  left: 20px;
  text-align: left;
}
.section h3{
    font-size: 16px;
    margin-bottom: 5px;
}
.section h4{
    font-size: 16px;
    font-weight: inherit;
    margin: 0px;
}
.section .input{
    margin-bottom: 30px;
}
.section .data{
    width: 350px;
    background-color: #EDEAE4;
  padding: 15px;
}
.section input{
    width: 350px;
  padding: 15px;
  margin-bottom: 10px;
}

.save{
    text-align: center;
    margin-bottom: 30px;
}
.save button{
    padding: 10px 40px 10px 40px;
    background-color: #E3C438;
    border: none;
    font-size: 18px;
    font-weight: bolder;
}
</style>
