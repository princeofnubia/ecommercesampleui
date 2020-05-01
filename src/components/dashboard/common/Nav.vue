<template>
    <div class="nav-comp mb-5">
        <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">
              <div class="create-account-nav">
          <img src="../../../assets/alajo.png" />
      </div>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Hello Agent Kola</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <font-awesome-icon icon="bell" style="font-size: 1.5em; color:#bbb" class="mx-3"/>
        <font-awesome-icon icon="user-alt" style="font-size: 1.5em; color:#bbb"/>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    </div>
</template>
<style scoped>
.bg-info {
    background-color: #ffffff !important;
    box-shadow: 1px 1px 7px 1px #eaeaea;
}
.create-account-nav {
    position: sticky;
    top: 0.2rem;
    left: 0rem;
}
.navbar {
        padding: 0rem 2rem 0rem 0rem;
        position: fixed;
    top: 0rem;
    z-index: 2000;
    width: 100vw;
}
</style>