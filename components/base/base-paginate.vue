<template>
  <vue-awesome-paginate
    :items-per-page="15"
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
  height: 40px;
  width: 40px;
  border: none;
  margin-inline: 0.2rem;
  cursor: pointer;
  background-color: white;
  transition: all 0.3s ease;
  color: #9c9c9c;
}
.btn:hover {
  background-color: #40b064;
  color: white;
}
.btn-active {
  background-color: #40b064;
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
