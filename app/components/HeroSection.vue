<script setup lang="ts">
const mounted = ref(false)
onMounted(() => {
  requestAnimationFrame(() => { mounted.value = true })
})
</script>

<template>
  <section class="relative min-h-screen flex flex-col overflow-hidden">
    <!-- Grid Background -->
    <div class="absolute inset-0 bg-stone-50 dark:bg-zinc-950">
      <!-- Grid Pattern -->
      <div class="absolute inset-0 grid-pattern"></div>
      
      <!-- Ambient Glow - Top Left -->
      <div class="absolute -top-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      
      <!-- Ambient Glow - Bottom Right -->
      <div class="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/15 rounded-full blur-3xl"></div>
      
      <!-- Ambient Glow - Center -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24  md:pt-36 flex-1 flex flex-col">
      <div class="flex flex-col md:flex-row   gap-10 md:gap-40 flex-1">
      <div class="flex-1 max-w-2xl">
        <div class="flex items-center gap-2 mb-8 reveal" :class="mounted ? 'is-visible' : ''">
          <span class="w-3 h-3 rounded-full bg-mint dark:bg-mint-dark animate-pulse_dot"></span>
          <span class="text-sm text-zinc-400 dark:text-zinc-500">Available for work</span>
        </div>

        <h1 class="text-4xl md:text-6xl lg:text-7xl font-semibold text-zinc-900 dark:text-zinc-100 leading-tight mb-6 reveal delay-1"
          :class="mounted ? 'is-visible' : ''">
          Hey, I'm <span class="text-accent dark:text-accent-dark">Delvin</span>
        </h1>

        <p class="text-lg md:text-xl text-zinc-400 dark:text-zinc-500 leading-relaxed mb-4 reveal delay-2"
          :class="mounted ? 'is-visible' : ''">
          I'm a Web Developer focused on building responsive websites and practical software solutions. I work with modern web technologies to turn ideas into functional digital products, from corporate websites to database-driven applications.
        </p>
        <p class="text-lg md:text-xl text-zinc-400 dark:text-zinc-500 leading-relaxed mb-10 reveal delay-2"
          :class="mounted ? 'is-visible' : ''">
          I'm always learning, improving my skills, and looking for opportunities to build software that solves real problems.
        </p>

        <div class="flex flex-wrap gap-5 reveal delay-3" :class="mounted ? 'is-visible' : ''">
          <a href="#projects"
            class="inline-flex items-center gap-2 text-base font-semibold text-zinc-900 dark:text-zinc-100 bg-accent dark:bg-accent-dark px-6 py-3 hover:opacity-90 transition-opacity duration-200">
            See my work
            <span aria-hidden="true">↓</span>
          </a>
          <a href="#contact"
            class="inline-flex items-center gap-2 text-base font-medium text-zinc-400 dark:text-zinc-500 border border-zinc-700 dark:border-zinc-700 px-6 py-3 hover:border-accent dark:hover:border-accent hover:text-zinc-100 dark:hover:text-zinc-100 transition-colors duration-200">
            Say hello 
          </a>
        </div>

        <!-- Social Links -->
        <div class="flex items-center gap-5 mt-10 reveal delay-3" :class="mounted ? 'is-visible' : ''">
          <a href="mailto:delvinn12.0@gmail.com" aria-label="Email" class="text-zinc-500 hover:text-accent dark:hover:text-accent-dark transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
          <a href="https://github.com/dvnn-star" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="text-zinc-500 hover:text-accent dark:hover:text-accent-dark transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/delvin-n-b32b3a2b7/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="text-zinc-500 hover:text-accent dark:hover:text-accent-dark transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://instagram.com/dvn_delvin" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="text-zinc-500 hover:text-accent dark:hover:text-accent-dark transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
        </div>
      </div>


      <div class="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden reveal delay-2"
        :class="mounted ? 'is-visible' : ''">
        <img src="/Delvin.jpg" alt="Delvin"
          class="w-full h-full object-cover border border-zinc-200 dark:border-zinc-800" loading="eager" />
      </div>
      </div>

      <!-- Scroll Down Arrow -->
      <div class="flex justify-center mt-auto pt-8 reveal delay-5" :class="mounted ? 'is-visible' : ''">
        <a href="#projects" aria-label="Scroll to projects" class="text-zinc-500 hover:text-accent dark:hover:text-accent-dark transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 5v14"/>
            <path d="m19 12-7 7-7-7"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
