<script setup lang="ts">
const year = new Date().getFullYear()

const socials = [
  { label: 'GitHub', href: 'https://github.com/delvin' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/delvin' },
  { label: 'Instagram', href: 'https://instagram.com/delvin' },
]
</script>

<template>
  <footer class="border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
      <p class="text-xs text-zinc-400 dark:text-zinc-600">
        © {{ year }} Delvin — built with ☕ &amp; Vue
      </p>
      <nav class="flex items-center gap-5" aria-label="Social links">
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          class="text-xs text-zinc-400 dark:text-zinc-600 hover:text-accent dark:hover:text-accent-dark transition-colors duration-200"
          :aria-label="social.label"
        >
          {{ social.label }}
        </a>
      </nav>
    </div>
  </footer>
</template>
