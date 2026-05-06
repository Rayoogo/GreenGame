const gameData = {
    meta: { day_id: "lundi", label: "Lundi", character: "tristan", title: "Réveil, transport & repas", type: "normal" },
    nodes: [
        { id: "L1", type: "choice", category: "transport", narrative: "Tristan ouvre les yeux. 8h15, son alarme sonnait depuis 10 min. Il a cours à 9h30, en amphi à 20 minutes à pied.", question: "Comment Tristan se déplace-t-il ce matin ?", choices: [
            { label: "À pied (20 min)", sub: "Profite du matin frais", co2_kg: 0.00, next_id: "L2A" },
            { label: "Vélo en libre-service", sub: "Lime ou Vélib', rapide", co2_kg: 0.01, next_id: "L2B" },
            { label: "Scooter électrique partagé", sub: "Plus rapide, plus confortable", co2_kg: 0.04, next_id: "L2C" },
            { label: "Voiture d'un ami (covoiturage)", sub: "Il l'a croisé dans le couloir", co2_kg: 0.90, next_id: "L2D" }
        ]},
        { id: "L2A", type: "consequence", category: "transport", co2_added: 0.00, co2_direction: 1, title: "Trajet à pied", consequence: "Zéro émission. Tristan arrive en forme, il a pris l'air.", tip: "Marcher moins de 3 km : l'option systématiquement la plus vertueuse.", next_id: "L3" },
        { id: "L2B", type: "consequence", category: "transport", co2_added: 0.01, co2_direction: 1, title: "Vélo partagé", consequence: "Presque rien. Tristan pédale 6 min, il est à l'heure.", tip: "Le vélo en libre-service émet ~10g CO₂/km (fabrication+électricité).", next_id: "L3" },
        { id: "L2C", type: "consequence", category: "transport", co2_added: 0.04, co2_direction: 0, title: "Scooter électrique", consequence: "Faible mais non nul. Pratique, mais la fabrication de la flotte pèse.", tip: "Trottinettes/scooters partagés : ~30-50g CO₂/km selon réseau électrique.", next_id: "L3" },
        { id: "L2D", type: "consequence", category: "transport", co2_added: 0.90, co2_direction: -1, title: "Voiture d'un ami", consequence: "Beaucoup plus élevé même à deux. La voiture thermique reste le transport le plus émetteur en ville.", tip: "Covoiturage en thermique ~90g CO₂/km par passager (hors trafic).", next_id: "L3" },
        { id: "L3", type: "choice", category: "food", narrative: "12h30. Les cours du matin se terminent. Tristan sort de l'amphi avec Hugo. Son ventre gargouille.", question: "Que mange-t-il ?", choices: [
            { label: "Resto kebab / sandwich industriel", sub: "Rapide, pas cher", co2_kg: 1.80, next_id: "L4A" },
            { label: "Plat chaud du self universitaire", sub: "Formule RU à 3,30€", co2_kg: 0.80, next_id: "L4B" },
            { label: "Meal prep qu'il a préparé la veille", sub: "Riz + légumes sautés", co2_kg: 0.30, next_id: "L4C" },
            { label: "Livraison UberEats dans l'amphi", sub: "Pizza pour deux", co2_kg: 3.20, next_id: "L4D" }
        ]},
        { id: "L4A", type: "consequence", category: "food", co2_added: 1.80, co2_direction: -1, title: "Kebab industriel", consequence: "Pain de mie, viande transformée, emballage plastique. Tout s'additionne.", tip: "Sandwich industriel : ~1.5-2 kg CO₂ selon garniture (viande vs végé).", next_id: "L5" },
        { id: "L4B", type: "consequence", category: "food", co2_added: 0.80, co2_direction: 0, title: "Self universitaire", consequence: "Meilleure option hors maison. Masse = moins d'emballage, sourcing mutualisé.", tip: "Un repas chaud au RU : ~0.7-1 kg CO₂ selon menu viande/poisson/végé.", next_id: "L5" },
        { id: "L4C", type: "consequence", category: "food", co2_added: 0.30, co2_direction: 1, title: "Meal prep maison", consequence: "Excellente empreinte. Cuisson mutualisée, zéro emballage inutile.", tip: "Légumes sautés riz : ~0.3 kg CO₂. La cuisine maison bat presque tout.", next_id: "L5" },
        { id: "L4D", type: "consequence", category: "food", co2_added: 3.20, co2_direction: -1, title: "Livraison dans l'amphi", consequence: "La livraison à domicile cumule emballage, trajet dédié, et souvent pizza au fromage.", tip: "Livraison urbaine : +0.3-0.5 kg CO₂ liés au trajet moto/vélo cargo.", next_id: "L5" },
        { id: "L5", type: "choice", category: "leisure", narrative: "18h. Tristan sort de l'université. Son téléphone vibre. Raphaël laisse un message vocal.", question: "Que fait Tristan ce soir ?", choices: [
            { label: "Soirée chez Raphaël (transports doux)", sub: "À pied ou vélo, 15 min", co2_kg: 0.05, next_id: "L6A" },
            { label: "Netflix + gaming chez lui", sub: "Soirée tranquille", co2_kg: 0.40, next_id: "L6B" },
            { label: "Escape game en taxi / VTC", sub: "25 min de trajet aller", co2_kg: 2.10, next_id: "L6C" },
            { label: "Soirée en voiture (ami conducteur)", sub: "Bar à 8 km", co2_kg: 1.60, next_id: "L6D" }
        ]},
        { id: "L6A", type: "consequence", category: "leisure", co2_added: 0.05, co2_direction: 1, title: "Soirée à vélo/pied", consequence: "Tristan retrouve ses amis. La soirée est sympa, l'empreinte quasi nulle.", tip: "Les loisirs de proximité sans voiture : le combo social + écolo par excellence.", next_id: "L7" },
        { id: "L6B", type: "consequence", category: "leisure", co2_added: 0.40, co2_direction: 0, title: "Netflix + gaming", consequence: "Une console allumée 4h : ~0.2 kg CO₂. Netflix 4h : ~0.15 kg. Raisonnable.", tip: "Streaming HD = ~0.03-0.04 kg CO₂/h selon datacenter. Gaming = davantage.", next_id: "L7" },
        { id: "L6C", type: "consequence", category: "leisure", co2_added: 2.10, co2_direction: -1, title: "Escape game en VTC", consequence: "Le VTC thermique sur 25 min aller-retour pèse autant que tous ses repas.", tip: "VTC ~150g CO₂/km/passager. Préférer un électrique ou le vélo.", next_id: "L7" },
        { id: "L6D", type: "consequence", category: "leisure", co2_added: 1.60, co2_direction: -1, title: "Soirée en voiture", consequence: "8 km A/R × 2 trajets en voiture thermique. L'alcool c'est une chose, le CO₂ en est une autre.", tip: "Sortie en voiture 16 km total = ~2 kg CO₂ pour un petit moteur.", next_id: "L7" },
        { id: "L7", type: "choice", category: "water", narrative: "22h. Tristan rentre chez lui. Il est fatigué. Il branche son téléphone, batterie à 3%.", question: "Quelle douche ce soir ?", choices: [
            { label: "Douche rapide (5 min)", sub: "Eau froide au début", co2_kg: 0.15, next_id: "L8A" },
            { label: "Longue douche chaude (15 min)", sub: "Journée stressante", co2_kg: 0.45, next_id: "L8B" },
            { label: "Bain + musique", sub: "Il mérite ça", co2_kg: 0.90, next_id: "L8C" }
        ]},
        { id: "L8A", type: "consequence", category: "water", co2_added: 0.15, co2_direction: 1, title: "Douche 5 min", consequence: "Environ 50L d'eau. L'option eau chaude la plus sobre.", tip: "Chaque minute de douche chaude = ~10L d'eau + chauffage. Privilégier ≤8 min.", next_id: "L_END" },
        { id: "L8B", type: "consequence", category: "water", co2_added: 0.45, co2_direction: 0, title: "Douche 15 min", consequence: "~150L d'eau chauffée. Confort mais coût carbone x3.", tip: "Installer une pomme de douche économique réduit la conso de 50% sans effort.", next_id: "L_END" },
        { id: "L8C", type: "consequence", category: "water", co2_added: 0.90, co2_direction: -1, title: "Bain", consequence: "180-200L d'eau chaude. L'option la moins efficace énergétiquement.", tip: "Un bain consomme 3-4× plus qu'une douche courte en énergie de chauffage.", next_id: "L_END" },
        { id: "L_END", type: "end", narrative: "Tristan s'endort. Première journée de la semaine bouclée." }
    ]
};

