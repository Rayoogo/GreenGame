# SCRIPTS DE DIALOGUES — GREEN GAME
## Index général — Semaine complète (Lundi → Samedi)

---

### Présentation

Ce dossier contient les scripts de dialogues exhaustifs du jeu **Green Game**.
Chaque fichier couvre une journée entière et traite **toutes les branches** de l'arbre
de décision correspondant — chaque choix possible génère son propre dialogue.

---

### Structure des fichiers

| Fichier | Jour | Personnage | Type | Rencontre possible |
|---|---|---|---|---|
| `dialogues_lundi_tristan.md` | Lundi | Tristan | Normal | Non |
| `dialogues_mardi_christophe.md` | Mardi | Christophe | Normal | Non |
| `dialogues_mercredi_tristan.md` | Mercredi | Tristan | **Majeur** | Oui (déjeuner / gaming) |
| `dialogues_jeudi_christophe.md` | Jeudi | Christophe | Normal | Non |
| `dialogues_vendredi_tristan.md` | Vendredi | Tristan | **Majeur** | Oui (escape game) |
| `dialogues_samedi_christophe.md` | Samedi | Christophe | **Majeur** | Oui (parc / café) |

---

### Personnages présents dans les scripts

**Personnages principaux**
- **Tristan** — Lundi, Mercredi, Vendredi
- **Christophe** — Mardi, Jeudi, Samedi

**Personnages secondaires récurrents**
- **Le père de Christophe** — Mardi, Jeudi, Samedi (présent dans chaque journée Christophe)
- **Raphaël** — Ami extraverti de Tristan. Lundi, Mercredi, Vendredi.
- **Hugo** — Camarade de fac de Tristan. Lundi, Mercredi.
- **Karim** — Camarade de fac de Christophe. Mardi, Jeudi.
- **Lucas** — Ami de Tristan, conducteur sobre. Lundi, Vendredi.
- **Léa** — Copine de Raphaël. Lundi, Vendredi.

**Personnages ponctuels**
- **Madame Arnoux** — Marchande du marché, Samedi.
- **Thomas** — Ami d'enfance de Christophe à Lyon, Mardi (appel téléphonique).
- La mère de Tristan — Mercredi (appel téléphonique).
- Divers : voisins, livreurs, serveuses, chauffeurs, caissières, maraîchers…

---

### Conventions de lecture

- Les **didascalies** sont en *italique*.
- Les **pensées intérieures** sont signalées par *(pensée intérieure)*.
- Chaque branche est précédée d'un titre de section `### BRANCHE [code]`.
- Les **rencontres Tristan / Christophe** sont signalées par `### BRANCHE [code] — (RENCONTRE)`.
- Quand un dialogue dépend d'un choix fait dans un autre jour, une note entre parenthèses l'indique.

---

### Arbre des rencontres possibles dans la semaine

```
MERCREDI
  ├── ME5 → Oui, resto végétarien      → RENCONTRE (déjeuner tranquille)
  ├── ME5 → Oui, food truck lointain   → RENCONTRE (aventure culinaire)
  ├── ME5 → Non                        → Pas de rencontre
  └── ME9 → Gaming en ligne Discord    → RENCONTRE (virtuelle, depuis chez eux)

VENDREDI
  └── V3 → Escape game + Christophe    → RENCONTRE MAJEURE (sortie en groupe)

SAMEDI
  ├── S3 → Oui, marche dans le parc    → RENCONTRE (intime, conversation profonde)
  ├── S3 → Oui, café en ville          → RENCONTRE (discussion autour d'un thé/expresso)
  └── S3 → Non                         → Pas de rencontre (Christophe le regrette)
```

**Maximum de rencontres possibles sur la semaine : 3**
(ex : mercredi midi + vendredi escape game + samedi parc)

---

### Correspondance nœuds → sections de dialogue

#### Lundi (Tristan)
| Nœud | Section |
|---|---|
| L1 | NŒUD L1 — Transport matinal |
| L2A | BRANCHE L2A — À pied |
| L2B | BRANCHE L2B — Vélo en libre-service |
| L2C | BRANCHE L2C — Scooter électrique |
| L2D | BRANCHE L2D — Voiture d'un ami |
| L3 | NŒUD L3 — Repas de midi |
| L4A | BRANCHE L4A — Kebab industriel |
| L4B | BRANCHE L4B — Self universitaire |
| L4C | BRANCHE L4C — Meal prep maison |
| L4D | BRANCHE L4D — Livraison dans l'amphi |
| L5 | NŒUD L5 — Soirée |
| L6A | BRANCHE L6A — Soirée chez Raphaël à pied |
| L6B | BRANCHE L6B — Netflix + gaming |
| L6C | BRANCHE L6C — Escape game en VTC |
| L6D | BRANCHE L6D — Soirée en voiture |
| L7 | NŒUD L7 — Douche du soir |
| L8A | BRANCHE L8A — Douche 5 min |
| L8B | BRANCHE L8B — Douche 15 min |
| L8C | BRANCHE L8C — Bain |

