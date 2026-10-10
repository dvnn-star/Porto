<script setup lang="ts">
const mounted = ref(false)
onMounted(() => {
  requestAnimationFrame(() => { mounted.value = true })
})

const stats = [
  { label: 'Based in Batam, Indonesia', icon: '📍' },
  { label: 'Open to full-time & freelance', icon: '💼' },
  { label: 'Web Developer', icon: '💻' },
]
</script>

<template>
  <section class="relative py-24 md:py-32 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-stone-50 dark:bg-zinc-950">
      <div class="absolute inset-0 grid-pattern"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
      <div class="max-w-6xl mx-auto">
        <!-- Label -->
        <span class="text-accent dark:text-accent-dark text-sm font-medium tracking-wide mb-6 block reveal" :class="mounted ? 'is-visible' : ''">
          About Me
        </span>
        
        <!-- Heading -->
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-900 dark:text-zinc-100 leading-tight mb-8 reveal delay-1" :class="mounted ? 'is-visible' : ''">
          Crafting digital experiences with passion
        </h2>
        
        <!-- Description -->
        <p class="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 reveal delay-2" :class="mounted ? 'is-visible' : ''">
          I'm a Web Developer focused on building responsive websites and practical software solutions. I work with modern web technologies to turn ideas into functional digital products, from corporate websites to database-driven applications.
        </p>
        
        <p class="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-12 reveal delay-2" :class="mounted ? 'is-visible' : ''">
          I'm always learning, improving my skills, and looking for opportunities to build software that solves real problems.
        </p>

        <!-- Stats Box -->
        <div class="bg-stone-100/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 reveal delay-3" :class="mounted ? 'is-visible' : ''">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div v-for="stat in stats" :key="stat.label" class="flex items-center gap-3">
              <span class="text-2xl" aria-hidden="true">{{ stat.icon }}</span>
              <span class="text-sm md:text-base text-zinc-700 dark:text-zinc-300">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
