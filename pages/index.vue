<template>
  <div>
    <Header />
    <section class="mt-[50px] pb-7 hero mx-auto max-w-7xl px-10">
      <div class="container border-cstBlack border-t border-b">
        <h1
          class="text-[243.8px] leading-normal tracking-tight text-cstBlack font-bold"
        >
          THE BLOG
        </h1>
      </div>
    </section>
    <section class="recent-post mt-7">
      <div class="mx-auto max-w-7xl px-10">
        <h1 class="mb-8 text-2xl font-semibold">Recent blog posts</h1>
        <div class="grid grid-cols-2 grid-rows-2 gap-8">
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
