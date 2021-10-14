<template>
  <div id="project">
  <div class="head">
    <router-link to='/'><span class="material-icons">chevron_left</span></router-link>
    <div class="name">
      <h1>โรงเรียน จ จาน</h1>
    <h1>บันทึกโครงการที่ขอไป</h1>
    </div>
  </div>
  <div class="title">
    <h2>รายการโครงการที่ขอ</h2>
  </div>
  <div class="add">
    <router-link to="/detail"><span class="material-icons">control_point</span><h3>เพิ่มรายการ</h3></router-link>
  </div>
  <div class="case">

  </div>
  </div>
</template>

<script>
export default {
 name: 'project'
}
</script>

<style scoped>
.head{
  background-color: #203E5F;
  width: 100%;
  height: 100px;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.head .material-icons{
  font-size: 50px;
  margin: 0px 30px 0px 5px;

}
.title h2{
  margin: 40px 0px 25px 0px;
}

.add{
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
}
.add .material-icons,h3{
  display: inline;
  color: #203E5F;
  text-align: center;
}

</style>