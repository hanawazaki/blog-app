<template>
  <div>
    <Header />
    <section
      class="mt-[50px] pb-7 hero mx-auto max-w-7xl px-3 lg:px-6 xl:px-10"
    >
      <div class="w-full mx-auto border-cstBlack border-t border-b">
        <h1
          class="text-center max-[386px]:text-5xl max-[810px]:text-7xl max-md:text-8xl md:text-[160px] md:text-red-500 xl:text-blue-500 xl:text-[244px] tracking-tight text-cstBlack font-bold"
        >
          THE BLOG
        </h1>
      </div>
    </section>
    <section class="recent-post mt-7">
      <div class="mx-auto max-w-7xl px-10">
        <h1 class="mb-8 text-2xl font-semibold">
          Recent blog postsssssssssssssss
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:gap-8">
          <Card
            layout="vertical"
            gridSet="row-span-2 col-span-2 lg:col-span-1"
          />
          <Card layout="horizontal" gridSet="max-lg:col-span-2" />
          <Card layout="horizontal" gridSet="max-lg:col-span-2" />
          <Card layout="horizontal-long" gridSet="col-span-2" />
          <!-- <Card :post="post" v-for="(post, index) in recentPost" :key="index" /> -->
        </div>
      </div>
    </section>
    <section class="all-post mt-8">
      <div class="mx-auto max-w-7xl px-10">
        <h1 class="mb-8 text-2xl font-semibold">All blog posts</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            layout="vertical"
            gridSet="max-lg:col-span-2"
            v-for="data in 6"
            :key="data"
          />
        </div>
      </div>
    </section>
    <Pagination />
    <Footer />
  </div>
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
