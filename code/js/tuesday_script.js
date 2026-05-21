const gameData = {
    meta: { day_id: "mardi", label: "Mardi", character: "christophe", title: "Introspection & choix domestiques", type: "normal" },
    nodes: [
        { id: "M1", type: "choice", category: "breakfast", narrative: "Mardi matin. Christophe se réveille tôt chez son père. Il doit aller à l'université à 45 min en transport. Son père a déjà préparé le café.", question: "Quel petit-déjeuner ce matin ?", choices: [
            { label: "Pain + confiture + café (produits maison)", sub: "Recette de son père, habitude", co2_kg: 0.15, next_id: "M2A" },
            { label: "Céréales industrielles + lait", sub: "Rapide et pratique", co2_kg: 0.40, next_id: "M2B" },
            { label: "Viennoiseries achetées à la boulangerie", sub: "Tradition du mardi", co2_kg: 0.60, next_id: "M2C" }
        ]},
        { id: "M2A", type: "consequence", category: "breakfast", co2_added: 0.15, co2_direction: 1, title: "Petit-déj maison", consequence: "Pain, beurre, confiture : faible empreinte quand c'est fait maison. Le café filtre aussi mieux que la capsule.", tip: "Café filtre = 0.015 kg CO₂/tasse. Capsule Nespresso = 0.05 kg. × 365 jours = différence conséquente.", next_id: "M3" },
        { id: "M2B", type: "consequence", category: "breakfast", co2_added: 0.40, co2_direction: 0, title: "Céréales industrielles", consequence: "Emballage carton + transformation industrielle + lait (élevage).", tip: "100g de céréales transformées = ~0.3 kg CO₂. Le lait de vache ajoute ~0.1 kg.", next_id: "M3" },
        { id: "M2C", type: "consequence", category: "breakfast", co2_added: 0.60, co2_direction: -1, title: "Viennoiseries boulangerie", consequence: "Beurre, œufs en grande quantité, cuisson four longue durée.", tip: "Un croissant = ~0.2-0.3 kg CO₂. La pâtisserie est dense en beurre/œuf.", next_id: "M3" },
        
        { id: "M3", type: "choice", category: "transport", narrative: "Christophe réfléchit à comment rejoindre l'université. 45 min c'est loin. Il hésite.", question: "Comment se déplace-t-il ?", choices: [
            { label: "RER + métro", sub: "Son trajet habituel", co2_kg: 0.25, next_id: "M4A" },
            { label: "Bus direct (plus simple)", sub: "Un seul changement", co2_kg: 0.35, next_id: "M4B" },
            { label: "Son père le dépose en voiture", sub: "Il propose parfois", co2_kg: 1.80, next_id: "M4C" },
            { label: "Vélo + RER", sub: "20 min vélo puis train", co2_kg: 0.20, next_id: "M4D" }
        ]},
        { id: "M4A", type: "consequence", category: "transport", co2_added: 0.25, co2_direction: 1, title: "RER + métro", consequence: "Transport en commun électrique = meilleur ratio confort/émission sur longue distance.", tip: "RER en Île-de-France : ~20g CO₂/km/passager (électricité décarbonée France).", next_id: "M5" },
        { id: "M4B", type: "consequence", category: "transport", co2_added: 0.35, co2_direction: 0, title: "Bus", consequence: "Plus confortable, légèrement plus émetteur. Diesel urbain.", tip: "Bus RATP : ~50-80g CO₂/km/passager selon taux de remplissage.", next_id: "M5" },
        { id: "M4C", type: "consequence", category: "transport", co2_added: 1.80, co2_direction: -1, title: "Voiture du père", consequence: "Pratique mais coûteux en CO₂. 45 min en voiture = ~25-30 km en zone urbaine.", tip: "Voiture thermique urbaine : ~130-180g CO₂/km selon modèle et embouteillages.", next_id: "M5" },
        { id: "M4D", type: "consequence", category: "transport", co2_added: 0.20, co2_direction: 1, title: "Vélo + RER", consequence: "Le combo optimal. Christophe fait du sport et réduit son empreinte.", tip: "Vélo personnel = quasi 0 CO₂ opérationnel. Idéal pour les premiers/derniers km.", next_id: "M5" },

        { id: "M5", type: "choice", category: "lunchbox", narrative: "À l'université, un camarade lui propose de manger ensemble. Christophe a une boîte repas.", question: "Que fait-il avec sa boîte repas ?", choices: [
            { label: "Mange sa boîte au campus", sub: "Poulet rôti + riz + salade", co2_kg: 0.50, next_id: "M6A" },
            { label: "Range la boîte, mange au self", sub: "Il veut sociabiliser", co2_kg: 0.90, next_id: "M6B" },
            { label: "Partage la boîte avec son ami", sub: "Son père avait fait pour deux", co2_kg: 0.25, next_id: "M6C" }
        ]},
        { id: "M6A", type: "consequence", category: "lunchbox", co2_added: 0.50, co2_direction: 0, title: "Boîte maison", consequence: "Le repas de son père est équilibré et bien empaqueté. Économique et raisonnable.", tip: "Poulet rôti : ~1.5 kg CO₂/kg de poulet. Une portion = ~200g = ~0.3 kg CO₂ hors riz/légumes.", next_id: "M7" },
        { id: "M6B", type: "consequence", category: "lunchbox", co2_added: 0.90, co2_direction: -1, title: "Self + boîte gardée", consequence: "Il mange deux repas en pratique, gaspille le premier. L'intention sociale est bonne mais la boîte finit froide.", tip: "Le gaspillage alimentaire représente 8-10% des émissions mondiales de GES.", next_id: "M7" },
        { id: "M6C", type: "consequence", category: "lunchbox", co2_added: 0.25, co2_direction: 1, title: "Partage la boîte", consequence: "Son père avait vu juste. Christophe et son ami mangent ensemble, et l'empreinte est divisée par deux.", tip: "Partager un repas cuisiné réduit proportionnellement l'impact par personne.", next_id: "M7" },

        { id: "M7", type: "choice", category: "leisure", narrative: "Soir. Christophe est rentré chez lui. Son père propose de faire les courses ensemble demain, mais ce soir il hésite sur ses loisirs.", question: "Que fait Christophe ce soir ?", choices: [
            { label: "Lit un livre (papier)", sub: "Il vient de l'emprunter", co2_kg: 0.02, next_id: "M8A" },
            { label: "Regarde des vidéos YouTube (2h)", sub: "Sur son PC", co2_kg: 0.12, next_id: "M8B" },
            { label: "Appelle un ami pendant 1h", sub: "Vieux smartphone", co2_kg: 0.05, next_id: "M8C" },
            { label: "Cuisine avec son père", sub: "Prépare le repas de demain aussi", co2_kg: 0.10, next_id: "M8D" }
        ]},
        { id: "M8A", type: "consequence", category: "leisure", co2_added: 0.02, co2_direction: 1, title: "Lecture papier", consequence: "Lumière d'ambiance, zéro écran, zéro streaming. L'option la plus légère.", tip: "Un livre papier sur sa durée de vie = ~1 kg CO₂. Emprunté à la bibliothèque = proche de zéro.", next_id: "M9" },
        { id: "M8B", type: "consequence", category: "leisure", co2_added: 0.12, co2_direction: 0, title: "YouTube 2h", consequence: "Streaming vidéo : datacenters + réseau + écran PC. Pas négligeable sur longue durée.", tip: "Streaming vidéo HD : ~0.04-0.07 kg CO₂/h selon pays et fournisseur.", next_id: "M9" },
        { id: "M8C", type: "consequence", category: "leisure", co2_added: 0.05, co2_direction: 1, title: "Appel téléphonique", consequence: "Un appel audio = très faible consommation. Le lien social sans le coût du stream.", tip: "Un appel téléphonique 1h : ~0.001-0.005 kg CO₂. Bien moins qu'une visio.", next_id: "M9" },
        { id: "M8D", type: "consequence", category: "leisure", co2_added: 0.10, co2_direction: 1, title: "Cuisine avec père", consequence: "Préparer plusieurs repas en une fois est plus efficace énergétiquement. Et plus convivial.", tip: "Cuisiner en batch (batch cooking) réduit les émissions liées à la cuisson de 20-30%.", next_id: "M9" },

        { id: "M9", type: "choice", category: "heating", narrative: "Avant de dormir, Christophe pense au chauffage. La nuit va être fraîche.", question: "Quelle est la température du chauffage la nuit ?", choices: [
            { label: "16°C — fenêtre entrouverte", sub: "Conseillé pour dormir", co2_kg: 0.15, next_id: "M_END" },
            { label: "19°C — confort standard", sub: "Son réglage habituel", co2_kg: 0.35, next_id: "M_END2" },
            { label: "22°C — il a froid cette nuit", sub: "Hiver difficile", co2_kg: 0.60, next_id: "M_END3" }
        ]},
        { id: "M_END", type: "end", narrative: "Christophe dort bien au frais. Son empreinte nocturne est minimale." },
        { id: "M_END2", type: "end", narrative: "Nuit confortable. Il faudra cependant penser à baisser entre 15h et 18h pour économiser." },
        { id: "M_END3", type: "end", narrative: "Nuit bien chauffée. Chaque degré supplémentaire = +7% de consommation de chauffage." }
    ]
};

