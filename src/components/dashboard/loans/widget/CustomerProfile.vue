<template>
  <div>
  <b-card
  >
  <b-card-body class="d-flex justify-content-center">
      <b-img src="https://picsum.photos/200/200/?image=20" rounded="circle" alt="Image" class="rounded-4"></b-img>
  </b-card-body>
<b-list-group flush>
  <b-list-group-item class="d-flex justify-content-between align-items-center">
    <strong>Customer Name </strong>
    <strong>Labake Nsofor</strong>
  </b-list-group-item>

  <b-list-group-item class="d-flex justify-content-between align-items-center">
    <strong>Phone Number</strong>
    <strong>08122233356</strong>
  </b-list-group-item>

  <b-list-group-item class="d-flex justify-content-between align-items-center">
    <strong> Email</strong>
    <strong>labakensofor@gmail.com</strong>
  </b-list-group-item>
    <b-list-group-item class="d-flex justify-content-between align-items-center">
    <strong> Credit score</strong>
    <strong>45</strong>
  </b-list-group-item>
  <b-list-group-item class="d-flex justify-content-between align-items-center">
    <strong> Total Savings with you</strong>
    <strong>100000</strong>
  </b-list-group-item>
  <b-list-group-item class="d-flex justify-content-between align-items-center">
    <strong> Total Completed savings</strong>
    <strong>4</strong>
  </b-list-group-item>
</b-list-group>
  </b-card>
</div>

</template>

<script>
export default {

}
</script>

<style>
.list-group-item {
    position: relative;
    display: block;
    padding: 0.45rem 1.25rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
