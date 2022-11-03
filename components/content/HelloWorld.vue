<template>
  <div class="rounded p-2 bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200">
    <!-- https://content.nuxtjs.org/api/components/content-slot -->
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>