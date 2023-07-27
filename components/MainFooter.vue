<template>
  <footer class="md:px-[100px] px-3 md:pt-10 pt-7 text-white">
    <div class="flex md:gap-25 gap-4">
      <div class="md:text-lg text-sm">
        <div>
          <p class="md:text-4xl text-2xl font-semibold">
            {{ $t("contactUs") }}
          </p>
        </div>
        <div class="flex items-start gap-2 mt-4">
          <img src="@/assets/images/location.png" alt="" />
          <p>
            Location: № A3-333, Altyn asyr Gundogar bazary, <br />
            Ashgabat city, Turkmenistan
          </p>
        </div>
        <a href="tel:+993 65 656565" class="flex items-start gap-2 mt-4">
          <img src="@/assets/images/call.png" alt="" />
          <p class="select-none">Phone: +99365656565</p>
        </a>
        <div class="flex items-start gap-2 mt-4">
          <img src="@/assets/images/email.png" alt="" />
          <p class="">
            Email:
            <a
              href="mailto:duypbaha@gmail.com"
              class="select-none cursor-default"
              >duypbaha@gmail.com</a
            >
          </p>
        </div>
      </div>
      <div class="md:mt-10 mt-0">
        <p class="md:mt-4 mt-2">Term and Conditions</p>
        <p class="md:mt-4 mt-2">Privacy Policy</p>
        <div class="md:hidden block">
          <p class="md:text-2xl text-base md:m-4 mt-4">Download The App</p>
          <div class="flex md:flex-row flex-col gap-2">
            <img
              class="h-10 w-[110px] rounded-xl"
              src="@/assets/images/play.png"
              alt=""
            />
            <img
              class="h-10 w-[110px] rounded-xl"
              src="@/assets/images/app.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="self-end md:block hidden">
        <p class="md:text-2xl text-xs md:m-4 m-0">Download The App</p>
        <div class="flex md:flex-row flex-col gap-4">
          <img class="h-10 rounded-xl" src="@/assets/images/play.png" alt="" />
          <img class="h-10 rounded-xl" src="@/assets/images/app.png" alt="" />
        </div>
      </div>
    </div>
    <div class="border-t border-white p-3 mt-10 text-center">
      Copyright © 2023 Duypbaha. All rights reserved.
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