const dialogueScript = {
    "L1": ["*8h15. L'appartement de Tristan est petit mais bien rangé pour un étudiant. Des câbles traînent près de la TV, une manette de jeu sur le canapé. Son téléphone sonne depuis dix minutes. Il ouvre un œil, regarde l'écran, grogne.*", "**TRISTAN** *(voix pâteuse)* — Non, non, non…", "*Il pose le téléphone sur son visage. Silence de deux secondes. Il se lève d'un coup.*", "**TRISTAN** — 8h15. J'ai cours à 9h30. C'est bon, c'est bon.", "*Il ouvre son placard, attrape un jean, un sweat. Regarde par la fenêtre. Le ciel est gris mais sec.*", "**TRISTAN** *(se parlant à lui-même)* — Bon. Comment je y vais, moi."],
    "L2A": ["*Tristan enfile ses baskets, attrape son sac. Il sort dans la rue. L'air est frais, il y a peu de monde. Il marche d'un bon pas, mains dans les poches.*", "**TRISTAN** *(pensée intérieure)* — Vingt minutes à pied, c'est rien. Et au moins je me réveille vraiment.", "*Il croise une voisine qui sort sa poubelle.*", "**VOISINE** — Bonjour ! Courage pour l'université !", "**TRISTAN** — Merci, bonne journée !", "*Il continue, écoute de la musique. Il arrive à l'amphi à 9h22, légèrement essoufflé mais de bonne humeur.*", "**TRISTAN** *(s'installant)* — Voilà. Pas besoin de Uber."],
    "L2B": ["*Tristan scanne un Vélib' au bas de sa rue avec son téléphone. La roue avant est un peu voilée mais ça tourne.*", "**TRISTAN** — Allez, on fait avec.", "*Il pédale vite dans les rues encore peu encombrées. Un feu passe au rouge juste devant lui.*", "**TRISTAN** *(freinant brusquement)* — Ouf.", "*Il arrive devant l'amphi, gare le vélo, regarde l'heure.*", "**TRISTAN** — 9h24. Parfait.", "*Un camarade, **Hugo**, le rejoint sur les marches.*", "**HUGO** — T'as pris un vélo ? Par ce temps ?", "**TRISTAN** — C'est pas la pluie, c'est juste nuageux. Et c'est rapide en plus.", "**HUGO** — Ouais bah moi j'aurais pris le bus.", "**TRISTAN** *(haussant les épaules)* — Chacun son truc."],
    "L2C": ["*Tristan ouvre l'application, localise un scooter électrique à 50 mètres. Il l'enfourche, met le casque accroché sous la selle.*", "**TRISTAN** — Ah ouais, c'est quand même plus confortable.", "*Il glisse dans la circulation, dépasse deux bus, prend un couloir de bus. Un klaxon retentit derrière lui.*", "**CONDUCTEUR** *(depuis sa voiture)* — T'as pas le droit là !", "**TRISTAN** *(sans se retourner)* — Si, si, les scooters électriques…", "*Il arrive à l'amphi avec deux minutes d'avance, rend le scooter via l'application.*", "**TRISTAN** *(regardant le prix sur l'appli)* — Deux euros quarante. Bon. C'est pas gratuit mais c'est rapide."],
    "L2D": ["*Tristan est sur le palier quand il voit un message de **Lucas** :* « Je passe devant l'uni, tu veux qu'on y aille ensemble ? »", "**TRISTAN** *(tapant)* — T'es sérieux ? Attends-moi 2 min.", "*Il descend en courant. La voiture de Lucas, une vieille Peugeot 207, est en double file.*", "**LUCAS** — Monte vite, j'ai failli me faire klaxonner trois fois.", "**TRISTAN** *(s'installant)* — T'aurais pu te garer non ?", "**LUCAS** — À cette heure-là ? T'as vu le quartier.", "*Silence. La radio joue en fond. Lucas conduit tranquillement.*", "**TRISTAN** — T'es sympa de passer, sérieux. J'avais la flemme de marcher.", "**LUCAS** — Ouais bah moi je passe de toute façon. Autant qu'on soit deux.", "**TRISTAN** — Le covoiturage, c'est l'avenir.", "**LUCAS** *(ironique)* — Pour toi surtout.", "*Ils rient. Lucas se gare en face de l'entrée principale.*", "**TRISTAN** — Merci chef.", "**LUCAS** — T'as cours jusqu'à quand ?", "**TRISTAN** — 17h. Toi ?", "**LUCAS** — 16h. Je t'attends pas.", "**TRISTAN** — Ah bah merci l'ami."],
    "L3": ["*12h30. Les cours du matin se terminent. Tristan sort de l'amphi avec **Hugo**. Son ventre gargouille.*", "**HUGO** — T'as prévu quoi pour manger ?", "**TRISTAN** — J'sais pas encore. Toi ?", "**HUGO** — Moi je vais au RU. Formule à 3,30. Faut pas se priver.", "**TRISTAN** — Ouais, c'est vrai que c'est pas cher."],
    "L4A": ["*Tristan et Hugo se séparent. Tristan repère un kebab juste en face de la fac.*", "**TRISTAN** *(au comptoir)* — Un kebab assiette, s'il vous plaît. Sauce blanche.", "**VENDEUR** — C'est pour manger ici ou à emporter ?", "**TRISTAN** — À emporter.", "*Il ressort avec un grand sachet plastique, une barquette en polystyrène, des couverts en plastique.*", "**TRISTAN** *(s'installant sur un banc)* — C'est énorme comme portion. Vaut ses 7 euros.", "*Il mange rapidement. À côté de lui, un autre étudiant le voit jeter la barquette et les couverts.*", "**ÉTUDIANT VOISIN** — Tu sais qu'il y a des poubelles de tri là-bas ?", "**TRISTAN** *(regardant son emballage)* — Ouais mais le polystyrène c'est pas recyclable de toute façon…", "**ÉTUDIANT VOISIN** — Le plastique des couverts si.", "**TRISTAN** — Ah. *(petit silence)* Je savais pas.", "*Il se lève, va séparer le peu qu'il peut.*"],
    "L4B": ["*Tristan finit par suivre Hugo vers le restaurant universitaire. Queue de cinq minutes.*", "**HUGO** — T'as ta carte ?", "**TRISTAN** *(fouillant dans son sac)* — Ouais, ouais… là.", "*Ils prennent leur plateau. Le plat du jour : poulet rôti, haricots verts, riz.*", "**TRISTAN** — Franchement c'est pas mauvais pour le prix.", "**HUGO** — T'as vu, ils ont mis une option végétarienne aujourd'hui. Gratin de légumes.", "**TRISTAN** *(regardant)* — Ouais. Je prends le poulet quand même.", "**HUGO** — Moi pareil. Même si paraît que c'est mieux pour la planète le truc végé.", "**TRISTAN** — Ouais je sais. Mais bon, une fois de temps en temps le poulet c'est pas la mort.", "**HUGO** — Exactement mon philosophe.", "*Ils s'installent. Tristan mange en regardant son téléphone.*", "**TRISTAN** *(la bouche pleine)* — Le RU c'est sous-côté en vrai."],
    "L4C": ["*Tristan sort une boîte hermétique de son sac. Du riz, des légumes sautés, une sauce.*", "**HUGO** *(étonné)* — Attends, t'as cuisiné toi ?", "**TRISTAN** — Hier soir ouais. J'avais rien à faire alors j'ai fait du riz et des légumes, j'en ai fait pour deux jours.", "**HUGO** — C'est impressionnant pour quelqu'un qui commande UberEats une fois sur deux.", "**TRISTAN** *(riant)* — Eh, je progresse. Et c'est meilleur que le kebab et moins cher.", "**HUGO** — C'est vrai que t'as l'air de kiffer.", "**TRISTAN** — Honnêtement ouais. Ma mère m'a montré la recette avant que je parte en appart'. Je la fais jamais normalement mais là j'avais les légumes qui allaient se perdre.", "**HUGO** — Anti-gaspi par accident.", "**TRISTAN** — Exactement. Le développement durable version fainéante.", "*Ils rient tous les deux.*"],
    "L4D": ["*Pendant le cours de l'après-midi, Tristan chuchote à **Hugo** à côté de lui.*", "**TRISTAN** *(téléphone sous la table)* — Je commande une pizza, t'en veux une part ?", "**HUGO** *(à voix basse)* — On est en cours là…", "**TRISTAN** — Je m'en fous, le prof regarde pas. Mozza-tomate ?", "**HUGO** — …Ouais vas-y.", "*Vingt-cinq minutes plus tard. Un livreur à vélo passe la tête dans la couloir. Tristan sort discrètement.*", "**LIVREUR** *(voix basse, souriant)* — Tristan ?", "**TRISTAN** — C'est moi. Merci !", "*Il revient avec la boîte. Le prof tourne la tête.*", "**PROF** — On ne mange pas en cours.", "**TRISTAN** — C'est pour… mes médicaments.", "**HUGO** *(retenant un fou rire)* — …", "*Tristan planque la boîte sous sa chaise. Ils mangent en la tenant sur les genoux, échangeant des regards complices.*", "**HUGO** *(chuchotant)* — Le livreur a traversé tout le campus pour ça.", "**TRISTAN** *(chuchotant)* — C'est son boulot.", "**HUGO** — C'est un peu absurde quand même.", "**TRISTAN** — *(mâchant)* C'est excellent, c'est pas absurde."],
    "L5": ["*18h. Tristan sort de l'université. Son téléphone vibre.*", "**RAPHAËL** *(message vocal)* — « Yo Tris, c'est Raph. Je fais un truc chez moi ce soir, on est cinq-six. T'es dispo ? »", "*Tristan écoute le message en marchant. Il tape sa réponse.*"],
    "L6A": ["**TRISTAN** *(tapant)* — Suis là dans 20 min. J'arrive à pied.", "**RAPHAËL** *(message)* — À pied ?? T'habites à 15 min.", "**TRISTAN** — Exactement, c'est pour ça. À tout.", "*Tristan marche jusqu'à l'appartement de Raphaël. Il sonne. Raphaël ouvre, bière à la main.*", "**RAPHAËL** — Te voilà. T'as pas pris de Uber ?", "**TRISTAN** — Pour 15 minutes ? Non.", "**RAPHAËL** — Ah ouais, le Tristan responsable de l'environnement.", "**TRISTAN** *(entrant)* — J'suis juste pas flemmard à ce point-là.", "*Ils entrent. Il y a déjà trois autres personnes dans le salon.*", "**AMI 1** — Tristan ! Tu veux une bière ?", "**TRISTAN** — Vas-y. Raph, t'as quoi à grignoter ?", "**RAPHAËL** — Des chips, du fromage. J'ai commandé des pizzas pour plus tard.", "**TRISTAN** — Encore des pizzas livrées…", "**RAPHAËL** — Tu voulais quoi, que je cuisine ?", "**TRISTAN** — *(s'asseyant)* Non non, c'est bien les pizzas.", "*La soirée s'anime. Musique, rires, discussions.*"],
    "L6B": ["*Tristan rentre directement chez lui. Il pose son sac, ouvre le frigo, attrape des restes.*", "**TRISTAN** *(à lui-même)* — Ouais, j'ai pas envie de sortir en vrai.", "*Il envoie un message à Raphaël.*", "**TRISTAN** *(tapant)* — Ce soir je peux pas, je suis crevé. Profite bien !", "**RAPHAËL** *(réponse)* — Sérieux ? Tu rates rien.", "**TRISTAN** *(réponse)* — Exactement mon point.", "*Il s'installe dans le canapé, allume la console, met un casque. Il lance une partie en ligne.*", "**VOIX DANS LE CASQUE (joueur inconnu)** — Hé toi, tu joues depuis combien de temps ?", "**TRISTAN** — Depuis ce matin mentalement.", "**VOIX** — Quoi ?", "**TRISTAN** — Laisse tomber. On y va.", "*Deux heures plus tard. Il zappe sur Netflix, scroll sans trouver.*", "**TRISTAN** *(bâillant)* — Y'a rien à regarder.", "*Il clique quand même sur une série. Deux épisodes. Il s'endort sur le canapé.*"],
    "L6C": ["*Tristan envoie un message groupé.*", "**TRISTAN** *(message)* — Escape game ce soir, qui est chaud ?", "**RAPHAËL** *(réponse)* — OHHH ouais ! Quel endroit ?", "**TRISTAN** — « L'Heure Fantôme » rue du Temple, j'ai vu que c'est bien noté.", "**HUGO** *(réponse)* — Je peux pas ce soir sorry.", "**RAPHAËL** — Moi et ma copine on est là, fais le Uber.", "*Tristan commande un VTC. La voiture met 12 minutes à arriver.*", "**CHAUFFEUR** *(dans la voiture)* — Bonsoir. Destination rue du Temple ?", "**TRISTAN** — Oui, merci.", "**CHAUFFEUR** — Vous faites l'escape game là-bas ?", "**TRISTAN** — Ouais, vous connaissez ?", "**CHAUFFEUR** — Ma fille y est allée. Elle a adoré. Vous êtes combien ?", "**TRISTAN** — On est trois au final.", "*Ils arrivent. Raphaël et sa copine **Léa** attendent devant.*", "**RAPHAËL** — Enfin ! On caille.", "**TRISTAN** — J'ai mis 12 min, t'exagères.", "**LÉA** — On fait quelle salle ?", "**TRISTAN** *(montrant l'affiche)* — « Le Bunker Nazi ». Niveau difficile.", "**RAPHAËL** — Tu peux pas choisir quelque chose de fun ?", "**TRISTAN** — C'est fun.", "*Ils entrent. L'hôtesse les accueille.*", "**HÔTESSE** — Bonsoir ! Vous avez une réservation ?", "**TRISTAN** — Oui, au nom de Tristan.", "**HÔTESSE** — Parfait. Vous avez 60 minutes. Prêts ?", "**TRISTAN** — Toujours.", "*À la fin de la soirée, dehors.*", "**RAPHAËL** — 58 minutes. On a failli.", "**LÉA** — C'est Tristan qui a trouvé le code à la fin, on serait jamais sortis sans lui.", "**TRISTAN** *(fier)* — Je dis rien.", "**RAPHAËL** — T'en penses quoi pour rentrer ? Uber encore ?", "**TRISTAN** *(hésitant)* — Ouais j'imagine…", "*Il regarde l'appli. Prix affiché : 11 euros.*", "**TRISTAN** — Onze euros l'aller, onze euros le retour. C'est vingt-deux euros juste pour les trajets.", "**RAPHAËL** — T'aurais dû prendre le métro.", "**TRISTAN** — À cette heure-là c'est fermé.", "**LÉA** — Nuit bus ?", "**TRISTAN** — *(regardant les horaires)* …Ouais, il y en a un dans 8 minutes. Allons-y."],
    "L6D": ["*Raphaël appelle Tristan à 18h30.*", "**RAPHAËL** — Yo, Lucas a sa bagnole ce soir, on va au Barfly. Tu viens ?", "**TRISTAN** — Le bar à 8 km ? C'est loin ça.", "**RAPHAËL** — Lucas conduit, il boit pas ce soir. On est quatre dans la voiture.", "**TRISTAN** — OK, je suis partant.", "*Dans la voiture de Lucas. Raphaël est devant, Tristan et **Maëlle** à l'arrière.*", "**LUCAS** — Tout le monde est là ?", "**RAPHAËL** — Go.", "**MAËLLE** *(à Tristan)* — T'étais où ce midi toi ? J'ai pas vu.", "**TRISTAN** — J'ai mangé dehors. Kebab.", "**MAËLLE** — Encore. T'es le roi du kebab.", "**TRISTAN** — C'est pratique.", "**MAËLLE** — C'est surtout pas terrible pour la santé.", "**TRISTAN** — Toi t'as mangé quoi ?", "**MAËLLE** — Salade que j'avais préparée.", "**TRISTAN** — Ah bah voilà. On se complète.", "*Lucas ralentit dans les embouteillages.*", "**LUCAS** — Putain de trafic…", "**RAPHAËL** — On aurait dû prendre le métro.", "**LUCAS** — T'as qu'à marcher si t'es pas content.", "**TRISTAN** — C'est 8 km Raph, c'est raisonnable en voiture.", "*Ils arrivent finalement. Lucas se gare à 200 mètres.*", "**LUCAS** — Voilà. Je suis votre chauffeur pour ce soir.", "**TRISTAN** — Respect sérieux. Tu bois quoi toi ce soir ?", "**LUCAS** — Eau gazeuse. Je reconduis.", "**TRISTAN** — Je t'offre une eau minérale d'exception.", "**LUCAS** *(riant)* — Trop sympa."],
    "L7": ["*22h. Tristan rentre chez lui. Il est fatigué. Il branche son téléphone, regarde l'écran — batterie à 3%.*", "**TRISTAN** — Miraculeusement encore en vie.", "*Il va dans la salle de bain. L'eau du robinet est froide au début.*"],
    "L8A": ["**TRISTAN** *(frissonnant sous l'eau froide)* — Ah, ah, ah— viens, chauffe.", "*L'eau se réchauffe. Il se lave vite, se rinse, coupe l'eau.*", "**TRISTAN** *(en sortant)* — Cinq minutes chrono. Je suis un héros.", "*Il s'essuie, regarde son reflet.*", "**TRISTAN** — Bien. Journée correcte. Demain je cuisine peut-être.", "*Il s'endort presque aussitôt, téléphone en charge sur la table de nuit.*"],
    "L8B": ["*Tristan entre sous la douche. L'eau est chaude. Il reste là, les yeux fermés, laisse l'eau couler.*", "**TRISTAN** *(à lui-même)* — Ahhh. Voilà.", "*Il commence à fredonner. Puis à chanter vraiment.*", "**TRISTAN** *(chantant)* — « …She said don't you know that other guys… »", "*Un message d'un voisin arrive sur son téléphone posé sur le rebord :* « Tu peux baisser le volume s'il te plaît »", "*Tristan regarde le message, rit, continue à voix basse.*", "*Quinze minutes plus tard. Il sort.*", "**TRISTAN** — Voilà. Détendu. C'est important de se déconnecter.", "*Il s'affale dans son lit. Dix secondes plus tard, il ronfle.*"],
    "L8C": ["*Tristan fait couler le bain. Il met de la musique depuis son téléphone posé sur le rebord de la baignoire.*", "**TRISTAN** *(testant la température)* — Parfait.", "*Il entre dans l'eau, soupire de satisfaction.*", "**TRISTAN** — Voilà ce qu'il faut après une longue journée.", "*Il reste là vingt minutes, musique en fond, les yeux mi-clos. Son téléphone sonne. C'est Raphaël.*", "**TRISTAN** *(décrochant avec une main mouillée)* — Ouais ?", "**RAPHAËL** — T'es où ? T'as raccroché sans rien dire tout à l'heure.", "**TRISTAN** — Je suis dans mon bain. Appelle-moi plus tard.", "**RAPHAËL** — Dans ton bain ?? T'as quel âge ?", "**TRISTAN** — L'âge de me détendre. Bonne nuit Raph.", "*Il raccroche. Se rallonge. Soupire.*", "**TRISTAN** *(à lui-même)* — Vingt ans et je prends des bains. Je suis en avance sur mon temps."],
    "L_END": ["*Quelle que soit la branche empruntée, Tristan finit par s'endormir. La semaine commence. Demain, c'est Christophe qui prend le relais.*", "*La dernière pensée de Tristan avant de sombrer :*", "**TRISTAN** *(murmurant, à moitié endormi)* — J'aurais dû préparer à manger pour demain aussi…", "*Il ne le fera pas.*"]
};

