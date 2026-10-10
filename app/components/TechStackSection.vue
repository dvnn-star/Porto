<script setup lang="ts">
import { Icon } from '@iconify/vue'

const categories = [
  {
    label: 'Frontend Development',
    items: [
      { name: 'Vue 3', icon: 'simple-icons:vuedotjs' },
      { name: 'Nuxt', icon: 'simple-icons:nuxtdotjs' },
      { name: 'React', icon: 'simple-icons:react' },
      { name: 'TypeScript', icon: 'simple-icons:typescript' },
      { name: 'JavaScript', icon: 'simple-icons:javascript' },
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
      { name: 'SCSS', icon: 'simple-icons:sass' },
      { name: 'HTML5', icon: 'simple-icons:html5' },
      { name: 'CSS3', icon: 'simple-icons:css3' },
    ],
  },
  {
    label: 'Version Control',
    items: [
      { name: 'Git', icon: 'simple-icons:git' },
      { name: 'GitHub', icon: 'simple-icons:github' },
      { name: 'GitLab', icon: 'simple-icons:gitlab' },
    ],
  },
  {
    label: 'Development Tools',
    items: [
      { name: 'VS Code', icon: 'simple-icons:visualstudiocode' },
      { name: 'Vite', icon: 'simple-icons:vite' },
      { name: 'Webpack', icon: 'simple-icons:webpack' },
      { name: 'npm', icon: 'simple-icons:npm' },
      { name: 'Yarn', icon: 'simple-icons:yarn' },
      { name: 'pnpm', icon: 'simple-icons:pnpm' },
    ],
  },
  {
    label: 'Backend & APIs',
    items: [
      { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
      { name: 'Laravel', icon: 'simple-icons:laravel' },
      { name: 'GraphQL', icon: 'simple-icons:graphql' },
      { name: 'REST API', icon: 'simple-icons:fastapi' },
      { name: 'MongoDB', icon: 'simple-icons:mongodb' },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
    ],
  },

  {
    label: 'Design & Collaboration',
    items: [
      { name: 'Figma', icon: 'simple-icons:figma' },
      { name: 'Notion', icon: 'simple-icons:notion' },
      { name: 'Postman', icon: 'simple-icons:postman' },
    ],
  },
]

const { el: headingEl, visible: headingVisible } = useReveal()
</script>

<template>
  <section id="stack" class="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 overflow-hidden">
    <div
      ref="headingEl"
      class="border-t border-zinc-200 dark:border-zinc-800 pt-10 mb-20 reveal"
      :class="headingVisible ? 'is-visible' : ''"
    >
      <h2 class="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
        Skills & Tech Stack
      </h2>
    </div>

    <!-- Marquee Rows by Category -->
    <div class="space-y-7 mx-auto max-w-5xl">
      <div v-for="(category, catIndex) in categories" :key="category.label" class="relative">
        <!-- Category Label -->
        <p class="text-xs font-semibold tracking-widest uppercase text-zinc-500 dark:text-white mb-3 px-1 underline-offset-2 underline decoration-white">
          {{ category.label }}
        </p>
        
        <!-- Marquee -->
        <div class="overflow-hidden">
          <div :class="catIndex % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse'" class="flex w-max">
            <div class="flex gap-6" v-for="n in 3" :key="n">
              <div
                v-for="item in category.items"
                :key="item.name"
                class="flex items-center gap-2.5 bg-stone-100/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 px-5 py-3 rounded-lg whitespace-nowrap hover:border-accent dark:hover:border-accent transition-colors duration-200 cursor-default"
              >
                <Icon
                  :icon="item.icon"
                  class="w-5 h-5 text-zinc-500 dark:text-zinc-400"
                  aria-hidden="true"
                />
                <span class="text-sm font-medium text-zinc-700 dark:text-zinc-300">{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
