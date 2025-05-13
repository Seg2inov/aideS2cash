export default  {
    docs : [{
        title : "Apport de monnaie",
        link : "/docs/caisse/apport-monnaie",
        description : "Cette fonction permet d’ajouter de la monnaie dans le tiroir en cours de journée. Il est important d’utiliser cette fonction pour que le tiroir soit juste en fin de journée et que la gestion coffre soit équilibrée. Appuyez sur la touche Saisissez le montant total de l’apport. Validez votre saisie. Un ticket pour contrôle est imprimé. L’apport de monnaie apparaît distinctement sur la clôture de caisse.",
        theme : 'montant total tiroir clôture journée apport DE MONNAIE '
    },
    {
        title : "Balance - Affichage CRC Balance",
        link : "/docs/caisse/balance-affichage-crc",
        description : "Une fonction de contrôle de CRC est présente sur le clavier de caisse, uniquement si vous avez une balance connectée ou si S2Cash by Atlas est intégré dans une balance de type PC.",
        theme : 'balance - affichage crc des devis clients déjà réalisés En cas de contrôle des autorités compétentes (DIRRECTE/DREETS), cette information est à fournir obligatoirement et cette touche ne doit jamais être ôtée du clavier de caisse sous peine de mise en non-conformité et d’être soumis à « vignette rouge » voire pire à « interdiction temporaire ».'
    },
    {
        title : "Cloture de caisse",
        link : "/docs/caisse/cloture-caisse",
        description : "Pour clôturer votre journée ou votre caisse, appuyez sur la touche CLOTURE",
        theme : 'cloture-caisse cloture de caisse devis produits prix commandes Imprimer Comptez et saisissez le détail des pièces et billets contenus dans votre tiroir-caisse. S2Cash by Atlas calcule au fur et à mesure de la saisie le **total réel de votre tiroir-caisse**. A la fin du comptage, ATLAS imprime un ticket de détail du comptage.'
    },
    {
        title : "Consignes",
        link : "/docs/caisse/consignes",
        description : "Lors d’un prêt d’un produit associé à une vente (cocotte, plateau, etc.), on a la possibilité d’encaisser un paiement de consigne.",
        theme : 'consigne consignes La consigne n’est pas un encaissement, car ce règlement sera redonné au client lors du retour. Le moyen de paiement « CARTE BANCAIRE » n’est donc pas autorisé. S2Cash by Atlas affiche une fenêtre afin de scanner le ticket de consigne retourné par le client.'
    },
    {
        title : "Consultation de caisse",
        link : "/docs/caisse/consultation-caisse",
        description : "Pour consulter les éléments financiers en cours de journée, appuyez sur la touche X DE CAISSE",
        theme : 'consultationS2Cash by Atlas affiche les éléments enregistrés depuis l’ouverture de cette caisse ou de ce caissier.Il vous est possible de demander l’impression d’un ticket.'
    },
    {
        title : "Contrôle espèces",
        link : "/docs/caisse/controle-espece",
        description : "Vous avez la possibilité d’effectuer un comptage tiroir en cours de journée pour contrôler le solde.",
        theme : "contrôle espèces controle especes Une fenêtre s’affiche alors pour effectuer un comptage du tiroir avec le solde théorique en caisse.Un ticket s’imprime alors avec le **détail du comptage** que vous venez d’effectuer."
    },
    {
        title : "Controle tiroir",
        link : "/docs/caisse/controle-tiroir",
        description : "Vous pouvez effectuer un contrôle de votre tiroir en cours de journée, afin de vérifier votre tiroir sur les règlements autres que les espèces.",
        theme : 'contrôle tiroir controle especes  S2Cash by Atlas affiche tous les tickets encaissés par moyen de paiement, avec le détail. encaissemnt '
    },
    {
        title : "Correction de réglement",
        link : "/docs/caisse/correction-reglement",
        description : "En cas d’erreur lors de l’encaissement, vous pouvez ventiler le moyen de paiement sur un autre règlement sans toucher au montant encaissé.",
        theme : "Cette fonction n’est accessible que sur la journée en cours, et sur une caisse non clôturée. Pour corriger un moyen de règlement, **appuyez sur la touche** ```CORRECTION REGLEMENT```  correction reglement Sélectionner la transaction à corriger et validez avec la touche  "
    },
    {
        title : "Dépense de caisse",
        link : "/docs/caisse/depense-caisse",
        description : "Une dépense de caisse est une sortie d’espèces pour des opérations diverses.",
        theme : "Les différents motifs de dépense s’affichent, sélectionnez celle qui vous convient, puis saisissez le montant et validez par la touche : Un ticket s’imprime. Vous devez le conserver dans le tiroir. "
    },
    {
        title : "Le sous-total",
        link : "/docs/caisse/le-sous-total",
        description : "La touche SOUS-TOTAL sert à effectuer une valorisation des produits saisis à un ou plusieurs endroit(s) donné(s) sur le ticket de caisse.",
        theme : 'sous SOUS TOTAL total '
    },
    {
        title : "Devis client",
        link : "docs/caisse/devis-client",
        description : "Pour effectuer un devis de prix à un client, appuyer sur la touche DEVIS",
        theme : 'devis CLIENT Client S2Cash by Atlas affiche la liste des devis clients déjà réalisés : Enregistrer Rajouter Supprimer'
    },
    {
        title : "Mise en attente d'une vente",
        link : "/docs/caisse/mise-en-attente-vente",
        description : "Cette fonction vous permet de mettre une vente en attente, de manière à libérer la caisse et passer à un autre client.",
        theme : "Il n’y a pas de limite dans le délai de reprise d’un ticket en attente. Un client a oublié d’acheter un produit Un client a oublié son moyen de paiement  Un client conteste et vous attendez un responsable Si vous aviez sélectionné un client lors de la vente, son nom apparaît sur le ticket en attente.",
    },
    {
        title : " Monetique Integrée – Init CB et Duplicata CB",
        link : "/docs/caisse/monetique-integrer",
        description : "Dans le cas d’une configuration en Monétique Intégrée, 2 nouveaux boutons sont accessibles sur l’écran de caisse ",
        theme : " monetique tntegree – init cb et duplicata cb Lors de l’appel au serveur monétique, la fenêtre ci-dessous apparait : On ne peut réimprimer **QUE le ticket de la dernière transaction**. Si vous utilisez au préalable la touche ```INIT CB```, aucun ticket ne sera imprimé. a touche ```DUPLICATA CB``` permet de réimprimer le dernier ticket de transaction bancaire :",
    },
    {
        title : "Pause caisse",
        link : "/docs/caisse/pausecaisse",
        description : "Pour mettre la caisse en pause, sans la clôturer, appuyer sur la touche POLYVALENCE.",
        theme :"En fonction du paramétrage mis en place : pause CAISSE Caisse Seule la personne ayant mis la caisse en pause peut la débloquer  N’importe quel utilisateur peut enlever la pause"
    },
    {
        title : "Prelevement",
        link : "/docs/caisse/prelevement",
        description : "Cette fonction permet de prélever des espèces en cours de journée afin de soulager le tiroir. Il est important d’utiliser cette fonction pour que le tiroir soit juste en fin de journée.",
        theme :"prelevement S2Cash by Atlas vous alerte lorsque vous avez trop d’espèces dans votre tiroir, vous oblige à un prélèvement si votre palier maximum est dépassé."
    },
    {
        title : "Rabais sur total",
        link : "/docs/caisse/rabais-sur-total",
        description : "Cette fonction permet de prélever des espèces en cours de journée afin de soulager le tiroir. Il est important d’utiliser cette fonction pour que le tiroir soit juste en fin de journée.",
        theme :"rabais sur Total TOTAL Le  ```reste à payer```  est mis à jour en haut de l’écran et sur la visu client. Si votre rabais est incorrect, recommencez la fonction ou saisissez  ```0```  pour l’annuler. Le Montant du rabais est **ventilé sur chaque produit** en proportion de sa valeur dans le ticket. Le rabais apparaît sur le ticket de caisse et sur la clôture de fin de journée."
    },
    {
        title : "Réglement client",
        link : "/docs/caisse/reglement-client",
        description : "Le règlement client est un encaissement hors vente.",
        theme :"Les clients dont les **paiements sont différés « En compte »** et qui règlent à posteriori Le règlement d’un client vient **se soustraire de son solde**. Après avoir sélectionné le client, saisissez **le montant réglé par le Client et le moyen de paiement utilisé**. Validez. La fenêtre de sélection du client s’affiche (cf. [Lien vers tutorial recherche et création client](https://aide.seg2inov.eu/docs/client/recherche))."
    },
    {
        title : "Remise sur total",
        link : "/docs/caisse/remise-sur-total",
        description : "Vous pouvez pratiquer une remise en pourcentage sur la totalité de la vente.",
        theme :"S2Cash by Atlas vous demande alors de saisir le **motif de cette remise** avant de valider   Une nouvelle ligne apparaît avec le montant de la remise. Le  ```RESTE A PAYER``` est mis à jour en haut de l’écran et sur la visu client. Le système S2Cash by Atlas peut être configuré avec une remise total fixe. Dans ce cas, quel que soit le montant saisi de la remise, le système applique toujours le montant paramétré.Le Montant de la remise est **ventilé sur chaque produit** en proportion de sa valeur dans le ticket. La remise totale apparaît sur le ticket de caisse et sur la clôture de fin de journée."
    },
    {
        title : "Vente de coupon",
        link : "/docs/caisse/vente-de-coupon",
        description : "Pour effectuer une vente de coupon, appuyez sur la touche VENTE COUPON.",
        theme :"En fonction du paramétrage mis en place, vous avez aussi la possibilité de **vendre des coupons imprimés à l’avance** par S2Cash by Atlas (cf. ATLAS Gestion).  Dans ce cas, Atlas vous demande de **scanner les coupons pour les activer.** Lorsque le client présente son coupon au moment d’un règlement, il ne vous reste qu’à le scanner au moment du total ticket. "
    },
    {
        title : "Duplicata de ticket et de facture",
        link : "/docs/caisse/ticket/duplicata-ticket-facture",
        description : "Vous pouvez réimprimer une vente du jour ou d’une journée précédente à la demande.",
        theme :"Caisse caisse facture facturette A5 un imprimante ticket multi fonction format A4 Dans les 3 cas, ATLAS affiche d’abord tous les tickets du jour par caissier ou caisse. "
    },
    {
        title : "Ticket sans détail",
        link : "/docs/caisse/ticket/ticket-sans-detail",
        description : "Lors d’une vente de produit alimentaire vous pouvez, à la demande du client, imprimer un ticket sans détail.",
        theme :"ticket SANS DETAIL detail Pour imprimer un ticket sans détail sur l’imprimante ticket, appuyer sur la touche :Ce libellé est modifiable dans les paramètres système : menu « ```PARAMETRES``` » du module ATLAS GESTION."
    },
    {
        title : "Total ticket",
        link : "/docs/caisse/ticket/total-ticket",
        description : "Lorsque vous avez fini de saisir la totalité des produits de votre Client, appuyez sur la touche TOTAL pour faire apparaître le montant à payer et les différents moyens de paiement acceptés.",
        theme :"ticket Cette fonctionnalité est **impossible dans le cas de paiement partiel en carte bancaire**. total Le Rendu de monnaie est contrôlé pour chaque Moyen de paiement en fonction de vos paramètres. Pour ce faire, renseignez le montant à l’aide du clavier et le mode de paiement grâce à la touche correspondante. multi paiment"
    },
    {
        title : "Commande siege",
        link : "/docs/caisse/commande/commande-siege",
        description : "Dans le cadre d’un magasin multi-sites ou d’une enseigne multi-magasins, la touche CDE SIEGE permet d’enregistrer une commande client et de l’envoyer au SIEGE pour qu’elle soit préparée.",
        theme :"commande Siege"
    },
    {
        title : "Reprise de commande",
        link : "/docs/caisse/commande/reprise-siege",
        description : "Les commandes peuvent être reprises en caisse au moment où les clients viennent les chercher et les régler. Appuyez sur la touche :",
        theme :"commande Seules les commandes préparées complètement apparaissent liste commande Liste commande Vous pouvez vendre d’autres produits, en annuler ou apporter des modifications de prix ou de quantité comme sur une transaction classique."
    },
    {
        title : "Commande client",
        link : "/docs/client/commande-client",
        description : "Il est possible de saisir sur la caisse une commande client en renseignant les informations suivantes :",
        theme :"commande Une nouvelle fenêtre s’affiche alors vous permettant de renseigner des informations diverses telles qu’un nom et une adresse de livraison différente de celle du client qui passe la commande ; ou encore de renseigner un commentaire libre ainsi qu’une heure de livraison. ciasse caisse Saisissez les produits ainsi que les quantités commandées. A ce niveau, vous pouvez : modifier entrer supprimer"
    },
    {
        title : "Fiche client",
        link : "/docs/client/fiche-client",
        description : "La fiche client se compose ainsi :",
        theme :"Le code ou numéro de client. Les coordonnées du client Prix spécifiques  L’historique du client Le montant du chiffre d’affaires mensuel Les coupons Tarif spécifique Numéro de badge externe cartes Clients Cartes Clients"
    },
    {
        title : "Historique client",
        link : "/docs/client/historique-client",
        description : "Une fois votre client associé à la vente, vous avez la possibilité de visualiser son historique. Pour cela, cliquez sur CONSULTATION",
        theme :"CLIENT Client cilent "
    },
    {
        title : "Recherche Client",
        link : "/docs/client/recherche",
        description : "Pour associer un Client à votre vente, vous devez le sélectionner avant le Total :",
        theme :"CLIENT Client cilent apparaitre selection SELECTIONNER"
    },
    {
        title : "Remboursement client",
        link : "/docs/client/remboursement-client",
        description : "Le remboursement client est un décaissement pour ajuster un solde client.",
        theme :"CLIENT Client cilent La fenêtre de sélection du client s’affiche (cf. [Lien vers tutorial recherche et création client](https://aide.seg2inov.eu/docs/client/recherche)). La fenêtre de sélection du client s’affiche (cf. [Lien vers tutorial recherche et création client](https://aide.seg2inov.eu/docs/client/recherche))."
    },
    {
        title : "Aspect visuel",
        link : "/docs/les-fondamentales/aspectvisuel",
        description : "Détail visuel des écrans",
        theme :"Accéder aux écrans après le Total du ticket Ces configurations d’écrans ne sont que des exemples. Toutes les touches sont modifiables via le module S2Cash by ATLAS GESTION. Comme pour les ventes, toutes les opérations qui nécessitent une manipulation des espèces sont enregistrées dans la Caisse, de façon à ce que le tiroir soit juste en fin de journée. Le 4ème écran, accessible **après le Total du ticket** pour les remises sur le total et le règlement de la transaction. | En mode balance, on retrouve les mêmes configurations que le mode caisse en 3 ou 4 écrans, mais avec une barre de pesée en plus (située en haut ou sur le côté en fonction du modèle de la balance)"
    },
    {
        title : "Début de journée",
        link : "/docs/les-fondamentales/debut_de_journee",
        description : "Lors de son lancement, S2Cash by ATLAS s’ouvre sur la sélection du vendeur :",
        theme :"Sélection d'un vendeur selection Selection Monetique intégrée monetique integrée Veuillez ensuite **saisir le montant de votre fonds de caisse** pour comptabiliser les espèces et contrôler le tiroir en fin de journée. Dans le cas où vous possédez de la monétique intégrée, la liaison va s’effectuer avec le centre bancaire et initialiser le terminal Carte Bancaire. Un ticket s’imprime. Veuillez ensuite **saisir** le montant de votre **fonds de caisse** pour **comptabiliser** les espèces et contrôler le tiroir en fin de journée."
    },
    {
        title : "Sélection d'un vendeur",
        link : "/docs/les-fondamentales/selection_vendeur",
        description : "En fonction du paramétrage, S2Cash by Atlas peut soit démarrer sur un vendeur standard (généralement appelé CAISSE ou BALANCE) ou vous demander de sélectionner un vendeur pour ouvrir le logiciel.",
        theme :"Au démarage Si S2Cash by ATLAS est configuré pour démarrer sur un vendeur standard, plusieurs configurations vendeur sont possibles (cf documentation S2Cash by ATLAS GESTION). Le système peut alors vous demander de vous identifier : configuration Configuration vendeurs La caisse va s’ouvrir et **imprimer un ticket d’ouverture caisse**. Veuillez-vous **identifier** en saisissant votre code et votre mot de passe ou passez votre Badge devant le lecteur de code à barre."
    },
    {
        title : "Recherche et intégrer un produit à la vente en cours",
        link : "/docs/produit/recherche_et_integrer_un_produit_a_la_vente",
        description : "1ère méthode : Accès à partir de la liste des catégories visibles",
        theme :"Sur la partie **gauche** de votre caisse, une zone bleue affiche plusieurs écrans contenant différentes catégories de produits. Vous pouvez naviguer entre ces écrans à l'aide des onglets situés à gauche, nommés ici 1, 2 et 3. Sélectionnez la **catégorie** qui vous intéresse. Une fois la **catégorie sélectionnée**, choisissez le produit qui vous intéresse. Le produit sélectionné apparaît maintenant dans **votre ticket**, en haut à **droite de l’écran**. Ces  boutons se trouvent **en haut à gauche de l’écran**. Une fois votre choix fait, validez avec le **bouton Vert** en haut. Le prix net à payer s’affiche directement sous la liste des produits sélectionnés."
    },
    {
        title : "Changement de quanité",
        link : "/docs/produit/changer-quantite",
        description : "Pour vendre un même produit en plusieurs exemplaires, il faut d’abord saisir ou scanner le produit puis modifier la quantité.",
        theme :"Positionnez-vous sur la ligne du produit à modifier Vous pouvez à tout moment revenir sur le ticket en cours pour effectuer une modification de prix ou de quantité. Appuyez sur la touche ```MODIFIE QUANTITE```.Si vous devez à la fois modifier la quantité et forcer le prix sur un même produit, il faut d’abord modifier la quantité puis changer le prix et non l’inverse."
    },
    {
        title : "Annulation poduit",
        link : "/docs/produit/annuler",
        description : "Pour annuler un produit saisi que le client ne veut plus ou pour rectifier une erreur :",
        theme :"S2Cash by Atlas rajoute une ligne au ticket à l’inverse de la ligne sélectionnée. SUPPRIMER supprimer Supprimer L’annulation de ligne apparaît sur le ticket de caisse et sur la clôture de fin de journée."
    },
    {
        title : "Prix force",
        link : "/docs/produit/prix-force",
        description : "Pour modifier le prix d’un produit, il faut d’abord saisir ou scanner le produit puis modifier le prix.",
        theme :"Si une remise a été saisie au préalable, S2Cash by Atlas va le supprimer automatiquement. Si vous devez à la fois modifier la quantité et le prix sur un même produit, il faut d’abord modifier la quantité puis changer le prix, et non l’inverser. Vous pouvez à tout moment revenir sur le ticket en cours pour effectuer une modification de prix ou de quantité.  Appuyez sur la touche ```MODIF PRIX``` modif prix Modif prix"
    },
    {
        title : "Remise sur produit",
        link : "/docs/produit/remise",
        description : "Vous pouvez pratiquer une remise en pourcentage sur un produit de la vente en cours.",
        theme :" remise REMISE Le système vous demandera alors de saisir le **motif de la remise**. Une nouvelle ligne apparaît indiquant le pourcentage et le montant de la remise.  votre remise est incorrecte, vous pouvez recommencer la fonction ou saisir « 0 » pour l’annuler. Les remises sont comptabilisées et apparaissent sur la clôture de caisse."
    },
    {
        title : "Retour produit",
        link : "/docs/produit/retour-produit",
        description : "Vous pouvez pratiquer une remise en pourcentage sur un produit de la vente en cours.",
        theme :" Si le total de la vente est négatif, S2Cash by Atlas vous demande si vous remboursez le client en espèces. retour meme prix meme qualité quantité Les avoirs non repris sont archivés dans le menu « TICKETS EN ATTENTE » du module ```ATLAS GESTION```."
    },
    {
        title : "Sélectionner un produit pour réaliser des actions",
        link : "/docs/produit/actions/selectionner-un-produit",
        description : "Le prix d’achat HT, le coefficient de marge ainsi que le pourcentage de marge.",
        theme :" Le code coché P (Principal) est envoyé aux balances et imprimé sur les étiquettes. sectionner Produit SELECTIONNER"
    },
    {
        title : "Les promotions",
        link : "/docs/produit/actions/promotion",
        description : "Consulter les promotions sur le produit sélectionné :",
        theme :" Créer une promotion sur une période de plusieurs jours, en complétant le formulaire ci-contre : Pour ajouter une promotion à la journée : **Sélectionner un produit**"
    },
    {
        title : "Actions possibles sur la fiche d’un produit",
        link : "/docs/produit/actions/actions-possible",
        description : "Liste des actions possibles ",
        theme :" **Ajouter ou enlever** une **image** pour ce **produit**. L’image sera affichée en **caisse** et sur les **affiches** ou **étiquettes**. Consulter **l’historique** des mouvements **effectués** sur ce produit. Consulter le **récapitulatif** par **mois** des **mouvements** de ce **produit**.  **Ajouter** ce produit dans la **liste des médias**.  **Saisir** la composition du **produit**. La composition sera imprimée sur les **étiquettes de traçabilité**. Accéder aux **informations** saisies sur ce **produit** lorsque le vendeur réalise la **vente**. Accéder aux **informations** saisies sur ce **produit** lorsque le vendeur réalise la **vente**.  Accéder aux **informations** saisies sur ce **produit** lorsque le vendeur réalise la **vente**. Accéder aux **informations** saisies sur ce **produit** lorsque le vendeur réalise la **vente**. "
    },
    {
        title : "Les erreurs",
        link : "/docs/produit/Poids/produitpoids",
        description : "S’il s’agit d’un produit à peser, le logiciel demande de mettre le produit sur la balance",
        theme :" Si **aucun** produit n’est posé alors ce message s’affiche : Une fois le produit vendu, vous pouvez l’enlever de la balance.Si vous sélectionnez un autre produit sans avoir fait varier le plateau de la balance, ce message s’affiche : Tant que la balance n’est pas stabilité, le produit ne peut être vendu."
    },
    {
        title : "Tare",
        link : "/docs/produit/Poids/tare",
        description : "Tare sur ventes en fonction caisse avec balance plateau",
        theme :" Vous sélectionnez ensuite la tare qui correspond à votre **emballage** (cagette, barquette, caisse…) Les **différents poids** sont paramétrables mais ne peuvent pas être modifiés en caisse. Sur le **prochain produit**, S2Cash by Atlas déduira le poids de cette tare au poids du produit pesé."
    },
    ]
}