const state = {
    currentNode: "L1",
    dialogueIndex: 0,
    totalCO2: 0,
    isDialogueMode: true,
    showEndOnNextClick: false,
    showingConsequence: false,
    co2Added: false, // Flag pour éviter de compter le CO2 deux fois
    maxCO2: 5.55,
    choices: {
        transport: { label: "", co2: 0 },
        food: { label: "", co2: 0 },
        leisure: { label: "", co2: 0 },
        water: { label: "", co2: 0 }
    }
};

function saveGame() {
    const gameState = {
        currentNode: state.currentNode,
        dialogueIndex: state.dialogueIndex,
        totalCO2: state.totalCO2,
        choices: state.choices,
        timestamp: Date.now()
    };
    localStorage.setItem('greenGame_lundi_save', JSON.stringify(gameState));
}

function loadGame() {
    const saved = localStorage.getItem('greenGame_lundi_save');
    if (saved) {
        const gameState = JSON.parse(saved);
        if (Date.now() - gameState.timestamp < 86400000) {
            state.currentNode = gameState.currentNode;
            state.dialogueIndex = gameState.dialogueIndex;
            state.totalCO2 = gameState.totalCO2;
            state.choices = gameState.choices;
            return true;
        }
    }
    return false;
}

function clearSave() {
    localStorage.removeItem('greenGame_lundi_save');
}

