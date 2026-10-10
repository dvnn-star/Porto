export function useReveal() {
  const el = ref<HTMLElement | null>(null)
  const visible = ref(false)

  onMounted(() => {
    if (!el.value) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el.value)
  })

  return { el, visible }
}
