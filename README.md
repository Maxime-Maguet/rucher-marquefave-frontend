# 🍯 Le Rucher de Marquefave - Frontend (Next.js)

Interface web & boutique e-commerce artisanale pour **Le Rucher de Marquefave** (Saint-Sulpice-la-Pointe).

Conçue avec **Next.js 16**, **Tailwind CSS v4** et une charte graphique sur-mesure privilégiant la sérénité, le terroir et la mise en valeur des produits de la ruche.

---

## 🎯 Vision du Projet & Expérience Client (V1)

Développement d'un frontend moderne, rapide, accessible et optimisé pour le référencement (SEO) local.

- **Parcours d'Achat :** Catalogue interactif, fiche produit détaillée et tunnel de commande optimisé pour le Click & Collect (retrait au rucher & marchés locaux).
- **Paiement Fluide :** Redirection sécurisée via Stripe Checkout & confirmation de commande.
- **Identité Forte :** Respect des Design Tokens (palette de couleurs douces, typographies `Fraunces` & `Manrope`, icônes contourées).

---

## 🛠️ Stack Technique

- **Framework :** Next.js 16 (App Router, Server & Client Components)
- **Langage :** TypeScript
- **Styling :** Tailwind CSS v4 (Configuration centralisée via `@theme` dans CSS)
- **Typographies :** Google Fonts (`Fraunces` pour les titres, `Manrope` pour le texte courant via `next/font`)
- **Iconographie :** `@tabler/icons-react` (style outline uniquement)
- **Gestion d'État / API :** React Hooks & Fetch API (connexion avec l'API Backend NestJS)

---

## 📋 Conception (Notion)

Dossier projet (page privée + sous-pages) : [Le Rucher de Marquefave](https://app.notion.com/p/3ddf0b0f54988188aae1ed717cdc3fca)

- [Pages et routes](https://app.notion.com/p/3ddf0b0f5498812b891ad2769a2c629a)
- [Composants](https://app.notion.com/p/3ddf0b0f549881b29f25fc0324ad4795)
- [Roadmap V1](https://app.notion.com/p/3ddf0b0f5498810b9e30c39dba7b3d20)
- [Hors V1](https://app.notion.com/p/3ddf0b0f54988148aa59e09e32a93fc6)

Convention App Router : `src/app/` = URLs ; `src/components/` = UI réutilisable. Le Header pointe vers `/nos-miels` via `Link`, il n’importe pas la page. La liste des miels vit dans `app/nos-miels/page.tsx` (pas de composant `Products`).

---

## 📋 Roadmap / Kanban V1

### 🟢 Phase 1 : Design System & Layout Base

- [x] Initialisation Next.js 16 & TypeScript
- [x] Configuration des Design Tokens (Tailwind CSS v4 & `globals.css`)
- [x] Importation & association des typographies (`Fraunces` & `Manrope`)
- [x] Header & Footer dans le layout racine
- [x] Fichiers spéciaux : `loading.tsx`, `error.tsx`, `not-found.tsx`
- [x] Routes vides : `app/nos-miels/page.tsx` et `app/nos-miels/[slug]/page.tsx`
- [x] Suppression du composant `Products` (catalogue = page `/nos-miels`)

### 🟡 Phase 2 : Vitrine & Catalogue

- [ ] Accueil (`/`) : Hero, miels mis en avant, histoire, engagement
- [ ] Page `/le-rucher`
- [ ] Page `/contact`
- [ ] Catalogue `/nos-miels` : `MielsGrid` / `MielCard`
- [ ] Fiche `/nos-miels/[slug]` : galerie, infos, sélecteur de pot (`VariantSelector`)
- [ ] API `GET /products` et `GET /products/:slug` (fiche par **slug**)
- [ ] `nos-miels/loading.tsx` (skeleton catalogue)

### 🟠 Phase 3 : Panier & Tunnel de Commande (Click & Collect)

- [ ] Panier : tiroir **ou** page `/panier` (un seul pattern)
- [ ] Compteur d’articles dans le Header
- [ ] Page `/commande` : formulaire client + lieu / créneau de retrait
- [ ] API `POST /orders/checkout` & redirection Stripe Checkout
- [ ] `/commande/confirmation`
- [ ] `/commande/annulee` (abandon Stripe)

### 🔴 Phase 4 : Peaufinage, SEO & Accessibilité

- [ ] Images via `next/image`
- [ ] Métadonnées OpenGraph, favicon & SEO local (Saint-Sulpice-la-Pointe)
- [ ] Animations douces, skeletons
- [ ] Pages légales avant mise en ligne paiement (`/mentions-legales`, `/cgv`)

### Hors V1 (ne pas ouvrir maintenant)

Admin front, compte client, livraison domicile, `proxy.ts`, groupes de routes. Détail : [Hors V1](https://app.notion.com/p/3ddf0b0f54988148aa59e09e32a93fc6).

---

## 🎨 Charte Visuelle & Design Tokens

L'intégralité du système de design (couleurs `cream`, `honey`, `sage`, `bark`, typographies et arrondis) est documentée dans le fichier **[`DESIGN_TOKENS.md`](./DESIGN_TOKENS.md)** à la racine du projet.

---

## 🚀 Installation & Démarrage

### Démarrage du serveur de développement

```bash
# 1. Installer les dépendances
$ npm install

# 2. Lancer le serveur de dev
$ npm run dev
```
