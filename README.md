# School Directory – Frontend (Next.js 14)

## 📝 Description

School Directory est l'interface Frontend d'une application de gestion et de référencement d'établissements scolaires (écoles, lycées, CFA).

Développée avec Next.js 14 (App Router) et TypeScript, cette application propose une interface moderne, responsive et optimisée pour une expérience utilisateur fluide.

![Capture d'écran de l'application](/path/to/screenshot.png)

### Fonctionnalités principales :

- 📜 Consultation de la liste des établissements
- 🔍 Recherche intelligente et filtres avancés
- ➕ Ajout d'établissements avec formulaire multi-étapes
- 🗺️ Visualisation multi-vues (tableau / carte)
- 📱 Interface responsive et design épuré (TailwindCSS)

---

## 🚀 Stack Technique

| Outil / Librairie | Rôle                                    |
| ----------------- | --------------------------------------- |
| Next.js 14        | Framework Frontend (React + App Router) |
| TypeScript        | Typage statique et robuste              |
| TailwindCSS 4     | Styling responsive et moderne           |
| ESLint + Prettier | Linting et formatage du code            |

---

## 📦 Installation & Lancement

### 1. Cloner le dépôt

```bash
git clone https://github.com/votre-repo.git
cd tp-docker-group-frontend
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le projet en mode développement

```bash
npm run dev
```

Application disponible sur : [http://localhost:3000](http://localhost:3000)

---

## 🛠 Commandes disponibles

| Commande        | Description                           |
| --------------- | ------------------------------------- |
| `npm run dev`   | Lancement en mode développement       |
| `npm run build` | Génération des fichiers de production |
| `npm start`     | Lancement du build en production      |
| `npm run lint`  | Analyse statique du code avec ESLint  |

---

## ⚙️ Architecture principale

```
├── app/
│ ├── layout.tsx # Layout principal
│ ├── page.tsx # Page d'accueil
│ ├── globals.css
│ ├── lycee-numeriques/
│ │ ├── page.tsx # Route principale
│ │ └── lycee-numeriques.module.css
│ └── components/
│   └── lycee-list/ # Composant liste des lycées
│     ├── LyceeList.tsx
│     └── LyceeList.module.css
│
├── public/ # Assets statiques
├── Dockerfile
├── .dockerignore
├── package-lock.json
├── package.json
├── tsconfig.json
└── next.config.js
```

---

## 🧩 Fonctionnalités détaillées

### 📚 Gestion des établissements

| Fonction            | Détails                        |
| ------------------- | ------------------------------ |
| Liste paginée       | Tri et filtre personnalisables |
| Vue tableau / carte | Changement de vue dynamique    |
| Fiche établissement | Informations détaillées, stats |

### 🔍 Recherche intelligente

- Suggestions instantanées (nom, ville, code postal)
- Filtres combinables : localisation, type d'établissement, spécialités digitales

---

## 🧹 Qualité de code

- Analyse statique avec ESLint (`next/core-web-vitals`)
- Typage strict avec TypeScript
- Formatage automatique via Prettier
- Organisation des imports & conventions de nommage respectées

---

## 🌍 Déploiement

L'application peut être déployée facilement sur :

- Docker (projet prévu pour être dockerisé)

---

## 📄 A propos du projet

Ce projet s'inscrit dans un contexte d'apprentissage DevOps / Fullstack avec une architecture propre, modulaire et scalable.

> Projet réalisé dans le cadre du TP Docker & Développement Fullstack.
