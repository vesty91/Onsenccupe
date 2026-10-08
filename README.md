# Onsenccupe

Site vitrine moderne pour **Onsenccupe** — services de proximité en Essonne / Île-de-France  
(Débarras • Nettoyage • Extérieur • Coups de main).

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (icônes)
- Formspree (formulaire de devis, optionnel)
- shadcn/ui + registries Magic UI / Aceternity / ReUI / v0 (voir [docs/UI-ECOSYSTEM.md](docs/UI-ECOSYSTEM.md))

## UI Ecosystem (après `npm install`)

```bash
npm run ui:setup
npm run typecheck
npm run build
```

- Lab de validation : [http://localhost:3000/ui-lab](http://localhost:3000/ui-lab)
- Doc complète : [docs/UI-ECOSYSTEM.md](docs/UI-ECOSYSTEM.md)
- MCP projet : `.cursor/mcp.json` (shadcn + 21st.dev — clé `TWENTY_FIRST_API_KEY`)

## Démarrage local

1. **Prérequis** : Node.js 18+ et npm.

2. **Installer les dépendances** :

```bash
npm install
```

3. **Variables d’environnement** (optionnel pour le formulaire) :

```bash
cp .env.example .env.local
```

Éditez `.env.local` et ajoutez votre ID Formspree :

```
NEXT_PUBLIC_FORMSPREE_ID=votre_id_formspree
```

Sans ID, le formulaire fonctionne en **mode démo** (succès simulé, aucun email envoyé).

4. **Lancer le serveur de développement** :

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande        | Description                |
|-----------------|----------------------------|
| `npm run dev`   | Serveur de développement   |
| `npm run build` | Build de production        |
| `npm run start` | Serveur après build        |
| `npm run lint`  | ESLint                     |

## Structure du projet

```
src/
├── app/
│   ├── page.tsx              # Accueil
│   ├── services/page.tsx     # Services & formules
│   ├── tarifs/page.tsx       # Grille tarifaire
│   ├── zone/page.tsx         # Zone d’intervention + carte
│   ├── contact/page.tsx      # Formulaire devis
│   ├── layout.tsx            # Layout global + SEO
│   └── globals.css
├── components/               # UI réutilisable
└── lib/
    ├── constants.ts          # Coordonnées, nav, branding
    └── data.ts               # Contenu (services, avis, tarifs…)
```

## Personnalisation rapide

Avant mise en ligne, mettez à jour dans `src/lib/constants.ts` :

- Téléphone / WhatsApp / email
- Horaires
- URL du site (`SITE.url`)

Puis remplacez les avis fictifs et éventuellement les photos Unsplash dans `src/lib/data.ts`.

## Formulaire de contact (Formspree)

1. Créez un compte sur [formspree.io](https://formspree.io).
2. Créez un formulaire et copiez l’ID (`https://formspree.io/f/XXXX` → `XXXX`).
3. Ajoutez `NEXT_PUBLIC_FORMSPREE_ID=XXXX` dans `.env.local` (et dans Vercel → Settings → Environment Variables).

Alternative possible : Resend + Route Handler Next.js (non inclus par défaut pour rester simple).

## Déploiement sur Vercel

1. Poussez le dépôt sur GitHub / GitLab / Bitbucket.
2. Sur [vercel.com](https://vercel.com) : **Add New Project** → importez le dépôt.
3. Framework : Next.js (détecté automatiquement).
4. Ajoutez la variable `NEXT_PUBLIC_FORMSPREE_ID`.
5. **Deploy**.

En CLI :

```bash
npm i -g vercel
vercel
```

## SEO & accessibilité

- Balises `title` / `description` par page
- `lang="fr"`
- Navigation clavier + labels ARIA (menu, formulaire)
- Images Next.js (`next/image`) avec lazy loading (sauf hero)

## Licence

Code fourni pour le projet Onsenccupe.
