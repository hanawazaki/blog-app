<template>
  <Header />
  <div class="max-w-7xl mx-auto px-10 mt-[30px]">
    <div class="flex gap-8 min-h-screen px-8 border">
      <!-- recent -->
      <div class="border w-[342px] flex flex-col gap-8">
        <h1 class="mb-8 text-2xl font-semibold">Recent blog posts</h1>
        <div class="grid grid-cols-1 gap-8">
          <Card
            v-for="index in 6"
            :key="index"
            layout="vertical"
            gridSet="row-span-2 col-span-2 lg:col-span-1"
          />

          <!-- <Card :post="post" v-for="(post, index) in recentPost" :key="index" /> -->
        </div>
      </div>
      <!-- blog detail -->
      <div class="border h-full w-[778px] flex flex-col gap-8">
        <h5 class="text-sm font-semibold text-cstPurple">Sunday, 1 Jan 2023</h5>
        <h1 class="text-4xl font-bold leading-8 text-cstDarkBlue">
          Grid system for better Design User Interface
        </h1>
        <div class="mb-5 max-h-[426px]">
          <img
            src="../../assets/images/header-image.jpeg"
            alt="image"
            class=""
          />
        </div>
        <div class="post flex flex-col">
          <h6>
            A grid system is a design tool used to arrange content on a webpage.
            It is a series of vertical and horizontal lines that create a matrix
            of intersecting points, which can be used to align and organize page
            elements. Grid systems are used to create a consistent look and feel
            across a website, and can help to make the layout more visually
            appealing and easier to navigate.
          </h6>

          <img src="../../assets/images/image.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
const { id } = useRoute().params;
</script>

<style lang="scss" scoped></style>
