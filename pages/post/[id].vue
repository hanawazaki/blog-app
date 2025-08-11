<template>
  <div class="min-h-screen bg-gray-50">
    <Header />

    <main
      class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mt-4 sm:mt-6 md:mt-8"
    >
      <!-- Mobile: Stack layout, Desktop: Side by side -->
      <div class="flex flex-col lg:flex-row gap-6 lg:gap-8 min-h-screen">
        <!-- Recent Posts Sidebar -->
        <aside class="w-full lg:w-80 xl:w-96 order-2 lg:order-1">
          <div
            class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 sticky top-4"
          >
            <h2
              class="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 md:mb-8"
            >
              Recent blog posts
            </h2>

            <!-- Recent Posts Grid -->
            <div class="space-y-4 sm:space-y-6 md:space-y-8">
              <Card
                v-for="index in recentPostsToShow"
                :key="`recent-${index}`"
                layout="vertical"
                :gridSet="''"
                class="recent-post-card"
              />
            </div>

            <!-- View All Button -->
            <div class="mt-6 pt-4 border-t border-gray-100">
              <NuxtLink
                to="/blog"
                class="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                View all posts
                <svg
                  class="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </aside>

        <!-- Main Blog Content -->
        <article class="flex-1 order-1 lg:order-2">
          <div
            class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
          >
            <!-- Article Header -->
            <header class="p-4 sm:p-6 md:p-8">
              <div class="mb-3 sm:mb-4">
                <time
                  class="text-xs sm:text-sm font-semibold text-purple-600 uppercase tracking-wide"
                >
                  {{ formatDate(articleDate) }}
                </time>
              </div>

              <h1
                class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-4 sm:mb-6"
              >
                {{ articleTitle }}
              </h1>

              <!-- Article Meta -->
              <div
                class="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6"
              >
                <div class="flex items-center gap-2">
                  <img
                    src="../../assets/images/author-avatar.jpg"
                    alt="Author"
                    class="w-8 h-8 rounded-full object-cover"
                    @error="handleImageError"
                  />
                  <span>{{ author }}</span>
                </div>
                <span>•</span>
                <span>{{ readTime }} min read</span>
                <span>•</span>
                <span>{{ viewCount }} views</span>
              </div>
            </header>

            <!-- Featured Image -->
            <div class="relative">
              <div
                class="aspect-video sm:aspect-[16/10] lg:aspect-[2/1] overflow-hidden"
              >
                <img
                  :src="featuredImage"
                  :alt="articleTitle"
                  class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  @error="handleImageError"
                />
              </div>

              <!-- Image Caption (optional) -->
              <figcaption
                class="p-3 text-xs sm:text-sm text-gray-600 bg-gray-50 border-t"
              >
                {{ imageCaption }}
              </figcaption>
            </div>

            <!-- Article Content -->
            <div
              class="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none p-4 sm:p-6 md:p-8"
            >
              <!-- Article Excerpt/Intro -->
              <div
                class="text-base sm:text-lg text-gray-700 font-medium leading-relaxed mb-6 sm:mb-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r"
              >
                {{ articleExcerpt }}
              </div>

              <!-- Article Body -->
              <div class="space-y-4 sm:space-y-6">
                <p class="text-gray-800 leading-relaxed">
                  A grid system is a design tool used to arrange content on a
                  webpage. It is a series of vertical and horizontal lines that
                  create a matrix of intersecting points, which can be used to
                  align and organize page elements. Grid systems are used to
                  create a consistent look and feel across a website, and can
                  help to make the layout more visually appealing and easier to
                  navigate.
                </p>

                <!-- Content Image -->
                <figure class="my-6 sm:my-8">
                  <div class="relative overflow-hidden rounded-lg">
                    <img
                      src="../../assets/images/image.png"
                      alt="Grid system example"
                      class="w-full h-auto transition-transform duration-300 hover:scale-102"
                      loading="lazy"
                      @error="handleImageError"
                    />
                  </div>
                  <figcaption class="mt-2 text-sm text-gray-600 text-center">
                    Example of a well-structured grid system in web design
                  </figcaption>
                </figure>

                <!-- More content paragraphs -->
                <p class="text-gray-800 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
              </div>
            </div>

            <!-- Article Footer -->
            <footer
              class="p-4 sm:p-6 md:p-8 border-t border-gray-200 bg-gray-50"
            >
              <!-- Tags -->
              <div class="mb-4 sm:mb-6">
                <h3 class="text-sm font-semibold text-gray-900 mb-3">Tags:</h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in articleTags"
                    :key="tag"
                    class="px-3 py-1 text-xs sm:text-sm font-medium bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors duration-200 cursor-pointer"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- Share Buttons -->
              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <h3 class="text-sm font-semibold text-gray-900">
                  Share this article:
                </h3>
                <div class="flex gap-3">
                  <button
                    v-for="social in socialShareButtons"
                    :key="social.name"
                    @click="shareArticle(social.platform)"
                    :class="social.bgColor"
                    class="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium text-white rounded-lg hover:opacity-90 transition-opacity duration-200"
                  >
                    <component :is="social.icon" class="w-4 h-4" />
                    {{ social.name }}
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </article>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
// Route params
const { id } = useRoute().params;

