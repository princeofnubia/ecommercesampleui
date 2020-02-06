<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="css">
@import url('https://fonts.googleapis.com/css?family=Leckerli+One|Muli&display=swap');
#app {
  font-family: 'Muli';
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}
.container-fluid {
  padding: 0px;
}

.navbar.navbar-dark .breadcrumb .nav-item .nav-link, .navbar.navbar-dark .navbar-nav .nav-item .nav-link {
    color: #9e9e9e;
    -webkit-transition: .35s;
    transition: .35s;
}
</style>
