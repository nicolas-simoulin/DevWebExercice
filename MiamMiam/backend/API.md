# Api Miam Miam

## Post /auth/register
- Description : Crée un compte et renvoie un token
- Body : Information de l'user
- Responses :
    - 400 : Bad Request
    - 409 : email déjà utilisé
    - 500 : erreur serveur
    - 201 : token creer