// Reactive data
const articleDate = ref("Sunday, 1 Jan 2023");
const articleTitle = ref("Grid system for better Design User Interface");
const author = ref("John Doe");
const readTime = ref(8);
const viewCount = ref(1250);
const featuredImage = ref("../../assets/images/header-image.jpeg");
const imageCaption = ref("Modern grid system implementation in web design");

const articleExcerpt = ref(
  "Understanding grid systems is fundamental to creating well-structured, visually appealing web interfaces that provide excellent user experience across all devices."
);

const articleTags = ref([
  "Design",
  "UI/UX",
  "Web Development",
  "Grid System",
  "Frontend",
]);

// Responsive recent posts count
const recentPostsToShow = computed(() => {
  // Show fewer posts on mobile to reduce scrolling
  if (process.client && window.innerWidth < 640) return 3;
  if (process.client && window.innerWidth < 1024) return 4;
  return 6;
});

// Social sharing
const socialShareButtons = ref([
  {
    name: "Twitter",
    platform: "twitter",
    bgColor: "bg-blue-500",
    icon: "TwitterIcon", // You'll need to import actual icons
  },
  {
    name: "LinkedIn",
    platform: "linkedin",
    bgColor: "bg-blue-700",
    icon: "LinkedInIcon",
  },
  {
    name: "Facebook",
    platform: "facebook",
    bgColor: "bg-blue-600",
    icon: "FacebookIcon",
  },
]);

// Methods
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const handleImageError = (event) => {
  // Fallback image or placeholder - use public folder path
  event.target.src = "/images/placeholder-image.jpg";
  event.target.alt = "Image not available";
};

const shareArticle = (platform) => {
  const url = window.location.href;
  const title = articleTitle.value;

  let shareUrl = "";

  switch (platform) {
    case "twitter":
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(title)}`;
      break;
    case "linkedin":
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`;
      break;
    case "facebook":
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`;
      break;
  }

  if (shareUrl) {
    window.open(
      shareUrl,
      "_blank",
      "width=600,height=400,scrollbars=yes,resizable=yes"
    );
  }
};

// SEO Meta tags
useHead({
  title: articleTitle.value,
  meta: [
    { name: "description", content: articleExcerpt.value },
    { property: "og:title", content: articleTitle.value },
    { property: "og:description", content: articleExcerpt.value },
    { property: "og:image", content: featuredImage.value },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: articleTitle.value },
    { name: "twitter:description", content: articleExcerpt.value },
    { name: "twitter:image", content: featuredImage.value },
  ],
});

// Responsive behavior
onMounted(() => {
  // Add scroll behavior for better reading experience
  const handleScroll = () => {
    const header = document.querySelector("header");
    if (header && window.scrollY > 100) {
      header.classList.add("reading-mode");
    } else if (header) {
      header.classList.remove("reading-mode");
    }
  };

  window.addEventListener("scroll", handleScroll);

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>

<style scoped>
/* Responsive utilities */
.recent-post-card {
  @apply transition-all duration-200 hover:shadow-md;
}

/* Typography improvements */
.prose {
  @apply text-gray-800;
}

.prose p {
  @apply mb-4 leading-relaxed;
}

.prose h2,
.prose h3,
.prose h4 {
  @apply font-semibold text-gray-900 mt-8 mb-4;
}

.prose h2 {
  @apply text-xl sm:text-2xl;
}

.prose h3 {
  @apply text-lg sm:text-xl;
}

/* Image optimizations */
img {
  @apply transition-all duration-300;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .prose {
    @apply text-sm leading-relaxed;
  }
}

/* Focus states for accessibility */
button:focus,
a:focus {
  @apply outline-none ring-2 ring-blue-500 ring-opacity-50 ring-offset-2;
}

/* Loading states */
.loading-skeleton {
  @apply animate-pulse bg-gray-200 rounded;
}

/* Print styles */
@media print {
  .recent-post-card,
  aside {
    @apply hidden;
  }

  article {
    @apply w-full max-w-none;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .bg-gray-50 {
    @apply bg-white;
  }

  .text-gray-600 {
    @apply text-gray-900;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    @apply transition-none;
  }
}

/* Reading progress indicator (optional) */
.reading-progress {
  @apply fixed top-0 left-0 w-full h-1 bg-blue-500 z-50 transition-all duration-150;
  transform: scaleX(var(--reading-progress, 0));
  transform-origin: left;
}
</style>
