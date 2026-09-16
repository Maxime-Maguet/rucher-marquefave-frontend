import Link from 'next/link'

// Server Component — renders inside root layout (Header/Footer already present)
export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[50vh] px-6 py-20 text-center">
      <p className="text-6xl mb-6" aria-hidden="true">🌿</p>

      <h1 className="font-voice text-3xl text-bark mb-3">
        Page introuvable
      </h1>

      <p className="text-bark-muted mb-8 max-w-sm">
        Cette page n&apos;existe pas ou a été déplacée.
        Revenez à l&apos;accueil pour découvrir nos miels.
      </p>

      <Link
        href="/"
        className="bg-honey text-cream px-6 py-2 rounded-md font-sans font-medium hover:bg-bark transition-colors"
      >
        Retour à l&apos;accueil
      </Link>
    </main>
  )
}
