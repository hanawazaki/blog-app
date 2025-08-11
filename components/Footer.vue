<template>
  <footer class="w-full">
    <div
      class="w-full lg:max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 mx-auto py-4 sm:py-6 md:py-[30px]"
    >
      <div
        class="content flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 md:gap-[14px]"
      >
        <span
          class="text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-[120%] text-gray-600"
        >
          &copy; {{ currentYear }}
        </span>

        <NuxtLink
          v-for="link in socialLinks"
          :key="link.name"
          :to="link.url"
          :external="link.external"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener noreferrer' : undefined"
          class="text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-[120%] text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:underline underline-offset-4"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();

const socialLinks = [
  { name: "Twitter", url: "https://twitter.com", external: true },
  { name: "LinkedIn", url: "https://linkedin.com", external: true },
  { name: "Email", url: "mailto:contact@example.com", external: true },
  { name: "RSS feed", url: "/rss.xml", external: false },
  {
    name: "Add to Feedly",
    url: "https://feedly.com/i/subscription/feed/https://yoursite.com/rss.xml",
    external: true,
  },
];
</script>

<style scoped>
footer {
  @apply border-t border-gray-100;
}

a {
  @apply focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-sm;

  @apply py-2 px-1 -mx-1;
}

@media (max-width: 640px) {
  .content {
    @apply justify-center text-center;
  }
}

@media (prefers-contrast: high) {
  a {
    @apply text-black hover:bg-yellow-200;
  }
}

@media (prefers-reduced-motion: reduce) {
  a {
    @apply transition-none;
  }
}
</style>
