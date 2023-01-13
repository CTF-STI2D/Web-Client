# Web-Client

Web - Client solution du site www.root-me.org

# Solution :

# Web-Client

Web - Client solution du site www.root-me.org

# Réponse :

Le but de ce challenge est de retrouver les identifiants pour se connecter :<br />
<img src='./img/1.png'><br />
<img src='./img/2.png'>

Tout d'abord, on va regarder le code source de la page :
<img src='./img/3.png'>

On cherche le code du formulaire de connexion : <br />
<img src='./img/4.png'>

On remarque que le formulaire est en POST et qu'il y a un script en javascript, pour le retrouver, on va aller dans la zone `Source` de notre navigateur : <br />
<img src='./img/5.png'>

Une fois le script trouvé, on va le regarder on a qu'a regarder le mot de passe et l'identifiant : <br />
<img src='./img/6.png'>

Voila, on a trouvé le mot de passe et l'identifiant il ne vous reste plus qu'a valider le challenge avec le mot de passe trouvé : <br />
<img src='./img/7.png'>

## License

All right reserved to CTF-STI2D
