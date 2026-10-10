<script setup lang="ts">
const experiences = [
  {
    year: 'Dec 2025 — Present',
    role: 'Freelance Web Developer',
    description: 'Building web applications and websites for clients, from landing pages to full web apps.',
  },
  {
    year: 'Aug 2025 — Sep 2025',
    role: 'Admin Kasir · PT Graha Auto Plus',
    description: 'Handled cashier administration and managed daily financial transactions at PT Graha Auto Plus.',
  },
]

const { el: headingEl, visible: headingVisible } = useReveal()
const { el: timelineEl, visible: timelineVisible } = useReveal()
</script>

<template>
  <section id="experience" class="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
    <div
      ref="headingEl"
      class="border-t border-zinc-200 dark:border-zinc-800 pt-10 mb-10 reveal"
      :class="headingVisible ? 'is-visible' : ''"
    >
      <h2 class="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
        Experience
      </h2>
    </div>

    <div ref="timelineEl" class="relative">
      <div class="absolute left-0 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800"></div>

      <div class="space-y-8">
        <div
          v-for="(exp, i) in experiences"
          :key="exp.year"
          class="relative pl-6 reveal"
          :class="[timelineVisible ? 'is-visible' : '', `delay-${i + 1}`]"
        >
          <div class="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover:bg-accent"></div>
          
          <div class="flex flex-col md:flex-row md:items-start md:gap-6">
            <span class="text-xs font-mono text-zinc-400 dark:text-zinc-600 shrink-0 mb-1 md:mb-0 w-12">
              {{ exp.year }}
            </span>
            <div>
              <h3 class="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                {{ exp.role }}
              </h3>
              <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {{ exp.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