#### Mardi (Christophe)
| Nœud | Section |
|---|---|
| M1 | NŒUD M1 — Petit-déjeuner |
| M2A | BRANCHE M2A — Pain + confiture maison |
| M2B | BRANCHE M2B — Céréales industrielles |
| M2C | BRANCHE M2C — Viennoiseries boulangerie |
| M3 | NŒUD M3 — Transport vers l'université |
| M4A | BRANCHE M4A — RER + métro |
| M4B | BRANCHE M4B — Bus direct |
| M4C | BRANCHE M4C — Voiture du père |
| M4D | BRANCHE M4D — Vélo + RER |
| M5 | NŒUD M5 — Repas de midi |
| M6A | BRANCHE M6A — Mange sa boîte |
| M6B | BRANCHE M6B — Self + boîte gaspillée |
| M6C | BRANCHE M6C — Partage la boîte |
| M7 | NŒUD M7 — Soirée |
| M8A | BRANCHE M8A — Lecture papier |
| M8B | BRANCHE M8B — YouTube 2h |
| M8C | BRANCHE M8C — Appel téléphonique |
| M8D | BRANCHE M8D — Cuisine avec père |
| M9 | NŒUD M9 — Chauffage nuit |
| M_END | 16°C — fenêtre entrouverte |
| M_END2 | 19°C — confort standard |
| M_END3 | 22°C — trop chaud |

#### Mercredi (Tristan)
| Nœud | Section |
|---|---|
| ME1 | NŒUD ME1 — Petit-déjeuner |
| ME2A | BRANCHE ME2A — Capsule + toast |
| ME2B | BRANCHE ME2B — Café filtre + œufs (appel mère) |
| ME2C | BRANCHE ME2C — Deliveroo breakfast |
| ME3 | NŒUD ME3 — Les courses |
| ME4A | BRANCHE ME4A — Supermarché à pied |
| ME4B | BRANCHE ME4B — Commande en ligne |
| ME4C | BRANCHE ME4C — Marché local à vélo |
| ME5 | NŒUD ME5 — Message de Christophe |
| ME6_MEETING | BRANCHE — Resto végétarien (RENCONTRE) |
| ME6_MEETING2 | BRANCHE — Food truck lointain (RENCONTRE) |
| ME6_ALONE | BRANCHE — Seul, sandwich surgelé |
| ME7 | NŒUD ME7 — Café de l'après-midi |
| ME8A | BRANCHE ME8A — Gobelet jetable |
| ME8B | BRANCHE ME8B — Mug réutilisable |
| ME8C | BRANCHE ME8C — Canette énergisante |
| ME9 | NŒUD ME9 — Soirée |
| ME_END | Cinéma avec amis |
| ME_END2 | Gaming en ligne avec Christophe (RENCONTRE virtuelle) |
| ME_END3 | Running dans le parc |

#### Jeudi (Christophe)
| Nœud | Section |
|---|---|
| J1 | NŒUD J1 — Transport vers supermarché |
| J2A | BRANCHE J2A — À pied |
| J2B | BRANCHE J2B — En voiture |
| J2C | BRANCHE J2C — Vélo / chariot |
| J3 | NŒUD J3 — Choix alimentaire |
| J4A | BRANCHE J4A — Bœuf haché |
| J4B | BRANCHE J4B — Poulet label rouge |
| J4C | BRANCHE J4C — Lentilles + légumes |
| J4D | BRANCHE J4D — Poisson MSC |
| J5 | NŒUD J5 — Après-midi libre |
| J6A | BRANCHE J6A — Bibliothèque (bus) |
| J6B | BRANCHE J6B — Balade en forêt (train) |
| J6C | BRANCHE J6C — Chez lui, podcast |
| J7 | NŒUD J7 — Conversation du soir |
| J_END | « J'essaie de prendre le RER » |
| J_END2 | « Je pense pas trop à ça » |
| J_END3 | « J'ai fait attention aujourd'hui » |

#### Vendredi (Tristan)
| Nœud | Section |
|---|---|
| V1 | NŒUD V1 — Début de matinée |
| V2A | BRANCHE V2A — Scroll réseaux + café |
| V2B | BRANCHE V2B — Jogging matinal |
| V2C | BRANCHE V2C — Brunch commandé |
| V3 | NŒUD V3 — Choix de l'activité |
| V4_MEETING | BRANCHE — Escape game + Christophe (RENCONTRE MAJEURE) |
| V4B | BRANCHE V4B — Karting électrique |
| V4C | BRANCHE V4C — Pique-nique au parc à vélo |
| V4D | BRANCHE V4D — House party |
| V5 | NŒUD V5 — Dîner du soir |
| V6A | BRANCHE V6A — Pizza maison |
| V6B | BRANCHE V6B — Sushi livraison |
| V6C | BRANCHE V6C — Restes du frigo |
| V6D | BRANCHE V6D — Burger fast food |

#### Samedi (Christophe)
| Nœud | Section |
|---|---|
| S1 | NŒUD S1 — Comment commence le samedi |
| S2A | BRANCHE S2A — Marché avec père |
| S2B | BRANCHE S2B — Grasse matinée |
| S2C | BRANCHE S2C — Tri des déchets |
| S3 | NŒUD S3 — Message de Tristan |
| S4_MEETING | BRANCHE — Marche dans le parc (RENCONTRE) |
| S4_MEETING2 | BRANCHE — Café en ville (RENCONTRE) |
| S4_ALONE | BRANCHE — Reste chez lui |
| S5 | NŒUD S5 — Engagement semaine prochaine |
| S6A | BRANCHE S6A — Stop viande bovine |
| S6B | BRANCHE S6B — 100% transports en commun |
| S6C | BRANCHE S6C — Batch cooking dominical |
| S6D | BRANCHE S6D — Rejoindre une association |
| S7 | NŒUD S7 — Dîner et bilan |
| S_END | « Mes transports ont été mes meilleurs choix » |
| S_END2 | « C'est l'alimentation qui compte le plus » |
| S_END3 | « J'aurais voulu sortir plus avec Tristan » |
| S_END4 | « Je n'ai pas encore assez changé » |
