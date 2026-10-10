<script setup lang="ts">
const projects = [
  {
    title: 'Persona Portfolio',
    description: 'A modern personal portfolio website showcasing projects and skills with a clean, minimalist design and smooth animations.',
    year: '2024',
    tags: ['Nuxt 3', 'TypeScript', 'Tailwind CSS'],
    image: '/image/personaportfolio.jpg',
    github: 'https://github.com/dvnn-star/PersonaThemePorto',
    link: 'https://persona-theme-porto.vercel.app',
    description: 'Company profile website for Nexa Mandiri with professional design, responsive layout, and optimized performance.',
    year: '2024',
    tags: ['Vue 3', 'Tailwind CSS', 'SCSS'],
    image: '/image/nexamandiri.jpg',
    github: '#',
    link: 'https://www.nexamandirigroup.com/en',
  },
  {
    title: 'Website Monitor',
    description: 'Real-time website monitoring dashboard that tracks uptime, performance metrics, and provides detailed analytics.',
    year: '2024',
    tags: ['Nuxt 3', 'TypeScript', 'Chart.js'],
    image: '/image/websitemonitor.jpg',
    github: 'https://github.com/dvnn-star/WebsiteMonitoring',
    link: 'https://websitemonitoring-sepia.vercel.app/',
  },
  {
    title: 'Doom Scroller',
    description: 'An infinite scroll web application with dynamic content loading, smooth transitions, and responsive design.',
    year: '2024',
    tags: ['Vue 3', 'JavaScript', 'CSS Animations'],
    image: '/image/doomscroller.jpg',
    github: 'https://github.com/dvnn-star/DoomScroll',
    link: '#',
  },
  {
    title: 'E-Book Store',
    description: 'Digital bookstore platform with user-friendly interface, secure payment integration, and comprehensive book catalog.',
    year: '2023',
    tags: ['Vue 3', 'Tailwind CSS', 'REST API'],
    image: '/image/ebookstore.webp',
    github: 'https://github.com/dvnn-star/EBookStore',
    link: '#',
  },
  {
    title: 'Moda Store',
    description: 'Online fashion store website with clean product catalog, size selection, and modern shopping experience for clothing.',
    year: '2024',
    tags: ['Vue 3', 'Tailwind CSS', 'REST API'],
    image: '/image/modastore.jpg',
    github: 'https://github.com/dvnn-star/TemplateShop',
    link: 'https://template-shop-bice.vercel.app',
  },
]

const { el: headingEl, visible: headingVisible } = useReveal()
const { el: listEl, visible: listVisible } = useReveal()
</script>

<template>
  <section id="projects" class="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
    <div
      ref="headingEl"
      class="border-t border-zinc-200 dark:border-zinc-800 pt-10 mb-10 reveal"
      :class="headingVisible ? 'is-visible' : ''"
    >
      <h2 class="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
        Projects
      </h2>
    </div>

    <div ref="listEl" class="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800">
      <div
        v-for="(project, i) in projects"
        :key="project.title"
        class="flex flex-col md:flex-row gap-6 md:gap-10 py-10 group reveal"
        :class="[listVisible ? 'is-visible' : '', `delay-${(i % 3) + 1}`]"
      >
        <!-- Left: Image -->
        <div class="w-full md:w-80 lg:w-96 shrink-0">
          <div class="aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 group-hover:border-accent/40 dark:group-hover:border-accent-dark/40 transition-colors duration-300">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <!-- Right: Info -->
        <div class="flex flex-col justify-center flex-1">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-xs font-mono text-zinc-400 dark:text-zinc-500">{{ project.year }}</span>
          </div>

          <h3 class="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
            {{ project.title }}
          </h3>

          <p class="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5">
            {{ project.description }}
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mb-6">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 px-3 py-1"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Links -->
          <div class="flex items-center gap-5">
            <a
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-sm font-medium text-accent dark:text-accent-dark hover:opacity-75 transition-opacity duration-200"
            >
              Live Preview
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