function formatText(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
}

function updateHUD() {
    const co2El = document.getElementById('co2-value');
    co2El.textContent = state.totalCO2.toFixed(2) + " kg";
    
    if(state.totalCO2 < 1.5) co2El.style.color = '#2e7d32';
    else if(state.totalCO2 < 3.5) co2El.style.color = '#f57f17';
    else co2El.style.color = '#c62828';

    const pct = Math.min((state.totalCO2 / state.maxCO2) * 100, 100);
    document.getElementById('progress-bar').style.width = pct + '%';
}

function renderDialogue() {
    const node = gameData.nodes.find(n => n.id === state.currentNode);
    const lines = dialogueScript[state.currentNode] || [];
    const textBox = document.getElementById('dialogue-text');
    const indicator = document.getElementById('click-indicator');
    const choicesDiv = document.getElementById('choices-container');
    const consBox = document.getElementById('consequence-box');
    const contBtn = document.getElementById('continue-btn');
    const dialogueArea = document.getElementById('dialogue-area');

    choicesDiv.innerHTML = '';
    choicesDiv.style.pointerEvents = 'none';
    choicesDiv.style.opacity = '0';
    indicator.style.display = 'none';
    
    dialogueArea.classList.remove('hidden');

    if (node.type === 'end') {
        if (state.dialogueIndex < lines.length) {
            textBox.innerHTML = formatText(lines[state.dialogueIndex]);
            indicator.style.display = 'block';
            indicator.textContent = "▼ Cliquez pour continuer";
            state.isDialogueMode = true;
        } else {
            state.showEndOnNextClick = true;
            indicator.style.display = 'block';
            indicator.textContent = "▼ Cliquez pour voir le bilan";
        }
        consBox.style.display = 'none';
        contBtn.style.display = 'none';
        return;
    }

    if (node.type === 'choice') {
        state.showingConsequence = false;
        if (state.dialogueIndex < lines.length) {
            textBox.innerHTML = formatText(lines[state.dialogueIndex]);
            indicator.style.display = 'block';
            state.isDialogueMode = true;
        } else {
            textBox.innerHTML = `<strong style="color:#2d5a3d">${node.question || node.narrative}</strong>`;
            indicator.style.display = 'none';
            state.isDialogueMode = false;
            renderChoices(node.choices, node.category);
        }
        consBox.style.display = 'none';
        contBtn.style.display = 'none';
    } 
    else if (node.type === 'consequence') {
        if (!state.showingConsequence) {
            if (state.dialogueIndex < lines.length) {
                textBox.innerHTML = formatText(lines[state.dialogueIndex]);
                consBox.style.display = 'none';
                contBtn.style.display = 'none';
                indicator.style.display = 'block';
                state.isDialogueMode = true;
            } else {
                state.showingConsequence = true;
                textBox.innerHTML = ''; 
                consBox.style.display = 'block';
                document.getElementById('cons-text').innerHTML = `<strong>${node.title} :</strong> ${node.consequence}`;
                document.getElementById('co2-impact-display').innerHTML = `🌍 Impact : +${node.co2_added.toFixed(2)} kg CO₂`;
                document.getElementById('cons-tip').innerHTML = `💡 <strong>Le saviez-vous ?</strong> ${node.tip}`;
                contBtn.style.display = 'block';
                indicator.style.display = 'none';
                state.isDialogueMode = false;
            }
        }
    }
}

