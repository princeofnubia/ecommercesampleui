<template>
  <div class="info-widget mt-2">
    <div class="info-list border-right">
           <h6><font-awesome-icon icon="users" class="fa-1x"/>  Total customers </h6>
            <strong>254 </strong>
        </div>
        <div class="info-list border-right">
            <h6><font-awesome-icon icon="cookie" class="fa-1x"/> Total Savings Cycle </h6>
            <strong>350 </strong>
        </div>
        <div class="info-list border-right">
            <h6><font-awesome-icon icon="money-bill-alt" class="fa-1x"/> Total Loans Out </h6>
            <strong>20 </strong>
        </div>
        <div class="info-list border-right">
            <h6><font-awesome-icon icon="wave-square" class="fa-1x"/> Default Rate </h6>
            <strong>5% </strong>
        </div>
        <div class="info-list">
            <h6><font-awesome-icon icon="star" class="fa-1x"/> Agent Rating </h6>
            <strong>3.5 </strong>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.info-widget {
        border: 1px solid #2196F3;
    height: 5rem;
    border-radius: 0.6rem;
    width: 100%;
        box-shadow: 1px 1px 2px 1px #ecececc7;
        display: flex;
        justify-content: space-between;
        align-items: center;
}
.info-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
    align-items: center;
    width: 25%;
    height: 100%;
}
.info-list h6 {
  margin-top: -1rem;
}
</style>