---
sidebar_position: 8
---

# Remise sur produit

## Appliquer une remise sur une vente en cours

Vous pouvez pratiquer une **remise en pourcentage** sur un produit de la vente en cours.

| Visuel caisse | Visuel balance |
|:-----------:|:-----------:|
|![illustration aspect test](./assets/remiseproduit.PNG) | ![illustration aspect test](./assets/remiseprodbalance.PNG)   |

- 1/  Positionnez-vous sur la ligne du produit à modifier

- 2/  Saisissez le pourcentage de remise

- 3/ Appuyez sur la touche ```REMISE LIGNE```.


    <div className="contenaireImg">
    ![logo de seg2inov](./assets/buttonremise.PNG)
    </div>

Le système vous demandera alors de saisir le **motif de la remise**.
Une nouvelle ligne apparaît indiquant le **pourcentage** et le **montant de la remise**.


Si votre remise est incorrecte, vous pouvez **recommencer** la fonction ou saisir « **0** » pour l’annuler.

:::note
Les remises sont comptabilisées et apparaissent sur la clôture de caisse.
:::

## Motifs de remise

Vous devez sélectionner un **motif de remise** :

    <div className="contenaireImg">
    ![logo de seg2inov](./assets/motifremise.PNG)
    </div>

:::tip
Les motifs de remises sont **paramétrables depuis la gestion**. Pour plus d'informations, cliquez sur le lien suivant : [Manuel de gestion - Mise à jour des motifs de remise](https://aide.seg2inov.fr/docs/manuel-gestion/prix-promotions/mise-a-jour-motifs-remise). 
:::

:::warning
Le système S2Cash peut être configuré avec une **remise ligne fixe**, dans ce cas quel que soit le montant saisi de la remise, le système applique toujours le **montant paramétré**.
:::

## Messages d'erreur 

### Aucun produit saisi

Pour **remiser un produit**, il faut sélectionner le produit concerné depuis le panier. Ainsi, si vous appuyez sur la touche ```REMISE LIGNE``` alors que le **panier est vide**, ce message d'erreur s'affiche : 

<div className="contenaireImg">
    ![logo de seg2inov](./assets/aucunproduit.PNG)
    </div>

### Remise incorrecte

Dans le cas où vous saisissez un **montant de remise incorrect** (par exemple, 150%), la caisse affiche ce message : 

<div className="contenaireImg">
    ![logo de seg2inov](./assets/remiseincorrecte.PNG)
    </div>