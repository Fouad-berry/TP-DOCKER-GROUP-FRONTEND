# School Directory – Frontend (Next.js)

## 📝 Description  
Ce projet est l'interface frontend d'une application de gestion d'écoles et lycées digitaux. Développé avec Next.js, il permet :  

- 📜 Afficher la liste des établissements scolaires  
- 🔍 Effectuer des recherches avancées  
- ➕ Ajouter de nouveaux établissements  
- 📱 Une expérience responsive sur tous les appareils  

![Capture d'écran de l'application](/path/to/screenshot.png)  

---

## 🛠 Technologies  
- **Framework** : Next.js 14 (App Router)  
- **Langage** : TypeScript  
- **Styling** : TailwindCSS

---

## ⚙️ Installation
1. **Cloner le dépôt** :  
   ```bash
   git clone https://github.com/votre-repo.git

2. **Installer les dépandances** :
   ```bash
   npm install

3. **Lancer l'application en mode développement** :
   ```bash
   npm run dev

---

## 🚀 Fonctionnalités clés

### 📚 Gestion des établissements
| Fonctionnalité               | Détails                                                                |
|------------------------------|------------------------------------------------------------------------|
| **Liste interactive**        | Affichage paginé avec options de tri (A-Z, date, etc.)                 |
| **Multi-vues**               | Basculer entre vue carte (géolocalisation) et vue tableau (données)    |
| **Fiche détaillée**          | Profil complet avec : photos, contacts, spécialités, statistiques      |

### 🔍 Recherche intelligente
| Composant                    | Description                                                            |
|------------------------------|------------------------------------------------------------------------|
| **Barre de recherche**       | Suggestions en temps réel (nom, ville, code postal)                    |
| **Filtres avancés**          | Combinaison de critères :                                              |
|                              | - 🗺️ Par localisation (région/département)                             |
|                              | - 🏫 Type d'établissement (lycée général, CFA, etc.)                   |
|                              | - 💻 Spécialités digitales (coding, design, cybersécurité)             |

### ✨ Formulaire d'ajout
| Étape                        | Fonctionnalités                                                        |
|------------------------------|------------------------------------------------------------------------|
| **1. Informations de base**  | Validation en temps réel + géocodage automatique                       |
| **2. Spécialités**          | Sélection multiple avec tags                                            |
| **3. Documents**            | Upload de PDF (projet pédagogique) + prévisualisation                   |
| **4. Confirmation**         | Récapitulatif + envoi par email aux administrateurs                     |

