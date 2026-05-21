const gameData = {
    meta: { day_id: "mercredi", label: "Mercredi", character: "tristan", title: "Midi en ville & soirée", type: "major" },
    nodes: [
        { id: "ME1", type: "choice", category: "breakfast", narrative: "Mercredi. Tristan n'a cours que l'après-midi. Il passe la matinée chez lui.", question: "Que fait-il pour le petit-déjeuner ?", choices: [
            { label: "Café en capsule + toast grillé", sub: "Vite fait", co2_kg: 0.30, next_id: "ME2A" },
            { label: "Café filtre + œufs brouillés", sub: "Il prend son temps", co2_kg: 0.25, next_id: "ME2B" },
            { label: "Commande Deliveroo breakfast", sub: "Bagels + jus d'orange frais", co2_kg: 1.20, next_id: "ME2C" }
        ]},
        { id: "ME2A", type: "consequence", category: "breakfast", co2_added: 0.30, co2_direction: 0, title: "Capsule + toast", consequence: "Les capsules aluminium génèrent 5× plus de déchets qu'un café filtre. Mais ça reste modéré.", tip: "Capsule Nespresso : ~0.05 kg CO₂/unité + emballage alu difficile à recycler.", next_id: "ME3" },
        { id: "ME2B", type: "consequence", category: "breakfast", co2_added: 0.25, co2_direction: 1, title: "Café filtre + œufs", consequence: "Option équilibrée. Les œufs ajoutent des protéines sans la lourdeur de la viande.", tip: "Œuf = ~0.24 kg CO₂/unité. Moins que la viande, plus que les légumes.", next_id: "ME3" },
        { id: "ME2C", type: "consequence", category: "breakfast", co2_added: 1.20, co2_direction: -1, title: "Deliveroo breakfast", consequence: "Emballage × nombreux contenants, trajet dédié, jus pasteurisé transporté.", tip: "Chaque livraison = un trajet dédié + emballages multi-couches. Le matin c'est redoutable.", next_id: "ME3" },
        
        { id: "ME3", type: "choice", category: "courses", narrative: "10h — Tristan pense aux courses. Il n'a plus rien à manger ce soir.", question: "Comment fait-il ses courses ?", choices: [
            { label: "Supermarché en bas de chez lui (à pied)", sub: "Leclerc, 7 min à pied", co2_kg: 0.20, next_id: "ME4A" },
            { label: "Commande en ligne (livrée demain)", sub: "Pratico-pratique", co2_kg: 0.60, next_id: "ME4B" },
            { label: "Marché local (15 min à vélo)", sub: "Produits locaux de saison", co2_kg: 0.10, next_id: "ME4C" }
        ]},
        { id: "ME4A", type: "consequence", category: "courses", co2_added: 0.20, co2_direction: 0, title: "Supermarché à pied", consequence: "Trajet nul, produits standards, emballages classiques. Option de base correcte.", tip: "Aller à pied au magasin vs en voiture : économise ~0.3-0.5 kg CO₂ aller-retour.", next_id: "ME5" },
        { id: "ME4B", type: "consequence", category: "courses", co2_added: 0.60, co2_direction: -1, title: "Livraison en ligne", consequence: "Camionnette de livraison qui dessert toute la rue. Mais si peu de voisins commandent, le ratio est mauvais.", tip: "Livraison alimentaire mutualisée à haute densité peut valoir un trajet voiture. Sinon non.", next_id: "ME5" },
        { id: "ME4C", type: "consequence", category: "courses", co2_added: 0.10, co2_direction: 1, title: "Marché local à vélo", consequence: "Le meilleur choix. Zéro emballage superflu, circuit ultra-court, saison.", tip: "Produit local de saison = jusqu'à 10× moins d'émissions qu'un équivalent importé hors-saison.", next_id: "ME5" },

        { id: "ME5", type: "choice", category: "lunch", narrative: "Midi — Tristan reçoit un message de Christophe : 'Je suis en ville, tu veux qu'on se retrouve pour manger ?'", question: "Tristan accepte-t-il de retrouver Christophe ?", choices: [
            { label: "Oui, il propose un endroit à pied", sub: "Resto végétarien en bas de sa rue", co2_kg: 0.05, next_id: "ME6_MEETING" },
            { label: "Oui, mais il propose un food truck loin", sub: "30 min en scooter partagé", co2_kg: 0.90, next_id: "ME6_MEETING2" },
            { label: "Non, il mange seul chez lui", sub: "Sandwich surgelé micro-ondes", co2_kg: 0.80, next_id: "ME6_ALONE" }
        ]},
        { id: "ME6_MEETING", type: "consequence", category: "lunch", co2_added: 0.05, co2_direction: 1, title: "Rencontre ! Resto végétarien", consequence: "Tristan et Christophe se retrouvent au quartier. C'est leur premier repas ensemble cette semaine.", tip: "Un repas végétarien = en moyenne 2× moins d'émissions qu'un équivalent avec viande.", meeting_note: "Tristan et Christophe déjeunent ensemble dans un petit resto végétarien. Christophe, habituellement hésitant pour les sorties, apprécie l'ambiance tranquille proposée par Tristan.", next_id: "ME7" },
        { id: "ME6_MEETING2", type: "consequence", category: "lunch", co2_added: 0.90, co2_direction: 0, title: "Rencontre ! Food truck lointain", consequence: "Ils se retrouvent quand même, mais le trajet en scooter alourdit le bilan.", tip: "Scooter électrique partagé : ~30-50g CO₂/km de déplacement.", meeting_note: "Tristan et Christophe font une aventure pour un food truck réputé. Christophe hésite longtemps avant d'accepter, mais finit par y aller. Le burrito était délicieux.", next_id: "ME7" },
        { id: "ME6_ALONE", type: "consequence", category: "lunch", co2_added: 0.80, co2_direction: -1, title: "Seul, sandwich surgelé", consequence: "Il rate une opportunité de voir Christophe. Le sandwich surgelé + micro-ondes n'est pas une bonne option.", tip: "Plat surgelé micro-ondé : emballages plastique, transformation industrielle, transport réfrigéré.", next_id: "ME7" },

        { id: "ME7", type: "choice", category: "coffee", narrative: "Après-midi — Tristan a ses cours. Il a son PC portable et doit le recharger. Il prend un café entre deux cours.", question: "Quel café ?", choices: [
            { label: "Café de la machine (gobelet jetable)", sub: "Le plus facile", co2_kg: 0.08, next_id: "ME8A" },
            { label: "Café dans son mug réutilisable (filtre)", sub: "Il a un mug dans son sac", co2_kg: 0.02, next_id: "ME8B" },
            { label: "Boisson énergisante en canette", sub: "Il est fatigué", co2_kg: 0.25, next_id: "ME8C" }
        ]},
        { id: "ME8A", type: "consequence", category: "coffee", co2_added: 0.08, co2_direction: 0, title: "Machine + gobelet jetable", consequence: "Le gobelet papier + plastique finit à la poubelle. La machine conso aussi plus qu'un filtre.", tip: "1 milliard de gobelets jetables/an en France. Le mug réutilisable s'amortit dès le 2e café.", next_id: "ME9" },
        { id: "ME8B", type: "consequence", category: "coffee", co2_added: 0.02, co2_direction: 1, title: "Mug réutilisable", consequence: "Tristan avait glissé son mug dans le sac. Minuscule empreinte.", tip: "Mug réutilisable × 250 utilisations = empreinte amorti très vite vs gobelet jetable.", next_id: "ME9" },
        { id: "ME8C", type: "consequence", category: "coffee", co2_added: 0.25, co2_direction: -1, title: "Canette énergisante", consequence: "Eau gazéifiée + conservateurs + boîte alu + sucres. Overkill pour rester éveillé.", tip: "Production d'une canette alu = ~0.17 kg CO₂ rien que pour l'emballage.", next_id: "ME9" },

        { id: "ME9", type: "choice", category: "evening", narrative: "Soir — Tristan peut faire quelque chose. Il hésite.", question: "La soirée du mercredi ?", choices: [
            { label: "Cinéma en ville avec des amis (métro)", sub: "Film en salle, 20 min trajet", co2_kg: 0.30, next_id: "ME_END" },
            { label: "Gaming en ligne avec Christophe (Discord)", sub: "Depuis chez lui", co2_kg: 0.35, next_id: "ME_END2" },
            { label: "Sortie running dans le parc", sub: "45 min, de nuit", co2_kg: 0.00, next_id: "ME_END3" }
        ]},
        { id: "ME_END", type: "end", narrative: "Bonne soirée. Le cinéma en salle est une des activités culturelles les plus efficientes en CO₂/personne." },
        { id: "ME_END2", type: "end", narrative: "Tristan et Christophe jouent ensemble en ligne. Une soirée tranquille mais connectée." },
        { id: "ME_END3", type: "end", narrative: "Running dans le parc. Zéro émission. Tristan rentre fatigué et de bonne humeur." }
    ]
};

