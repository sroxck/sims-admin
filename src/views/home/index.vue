<template lang="">
  <div class="home ">
    <section class="row">
      <div class="w-1/2  pr-3">
        <div class="card">
            <h3>左边</h3>
        </div>
      </div>
      <div class="w-1/2 pl-3" >
        <div  class=" flex h-1/2">
            <div class="  w-1/2 pb-3 pr-3">
              <div class="card">
                12
              </div>
            </div>
            <div class=" w-1/2  pb-3  pl-3" >
              <div class='card'>
                44
              </div>
            </div>
        </div>

         <div  class=" flex h-1/2">
            <div class="  w-1/2 pt-3 pr-3">
              <div class="card">
                12
              </div>
            </div>
            <div class=" w-1/2 pt-3   pl-3" >
                <div class="  pb-3 h-1/2 ">
                  <div class="card ">333</div>
                </div>
                <div class="  pt-3 h-1/2 " >
                  <div class="card">444</div>
                </div>
            </div>
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

    <section class="row">
      <div class=" w-7/12 pr-3 ">
        <div class="card">
          <h3>右边</h3>
        </div>
      </div>
      <div class="w-5/12 pl-3" >
        <div  class="card ">
          <h3>右边</h3>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="css" scoped>
.home {
  height: 400px;
}

.row {
  @apply flex flex-wrap rounded-lg  h-full p-3;
}
.card {
  @apply bg-white  p-3 h-full  rounded-lg
}
.card-box {
  @apply bg-white  p-3  rounded-lg
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