const dialogueScript = {
    "M1": [
        "6h50. La maison est silencieuse mais pas endormie. Une lumière filtre sous la porte de la cuisine. L'odeur du café se glisse dans le couloir. Christophe se réveille dans sa chambre, regarde le plafond quelques secondes avant de se lever.",
        "CHRISTOPHE (à mi-voix) — Déjà.",
        "Il enfile un pull, sort dans le couloir. Son père est déjà à la cuisine, debout depuis 6h15 comme tous les matins.",
        "LE PÈRE — T'as bien dormi ?",
        "CHRISTOPHE — Ouais. T'as fait le café ?",
        "LE PÈRE — Il est prêt depuis 20 minutes. Assieds-toi.",
        "Christophe s'assoit à la table de la cuisine. La table est propre, un torchon plié sur le rebord de l'évier. C'est une cuisine simple, fonctionnelle."
    ],
    "M2A": [
        "Le père pose une tasse devant Christophe. Café filtre, légèrement fort.",
        "LE PÈRE — Il y a du pain de hier encore. Et la confiture abricot que t'aimes bien.",
        "CHRISTOPHE — C'est bon.",
        "Christophe coupe une tranche, tartine lentement. Son père s'assoit en face avec sa propre tasse.",
        "LE PÈRE — T'as cours jusqu'à quelle heure aujourd'hui ?",
        "CHRISTOPHE — 17h. TD d'algorithmique l'après-midi.",
        "LE PÈRE — C'est bien, l'algorithmique.",
        "CHRISTOPHE — C'est dense.",
        "LE PÈRE — Tout ce qui est utile l'est.",
        "Silence confortable. Christophe mange. Son père feuillette les nouvelles sur son téléphone.",
        "LE PÈRE — J'ai mis une boîte dans ton sac. Poulet d'hier soir, riz, salade verte.",
        "CHRISTOPHE — T'avais pas à faire ça.",
        "LE PÈRE — Je l'aurais jeté sinon. Autant qu'il serve.",
        "Christophe boit une gorgée de café.",
        "CHRISTOPHE — C'est meilleur que les capsules.",
        "LE PÈRE (souriant légèrement) — J'ai jamais acheté de machine à capsules. C'est du gaspillage.",
        "CHRISTOPHE — Je sais, tu me l'as déjà dit.",
        "LE PÈRE — Et t'as retenu."
    ],
    "M2B": [
        "Christophe ouvre le placard, sort une boîte de céréales — marque grande surface, emballage coloré.",
        "LE PÈRE (regardant) — T'as encore acheté celles-là ?",
        "CHRISTOPHE — Quoi, elles sont bonnes.",
        "LE PÈRE — C'est du sucre et du carton.",
        "CHRISTOPHE — Le carton c'est la boîte, pas les céréales.",
        "LE PÈRE (posant sa tasse) — Tu sais combien il y a de trucs dedans que t'arrives même pas à prononcer ?",
        "CHRISTOPHE (versant le lait) — Je regarde pas les étiquettes à 7h du matin.",
        "LE PÈRE — Moi je t'ai mis du pain de campagne dans la boîte à pain. C'est fait avec de la farine, de l'eau, du sel et du levain. Quatre ingrédients.",
        "CHRISTOPHE — Le pain c'est bien aussi. Mais ce matin j'avais envie de céréales.",
        "LE PÈRE (soupirant doucement) — Comme tu veux.",
        "Petit silence. Le père se lève, rince sa tasse.",
        "LE PÈRE — J'ai quand même mis ta boîte repas dans ton sac.",
        "CHRISTOPHE (la bouche pleine) — Merci Papa."
    ],
    "M2C": [
        "Christophe entre dans la boulangerie à 7h05. Deux personnes font la queue.",
        "BOULANGÈRE — Bonjour ! Qu'est-ce que ce sera ?",
        "CHRISTOPHE — Deux croissants et un pain au chocolat, s'il vous plaît.",
        "BOULANGÈRE — Très bien. Petit-déjeuner de champion !",
        "Il rentre chez lui, pose les viennoiseries sur la table. Son père les regarde.",
        "LE PÈRE — T'es allé à la boulangerie ?",
        "CHRISTOPHE — Ouais, c'est la tradition du mardi.",
        "LE PÈRE — (s'asseyant) Je dis rien. Donne-moi le pain au chocolat.",
        "CHRISTOPHE — Je croyais que t'aimais pas les viennoiseries industrielles.",
        "LE PÈRE — C'est la boulangerie du coin. C'est pas industriel. Et c'est mardi.",
        "Ils mangent en silence, agréablement.",
        "CHRISTOPHE — Je comprends pas pourquoi c'est pas tous les jours.",
        "LE PÈRE — Parce que si c'est tous les jours, ça devient banal. Le mardi ça reste une petite chose bien.",
        "CHRISTOPHE (réfléchissant) — C'est une philosophie.",
        "LE PÈRE — C'est juste du bon sens."
    ],
    "M3": [
        "7h45. Christophe prend son sac, regarde l'heure. 45 minutes de trajet minimum.",
        "CHRISTOPHE (à son père) — Je pars.",
        "LE PÈRE — T'as ta boîte ?",
        "CHRISTOPHE — Ouais. À ce soir.",
        "LE PÈRE — Bonne journée."
    ],
    "M4A": [
        "Christophe marche jusqu'à la gare RER, 8 minutes à pied. Il passe son pass Navigo. Le quai est bondé.",
        "CHRISTOPHE (pensée intérieure) — Comme toujours.",
        "Il monte dans le train, reste debout, casque dans les oreilles. À sa gauche, une femme lit un livre. À sa droite, un homme dort debout.",
        "Changement de ligne à Châtelet. Il descend, prend le couloir de correspondance.",
        "VOIX DE FOND (haut-parleur) — Attention à la fermeture des portes.",
        "Il arrive à l'université à 8h48.",
        "CHRISTOPHE (à lui-même, regardant sa montre) — Quatre minutes d'avance. Parfait.",
        "Karim le rejoint sur le parvis.",
        "KARIM — Yo Chris ! T'as pris le RER ?",
        "CHRISTOPHE — Ouais, comme d'hab'.",
        "KARIM — Moi j'ai pris le bus. C'était blindé aussi. Je comprends pas pourquoi les gens prennent pas le vélo.",
        "CHRISTOPHE — C'est loin chez toi ?",
        "KARIM — 6 km. C'est faisable. Toi t'habites où déjà ?",
        "CHRISTOPHE — 18 km.",
        "KARIM — Ah ouais, là c'est le RER c'est obligé."
    ],
    "M4B": [
        "Christophe rate son RER habituel de deux minutes. Il regarde les horaires sur son téléphone.",
        "CHRISTOPHE (à lui-même) — Il y a un bus direct dans 5 minutes. Un changement.",
        "Il attend à l'arrêt. Le bus arrive, déjà presque plein. Il monte, reste debout près des portes.",
        "40 minutes de trajet. Le bus s'arrête à chaque station. Christophe regarde défiler les rues par la vitre.",
        "Un homme âgé monte et cherche une place. Christophe le voit, hésite une seconde, lui cède sa place — enfin, son espace près de la barre.",
        "HOMME ÂGÉ — Merci, mon grand.",
        "CHRISTOPHE — C'est normal.",
        "Il arrive à l'uni avec cinq minutes de retard sur son habitude. Karim l'attend.",
        "KARIM — T'as l'air d'avoir couru.",
        "CHRISTOPHE — Non, j'ai pris le bus. C'est long.",
        "KARIM — T'aurais dû prendre le RER.",
        "CHRISTOPHE — J'ai raté le mien.",
        "KARIM — Demain, réveil 5 minutes plus tôt.",
        "CHRISTOPHE (sèchement) — Merci du conseil."
    ],
    "M4C": [
        "Christophe met son sac dans l'entrée. Son père l'entend depuis la cuisine.",
        "LE PÈRE — Tu pars pas ?",
        "CHRISTOPHE — J'hésite. T'as le temps de me déposer ?",
        "LE PÈRE (silence d'une seconde) — Je travaille à 9h. Mais si tu pars maintenant, j'ai le temps.",
        "CHRISTOPHE — T'es sûr ? Je veux pas te mettre en retard.",
        "LE PÈRE — Prends ton manteau.",
        "Dans la voiture. Tôt le matin, les rues sont encore assez libres.",
        "LE PÈRE — T'aurais pas pu prendre le RER ?",
        "CHRISTOPHE — Je voulais pas me lever aussi tôt.",
        "LE PÈRE (souriant) — Ah voilà.",
        "CHRISTOPHE — C'est pas bien ?",
        "LE PÈRE — Non non, je suis content de te déposer. Mais la prochaine fois préviens-moi la veille.",
        "CHRISTOPHE — D'accord.",
        "Silence.",
        "LE PÈRE — On met quoi à la radio ?",
        "CHRISTOPHE — N'importe.",
        "Le père met France Info à voix basse. Un reportage sur le trafic routier en Île-de-France.",
        "JOURNALISTE (radio) — « …les embouteillages représentent en moyenne 150 heures perdues par an et par conducteur en Île-de-France… »",
        "LE PÈRE (ironique) — Et on y contribue ce matin.",
        "CHRISTOPHE — …Ouais.",
        "Le père dépose Christophe devant l'entrée principale.",
        "LE PÈRE — Bonne journée. Ce soir j'essaierai de rentrer avant 19h.",
        "CHRISTOPHE — OK. Merci Papa.",
        "LE PÈRE — À ce soir."
    ],
    "M4D": [
        "Christophe ressort son vieux vélo du garage. Il vérifie les pneus — un peu mous mais ça tient.",
        "CHRISTOPHE (à son père qui passe dans le couloir) — Je prends le vélo jusqu'à la gare.",
        "LE PÈRE — Il fait frais ce matin.",
        "CHRISTOPHE — J'ai mon manteau.",
        "LE PÈRE — Les pneus sont gonflés ?",
        "CHRISTOPHE (hésitation) — …Assez.",
        "LE PÈRE — Je vais chercher la pompe.",
        "CHRISTOPHE — Papa, j'ai le temps—",
        "LE PÈRE — Deux minutes.",
        "Le père revient avec une pompe à vélo. Il s'accroupit, gonfle les deux roues sans mot dire.",
        "LE PÈRE — Voilà. Maintenant c'est bon.",
        "CHRISTOPHE — Merci.",
        "Il enfourche le vélo, part dans la rue encore calme. L'air est frais, l'effort le réchauffe vite. Vingt minutes plus tard, il attache le vélo à un poteau près de la gare et prend le RER.",
        "Dans le train, Karim lui envoie un message : « T'es où ? »",
        "CHRISTOPHE (tapant) — Dans le RER. J'ai pris le vélo jusqu'à la gare.",
        "KARIM (réponse) — Sérieux ?! Respect. Moi j'aurais jamais fait ça.",
        "CHRISTOPHE (réponse) — C'est pas si compliqué."
    ],
    "M5": [
        "12h30. Christophe retrouve Karim dans le couloir entre deux bâtiments.",
        "KARIM — On mange ensemble ?",
        "CHRISTOPHE — Ouais. J'ai une boîte.",
        "KARIM — Encore ton père qui a cuisiné ?",
        "CHRISTOPHE — Ouais.",
        "KARIM — C'est ouf. Mon père, il sait juste faire des pâtes avec du ketchup."
    ],
    "M6A": [
        "Ils s'installent sur un banc dehors.",
        "KARIM — C'est quoi aujourd'hui ?",
        "CHRISTOPHE (ouvrant la boîte) — Poulet rôti, riz, salade verte.",
        "KARIM — Ça sent bon. Tu peux pas me donner la recette pour mon père ?",
        "CHRISTOPHE — Il met juste de l'ail, du thym et du citron. C'est simple.",
        "KARIM — Pour moi tout ce qui implique un four c'est déjà compliqué.",
        "Ils mangent. Karim a un sandwich acheté à la boulangerie du campus.",
        "KARIM — Franchement, ta boîte c'est mieux que mon sandwich.",
        "CHRISTOPHE — Le sandwich c'est combien ?",
        "KARIM — Quatre euros cinquante.",
        "CHRISTOPHE — Le mien c'est les restes de hier. Coût marginal : zéro.",
        "KARIM — T'as le sens de l'économie.",
        "CHRISTOPHE — C'est mon père qui l'a."
    ],
    "M6B": [
        "KARIM — Viens au RU avec moi. On mange ensemble là-bas, c'est plus sympa.",
        "CHRISTOPHE (regardant sa boîte dans son sac) — J'ai ma boîte…",
        "KARIM — Tu la manges ce soir. Allez, viens. Je t'offre le dessert.",
        "CHRISTOPHE (hésitant) — …OK.",
        "Au self. Plateau, file d'attente.",
        "CHRISTOPHE — Mon père va pas être content si je mange pas sa boîte.",
        "KARIM — Dis-lui que t'as socialisé. Il comprendra.",
        "CHRISTOPHE — Il comprendra pas vraiment.",
        "Ils s'installent. Christophe mange son plateau. En rentrant le soir, il retrouvera la boîte dans son sac — froide, un peu écrasée.",
        "CHRISTOPHE (pensée intérieure) — J'aurais dû manger la boîte.",
        "Le soir, en rentrant à la maison :",
        "LE PÈRE — T'as mangé quoi midi ?",
        "CHRISTOPHE (montrant la boîte) — …J'ai mangé au RU. Avec un camarade.",
        "LE PÈRE (regardant la boîte intacte) — Je vois. C'était bien ?",
        "CHRISTOPHE — Ouais. Je suis désolé pour la boîte.",
        "LE PÈRE — Le poulet c'est pas bon réchauffé de toute façon. Je le savais.",
        "Un silence.",
        "LE PÈRE — La prochaine fois dis-le moi avant, je fais quelque chose qui se mange froid."
    ],
    "M6C": [
        "CHRISTOPHE (sortant la boîte) — Attends, mon père a mis pour deux en fait. Il fait toujours trop.",
        "KARIM — Tu déconnes ?",
        "CHRISTOPHE (regardant la quantité) — Non, il y en a vraiment pour deux.",
        "KARIM — Ton père est un saint.",
        "Ils s'installent sur le banc, partagent la boîte avec deux fourchettes.",
        "KARIM — C'est excellent. Il met quoi dedans ?",
        "CHRISTOPHE — Ail, thym, citron pour le poulet. Le riz c'est juste du riz. La salade c'est de la salade.",
        "KARIM — Simple et efficace. Mon père devrait apprendre.",
        "CHRISTOPHE — Mon père dit que la cuisine simple c'est souvent la meilleure.",
        "KARIM — Il dit beaucoup de trucs sages ton père.",
        "CHRISTOPHE — Il dit surtout peu de trucs. Mais quand il parle, c'est souvent utile.",
        "Silence.",
        "KARIM — Il est sympa ton père de faire ça chaque matin.",
        "CHRISTOPHE (regardant sa fourchette) — Ouais. Je le lui dis pas assez."
    ],
    "M7": [
        "19h. Christophe rentre. La maison sent bon — son père a déjà commencé à préparer quelque chose.",
        "LE PÈRE (depuis la cuisine) — T'as bien mangé ?",
        "CHRISTOPHE — Ouais.",
        "Christophe pose son sac, enlève ses chaussures. Son père lui parle depuis la cuisine.",
        "LE PÈRE — Demain tu peux faire les courses avec moi si t'as pas cours le matin.",
        "CHRISTOPHE — Je commence à 11h.",
        "LE PÈRE — On y va à 9h alors. C'est rapide.",
        "CHRISTOPHE — D'accord."
    ],
    "M8A": [
        "Christophe s'installe dans son fauteuil, sort un livre de sa bibliothèque — un roman emprunté à la bibliothèque universitaire.",
        "LE PÈRE (passant dans le couloir) — T'as pas tes révisions ?",
        "CHRISTOPHE — J'ai fini l'essentiel en cours. Là je lis.",
        "LE PÈRE — Quoi ?",
        "CHRISTOPHE — Un roman. Un truc de science-fiction, une planète qui se meurt à cause de l'industrie humaine.",
        "LE PÈRE (s'appuyant au chambranle) — Joyeux.",
        "CHRISTOPHE — C'est bien écrit.",
        "LE PÈRE — Tu veux un thé ?",
        "CHRISTOPHE — Ouais, volontiers.",
        "Le père revient avec deux tasses. Il s'assoit un instant.",
        "LE PÈRE — Tu lis beaucoup en ce moment.",
        "CHRISTOPHE — C'est reposant. Pas d'écran.",
        "LE PÈRE (regardant son propre téléphone posé sur la table) — J'essaie aussi de faire ça. C'est pas facile.",
        "CHRISTOPHE — C'est une habitude à prendre.",
        "Silence. Ils boivent leur thé chacun dans leur coin, le père regardant par la fenêtre, Christophe lisant."
    ],
    "M8B": [
        "Christophe s'installe devant son PC. Il ouvre YouTube.",
        "CHRISTOPHE (à lui-même) — Juste une vidéo et après je révise.",
        "Son père passe derrière lui.",
        "LE PÈRE — C'est quoi ?",
        "CHRISTOPHE — Une vidéo sur les systèmes de recyclage en Europe du Nord. Pour la culture générale.",
        "LE PÈRE — Hmm.",
        "Il repart. Christophe regarde la vidéo — puis une autre sur les forêts primaires, puis un documentaire sur les océans plastifiés.",
        "Une heure quarante-cinq plus tard.",
        "CHRISTOPHE (se redressant) — Comment j'ai regardé autant de trucs.",
        "Son père repasse.",
        "LE PÈRE — T'as révisé ?",
        "CHRISTOPHE — …J'ai regardé des documentaires sur l'environnement.",
        "LE PÈRE (soupirant) — C'est toujours mieux que rien. Viens manger."
    ],
    "M8C": [
        "Christophe s'allonge sur son lit, compose le numéro de Thomas, un ami d'enfance qui vit maintenant à Lyon.",
        "THOMAS (décrochant) — Christophe ! Ça fait longtemps.",
        "CHRISTOPHE — Ouais, j'avais pas appelé. Comment tu vas ?",
        "THOMAS — Bien, bien. Je viens de rentrer d'un stage. Toi, t'es toujours à Paris ?",
        "CHRISTOPHE — Toujours. Chez mon père.",
        "THOMAS — Et la fac ?",
        "CHRISTOPHE — Ça avance. C'est dense en ce moment. L'algo.",
        "THOMAS — Oh j'ai des souvenirs. T'as besoin d'aide ?",
        "CHRISTOPHE — Non non, ça va. Je voulais juste appeler un peu.",
        "THOMAS — Ça fait plaisir. T'es quelqu'un qui appelle pas souvent.",
        "CHRISTOPHE — Je sais. Je réalise que c'est dommage.",
        "Ils parlent une heure. De tout et de rien. De Lyon, de Paris, de l'université, d'un projet de week-end.",
        "THOMAS — Tu viendrais me voir un week-end ?",
        "CHRISTOPHE — En train ?",
        "THOMAS — Si tu veux. Covoiturage aussi.",
        "CHRISTOPHE — Je préférerais le train je crois. Je supporte pas les longs trajets en voiture.",
        "THOMAS — Le train c'est bien. T'arrives directement en centre-ville.",
        "CHRISTOPHE — Je verrai. Peut-être dans trois semaines.",
        "THOMAS — Top. Je t'attends. Préviens juste à l'avance cette fois.",
        "CHRISTOPHE (souriant) — Promis.",
        "Ils raccrochent. Christophe reste allongé un moment, regardant le plafond.",
        "CHRISTOPHE (pensée intérieure) — J'aurais dû appeler plus tôt."
    ],
    "M8D": [
        "Christophe entre dans la cuisine. Son père prépare quelque chose.",
        "CHRISTOPHE — Je peux t'aider ?",
        "LE PÈRE (légèrement surpris) — Si tu veux. Épluche les carottes.",
        "Christophe attrape l'économe, commence à éplucher.",
        "LE PÈRE — T'as pensé aux courses de demain ?",
        "CHRISTOPHE — Tu veux quoi ?",
        "LE PÈRE — J'avais pensé faire une soupe pour les deux prochains jours. Et peut-être un gratin pour jeudi.",
        "CHRISTOPHE — Le gratin au comté ?",
        "LE PÈRE — Si t'en veux.",
        "CHRISTOPHE — J'en veux.",
        "Ils cuisinent en silence pendant quelques minutes. Puis :",
        "CHRISTOPHE — Papa, t'as appris à cuisiner comment ?",
        "LE PÈRE — Ta grand-mère. Et l'expérience. Quand t'as un enfant à nourrir, t'apprends vite.",
        "CHRISTOPHE — J'aurais dû regarder plus quand j'étais petit.",
        "LE PÈRE — T'es là maintenant.",
        "Pause.",
        "CHRISTOPHE — T'en penses quoi si l'été prochain j'essaie de cuisiner moi-même quelques repas ?",
        "LE PÈRE — Je pense que c'est une bonne idée. Je pense aussi que t'auras besoin de pratique.",
        "CHRISTOPHE (riant légèrement) — Ouais probablement.",
        "LE PÈRE — Commence par le riz. Si t'arrives à faire un bon riz, le reste suit.",
        "La soupe mijote. L'appartement est chaud. Ça sent bon."
    ],
    "M9": [
        "22h. Christophe se brosse les dents. Il pense au thermostat dans sa chambre. La nuit va être fraîche."
    ],
    "M_END": [
        "Christophe baisse le thermostat à 16, entrouvre légèrement la fenêtre. Il se glisse dans son lit avec deux couvertures.",
        "LE PÈRE (passant dans le couloir) — T'as chaud ?",
        "CHRISTOPHE — 16°C. Je préfère dormir au frais.",
        "LE PÈRE — Sage. Bonne nuit.",
        "CHRISTOPHE — Bonne nuit.",
        "Christophe s'endort rapidement dans le silence frais."
    ],
    "M_END2": [
        "Christophe règle le thermostat à 19, son réglage habituel. Il s'allonge, écoute le silence de la maison.",
        "LE PÈRE (depuis sa chambre) — Christophe ?",
        "CHRISTOPHE — Quoi ?",
        "LE PÈRE — T'as éteint la lumière du couloir ?",
        "CHRISTOPHE — …Non.",
        "LE PÈRE — Je l'éteins. Bonne nuit.",
        "CHRISTOPHE — Bonne nuit Papa.",
        "Obscurité. Chaleur douce. Christophe s'endort."
    ],
    "M_END3": [
        "Christophe monte le thermostat à 22. Il s'installe dans son lit, écarte une couverture — trop chaud.",
        "CHRISTOPHE (à voix basse) — Je comprends pas pourquoi j'ai toujours froid et puis trop chaud.",
        "Son téléphone vibre. Un message de Karim : « Tu révises encore ? »",
        "CHRISTOPHE (tapant) — Non, je dors presque. T'as réviser toi ?",
        "KARIM (réponse) — Vaguement. Bonne nuit.",
        "CHRISTOPHE — Toi aussi.",
        "Il pose le téléphone. La chambre est chaude. Un peu trop. Il finit par ré-ouvrir légèrement la fenêtre.",
        "CHRISTOPHE (murmurant) — Mon père avait raison. 16 c'était mieux."
    ]
};

