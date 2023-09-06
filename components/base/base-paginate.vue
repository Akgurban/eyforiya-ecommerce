<template>
  <vue-awesome-paginate
    :items-per-page="24"
    :max-pages-shown="5"
    paginate-buttons-class="btn"
    active-page-class="btn-active"
    back-button-class="back-btn"
    next-button-class="next-btn"
  >
    <template #prev-button>
      <span>
        <IconChevronLeft class="m-auto" />
      </span>
    </template>
    <template #next-button>
      <span>
        <IconChevronRight class="m-auto" />
      </span>
    </template>
  </vue-awesome-paginate>
</template>

<style scopeds>
.btn {
  height: 30px;
  width: 30px;
  border: none;
  margin-inline: 0.2rem;
  cursor: pointer;
  background-color: white;
  transition: all 0.3s ease;
  color: #9c9c9c;
}
@media screen and (min-width: 620px) {
  .btn:hover {
    background-color: #40a3b0;
    color: white;
  }
}
.btn-active {
  background-color: #40a3b0;
  color: white;
}
.prev-button:hover {
  color: white;
}
.next-btn {
  margin-right: 0;
}
.next-btn:hover {
  color: white;
}
</style>