function renderChoices(choices, category) {
    const container = document.getElementById('choices-container');
    container.innerHTML = '';
    choices.forEach(c => {
        const btn = document.createElement('div');
        btn.className = 'choice-btn';
        btn.innerHTML = `
            <span class="choice-label">${c.label}</span>
            <span class="choice-sub">${c.sub}</span>
        `;
        btn.onclick = (e) => { e.stopPropagation(); makeChoice(c, category); };
        container.appendChild(btn);
    });
    container.style.pointerEvents = 'auto';
    container.style.opacity = '1';
}

function makeChoice(choice, category) {
    if (category && state.choices[category]) {
        state.choices[category] = { label: choice.label, co2: choice.co2_kg };
    }
    
    const nextNode = gameData.nodes.find(n => n.id === choice.next_id);
    if(nextNode) {
        state.currentNode = choice.next_id;
        state.dialogueIndex = 0;
        state.showingConsequence = false;
        saveGame();
        renderDialogue();
    }
}

function nextNode() {
    const node = gameData.nodes.find(n => n.id === state.currentNode);
    if(node.next_id) {
        if (node.type === 'consequence' && node.co2_added && !state.co2Added) {
            state.totalCO2 += node.co2_added;
            state.co2Added = true;
            updateHUD();
        }
        
        state.currentNode = node.next_id;
        state.dialogueIndex = 0;
        state.showingConsequence = false;
        state.co2Added = false;
        saveGame();
        renderDialogue();
    }
}

