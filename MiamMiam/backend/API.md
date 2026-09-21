# Api Miam Miam

## Post /auth/register
- Description : Crée un compte et renvoie un token
- Body : Information de l'user
- Responses :
    - 400 : Bad Request
    - 409 : email déjà utilisé
    - 500 : erreur serveur
    - 201 : token creer
        - le token en DTO

## Post /login
- Description : Vérifie les identifiants et renvoie un token
- Body : Information de l'user
- Responses : 
    - 400 : Bad request
    - 401 : user n'existe pas ou mdp incorect
    - 200 : succès
        - token

## Get /me
- Description : Renvoie l'utilisateur correspondant au token
- Authentification :
    - l'utilisateur connecter
- Responses : 
    - 401 : ce n'est pas le bonne user
    - 200 : succès 
        - les information de l'user en DTO


