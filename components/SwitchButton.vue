<template>
  <div id="app" class="flex items-center justify-center">
    <div class="relative">
      <input
        type="checkbox"
        id="darkModeSwitch"
        class="sr-only"
        v-model="darkMode"
      />
      <label
        for="darkModeSwitch"
        class="flex items-center cursor-pointer px-4 py-2"
      >
        <div
          :class="{ 'bg-dark-mode': darkMode, 'bg-gray-500': !darkMode }"
          class="w-16 h-8 rounded-full p-1 duration-300 ease-in-out"
        >
          <div
            :class="{ 'translate-x-full': darkMode }"
            class="bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out"
          ></div>
        </div>
        <div
          :class="{ 'text-dark-mode': darkMode, 'text-white': !darkMode }"
          class="ml-3 font-medium"
        >
          Light
        </div>
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const darkMode = ref(false);

const toggleDarkMode = () => {
  const darkModeSwitch = document.getElementById("darkModeSwitch");
  const switchButton = darkModeSwitch.nextElementSibling.querySelector("div");

  if (darkMode.value) {
    switchButton.style.transform = "translateX(100%)";
    document.body.classList.add("bg-dark-mode");
    document.querySelectorAll(".text-dark-mode").forEach((element) => {
      element.classList.add("text-white");
    });
  } else {
    switchButton.style.transform = "translateX(0)";
    document.body.classList.remove("bg-dark-mode");
    document.querySelectorAll(".text-dark-mode").forEach((element) => {
      element.classList.remove("text-white");
    });
  }
};

onMounted(() => {
  const darkModeSwitch = document.getElementById("darkModeSwitch");
  darkModeSwitch.addEventListener("change", toggleDarkMode);
});
</script>

<style scoped>
.bg-dark-mode {
  background-color: #090d1f;
}

.text-dark-mode {
  color: #ffffff;
}
</style>
