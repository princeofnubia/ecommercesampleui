<template>
  <div class="top-nav">
   <mdb-container fluid>
     
         <a href="kfdk" style="color:unset">
           
              <mdb-row>
                <mdb-col md="12">
                  <img src="//cdn.shopify.com/s/files/1/0336/7793/files/Resort20_HP_1_ae6305a8-e267-43e1-b6c6-25f79c2f8fe9_2048x.jpg?v=1580855875" class="img-fluid"/>
                </mdb-col>
              </mdb-row>
       
        
       <div class="link">
         <div class="sub-link">
         <h4 style="text-decoration: none">Collection-Resort '20</h4>
          <mdb-btn color="elegant">Shop now</mdb-btn>
         </div>
       </div>
         </a>
  </mdb-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.link {
    display: flex;
    position: absolute;
    justify-content: center;
    z-index: 100;
    top: 50vh;
    width: 100%;
}
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
.top-nav {
  position: relative;
  top: 0;
  right: 0;
  left: 0;
}
</style>
