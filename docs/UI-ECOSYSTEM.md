# UI Ecosystem — Onsenccupe

Environnement UI pour récupérer, adapter et utiliser des composants modernes **sans casser** le site vitrine existant.

## 1. Architecture UI

```
src/components/
├── ui/                 # shadcn + Magic UI + Aceternity (registry)
├── reui/               # composants ReUI adaptés
├── magic/              # effects custom du site vitrine (conservés)
├── Button.tsx          # CTA marketing existant (NE PAS remplacer)
├── Header.tsx …
└── …
```

| Couche | Rôle |
|--------|------|
| **shadcn/ui** | Primitives (Button, Dialog, Input, Tabs…) |
| **Origin UI** | NON INSTALLÉ — registry `originui.com` renvoie actuellement une page marketing (coss ui), pas du JSON registry |
| **Magic UI** | Animations / effects (`@magicui/*`) |
| **Aceternity UI** | Visuels avancés (`@aceternity/*`) |
| **ReUI** | Blocs app/SaaS (`@reui/*`) — souvent TW4, à adapter |
| **21st.dev** | Marketplace + MCP (clé API) |
| **shadcn.io** | Catalogue / MCP tiers (token) — non câblé ici |
| **v0** | Génération externe + registry `@v0` |

## 2. Composants disponibles (démo)

Installés / présents pour validation :

- shadcn : `button`, `card`, `input`, `badge`, `dialog`, `tabs`, `dropdown-menu`, `table`, `tooltip`, `label`, `separator`
- Magic UI : `ui/marquee`, `ui/border-beam` (motion)
- Aceternity : `ui/background-beams`
- ReUI : `reui/alert` (adapté TW3)
- Custom site : `components/magic/*` (inchangé)

Page démo : [`/ui-lab`](/ui-lab) (noindex, hors menu).

## 3. Registries configurés

Fichier : [`components.json`](../components.json)

| Namespace | URL | Statut |
|-----------|-----|--------|
| `@magicui` | `https://magicui.design/r/{name}.json` | OK (testé) |
| `@aceternity` | `https://ui.aceternity.com/registry/{name}.json` | OK (testé) |
| `@reui` | `https://reui.io/r/base-nova/{name}.json` | OK (style figé `base-nova`) |
| `@v0` | `https://v0.dev/chat/b/{name}` | Configuré (usage via chat id v0) |
| Origin UI | — | **NON INSTALLÉ** — endpoints JSON invalides (HTML) |
| shadcn.io | — | Pas de registry namespacé officiel dans `components.json` ; MCP optionnel tiers |

Registry shadcn par défaut (sans namespace) : `npx shadcn@latest add button`

## 4. MCP configurés

Fichier projet : [`.cursor/mcp.json`](../.cursor/mcp.json)

| Outil | MCP | Statut projet | Secret |
|-------|-----|---------------|--------|
| shadcn/ui | Oui | Configuré dans `.cursor/mcp.json` — activer dans Cursor Settings | Non |
| 21st.dev | Oui (officiel) | **NON ACTIF** tant que `TWENTY_FIRST_API_KEY` n’est pas fournie | `TWENTY_FIRST_API_KEY` |
| shadcn.io | Existe (tiers) | NON INSTALLÉ | Token shadcn.io |
| v0 | Non (générateur) | Outil externe + registry `@v0` | Compte Vercel |

Pour activer 21st.dev plus tard (manuel, hors Git) :

1. Créer une clé sur https://21st.dev/mcp
2. Définir `TWENTY_FIRST_API_KEY` dans l’environnement Cursor / OS
3. Ajouter le serveur MCP `21st-dev` (URL `https://21st.dev/api/mcp`, header `Authorization: Bearer ${TWENTY_FIRST_API_KEY}`)

## 5. Comment ajouter un composant

```bash
# shadcn officiel
npx shadcn@latest add button

# Magic UI
npx shadcn@latest add @magicui/shimmer-button

# Aceternity
npx shadcn@latest add @aceternity/bento-grid

# ReUI (free pattern)
npx shadcn@latest add @reui/c-alert-1

# v0 (après génération)
npx shadcn@latest add @v0/<chat-id>

# URL directe
npx shadcn@latest add https://ui.aceternity.com/registry/comet-card.json
```

Puis vérifier :

- `"use client"` si hooks / events
- imports `@/lib/utils` (`cn`)
- pas d’écrasement de `src/components/Button.tsx` marketing

## 6. Quelle bibliothèque utiliser ?

| Besoin | Utiliser |
|--------|----------|
| Formulaire, dialog, menu, table | **shadcn/ui** |
| Landing animée (marquee, beam, shimmer) | **Magic UI** (`@magicui`) ou `components/magic` existant |
| Hero / beams / 3D / effets forts | **Aceternity** |
| Blocs SaaS / patterns app | **ReUI** (vérifier TW4) |
| Explorer / s’inspirer / installer via agent | **21st.dev MCP** |
| Générer une UI puis importer | **v0** → `@v0/...` |
| Catalogue alternatif | **shadcn.io** (manuel / MCP tiers) |

## 7. Dépendances ajoutées

Runtime : `@radix-ui/*`, `class-variance-authority`, `clsx`, `tailwind-merge`, `motion`  
Dev : `tailwindcss-animate`, `autoprefixer`

Gestionnaire : **npm** (`package-lock.json`) — ne pas migrer vers pnpm.

## 8. Variables d’environnement

```env
# Existant
NEXT_PUBLIC_FORMSPREE_ID=

# UI / MCP
TWENTY_FIRST_API_KEY=
# REUI_LICENSE_KEY=          # uniquement si blocs ReUI premium
# SHADCN_IO_TOKEN=           # si vous câblez le MCP shadcn.io
```

## 9. Commandes utiles

```bash
npm install
npm run ui:setup
npm run typecheck
npm run lint
npm run build
npm run ui:add -- @magicui/number-ticker
```

## 10. Limitations

1. **Shell Cursor** peut être indisponible (`pwsh.exe`) — lancer `npm install` localement.
2. **Origin UI** : registry JSON actuellement inaccessible / redirigé.
3. **ReUI** : style forcé `base-nova` ; beaucoup d’items TW4 → adapter.
4. **Magic UI latest** : certains composants TW4 (`gap-(--gap)`) — versions adaptées dans `ui/`.
5. **Deux Button** : `@/components/Button` (marketing) ≠ `@/components/ui/button` (shadcn).
6. **accent Tailwind** : orange brand conservé pour le site ; les hovers shadcn `bg-accent` utilisent cet orange.

## Workflow recommandé

1. Primitive manquante → `npx shadcn@latest add …`
2. Effet landing → `@magicui/…` ou `components/magic`
3. Effet cinematic → `@aceternity/…`
4. Pattern app → `@reui/…` (tester build)
5. Inspiration / search agent → MCP **21st** ou **shadcn**
6. Génération complète d’écran → **v0**, puis `@v0/<id>`
7. Toujours valider sur `/ui-lab` puis intégrer au site vitrine sans écraser l’existant