const state = {
    currentNode: "M1",
    dialogueIndex: 0,
    totalCO2: 0,
    isDialogueMode: true,
    showEndOnNextClick: false,
    showingConsequence: false,
    co2Added: false,
    maxCO2: 2.95,
    choices: {
        breakfast: { label: "", co2: 0 },
        transport: { label: "", co2: 0 },
        lunchbox: { label: "", co2: 0 },
        leisure: { label: "", co2: 0 },
        heating: { label: "", co2: 0 }
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
    localStorage.setItem('greenGame_mardi_save', JSON.stringify(gameState));
}

function loadGame() {
    const saved = localStorage.getItem('greenGame_mardi_save');
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
    localStorage.removeItem('greenGame_mardi_save');
}

function formatText(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
}

function updateHUD() {
    const co2El = document.getElementById('co2-value');
    co2El.textContent = state.totalCO2.toFixed(2) + " kg";
    if(state.totalCO2 < 1.0) co2El.style.color = '#2e7d32';
    else if(state.totalCO2 < 2.0) co2El.style.color = '#f57f17';
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
        const text = state.choices.breakfast.label.replace(/\s*\(.*?\)\s*/g, '');
        li.innerHTML = `<span>Petit-déjeuner : ${text.toLowerCase()}</span><span class="co2-value">+${state.choices.breakfast.co2.toFixed(2)}kg</span>`;
        listEl.appendChild(li);
    }
    if (state.choices.transport.label) {
        const li = document.createElement('li');
        const text = state.choices.transport.label.replace(/\s*\(.*?\)\s*/g, '');
        li.innerHTML = `<span>Transport : ${text.toLowerCase()}</span><span class="co2-value">+${state.choices.transport.co2.toFixed(2)}kg</span>`;
        listEl.appendChild(li);
    }
    if (state.choices.lunchbox.label) {
        const li = document.createElement('li');
        const text = state.choices.lunchbox.label.replace(/\s*\(.*?\)\s*/g, '');
        li.innerHTML = `<span>Déjeuner : ${text.toLowerCase()}</span><span class="co2-value">+${state.choices.lunchbox.co2.toFixed(2)}kg</span>`;
        listEl.appendChild(li);
    }
    if (state.choices.leisure.label) {
        const li = document.createElement('li');
        const text = state.choices.leisure.label.replace(/\s*\(.*?\)\s*/g, '');
        li.innerHTML = `<span>Loisir soir : ${text.toLowerCase()}</span><span class="co2-value">+${state.choices.leisure.co2.toFixed(2)}kg</span>`;
        listEl.appendChild(li);
    }
    if (state.choices.heating.label) {
        const li = document.createElement('li');
        const text = state.choices.heating.label.replace(/\s*\(.*?\)\s*/g, '');
        li.innerHTML = `<span>Chauffage nuit : ${text.toLowerCase()}</span><span class="co2-value">+${state.choices.heating.co2.toFixed(2)}kg</span>`;
        listEl.appendChild(li);
    }
    
    document.getElementById('end-total-co2').textContent = `${state.totalCO2.toFixed(2)}kg de CO2`;
    document.getElementById('end-screen').style.display = 'flex';
}

function goToNextDay(event) {
    if (event) event.stopPropagation();
    window.location.href = 'wednesday_game.html';
}

window.onload = () => {
    const hasSave = loadGame();
    document.getElementById('bg-image').style.backgroundImage = "url('images/mardi_matin.jpg')"; 
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