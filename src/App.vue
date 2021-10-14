<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <router-view/>
</template>

<style>
#app {
  padding: 0;
  margin: 0;
  font-family: 'Pridi', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
a{
  text-decoration: none;
  color: black;
}
.material-icons{
  color: white;
}
h1{
  font-size: 22px;
  font-weight: 500;
  padding: 0px;
  margin: 0px;
}
h2{
  font-size: 20px;
  font-weight: 400;
  padding: 0px;
  margin: 0px;
}
h3{
  font-size: 18px;
  font-weight: 400;
  padding: 0px;
  margin: 0px;
}
h4{
  font-size: 18px;
  font-weight: 300;
  padding: 0px;
  margin: 0px;
}
a{
   text-decoration: none;
}
/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
