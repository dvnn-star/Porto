<script setup lang="ts">
const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/dvnn-star',
    note: 'see the code',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/delvin',
    note: 'be professional',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/dvn_delvin',
    note: 'the casual side',
  },
]

const { el: headingEl, visible: headingVisible } = useReveal()
const { el: bodyEl, visible: bodyVisible } = useReveal()
</script>

<template>
  <section id="contact" class="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
    <div
      ref="headingEl"
      class="border-t border-zinc-200 dark:border-zinc-800 pt-10 mb-10 reveal"
      :class="headingVisible ? 'is-visible' : ''"
    >
      <h2 class="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
        Contact
      </h2>
    </div>

    <div ref="bodyEl" class="max-w-lg">
      <p
        class="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3 reveal"
        :class="bodyVisible ? 'is-visible' : ''"
      >
        Got a project? Let's talk. 🤝
      </p>
      <p
        class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8 reveal delay-1"
        :class="bodyVisible ? 'is-visible' : ''"
      >
        I'm open to freelance gigs, full-time roles, or just an interesting conversation.
        Don't overthink it — drop me a line and we'll figure it out.
      </p>

      <a
        href="mailto:delvinn12.0@gmail.com"
        class="group inline-flex items-center gap-2 text-base font-semibold text-accent dark:text-accent-dark hover:opacity-80 transition-opacity duration-200 mb-10 reveal delay-2"
        :class="bodyVisible ? 'is-visible' : ''"
      >
        <span>delvinn12.0@gmail.com</span>
        <span class="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
      </a>

      <div
        class="flex flex-col gap-3 reveal delay-3"
        :class="bodyVisible ? 'is-visible' : ''"
      >
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200 w-fit"
        >
          <span class="font-medium">{{ social.label }}</span>
          <span class="text-xs text-zinc-400 dark:text-zinc-600 group-hover:text-accent dark:group-hover:text-accent-dark transition-colors duration-200">— {{ social.note }}</span>
          <span class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs" aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </section>
</template>
