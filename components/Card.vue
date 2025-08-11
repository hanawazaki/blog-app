<template>
  <div class="flex flex-col h-full" :class="[layoutClass, gridSetClass]">
    <!-- Image Container -->
    <div
      class="image-container w-full overflow-hidden rounded-lg"
      :class="imageContainerClass"
    >
      <img
        src="../assets/images/thumb1.jpeg"
        alt="thumb1"
        class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>

    <!-- Content -->
    <div
      class="card-content flex flex-col gap-4 sm:gap-6 flex-1"
      :class="contentClass"
    >
      <div class="article-text flex flex-col gap-2 sm:gap-3">
        <h5 class="text-xs sm:text-sm font-semibold text-cstPurple">
          Olivia Rhye • 1 Jan 2023
        </h5>

        <NuxtLink
          :to="`/post/${id}`"
          class="flex justify-between items-start gap-2"
        >
          <h2
            class="font-semibold text-cstBlack break-words transition-all hover:text-cstPurple flex-1"
            :class="titleClass"
          >
            {{ displayTitle }}
          </h2>
          <img
            src="../assets/images/arrow-up-right.svg"
            alt="arrow"
            class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-1"
          />
        </NuxtLink>

        <p
          class="text-sm sm:text-base font-normal leading-5 sm:leading-6 text-cstGray"
        >
          {{ displayDesc }}
        </p>
      </div>

      <div class="categories flex flex-wrap gap-1.5 sm:gap-2">
        <label
          class="px-2 sm:px-[10px] py-1 sm:py-[2px] text-xs sm:text-sm text-cstPurple bg-cstLPurple rounded-xl sm:rounded-2xl"
        >
          Design
        </label>
        <label
          class="px-2 sm:px-[10px] py-1 sm:py-[2px] text-xs sm:text-sm text-cstBlue bg-cstLBlue rounded-xl sm:rounded-2xl"
        >
          Research
        </label>
        <label
          class="px-2 sm:px-[10px] py-1 sm:py-[2px] text-xs sm:text-sm text-cstMagenta bg-cstLMagenta rounded-xl sm:rounded-2xl"
        >
          Presentation
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  layout: {
    type: String,
    default: "vertical",
  },
  gridSet: {
    type: String,
    default: "",
  },
  post: {
    type: Array,
    default: () => [],
  },
  id: {
    type: [String, Number],
    default: 1,
  },
});

const textTitle = ref("UX review presentations");
const textDesc = ref(
  "How do you create compelling presentations that wow your colleagues and impress your managers?"
);

// Responsive text truncation
const truncateTitle = (text, isMobile = false) => {
  const maxLength = isMobile ? 35 : props.layout === "horizontal" ? 25 : 50;
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + "...";
  }
  return text;
};

const truncateDesc = (text, isMobile = false) => {
  const maxLength = isMobile ? 80 : props.layout === "horizontal" ? 75 : 120;
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + "...";
  }
  return text;
};

// Computed properties for responsive classes
const imageContainerClass = computed(() => {
  const baseClass = "aspect-video sm:aspect-[4/3]";

  switch (props.layout) {
    case "horizontal":
      return `${baseClass} md:w-6/12 max-h-[160px] sm:max-h-[200px]`;
    case "horizontal-long":
      return `${baseClass} md:w-6/12 max-h-[180px] sm:max-h-[228px]`;
    default: // vertical
      return `${baseClass} max-h-[180px] sm:max-h-[228px]`;
  }
});

const contentClass = computed(() => {
  if (props.layout === "horizontal" || props.layout === "horizontal-long") {
    return "md:w-6/12 justify-between";
  }
  return "justify-between";
});

const titleClass = computed(() => {
  switch (props.layout) {
    case "horizontal":
      return "text-base sm:text-lg leading-5 sm:leading-6";
    case "vertical":
    case "horizontal-long":
      return "text-lg sm:text-xl md:text-2xl leading-6 sm:leading-7 md:leading-8";
    default:
      return "text-base sm:text-lg leading-5 sm:leading-6";
  }
});

const gridSetClass = computed(() => {
  const isLongLayout =
    props.layout === "vertical" || props.layout === "horizontal-long";

  return {
    "flex-col gap-4 sm:gap-6 md:gap-8 max-h-none sm:max-h-[400px] md:max-h-[432px] mb-6 sm:mb-8":
      props.layout === "vertical",
    "md:flex-row gap-4 sm:gap-6 max-h-none sm:max-h-[180px] md:max-h-[200px]":
      props.layout === "horizontal",
    "md:flex-row gap-4 sm:gap-6 md:gap-8 max-h-none sm:max-h-[400px] md:max-h-[432px] justify-between py-4 sm:py-6 md:py-[30px]":
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

// Responsive display text
const displayTitle = computed(() => {
  // Simple mobile detection - in real app, you might use a composable for this
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  if (props.layout === "vertical" || props.layout === "horizontal-long") {
    return isMobile ? truncateTitle(textTitle.value, true) : textTitle.value;
  } else {
    return truncateTitle(textTitle.value, isMobile);
  }
});

const displayDesc = computed(() => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  if (props.layout === "vertical" || props.layout === "horizontal-long") {
    return isMobile ? truncateDesc(textDesc.value, true) : textDesc.value;
  } else {
    return truncateDesc(textDesc.value, isMobile);
  }
});
</script>

<style scoped>
.image-container {
  @apply transition-all duration-300;
}

.card-content {
  @apply pt-3 sm:pt-4;
}

/* Ensure proper spacing on very small screens */
@media (max-width: 480px) {
  .categories {
    @apply gap-1;
  }

  .categories label {
    @apply px-1.5 py-0.5 text-xs;
  }
}

/* Hover effects for desktop */
@media (hover: hover) {
  .card-content:hover .image-container img {
    @apply scale-105;
  }
}
</style>