function handleClick(event) {
    if (event.target.closest('#pause-btn') || event.target.closest('.choice-btn') || event.target.closest('#continue-btn')) {
        return;
    }
    
    if (state.showEndOnNextClick) {
        state.showEndOnNextClick = false;
        showEndScreen();
        return;
    }
    
    if (!state.isDialogueMode) return;
    
    state.dialogueIndex++;
    saveGame();
    renderDialogue();
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        
        if (document.getElementById('end-screen').style.display === 'flex') {
            goToNextDay();
            return;
        }
        
        handleClick({ target: document.getElementById('game-container'), stopPropagation: () => {} });
    }
});

function showEndScreen() {
    clearSave();
    document.getElementById('dialogue-area').classList.add('hidden');
    
    const listEl = document.getElementById('end-actions-list');
    listEl.innerHTML = '';
    
    if (state.choices.transport.label) {
        const li = document.createElement('li');
        const text = state.choices.transport.label.replace(/\s*\(.*?\)\s*/g, '');
        li.innerHTML = `<span>Vous êtes allez à l'ecole ${text.toLowerCase()}</span><span class="co2-value">+${state.choices.transport.co2.toFixed(2)}kg</span>`;
        listEl.appendChild(li);
    }
    
    if (state.choices.food.label) {
        const li = document.createElement('li');
        const foodText = state.choices.food.label.toLowerCase();
        let desc = "";
        if (foodText.includes('kebab') || foodText.includes('sandwich')) desc = "Vous avez mangé au restaurant (kebab/sandwich)";
        else if (foodText.includes('self') || foodText.includes('universitaire')) desc = "Vous avez mangé au restaurant universitaire";
        else if (foodText.includes('meal prep') || foodText.includes('préparé')) desc = "Vous avez mangé votre meal prep maison";
        else if (foodText.includes('livraison') || foodText.includes('ubereats')) desc = "Vous avez commandé une livraison";
        li.innerHTML = `<span>${desc}</span><span class="co2-value">+${state.choices.food.co2.toFixed(2)}kg</span>`;
        listEl.appendChild(li);
    }
    
    if (state.choices.leisure.label) {
        const li = document.createElement('li');
        const leisureText = state.choices.leisure.label.toLowerCase();
        let desc = "";
        if (leisureText.includes('soirée chez raphaël')) desc = "Vous avez passez la soirée chez Raphaël";
        else if (leisureText.includes('netflix')) desc = "Vous avez passez la soirée chez vous sur Netflix";
        else if (leisureText.includes('escape game')) desc = "Vous avez fait un escape game";
        else if (leisureText.includes('voiture')) desc = "Vous êtes sorti en voiture avec des amis";
        li.innerHTML = `<span>${desc}</span><span class="co2-value">+${state.choices.leisure.co2.toFixed(2)}kg</span>`;
        listEl.appendChild(li);
    }
    
    if (state.choices.water.label) {
        const li = document.createElement('li');
        const waterText = state.choices.water.label.toLowerCase();
        let desc = "";
        if (waterText.includes('rapide') || waterText.includes('5 min')) desc = "Vous avez fait une douche rapide";
        else if (waterText.includes('longue') || waterText.includes('15 min')) desc = "Vous avez fait une longue douche";
        else if (waterText.includes('bain')) desc = "Vous avez fait un bain pour vous détendre";
        li.innerHTML = `<span>${desc}</span><span class="co2-value">+${state.choices.water.co2.toFixed(2)}kg</span>`;
        listEl.appendChild(li);
    }
    
    document.getElementById('end-total-co2').textContent = `${state.totalCO2.toFixed(2)}kg de CO2`;
    document.getElementById('end-screen').style.display = 'flex';
}

function goToNextDay(event) {
    if (event) event.stopPropagation();
    window.location.href = 'mardi_christophe.html';
}

window.onload = () => {
    const hasSave = loadGame();
    document.getElementById('bg-image').style.backgroundImage = "url('images/lundi_matin.jpg')"; 
    updateHUD();
    renderDialogue();
    
    if (hasSave) {
        const notif = document.createElement('div');
        notif.style.cssText = `
            position: fixed;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(74, 124, 89, 0.95);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 0.9rem;
            z-index: 100;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            animation: fadeInOut 3s ease;
        `;
        notif.textContent = "📂 Progression reprise automatiquement";
        document.body.appendChild(notif);
        setTimeout(() => notif.remove(), 3000);
    }
};