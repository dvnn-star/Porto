<script setup lang="ts">
interface Project {
  title: string
  description: string
  year: string
  tags: string[]
  image: string
  link?: string
}

const props = defineProps<{
  project: Project
  visible?: boolean
  delay?: number
}>()

const delayClass = computed(() => {
  const map: Record<number, string> = { 0: 'delay-1', 1: 'delay-2', 2: 'delay-3' }
  return props.delay !== undefined ? map[props.delay] ?? '' : ''
})
</script>

<template>
  <article
    class="group relative border border-zinc-200 dark:border-zinc-800 hover:border-accent/40 dark:hover:border-accent-dark/40 transition-all duration-300 reveal"
    :class="[visible ? 'is-visible' : '', delayClass]"
  >
    <div class="absolute top-0 left-0 right-0 h-0.5 bg-accent dark:bg-accent-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

    <div class="overflow-hidden bg-zinc-100 dark:bg-zinc-900 aspect-[16/9]">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        loading="lazy"
        decoding="async"
      />
    </div>

    <div class="p-5">
      <div class="flex items-start justify-between gap-4 mb-2">
        <h3 class="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-accent dark:hover:text-accent-dark transition-colors duration-200 inline-flex items-center gap-1 group/link"
          >
            {{ project.title }}
            <span class="opacity-0 group-hover/link:opacity-100 transition-opacity duration-200 text-accent dark:text-accent-dark" aria-hidden="true">↗</span>
          </a>
          <span v-else>{{ project.title }}</span>
        </h3>
        <span class="text-xs text-zinc-400 dark:text-zinc-500 shrink-0 mt-px font-mono">{{ project.year }}</span>
      </div>

      <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-1.5">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/60 px-2 py-0.5 font-medium"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </article>
</template>
