---
sidebar_position: 2
---

# Les erreurs

S’il s’agit d’un **produit à peser**, le logiciel demande de mettre le **produit sur la balance**.

## Erreur poids égal à 0
Si **aucun** produit n’est posé alors ce message s’affiche : 

<div className="contenaireImg">
    ![illustration aspect test](./assets/errorpesee.PNG)
</div>

## Erreur poids non changé

Une fois le produit vendu, vous pouvez l’enlever de la balance.
Si vous sélectionnez un autre produit **sans avoir fait varier le plateau de la balance**, ce message s’affiche :

<div className="contenaireImg">
    ![illustration aspect test](./assets/poidpaschage.PNG)
</div>

## Erreur stabilité

Tant que la balance n’est pas **stabilisée**, le produit ne peut être vendu.

<div className="contenaireImg">
    ![illustration aspect test](./assets/stabilité.PNG)
</div>

## Erreur modification du poids

Sur une balance avec bandeau de poids de la marque Precia Molen, si vous **modifiez manuellement la quantité**, ce message d'erreur s'affiche : 

<div className="contenaireImg">
    ![illustration aspect test](./assets/quantitepoids.PNG)
</div>

En effet, la règlementation NMI, à laquelle les balances Précia Molen sont conformes, rend illégale cette manipulation.