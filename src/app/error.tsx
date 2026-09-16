'use client'

import { useEffect } from 'react'

// Next.js 16.2 error boundary API — unstable_retry replaces the legacy reset prop
export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    console.error('[Le Rucher] Erreur inattendue :', error)
  }, [error])

  return (
    <main className="flex flex-col items-center justify-center min-h-[40vh] px-6 py-16 text-center">
      <p className="text-4xl mb-4" aria-hidden="true">🍯</p>

      <h1 className="font-voice text-2xl text-bark mb-2">
        Quelque chose s&apos;est mal passé…
      </h1>

      <p className="text-bark-muted mb-8 max-w-sm">
        Une erreur est survenue lors du chargement de la page.
        Veuillez réessayer ou revenir plus tard.
      </p>

      {/* Native button — same visual classes as src/components/ui/button.tsx;
          Button does not accept onClick so we avoid patching it. */}
      <button
        type="button"
        onClick={unstable_retry}
        className="bg-honey text-cream px-6 py-2 rounded-md font-sans font-medium hover:bg-bark transition-colors"
      >
        Réessayer
      </button>

      {error.digest && (
        <p className="mt-6 text-xs text-bark-muted">
          Référence : <code>{error.digest}</code>
        </p>
      )}
    </main>
  )
}
