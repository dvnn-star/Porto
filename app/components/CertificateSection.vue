<script setup lang="ts">
const certificates = [
  {
    title: 'Fundamental Web Development',
    issuer: 'Dicoding Indonesia',
    year: '2024',
    image: '/certification/fundamentalweb.jpeg',
    link: '#',
  },
  {
    title: 'Intermediate Web Development',
    issuer: 'Dicoding Indonesia',
    year: '2024',
    image: '/certification/intermidieteweb.jpeg',
    link: '#',
  },
  {
    title: 'Data Science',
    issuer: 'Dicoding Indonesia',
    year: '2024',
    image: '/certification/datascience.jpg',
    link: '#',
  },
  {
    title: 'Dasar AI',
    issuer: 'Dicoding Indonesia',
    year: '2024',
    image: '/certification/dasarai.jpg',
    link: '#',
  },
]

const { el: headingEl, visible: headingVisible } = useReveal()
const { el: gridEl, visible: gridVisible } = useReveal()
</script>

<template>
  <section id="certificates" class="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
    <div
      ref="headingEl"
      class="border-t border-zinc-200 dark:border-zinc-800 pt-10 mb-10 reveal"
      :class="headingVisible ? 'is-visible' : ''"
    >
      <h2 class="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
        Certificates
      </h2>
    </div>

    <div ref="gridEl" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      <a
        v-for="(cert, i) in certificates"
        :key="cert.title"
        :href="cert.link"
        target="_blank"
        rel="noopener noreferrer"
        class="group bg-stone-100/50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-accent dark:hover:border-accent transition-colors duration-200 reveal"
        :class="[gridVisible ? 'is-visible' : '', `delay-${i + 1}`]"
      >
        <!-- Image -->
        <div class="aspect-video bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
          <a :href="cert.image" target="_blank" rel="noopener noreferrer" class="block w-full h-full cursor-zoom-in">
            <img 
              :src="cert.image" 
              :alt="cert.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>
        
        <!-- Content -->
        <div class="p-5">
          <h3 class="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-accent dark:group-hover:text-accent transition-colors duration-200">
            {{ cert.title }}
          </h3>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              <span>{{ cert.issuer }}</span>
              <span>•</span>
              <span>{{ cert.year }}</span>
            </div>
            <span class="text-zinc-400 group-hover:text-accent transition-colors duration-200" aria-hidden="true">↗</span>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>
