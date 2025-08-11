<template>
  <Header />
  <section class="mt-[50px] pb-7 hero mx-auto max-w-7xl px-3 lg:px-6 xl:px-10">
    <div class="w-full mx-auto border-cstBlack border-t border-b">
      <h1
        class="text-center max-[386px]:text-5xl max-[810px]:text-7xl max-md:text-8xl md:text-[160px] xl:text-[244px] tracking-tight text-cstBlack font-bold"
      >
        THE BLOG
      </h1>
    </div>
  </section>
  <section class="recent-post mt-7">
    <div class="mx-auto max-w-7xl px-10">
      <h1 class="mb-8 text-2xl font-semibold">Recent blog posts</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:gap-8">
        <Card layout="vertical" gridSet="row-span-2 col-span-2 lg:col-span-1" />
        <Card layout="horizontal" gridSet="max-lg:col-span-2" />
        <Card layout="horizontal" gridSet="max-lg:col-span-2" />
        <Card layout="horizontal-long" gridSet="col-span-2" />
        <!-- <Card :post="post" v-for="(post, index) in recentPost" :key="index" /> -->
      </div>
    </div>
  </section>
  <section class="all-post mt-6 sm:mt-8">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
      <h1
        class="mb-4 sm:mb-6 md:mb-8 text-xl sm:text-2xl font-semibold text-center sm:text-left"
      >
        All blog posts
      </h1>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
      >
        <Card
          layout="vertical"
          gridSet="max-lg:col-span-1"
          v-for="data in 6"
          :key="data"
          :id="data"
          class="h-full"
        />
      </div>

      <div class="flex justify-center mt-8 sm:mt-12">
        <button
          class="px-6 py-3 bg-cstPurple text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base"
        >
          Load More Posts
        </button>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup>
const recentPost = ref([
  {
    id: 1,
    title: "UX review presentations",
    author: "Olivia Rhye",
    date: "1 Jan 2023",
    desc: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    categories: ["Design", "Research", "Presentation"],
    thumb: "../assets/images/thumb1.jpeg",
    layout: 1,
    gridSet: 1,
  },
  {
    id: 2,
    title: "UX review presentations",
    author: "Olivia Rhye",
    date: "1 Jan 2023",
    desc: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    categories: ["Design", "Research", "Presentation"],
    thumb: "../assets/images/thumb1.jpeg",
    layout: 2,
    gridSet: 2,
  },
  {
    id: 3,
    title: "UX review presentations",
    author: "Olivia Rhye",
    date: "1 Jan 2023",
    desc: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    categories: ["Design", "Research", "Presentation"],
    thumb: "../assets/images/thumb1.jpeg",
    layout: 2,
    gridSet: 2,
  },
  {
    id: 4,
    title: "UX review presentations",
    author: "Olivia Rhye",
    date: "1 Jan 2023",
    desc: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    categories: ["Design", "Research", "Presentation"],
    thumb: "../assets/images/thumb1.jpeg",
    layout: 3,
    gridSet: 3,
  },
]);
</script>

<style lang="scss" scoped></style>
