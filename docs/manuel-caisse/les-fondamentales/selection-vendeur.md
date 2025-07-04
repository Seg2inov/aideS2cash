---
sidebar_position: 3
---

# Sélection d'un vendeur

## Au démarrage

En fonction du paramétrage, S2Cash peut soit **démarrer sur un vendeur standard** (généralement appelé CAISSE ou BALANCE) ou vous demander de **sélectionner un vendeur** pour ouvrir le logiciel.

<div className="contenaireImg">
![illustration aspect test](./assets/selectVendeur/1.PNG)
</div>

Veuillez-vous **identifier** en saisissant votre code et votre mot de passe ou passez votre Badge devant le lecteur de code à barres.

 
:::warning
S2Cash contrôle que vous n’êtes pas déjà assigné à une autre caisse.
:::

La caisse va s’ouvrir et une **impression d’ouverture de caisse** va s’effectuer.

## Configurations vendeur

Si S2Cash est configuré pour démarrer sur un vendeur standard, plusieurs configurations vendeur sont possibles (Pour plus d'informations, cliquez sur le lien suivant : [Manuel de gestion - Gestion des utilisateurs](https://aide.seg2inov.fr/docs/category/gestion-des-utilisateurs)). Le système peut alors vous demander de vous identifier :


⦁	soit au début de la vente,

⦁	soit à chaque sélection de produit,

⦁	soit au moment du total du ticket.

## Mode d'identificaction 

Dans ces 3 cas, 2 modes d’identification sont possibles :

|Soit une identification vendeur par nom| Soit une identification vendeur par badge et/ou code |
|:-----------:|:-----------:|
| ![illustration aspect test](./assets/beggingday/1.PNG) | ![illustration aspect test](./assets/selectVendeur/1.PNG) | 

:::warning
Toute action effectuée en caisse sera **tracée dans le journal des évènements techniques**, et associée au vendeur sélectionné lors de cette action. 
:::

## Niveaux d'autorisation

Les utilisateurs peuvent avoir **différents niveaux d'autorisation**. 

Ainsi, en fonction du paramétrage, **certaines fonctionnalités ne leur seront pas accesibles**. Dans ce cas, la caisse affiche le message suivant : 

<div className="contenaireImg">
    ![illustration aspect test](./assets/selectVendeur/2.PNG)
    </div>

:::tip
Pour plus d'informations sur les niveaux d'autorisation attribués aux vendeurs, cliquez sur le lien suivant : [Manuel de gestion - Gestion des utilisateurs](https://aide.seg2inov.fr/docs/category/gestion-des-utilisateurs)
:::