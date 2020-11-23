# Découpage territorial

> Liste des départements, communes, arrondissements et les quartiers du Bénin. L'API est décrite [ici]().

- Pour commencer à contribuer, suivez le guide de [contribution](CONTRIBUTING.md).
- Pour installer le projet en local, suivez la [documentation](#documentation) ci-dessous.

# Documentation

```bash
git clone https://github.com/nioperas06/bj-decoupage-territorial
cd bj-decoupage-territorial
npm install
cp .env.example .env
```

Créer une base de données et renseigner les valeurs de `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_DB_NAME`.

Exécuter: 
```
node ace migration:run
mysql -u root -p decoupage < req.sql
```

# Outils
- AdonisJS
- MySQL
- Aglio

# Nomenclature

| Syntaxe       | Correspondance  |
| ------------- | --------------- |
| department    | Département     |
| town          | Commune         |
| district      | Arrondissement  |
| neighborhood  | Quartier        |

# Utilisé par :
* [Portail National des services publics du Bénin](https://service-public.bj)

# License
[MIT License](LICENSE.md)