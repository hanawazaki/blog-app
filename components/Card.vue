<template>
  <div class="flex h-full" :class="[layoutClass, gridSetClass]">
    <div
      class="image-container w-full"
      :class="{
        'w-6/12 max-h-[200px] max-w-[320px]': layout === 'horizontal',
        'max-h-[228px] max-w-[592px]': layout === 'vertical',
        'w-6/12 max-h-[228px] max-w-[592px]': layout === 'horizontal-long',
      }"
    >
      <img
        src="../assets/images/thumb1.jpeg"
        alt="thumb1"
        class="h-full w-full object-cover"
      />
    </div>
    <div
      class="card-content flex flex-col gap-6 justify-between"
      :class="{
        'w-6/12': layout === 'horizontal',
        'w-6/12': layout === 'horizontal-long',
      }"
    >
      <div class="article-text flex flex-col gap-3">
        <h5 class="text-sm font-semibold text-cstPurple">
          Olivia Rhye • 1 Jan 2023
        </h5>
        <NuxtLink
          to="/"
          class="flex justify-between transition-all ease-in-out duration-300 hover:scale-105"
        >
          <h2
            class="font-semibold text-cstBlack break-words"
            :class="{
              'text-2xl': layout === 'vertical' || layout === 'horizontal-long',
              'text-lg': layout === 'horizontal',
            }"
          >
            {{
              layout === "vertical" || layout === "horizontal-long"
                ? textTitle
                : truncateTitle(textTitle)
            }}
          </h2>
          <img src="../assets/images/arrow-up-right.svg" alt="arrow" />
        </NuxtLink>
        <p class="text-base font-normal text-cstGray">
          {{
            layout === "vertical" || layout === "horizontal-long"
              ? textDesc
              : truncateDesc(textDesc)
          }}
        </p>
      </div>
      <div class="categories flex gap-2">
        <label
          class="px-[10px] py-[2px] text-sm text-cstPurple bg-cstLPurple rounded-2xl"
          >Design</label
        >
        <label
          class="px-[10px] py-[2px] text-sm text-cstBlue bg-cstLBlue rounded-2xl"
          >Research</label
        >
        <label
          class="px-[10px] py-[2px] text-sm text-cstMagenta bg-cstLMagenta rounded-2xl"
          >Presentation</label
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  layout: String,
  gridSet: String,
  post: Array,
});

const textTitle = ref("UX review presentations");
const textDesc = ref(
  "How do you create compelling presentations that wow your colleagues and impress your managers?"
);

const truncateTitle = (text) => {
  if (text.length > 30) {
    return text.substring(0, 20) + "...";
  }
  return text;
};

const truncateDesc = (text) => {
  if (text.length > 30) {
    return text.substring(0, 75) + "...";
  }
  return text;
};

const gridSetClass = computed(() => {
  return {
    "flex-col gap-8 max-h-[432px]": props.layout == "vertical",
    "flex-row gap-6 max-h-[200px]": props.layout === "horizontal",
    "flex-row gap-8 max-h-[432px] justify-between":
      props.layout === "horizontal-long",
  };
});

const layoutClass = computed(() => {
  return {
    "row-span-2 col-span-2 lg:col-span-1":
      props.gridSet === "row-span-2 col-span-2 lg:col-span-1",
    "max-lg:col-span-2": props.gridSet === "max-lg:col-span-2",
    "col-span-2": props.gridSet === "col-span-2",
  };
});
</script>

<style lang="scss" scoped></style>
