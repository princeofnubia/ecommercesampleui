<template>
  <div class="hello">
   <mdb-container fluid>
    <mdb-navbar color="rgba-black-slight" class="navie">
      <span class="navbar-text grey-text">
      Free shipping to Nigeria on all orders above 80000
    </span>
    </mdb-navbar>
  </mdb-container>
  <mdb-container fluid>
    <mdb-navbar color="danger" style="background: white !important; color: #555 !important" dark>
        <mdb-navbar-toggler>
          <mdb-navbar-nav>
            <mdb-nav-item href="#" active>Shop</mdb-nav-item>
            <mdb-nav-item href="#">Collections</mdb-nav-item>
            <mdb-nav-item href="#">Sales</mdb-nav-item>
            <mdb-nav-item href="#">New</mdb-nav-item>
          </mdb-navbar-nav>
          <mdb-navbar-nav>
            <h4 style="font-family:'Leckerli One'">Nikky Glamore</h4>
          </mdb-navbar-nav>
          <form>
            
          <mdb-navbar-nav label navInput waves waves-fixed>
            <mdb-nav-item href="#" active>Wishlist</mdb-nav-item>
            <mdb-nav-item href="#">Login</mdb-nav-item>
            <mdb-nav-item href="#">Cart</mdb-nav-item>
          </mdb-navbar-nav>
          
          </form>
        </mdb-navbar-toggler>
      </mdb-navbar>
  </mdb-container>
  </div>
</template>

<script>
export default {
  name: 'NoticeComp',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-weight: normal;
  padding-top: 20px;
  padding-bottom: 30px;
}
p {
  color: #969696;
  margin-bottom: 0;
  font-size: 14px;
}
.navie {
  display: flex;
  justify-content: center;
  height:44px;
  color: #555;
  background:  #f9f2ef !important;
}
.hello {
      padding: 0px !important;
    height: 30px;
    z-index: 300;
    width: 100vw;
    position: fixed;
}
</style>
