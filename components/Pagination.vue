<template>
  <div class="mt-5 mb-[60px]">
    <div class="max-w-7xl px-10 mx-auto">
      <div class="content flex justify-between">
        <button class="flex gap-2">
          <img src="../assets/images/arrow-left.svg" alt="left" />
          <span class="text-cstGray text-sm font-medium">Previous</span>
        </button>
        <div class="pages flex gap-0.5">
          <NuxtLink
            to="/"
            class="p-3 rounded-lg text-cstGray text-sm font-normal active"
          >
            1
          </NuxtLink>
          <NuxtLink
            to="/"
            class="p-3 rounded-lg text-cstGray text-sm font-normal hover:bg-cstLPurple hover:text-cstPurple"
            >2</NuxtLink
          >
          <NuxtLink
            to="/"
            class="p-3 rounded-lg text-cstGray text-sm font-normal hover:bg-cstLPurple hover:text-cstPurple"
            >3</NuxtLink
          >
          <NuxtLink
            to="/"
            class="p-3 rounded-lg text-cstGray text-sm font-normal hover:bg-cstLPurple hover:text-cstPurple"
            >...</NuxtLink
          >
          <NuxtLink
            to="/"
            class="p-3 rounded-lg text-cstGray text-sm font-normal hover:bg-cstLPurple hover:text-cstPurple"
            >8</NuxtLink
          >
          <NuxtLink
            to="/"
            class="p-3 rounded-lg text-cstGray text-sm font-normal hover:bg-cstLPurple hover:text-cstPurple"
            >9</NuxtLink
          >
          <NuxtLink
            to="/"
            class="p-3 rounded-lg text-cstGray text-sm font-normal hover:bg-cstLPurple hover:text-cstPurple"
            >10</NuxtLink
          >
        </div>
        <button class="flex gap-2">
          <span class="text-cstGray text-sm font-medium">Next</span>
          <img src="../assets/images/arrow-right.svg" alt="left" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.active {
  color: #7f56d9;
  background: #f9f5ff;
}
</style>