const dialogueScript = {
    "ME1": [
        "Mercredi. 9h45. Tristan se réveille naturellement — pas cours avant 14h. Il s'étire, regarde le plafond, sourit vaguement. C'est l'avantage du mercredi.",
        "TRISTAN (à lui-même) — Ah voilà. Un matin tranquille.",
        "Il reste au lit trois minutes de plus. Puis il se lève, va à la cuisine. Le frigo est à moitié vide.",
        "TRISTAN — Bon. Petit-déj. Et après les courses."
    ],
    "ME2A": [
        "Tristan sort la machine à café, glisse une capsule. La machine ronronne. Il met deux tranches de pain dans le grille-pain.",
        "TRISTAN (regardant la capsule vide dans sa main) — T'es en alu ça, non ?",
        "Il la regarde, hausse les épaules, la jette dans la poubelle normale. Il s'installe avec son café, mange son toast rapidement en regardant son téléphone.",
        "TRISTAN (lisant) — Intéressant, intéressant… non. Non. (scroll) Non plus.",
        "Il pose le téléphone, finit sa tasse.",
        "TRISTAN — Bon. Courses."
    ],
    "ME2B": [
        "Tristan sort la cafetière à filtre — un cadeau de sa mère quand il a emménagé. Il mesure le café.",
        "TRISTAN — Tu mérites plus d'amour, toi.",
        "L'eau chauffe. Il sort deux œufs, une poêle. Il bat les œufs avec une fourchette — pas de fouet, il n'en a pas.",
        "Son téléphone sonne. C'est sa mère.",
        "TRISTAN (décrochant) — Salut Maman.",
        "SA MÈRE — Bonjour mon chéri ! T'es réveillé ?",
        "TRISTAN — Ouais, je fais des œufs brouillés.",
        "SA MÈRE — Oh ! T'as appris à cuisiner ?",
        "TRISTAN — C'est des œufs Maman, c'est pas de la cuisine.",
        "SA MÈRE — C'est un début. T'as pas cours ce matin ?",
        "TRISTAN — Que l'après-midi. C'est cool le mercredi.",
        "SA MÈRE — T'as bien mangé cette semaine ?",
        "TRISTAN — Oui Maman.",
        "SA MÈRE — Vraiment ? Ou c'est du UberEats encore ?",
        "TRISTAN (regardant ses œufs) — J'ai fait des œufs ce matin, tu vois bien.",
        "SA MÈRE — (riant) OK, je te crois. Je voulais juste t'appeler. Tu vas bien ?",
        "TRISTAN — Très bien. Toi ?",
        "Ils parlent cinq minutes. Sa mère raccroche. Tristan mange ses œufs, légèrement brûlés sur les bords mais corrects.",
        "TRISTAN (à lui-même) — Pas mal."
    ],
    "ME2C": [
        "Tristan ouvre l'application. Il fait défiler les menus.",
        "TRISTAN — Bagels, tartines, plateau américain… ouais. Plateau américain.",
        "Il commande : deux bagels, un jus d'orange, un café. 18 euros. Il attend en regardant la progression sur l'appli.",
        "25 minutes plus tard. Sonnette.",
        "LIVREUR — Bonjour ! Commande Tristan ?",
        "TRISTAN — C'est moi. Merci !",
        "Il referme la porte, pose le sac sur la table. Six emballages différents : sac papier, boîte carton pour les bagels, pot plastique pour la sauce, gobelet avec couvercle pour le café, bouteille en plastique pour le jus.",
        "TRISTAN (regardant le tout) — C'est beaucoup d'emballages pour un petit-déjeuner.",
        "Il mange quand même — c'est bon. Puis il regarde les emballages vides.",
        "TRISTAN — Ouais. Beaucoup.",
        "Il trie ce qu'il peut."
    ],
    "ME3": [
        "10h30. Tristan est debout, habillé. Le frigo est vide. Il réfléchit."
    ],
    "ME4A": [
        "Tristan prend un sac réutilisable — il en a un dans l'entrée depuis que sa mère lui en a offert trois — et sort.",
        "Le Leclerc est à 7 minutes. Il marche tranquillement, liste mentale en tête.",
        "TRISTAN (à voix basse dans le rayon) — Pâtes, sauce tomate, œufs… je peux faire quelque chose avec ça. Fromage. Du pain.",
        "À la caisse. La caissière, Ambre, la cinquantaine, l'aperçoit.",
        "AMBRE — Bonjour ! Vous avez votre carte fidélité ?",
        "TRISTAN — Non, j'habite pas loin depuis longtemps.",
        "AMBRE — Je peux vous la faire. Ça prend deux minutes.",
        "TRISTAN — Euh… peut-être une autre fois.",
        "AMBRE (souriante) — Comme vous voulez !",
        "Tristan règle, reprend son sac et repart."
    ],
    "ME4B": [
        "Tristan s'installe sur son canapé, ouvre le site de livraison Leclerc.",
        "TRISTAN — Je commande pour demain. Plus pratique.",
        "Il remplit son panier : pâtes, sauce, œufs, fromage, pain de mie. Il valide.",
        "TRISTAN — 8h-12h comme créneau. Parfait, j'ai pas cours demain matin.",
        "Son téléphone bipe. Confirmation de commande.",
        "TRISTAN — Voilà. Géré sans sortir. C'est beau la technologie.",
        "Puis il se souvient qu'il n'a rien pour ce soir.",
        "TRISTAN — …Ah. J'aurais dû commander pour aujourd'hui aussi.",
        "Il regarde le frigo. Une tranche de fromage, un yaourt, une demi-baguette de l'avant-veille.",
        "TRISTAN — Super."
    ],
    "ME4C": [
        "Tristan sort son vélo du couloir de son appartement. Il ajuste la selle — trop basse depuis la dernière fois.",
        "TRISTAN (à lui-même) — C'était quand la dernière fois que j'ai pris le vélo d'ailleurs ?",
        "Il pédale quinze minutes jusqu'au marché couvert du quartier. Il attache le vélo à un anneau, entre.",
        "Le marché sent la tomate et le pain chaud. Il s'arrête devant un étal de légumes.",
        "MARAÎCHÈRE — Bonjour jeune homme ! Qu'est-ce qu'il vous faut ?",
        "TRISTAN — C'est quoi de saison là ?",
        "MARAÎCHÈRE — Courgettes, tomates anciennes, poireaux, épinards. Tout vient du Val-de-Marne.",
        "TRISTAN — Ah ouais, c'est local ?",
        "MARAÎCHÈRE — Tout. Mon mari cultive à 30 km d'ici.",
        "TRISTAN — OK, je prends des tomates et des courgettes.",
        "Il achète aussi du fromage chez un fromager, du pain chez le boulanger.",
        "TRISTAN (en repartant à vélo) — C'est bien, le marché. Je comprends pas pourquoi j'y viens pas plus souvent.",
        "Il pédale tranquillement. Un soleil timide perce les nuages."
    ],
    "ME5": [
        "12h15. Tristan est chez lui. Son téléphone vibre. Message de Christophe :",
        "CHRISTOPHE (message) — « Salut. Je suis en ville aujourd'hui pour un truc à l'uni. T'es libre pour manger ? »",
        "Tristan regarde le message. Il sourit légèrement."
    ],
    "ME6_MEETING": [
        "TRISTAN (tapant) — Ouais, je connais un endroit sympa à deux pas de chez moi. Végétarien, t'es ok ?",
        "CHRISTOPHE (réponse, après 2 min) — Végétarien ?",
        "TRISTAN — T'inquiète, c'est bon. Pas juste des feuilles.",
        "CHRISTOPHE — …OK. T'envoies l'adresse ?",
        "Tristan lui envoie l'adresse. Vingt minutes plus tard, devant le restaurant.",
        "Christophe arrive avec son sac de cours, l'air un peu perdu.",
        "TRISTAN — Hé, Christophe !",
        "CHRISTOPHE (levant la main) — Salut.",
        "TRISTAN — T'as trouvé facilement ?",
        "CHRISTOPHE — Google Maps. Ça fait quoi, deux mois qu'on s'est pas vus en vrai ?",
        "TRISTAN — Au moins. Viens, on entre.",
        "À l'intérieur. Petite salle, tables en bois, plantes vertes accrochées au mur.",
        "CHRISTOPHE (regardant autour) — C'est sympa. T'as l'habitude de venir là ?",
        "TRISTAN — Deuxième fois. La première c'était par hasard, j'ai aimé.",
        "Ils s'installent. La serveuse arrive.",
        "SERVEUSE — Bonjour ! Vous avez regardé la carte ?",
        "TRISTAN — Pas encore. C'est quoi le plat du jour ?",
        "SERVEUSE — Curry de pois chiches aux épinards, riz basmati et pain naan.",
        "TRISTAN — Je prends ça.",
        "CHRISTOPHE (lisant la carte) — Vous avez un burger végétal ?",
        "SERVEUSE — Oui, galette de lentilles, cheddar végétal, oignons confits.",
        "CHRISTOPHE — OK, je tente.",
        "La serveuse repart.",
        "TRISTAN — T'étais à l'uni pour quoi aujourd'hui ?",
        "CHRISTOPHE — Un truc administratif. Dossier de bourse. C'était pénible.",
        "TRISTAN — Ah ouais. C'est fastidieux les démarches.",
        "CHRISTOPHE — Et toi t'as cours quand ?",
        "TRISTAN — 14h. J'ai le temps.",
        "Silence.",
        "CHRISTOPHE (regardant la salle) — C'est marrant, j'aurais jamais choisi un resto végétarien de moi-même.",
        "TRISTAN — Et ?",
        "CHRISTOPHE — Et je verrai quand j'aurai mangé.",
        "TRISTAN (riant) — Honnête.",
        "Les plats arrivent.",
        "CHRISTOPHE (prenant une bouchée) — …C'est pas mal.",
        "TRISTAN — « C'est pas mal. » Toi et tes compliments.",
        "CHRISTOPHE — C'est vraiment bon en fait. La galette est bien assaisonnée.",
        "TRISTAN — Voilà. Un converti.",
        "CHRISTOPHE — Je suis pas converti, j'ai juste dit que c'était bon.",
        "TRISTAN — Premier pas.",
        "Ils mangent. La conversation s'allonge naturellement.",
        "CHRISTOPHE — Mon père cuisine végétarien parfois. Dal de lentilles, des trucs comme ça.",
        "TRISTAN — Ton père cuisine souvent ?",
        "CHRISTOPHE — Tous les jours. Il aime ça.",
        "TRISTAN — T'as de la chance. Moi mon père sait faire trois choses : les pâtes bolognaise, les merguez au barbecue, et le reste il commande.",
        "CHRISTOPHE (souriant légèrement) — Et toi ?",
        "TRISTAN — Moi je suis en progrès. J'ai fait des œufs ce matin.",
        "CHRISTOPHE — Impressionnant.",
        "TRISTAN (ironique) — Merci, ça vient du cœur.",
        "Ils finissent leurs assiettes. Addition.",
        "CHRISTOPHE — Je paye ma part.",
        "TRISTAN — T'inquiète, c'est moi—",
        "CHRISTOPHE — Non. Je paye ma part.",
        "TRISTAN — OK. Comme tu veux.",
        "Dehors.",
        "CHRISTOPHE — C'était bien. Merci d'avoir proposé.",
        "TRISTAN — La prochaine fois c'est toi qui choisis. Me surprends.",
        "CHRISTOPHE — Je sais pas si je suis capable de ça.",
        "TRISTAN — T'as plus de temps que tu crois pour apprendre. À plus cette semaine ?",
        "CHRISTOPHE — Possible.",
        "Ils se séparent. Tristan regarde Christophe partir de l'autre côté de la rue.",
        "TRISTAN (pensée intérieure) — Il est marrant ce gars."
    ],
    "ME6_MEETING2": [
        "TRISTAN (tapant) — J'ai mieux. Y'a un food truck mexicain génial à 20 min, les burritos sont dingues. Scooter partagé et on y est en 30 min.",
        "CHRISTOPHE (réponse, après 4 min) — C'est loin.",
        "TRISTAN — C'est 30 minutes. C'est rien.",
        "CHRISTOPHE — Je prends quoi comme transport ?",
        "TRISTAN — Un scooter partagé. T'as l'appli ?",
        "CHRISTOPHE — Non.",
        "TRISTAN — Je t'envoie le lien, télécharge-la. C'est facile.",
        "Silence de 7 minutes.",
        "CHRISTOPHE (réponse) — OK. C'est cher comme scooter.",
        "TRISTAN — C'est 2 euros pour 15 min. C'est raisonnable.",
        "CHRISTOPHE — …Je sais pas conduire un scooter.",
        "TRISTAN — T'as pas besoin de permis pour l'électrique en dessous de 45 km/h. Tu montes et tu vas tout droit.",
        "CHRISTOPHE — Tout droit dans Paris ?",
        "TRISTAN — (riant) OK, je vois le problème. Prends le métro ligne 11, j'arrive de mon côté, on se retrouve là-bas.",
        "Devant le food truck. Une queue de huit personnes.",
        "TRISTAN — T'as vu la queue ? C'est bon signe.",
        "CHRISTOPHE — Ou c'est juste lent.",
        "TRISTAN — Toujours le verre à moitié vide.",
        "CHRISTOPHE (levant un sourcil) — C'est réaliste.",
        "Ils avancent dans la queue. Le cuisinier crie les commandes.",
        "CUISINIER (voix forte) — Burrito poulet ! Burrito végé ! Tacos crevette !",
        "TRISTAN — Moi je prends burrito bœuf-avocat.",
        "CHRISTOPHE — Moi je prendrai… le végétarien.",
        "TRISTAN — Sérieux ?",
        "CHRISTOPHE — J'ai pas très faim et c'est moins lourd.",
        "TRISTAN — Et t'es végétarien depuis quand ?",
        "CHRISTOPHE — Je suis pas végétarien. Je veux juste quelque chose de pas trop lourd.",
        "Ils mangent assis sur un muret.",
        "TRISTAN (la bouche pleine) — C'est ouf ce burrito.",
        "CHRISTOPHE — Le mien est bon aussi.",
        "TRISTAN — La prochaine fois tu prends le bœuf, t'as besoin d'éducation culinaire.",
        "CHRISTOPHE (regardant l'emballage de papier aluminium du burrito) — T'as vu comme y'a d'emballage dans ce food truck ?",
        "TRISTAN — C'est un food truck, c'est fait pour.",
        "CHRISTOPHE — Ouais mais là t'as l'alu, le papier kraft, les serviettes. Pour un repas rapide, c'est pas rien.",
        "TRISTAN (regardant son emballage) — T'as raison. Mais le burrito vaut le coup.",
        "CHRISTOPHE (demi-sourire) — Probablement."
    ],
    "ME6_ALONE": [
        "Tristan regarde le message de Christophe. Puis il regarde son frigo.",
        "TRISTAN (tapant) — Désolé, j'ai des trucs à faire cet après-midi, je vais rester chez moi. Une prochaine fois ?",
        "CHRISTOPHE (réponse) — OK. Pas de souci.",
        "Tristan pose le téléphone. Il ouvre le congélateur. Un sandwich jambon-fromage surgelé.",
        "TRISTAN — Voilà.",
        "Il le met au micro-ondes. Deux minutes. Il sort un sandwich mou et tiède.",
        "TRISTAN (mordant dedans) — Ouais.",
        "Il mange seul devant son téléphone. Il voit Christophe poster une photo sur Instagram — il est devant un food truck. Tristan la regarde.",
        "TRISTAN (à lui-même) — J'aurais dû y aller."
    ],
    "ME7": [
        "14h30. Tristan est en cours. La salle est trop chaude, le prof parle depuis 45 minutes sans s'arrêter. Tristan a besoin de quelque chose."
    ],
    "ME8A": [
        "Pause de 10 minutes. Tristan va à la machine à café dans le couloir.",
        "HUGO — T'en veux un ?",
        "TRISTAN — Ouais, café court. Merci.",
        "La machine sort le gobelet en carton doublé plastique.",
        "TRISTAN (le tenant) — Ces gobelets-là, c'est recyclable ou pas en fait ?",
        "HUGO — Aucune idée. J'en prends un par jour en moyenne.",
        "TRISTAN — Moi aussi. Depuis septembre. C'est…",
        "HUGO — Beaucoup de gobelets.",
        "TRISTAN — Un par jour fois 150 jours. C'est 150 gobelets dans l'année juste pour moi.",
        "HUGO — Je préfère pas calculer pour moi.",
        "Ils retournent en cours."
    ],
    "ME8B": [
        "Pause de 10 minutes. Tristan ouvre son sac, sort un mug en inox.",
        "HUGO — T'as un mug ?",
        "TRISTAN — Ouais, ma mère me l'a offert à la rentrée. J'ai commencé à l'utiliser cette semaine.",
        "HUGO — T'es devenu écolo ou quoi ?",
        "TRISTAN — Non, j'ai juste réalisé que le café de la machine dans le mug c'est pareil que dans le gobelet. Et le gobelet finit à la poubelle.",
        "HUGO — Logique.",
        "Tristan se dirige vers la machine, utilise le bouton « mug » — la machine remplit directement dans le mug.",
        "TRISTAN (revenant) — Et c'est pratique en plus. Le café reste chaud plus longtemps.",
        "HUGO — Je vais peut-être en acheter un.",
        "TRISTAN — T'en as un chez toi probablement. Il te sert juste à rien.",
        "HUGO — …Ouais probablement."
    ],
    "ME8C": [
        "Tristan passe devant un distributeur automatique dans le couloir.",
        "TRISTAN — J'arrive plus à suivre le cours. J'ai besoin de quelque chose.",
        "Il prend une canette de boisson énergisante. Il l'ouvre dans le couloir.",
        "HUGO (le rejoignant) — Encore ?",
        "TRISTAN — J'étais en train de m'endormir.",
        "HUGO — T'as pas dormi ?",
        "TRISTAN — Si, mais le cours est long.",
        "HUGO — C'est pas bon pour toi ces trucs.",
        "TRISTAN — C'est vrai. Mais là j'ai besoin.",
        "Il boit une gorgée. L'effet est quasi immédiat — ou il se le convainc.",
        "TRISTAN — Voilà. Vivant.",
        "HUGO — T'as vu le prix de la canette ?",
        "TRISTAN — 2,50 euros.",
        "HUGO — Et t'en bois combien par semaine ?",
        "TRISTAN — Deux-trois.",
        "HUGO — C'est entre 5 et 7 euros par semaine juste pour rester réveillé.",
        "TRISTAN (regardant la canette) — …Dormir plus la nuit serait plus économique.",
        "HUGO — Ça m'a l'air exact, oui."
    ],
    "ME9": [
        "19h. Les cours sont finis. Tristan rentre chez lui."
    ],
    "ME_END": [
        "Tristan reçoit un message de Raphaël : « Ciné ce soir ? Le nouveau film d'horreur. »",
        "TRISTAN (tapant) — Ouais, chaud. Quelle séance ?",
        "RAPHAËL — 20h15. On prend le métro ?",
        "TRISTAN — Je suis chez moi, j'arrive direct. On se retrouve devant.",
        "Devant le cinéma. Raphaël et Léa sont déjà là.",
        "RAPHAËL — T'as vu les critiques du film ?",
        "TRISTAN — Non. C'est bien ?",
        "RAPHAËL — « Un chef-d'œuvre oppressant ». Selon Le Monde.",
        "LÉA — Selon Le Monde qui dit ça de tous les films d'horreur français.",
        "TRISTAN — On tente quand même ?",
        "RAPHAËL — Évidemment.",
        "Dans la salle. Le film commence. Tristan s'est acheté du pop-corn.",
        "Une heure quarante-cinq plus tard. Sortie.",
        "RAPHAËL — Bon.",
        "TRISTAN — Bof.",
        "LÉA — Je l'avais dit.",
        "TRISTAN — Le Monde a menti.",
        "RAPHAËL — Le Monde a survalorisé.",
        "LÉA — On rentre comment ?",
        "TRISTAN — Métro. C'est à deux stations.",
        "RAPHAËL — J'avais pensé Uber.",
        "TRISTAN — Pour deux stations ? Non. Métro.",
        "RAPHAËL — T'es devenu raisonnable.",
        "TRISTAN — J'essaie."
    ],
    "ME_END2": [
        "19h30. Tristan allume son PC. Il ouvre Discord. Il hésite, puis écrit à Christophe.",
        "TRISTAN (sur Discord) — T'es libre ce soir ? J'ai un jeu multijoueur pas trop difficile si tu veux tester.",
        "Silence de huit minutes.",
        "CHRISTOPHE (réponse Discord) — Je joue pas vraiment aux jeux vidéos.",
        "TRISTAN — C'est pas grave, c'est simple. Un jeu de coopération. T'as un PC ?",
        "CHRISTOPHE — Ouais.",
        "TRISTAN — Installe Discord et je t'envoie le lien du jeu. Il est gratuit.",
        "Vingt minutes plus tard.",
        "CHRISTOPHE (Discord) — OK j'ai installé. Comment ça marche ?",
        "TRISTAN (voix) — Je t'entends ! Parfait. Rejoins mon serveur, je t'envoie l'invite. Tu vas voir c'est simple.",
        "CHRISTOPHE (voix, légèrement hésitant) — …OK je vois le jeu. C'est quoi comme genre ?",
        "TRISTAN — Survie coopérative. On est dans une forêt, on doit construire un abri, trouver de la nourriture, survivre à la nuit.",
        "CHRISTOPHE — Et si je fais une erreur ?",
        "TRISTAN — Ben on recommence. C'est un jeu, c'est pas grave.",
        "CHRISTOPHE — D'accord.",
        "Ils jouent. Au début, Christophe est maladroit — il coupe le mauvais arbre, ne trouve pas comment accéder au menu.",
        "TRISTAN (en jeu) — Non non, appuie sur E pour ramasser.",
        "CHRISTOPHE — J'ai appuyé sur E.",
        "TRISTAN — Regarde le petit icône en bas à droite—",
        "CHRISTOPHE — Ah. Ouais. OK.",
        "Une heure plus tard.",
        "CHRISTOPHE (voix, légèrement plus à l'aise) — Attends, si on met les pierres ici, l'abri résiste mieux au vent ?",
        "TRISTAN — Exactement. T'as compris le truc.",
        "CHRISTOPHE — C'est logique en fait.",
        "TRISTAN — Je t'avais dit que c'était simple.",
        "CHRISTOPHE — (pause) C'est pas mal comme jeu.",
        "TRISTAN (souriant) — Encore le « pas mal » de Christophe.",
        "CHRISTOPHE — C'est un compliment.",
        "TRISTAN — Je sais. Bon, on survit à la nuit ?",
        "CHRISTOPHE — On survit à la nuit.",
        "Deux heures passent. Ils finissent par se dire bonne nuit.",
        "TRISTAN — Bien joué pour ce soir. T'étais pas si mauvais finalement.",
        "CHRISTOPHE — Je suis meilleur que prévu.",
        "TRISTAN — C'est la même chose dite différemment.",
        "CHRISTOPHE — Bonne nuit Tristan.",
        "TRISTAN — À plus Christophe."
    ],
    "ME_END3": [
        "19h. Tristan enfile un jogging, des chaussures de sport. Il sort.",
        "Le parc est encore éclairé, quelques joggers en fin de parcours.",
        "TRISTAN (à lui-même, s'étirant) — Allez. 45 minutes.",
        "Il part. Rythme lent au début. L'air du soir est frais.",
        "Il croise une joggeuse qui court dans le sens inverse. Elle le dépasse facilement.",
        "JOGGEUSE (sans s'arrêter) — Courage !",
        "TRISTAN (légèrement vexé) — …Merci.",
        "Il continue. Après vingt minutes, il trouve son rythme. Il pense à rien de précis. La semaine, les cours, Christophe, le resto de midi.",
        "TRISTAN (pensée intérieure, en courant) — Je devrais faire ça plus souvent.",
        "Il rentre quarante-cinq minutes plus tard, en sueur mais de bonne humeur.",
        "TRISTAN (se regardant dans le miroir de l'entrée) — Voilà. Zéro émission. Maximum mérite.",
        "Il prend une douche courte et s'endort rapidement."
    ]
};

