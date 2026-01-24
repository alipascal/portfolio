# Sample Note

*2025-10-09*, Alicia TCHEMO

---

Pour des soucis de praticité et de ressources disponibles (je n'ai plus d'espace dans mon ordinateur😓), je crée un environnement virtuel nativement avec python, sans installer *anaconda* : 


## Question 1

***Consignes*** : *Fill in this chunk of code so that we can send to Kafka cluster a data about the position of the bus, with the following information: `bus_id`,  `longitude`, `latitude`*
*The data sent to cluster must in JSON format.*

***Réponse*** :

On créer une donnée fictive de bus et de position de bus.
Pour s'amuser un peu on créer un id `key`  aléatoire et sécurisé avec la fonction `uuid4` de la librairie `uuid`, pour l'associé à la donnée `value`.
