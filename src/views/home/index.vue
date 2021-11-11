<template lang="">
  <div class="home ">
    <section class="row">
      <div class="w-1/2  pr-3">
        <div class="card">
            <h3>左边</h3>
        </div>
      </div>
      <div class="w-1/2 pl-3" >
        <div  class="card">
            <h3>右边</h3>
        </div>
      </div>
    </section>
    
    <section class="row">
      <div class="w-1/2  pr-3">
        <div class="card">
          <h3>右边</h3>
        </div>
      </div>
      <div class="w-1/2 pl-3" >
        <div  class="card ">
          <h3>右边</h3>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="css">
.home {
  height: 400px;
}

.row {
  @apply flex flex-wrap rounded-lg  h-full p-3;
}
.card {
  @apply bg-white  p-3 h-full
}
h3 {
  @apply mb-6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;
  color: #718096;
  font-weight: 600;
  white-space: nowrap;
}
</style>