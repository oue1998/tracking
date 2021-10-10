<template>
  <div id="budget">
  <div class="head">
    <div class="name">
      <h1>โรงเรียน จ จาน</h1>
    <h1>รายการงบที่ได้รับ</h1>
    </div>
  </div>
  <div class="title">
    <h2>รายละเอียดงบฯที่ได้รับ</h2>
  </div>
  <div class="case">

  </div>
  </div>
</template>

<script>
export default {
 name: 'budget'
}
</script>

<style scope>
.head{
  background-color: #203E5F;
  width: 100%;
  height: 100px;
  color: white;
}
.head .name{
  padding: 5px 0;
  text-align: center;

}
.head h1{
  font-size: 20px;
}

.title h2{
  font-size: 18px;
  margin: 40px 0px 25px 0px;
}

.add{
  position: absolute;
  right: 20px;
}
.add a{
  font-size: 16px;
  font-weight: bolder;
  margin-bottom: 20px;
  text-align: right;
  color: #203E5F;
}

</style>