const state = {
    currentNode: "ME1",
    dialogueIndex: 0,
    totalCO2: 0,
    isDialogueMode: true,
    showEndOnNextClick: false,
    showingConsequence: false,
    co2Added: false,
    maxCO2: 2.60,
    choices: {
        breakfast: { label: "", co2: 0 },
        courses: { label: "", co2: 0 },
        lunch: { label: "", co2: 0 },
        coffee: { label: "", co2: 0 },
        evening: { label: "", co2: 0 }
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
    localStorage.setItem('greenGame_mercredi_save', JSON.stringify(gameState));
}

function loadGame() {
    const saved = localStorage.getItem('greenGame_mercredi_save');
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
    localStorage.removeItem('greenGame_mercredi_save');
}

function formatText(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
}

function updateHUD() {
    const co2El = document.getElementById('co2-value');
    co2El.textContent = state.totalCO2.toFixed(2) + " kg";
    if(state.totalCO2 < 0.9) co2El.style.color = '#2e7d32';
    else if(state.totalCO2 < 1.8) co2El.style.color = '#f57f17';
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
    
    if (state.choices.breakfast.label) {
        const li = document.createElement('li');
        const text = state.choices.breakfast.label.toLowerCase();
        let desc = "";
        if (text.includes('capsule') || text.includes('toast')) desc = "Vous avez pris un café capsule et un toast";
        else if (text.includes('filtre') || text.includes('œufs')) desc = "Vous avez fait un café filtre avec des œufs brouillés";
        else if (text.includes('deliveroo')) desc = "Vous avez commandé un petit-déjeuner en livraison";
        else desc = "Petit-déjeuner : " + text.replace(/\s*\(.*?\)\s*/g, '');
        li.innerHTML = `<span>${desc}</span><span class="co2-value">+${state.choices.breakfast.co2.toFixed(2)}kg</span>`;
        listEl.appendChild(li);
    }
    
    if (state.choices.courses.label) {
        const li = document.createElement('li');
        const text = state.choices.courses.label.toLowerCase();
        let desc = "";
        if (text.includes('supermarché') || text.includes('pied')) desc = "Vous êtes allé au supermarché à pied";
        else if (text.includes('commande') || text.includes('ligne')) desc = "Vous avez commandé vos courses en ligne";
        else if (text.includes('marché') || text.includes('vélo')) desc = "Vous êtes allé au marché local à vélo";
        else desc = "Courses : " + text.replace(/\s*\(.*?\)\s*/g, '');
        li.innerHTML = `<span>${desc}</span><span class="co2-value">+${state.choices.courses.co2.toFixed(2)}kg</span>`;
        listEl.appendChild(li);
    }
    
    if (state.choices.lunch.label) {
        const li = document.createElement('li');
        const text = state.choices.lunch.label.toLowerCase();
        let desc = "";
        if (text.includes('végétarien') || text.includes('pied')) desc = "Vous avez déjeuné avec Christophe au resto végétarien";
        else if (text.includes('food truck') || text.includes('loin')) desc = "Vous avez mangé au food truck avec Christophe";
        else if (text.includes('seul') || text.includes('surgelé')) desc = "Vous avez mangé seul un sandwich surgelé";
        else desc = "Déjeuner : " + text.replace(/\s*\(.*?\)\s*/g, '');
        li.innerHTML = `<span>${desc}</span><span class="co2-value">+${state.choices.lunch.co2.toFixed(2)}kg</span>`;
        listEl.appendChild(li);
    }
    
    if (state.choices.coffee.label) {
        const li = document.createElement('li');
        const text = state.choices.coffee.label.toLowerCase();
        let desc = "";
        if (text.includes('machine') || text.includes('jetable')) desc = "Vous avez pris un café avec un gobelet jetable";
        else if (text.includes('mug') || text.includes('réutilisable')) desc = "Vous avez pris un café dans votre mug réutilisable";
        else if (text.includes('canette') || text.includes('énergisante')) desc = "Vous avez bu une boisson énergisante";
        else desc = "Café : " + text.replace(/\s*\(.*?\)\s*/g, '');
        li.innerHTML = `<span>${desc}</span><span class="co2-value">+${state.choices.coffee.co2.toFixed(2)}kg</span>`;
        listEl.appendChild(li);
    }
    
    if (state.choices.evening.label) {
        const li = document.createElement('li');
        const text = state.choices.evening.label.toLowerCase();
        let desc = "";
        if (text.includes('cinéma') || text.includes('métro')) desc = "Vous êtes allé au cinéma avec des amis";
        else if (text.includes('gaming') || text.includes('discord')) desc = "Vous avez joué en ligne avec Christophe";
        else if (text.includes('running') || text.includes('parc')) desc = "Vous êtes allé courir dans le parc";
        else desc = "Soirée : " + text.replace(/\s*\(.*?\)\s*/g, '');
        li.innerHTML = `<span>${desc}</span><span class="co2-value">+${state.choices.evening.co2.toFixed(2)}kg</span>`;
        listEl.appendChild(li);
    }
    
    document.getElementById('end-total-co2').textContent = `${state.totalCO2.toFixed(2)}kg de CO2`;
    document.getElementById('end-screen').style.display = 'flex';
}

function goToNextDay(event) {
    if (event) event.stopPropagation();
    window.location.href = 'tuesday_game.html';
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