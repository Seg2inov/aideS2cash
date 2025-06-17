---
sidebar_position: 2
---

# Mise à jour des produits 

Cette fenêtre vous permet de **gérer vos produits**. 

## Afficher la liste des produits

Les boutons suivants vous permettent d’afficher la liste de vos produits selon des filtres :

|Bouton |Fonctionnalité |
|:--:|---------------|
| ![illustration aspect test](./assets/touslesproduits.PNG) | Afficher la **liste complète** de vos produits. |
| ![illustration aspect test](./assets/rayon.PNG) | Affiche tous les produits d’un **rayon**. |
| ![illustration aspect test](./assets/famille.PNG) | Affiche tous les produits d’une **famille**. |
| ![illustration aspect test](./assets/fournisseur.PNG) | Affiche tous les produits d’un **fournisseur**. |
| ![illustration aspect test](./assets/reffournisseur.PNG) | Effectuer une recherche sur une **référence fournisseur**. |
| ![illustration aspect test](./assets/codevente.PNG) | Affiche **tous les codes à barres renseignés** dans les fiches produits. |

Vous pouvez également rechercher un produit par son **nom**, son **code produit** ou son **code barres**, en saisissant directement l’information dans la cellule concernée avant d’appuyer sur ```ENTREE```.

<div className="contenaireImg">
    ![logo de seg2inov](./assets/rechercheproduit.PNG)
    </div>

Après avoir sélectionné un produit, de **nouveaux boutons apparaissent sur la droite** :

|Bouton |Fonctionnalité |
|:--:|---------------|
| ![illustration aspect test](./assets/consulter.PNG) | **Consulter la fiche** du produit sélectionné. |
| ![illustration aspect test](./assets/creation.PNG) | Créer un **nouveau produit**. |
| ![illustration aspect test](./assets/modification2.PNG) | **Modifier** un produit. |
| ![illustration aspect test](./assets/dupliquer.PNG) | Créer un nouveau produit en **recopiant les informations du produit sélectionné**. |

## Détails d'une fiche produit

La fiche produit se présente ainsi : 

<div className="contenaireImg">
    ![logo de seg2inov](./assets/ficheproduit2.PNG)
    </div>

### Nom du produit

<div className="contenaireImg">
    ![logo de seg2inov](./assets/nom.PNG)
    </div>

Le **nom** du produit, que vous pouvez modifier autant que vous le souhaitez. 

### Date 

<div className="contenaireImg">
    ![logo de seg2inov](./assets/date.PNG)
    </div>

Les **dates de création** et de **dernière modification** du produit. Vous ne pouvez pas changer ces dates manuellement.  

### Codes du produit

<div className="contenaireImg">
    ![logo de seg2inov](./assets/code.PNG)
    </div>

Le **code du produit** est généré automatiquement par S2Cash, il peut être **modifié lors de la création du produit**, mais ne pourra plus être changé par la suite.

<div className="contenaireImg">
    ![logo de seg2inov](./assets/codevente2.PNG)
    </div>

Les différents **codes de vente** et **codes à barres** du produit. Le code **coché P** est celui qui est **envoyé aux balances**. 

### Classification du produit

<div className="contenaireImg">
    ![logo de seg2inov](./assets/rayontva.PNG)
    </div>

Le **rayon**, la **famille**, la **TVA** et l’**unité de vente** du produit. 

Le bouton ```ASSOCIE``` permet **d’associer un autre produit à celui-ci**. Ainsi, lorsque ce produit sera vendu, le produit associé sera automatiquement ajouté à la vente.

### Prix

<div className="contenaireImg">
    ![logo de seg2inov](./assets/prix.PNG)
    </div>

Le prix d’achat, le coefficient de marge, le pourcentage de marge et l’unité affichée sur l’étiquette produit. 

Vous pouvez également entrer le prix de vente du produit et les prix dégressifs.

:::tip
Par exemple, pour un produit vendu à 6,00 euros pièce : 
<li> Pour l’achat de 3 produits ou plus, le prix passe à 5.50 euros/pièce. </li>
<li> Pour l’achat de 5 produits ou plus, le prix passe à 4.50 euros/pièce.</li>
:::

### Fournisseurs 

<div className="contenaireImg">
    ![logo de seg2inov](./assets/fournisseur2.PNG)
    </div>

La **liste des fournisseurs** du produit. Pour ajouter ou retirer un fournisseur, utilisez les 2 boutons figurant sur la gauche. 

### Le PUMP

<div className="contenaireImg">
    ![logo de seg2inov](./assets/stocks.PNG)
    </div>

Le **PUMP** et le **stock actuel** du produit. Le **stock Minimum** et le **stock Maximum** désirés pour ce produit.

:::note
Le PUMP est le **Prix Unitaire Moyen Pondéré**, aussi appelé parfois CUMP pour Coût Unitaire Moyen Pondéré. Cette valeur correspond à **la moyenne des prix d’achats d’un produit**, pour peu que les réceptions soient toutes saisies et validées. **Méthode de calcul du PUMP** : (valeur stock initial + valeur entrée) / (quantité stock initial + quantité entrée). 

**Par exemple**, une entreprise achète 1 000 unités d’un article à 10€HT pièce, elle achète ensuite 500 unités du même article pour 13€HT pièce. 
:::



### Paramètres 

Vous pouvez également accéder à différents paramtères du produit : 

<div className="contenaireImg">
    ![logo de seg2inov](./assets/parametres.PNG)
    </div>

|Paramètre |Explication |
|:--:|---------------|
| **A commander** | Le produit pourra être **commandé via les interfaces** de commandes, de réceptions, d’expression de besoins, etc. |
| **Actif** | Le produit est **actif**, il peut être **vendu**. Si cette case est décochée le produit n’apparaitra pas en caisse/balance. |
| **Etiquette produit** | A chaque modification du prix de vente, une étiquette sera générée dans l’interface Etiquette CAB. |
| **Lot-composition** | Le produit est de type lot, panier. Un **nouveau bouton** va apparaitre sur la fiche produit : « FICHE TECHNIQUE », lorsque ce produit sera vendu, la **liste des composants produits sera déstockée**. |
| **Pesé en vente** | Le produit est pesé au moment de la vente. |

:::note
Ces paramètres sont modifiables, et la liste peut être adaptée et étendue par notre support. 
:::


PRODUIT INACTIF