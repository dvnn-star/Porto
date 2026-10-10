<script setup lang="ts">
useSeoMeta({
  title: 'Delvin ',
  description: 'Backend developer crafting clean, performant web experiences.',
  ogTitle: 'Delvin — Backend Developer',
  ogDescription: 'Backend developer crafting clean, performant web experiences.',
})
</script>

<template>
  <div class="min-h-screen bg-stone-50 dark:bg-zinc-950 transition-colors duration-300">
    <AppHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <TechStackSection />
      <CertificateSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>
