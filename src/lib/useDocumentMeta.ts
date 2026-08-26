import { useEffect } from 'react'

interface DocumentMeta {
  title: string
  description: string
}

const META_SELECTORS = [
  'meta[name="description"]',
  'meta[property="og:title"]',
  'meta[property="og:description"]',
  'meta[name="twitter:title"]',
  'meta[name="twitter:description"]',
]

export function useDocumentMeta({ title, description }: DocumentMeta) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    const previousValues: Array<[Element, string]> = []

    for (const selector of META_SELECTORS) {
      const el = document.querySelector(selector)
      if (!el) continue

      previousValues.push([el, el.getAttribute('content') ?? ''])
      const isTitleTag = selector.includes('title')
      el.setAttribute('content', isTitleTag ? title : description)
    }

    return () => {
      document.title = previousTitle
      for (const [el, value] of previousValues) {
        el.setAttribute('content', value)
      }
    }
  }, [title, description])
}
