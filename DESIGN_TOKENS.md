# Design tokens — Le Rucher de Marquefave

Identité : sérénité, nature, respect des abeilles. Moderne mais sobre (cible rurale).

## Couleurs

```css
/* app/globals.css — Tailwind v4 : plus de tailwind.config.ts, tout passe par @theme */
@import "tailwindcss";

@theme {
  /* Couleurs de la charte Le Rucher de Marquefave */
  --color-cream: #fbf6ec;
  --color-cream-dark: #f3e9d2;

  --color-honey: #b98338;
  --color-honey-light: #efe3c5;

  --color-sage: #5f7345;
  --color-sage-light: #eaeedd;

  --color-bark: #4a3b22;
  --color-bark-muted: #7a6a4e;

  --color-sand: #e4d9c3;
}
```

Utilisation identique dans les composants : `bg-honey`, `text-bark`, `border-sand`.

| Usage                      | Couleur     | Hex                                 |
| -------------------------- | ----------- | ----------------------------------- |
| Fond principal             | cream       | `#FBF6EC`                           |
| Fond section alternée      | cream-dark  | `#F3E9D2`                           |
| Accent (boutons, CTA)      | honey       | `#B98338`                           |
| Fond accent clair (cartes) | honey-light | `#EFE3C5`                           |
| Secondaire nature          | sage        | `#5F7345`                           |
| Fond sage clair            | sage-light  | `#EAEEDD`                           |
| Texte principal            | bark        | `#4A3B22`                           |
| Texte secondaire           | bark-muted  | `#7A6A4E`                           |
| Bordures                   | sand        | `#E4D9C3`                           |
| Footer                     | bark        | `#4A3B22` (fond), `#D9CBA9` (texte) |

Règle d'usage : `honey` réservé aux actions (CTA, liens actifs) — jamais en grande surface. `sage` pour les blocs secondaires (nature, récoltes). Pas plus de 2 couleurs vives visibles à l'écran en même temps.

## Typographie

```tsx
// app/layout.tsx
import { Fraunces, Manrope } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-voice",
  weight: ["400", "500"],
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

```css
/* app/globals.css — déclarer les familles à partir des variables next/font */
@theme {
  --font-sans: var(--font-sans), sans-serif;
  --font-voice: var(--font-voice), serif;
}
```

Usage ensuite dans les composants : `className="font-voice"` pour les titres (Fraunces), sans classe particulière pour le texte courant (Manrope hérité du `body`).

| Rôle              | Police                 | Usage                       |
| ----------------- | ---------------------- | --------------------------- |
| Titres, accroches | Fraunces (serif douce) | h1, h2, nom de la miellerie |
| Texte courant     | Manrope (sans-serif)   | paragraphes, menu, boutons  |

Poids : 400 (regular) et 500 (medium) uniquement — pas de bold agressif, cohérent avec le ton "sérénité".

## Rayons & espacements

```js
borderRadius: {
  DEFAULT: '10px',
  full: '24px', // boutons pill
},
```

- Coins arrondis généreux (10px cartes, 24px boutons pill) — jamais d'angles droits stricts.
- Espacement large entre sections (min. 24px mobile, 48px desktop) pour l'effet "calme".

## Détails de marque

- Liseré nid d'abeille (petits hexagones `sand`/`honey`) en séparateur discret entre sections clés.
- Icônes Tabler outline uniquement (`ti-flower`, `ti-droplet`, `ti-jar`...) — jamais d'icônes remplies, trop dures visuellement.
- Photos réelles du rucher/beau-père en priorité sur toute illustration vectorielle.
