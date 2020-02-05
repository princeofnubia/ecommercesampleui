<template>
  <div class="hello">
   <mdb-container fluid>
    <mdb-navbar color="light" dark>
      <mdb-navbar-brand>
        Navbar
      </mdb-navbar-brand>
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
</style>
