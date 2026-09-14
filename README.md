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

## 📋 Roadmap / Kanban V1

### 🟢 Phase 1 : Design System & Layout Base

- [x] Initialisation Next.js 16 & TypeScript
- [x] Configuration des Design Tokens (Tailwind CSS v4 & `globals.css`)
- [x] Importation & association des typographies (`Fraunces` & `Manrope`)
- [x] Création du composant Navigation (`Header` / Navbar) & Pied de page (`Footer`)

### 🟡 Phase 2 : Vitrine & Catalogue Produits

- [ ] Page d'accueil (`/`) : Hero section, histoire du rucher, engagement apicole
- [ ] Grille de produits (`/produits`) : Affichage des miels et déclinaisons de pots
- [ ] Fiche produit (`/produits/[slug]`) : Photos réelles, descriptif gustatif, choix du conditionnement
- [ ] Intégration de l'API Backend (`GET /products` et `GET /products/:slug`)

### 🟠 Phase 3 : Panier & Tunnel de Commande (Click & Collect)

- [ ] Composant Panier (Drawer / Modal ou page dédiée `/panier`)
- [ ] Formulaire d'information client & Choix du créneau/lieu de retrait (Click & Collect)
- [ ] Connexion API Checkout (`POST /orders/checkout`) & Redirection Stripe Checkout
- [ ] Page de confirmation de commande (`/commande/confirmation`)

### 🔴 Phase 4 : Peaufinage, SEO & Accessibilité

- [ ] Optimisation des performances & Images (`next/image`)
- [ ] Métadonnées OpenGraph, favicon & SEO local (Saint-Sulpice-la-Pointe)
- [ ] Animations douces (transitions au survol, états de chargement / Skeleton)

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
