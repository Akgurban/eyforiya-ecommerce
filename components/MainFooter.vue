<template>
  <footer class="md:px-[100px] px-3 md:pt-10 pt-7 text-white">
    <div>
      <p class="md:text-4xl text-2xl font-semibold">
        {{ $t("contactUs") }}
      </p>
    </div>
    <div class="flex md:gap-25 gap-4">
      <div class="md:text-lg text-sm">
        <div class="flex items-start gap-2 mt-4">
          <img src="@/assets/images/location.png" alt="" />
          <p>
            Aşgabat ş. <br />
            Altyn Asyr Gündogar bazary,<br />
            Dükan № A3-333
          </p>
        </div>

        <a href="tel:+99365138000" class="flex items-start gap-2 mt-4">
          <img src="@/assets/images/call.png" alt="" />
          <p class="select-none">Phone: +99365138000</p>
        </a>
        <a href="tel:+99364992871" class="flex items-start gap-2 mt-4">
          <img src="@/assets/images/imo.jpg" alt="" />
          <p class="select-none">+99364992871</p>
        </a>

        <a
          href="https://vm.tiktok.com/ZSLs3h1ap/"
          class="flex items-start gap-2 mt-4"
        >
          <img src="@/assets/images/tiktok.jpg" alt="" />
          <p class="select-none">@dunyatekdurdyyeva</p>
        </a>
        <div class="flex items-start gap-2 mt-4">
          <img src="@/assets/images/email.png" alt="" />
          <p class="">
            <a
              href="mailto:info@duypbaha.com.tm"
              class="select-none cursor-default"
              >info@duypbaha.com.tm</a
            >
          </p>
        </div>
      </div>
      <div class="md:text-lg text-sm ">
        <a href="tel:+99361876094" class="flex items-start gap-2 mt-4">
          <img src="@/assets/images/call.png" alt="" />
          <p class="select-none">Phone: +99361876094</p>
        </a>

        <a href="tel:+99364992471" class="flex items-start gap-2 mt-4">
          <img src="@/assets/images/start.webp" class="w-10 h-10" alt="" />
          <p class="select-none">+99364992471</p>
        </a>
        <a
          href="tel:+99364992471"
          class="flex items-start gap-2 mt-4 w-10 h-10"
        >
          <img src="@/assets/images/link.webp" alt="" />
          <p class="select-none">+99364992471</p>
        </a>
        <a
          href="https://instagram.com/zemin_lux?igshid=MzRlODBiNWFlZA=="
          class="flex items-start gap-2 mt-4"
        >
          <img src="@/assets/images/insta.png" alt="" />
          <p class="select-none">@zemin_lux</p>
        </a>
      </div>
      <div class="self-end mt-6  md:block hidden">
        <p class="md:text-2xl text-xs md:m-4 m-0">Download The App</p>
        <div class="flex mt-4 gap-4">
          <img
            class="h-10 rounded-xl w-40"
            src="@/assets/images/play.png"
            alt=""
          />
          <img
            class="h-10 rounded-xl w-40"
            src="@/assets/images/app.png"
            alt=""
          />
        </div>
      </div>
      <!-- <div class="md:mt-10 mt-0">
        <p class="md:mt-4 mt-2">Term and Conditions</p>
        <a
          href="/privacy_policy.docx"
          target="_blank"
          class="md:mt-4 mt-2 cursor-pointer"
          >Privacy Policy</a
        >
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
      </div> -->
    </div>
    <div class="self-end mt-6  md:hidden block">
      <p class="md:text-2xl text-xs md:m-4 m-0">Download The App</p>
      <div class="flex mt-4 gap-4">
        <img
          class="h-10 rounded-xl w-40"
          src="@/assets/images/play.png"
          alt=""
        />
        <img
          class="h-10 rounded-xl w-40"
          src="@/assets/images/app.png"
          alt=""
        />
      </div>
    </div>
    <div class="border-t border-white p-3 mt-10 text-center">
      Copyright © 2023 Duypbaha. All rights reserved.
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
