# Contribuer

Merci de penser à vouloir nous aider ! Sur quoi souhaiteriez-vous travailler ?

- [Avant de démarrer](#avant-de-démarrer)
- [Outils de travail recommandés](#outils-de-travail-recommandés)
- [Je veux améliorer la documentation pour développeurs](#je-veux-améliorer-la-documentation-pour-développeurs)
- [Je veux proposer une nouvelle fonctionnalité](#je-veux-proposer-une-nouvelle-fonctionnalité)
- [Je veux aider au développement de fonctionnalités](#je-veux-aider-au-développement-de-fonctionnalités)
- [Je veux corriger un problème](#je-veux-corriger-un-problème)
- [Je ne sais pas comment aider](#je-ne-sais-pas-comment-aider)
- [J'ai fini mes modifications, je voudrais les proposer](#jai-fini-mes-modifications-je-voudrais-les-proposer)

## Avant de démarrer

Ce projet utilise Git, l'outil de gestion de version le plus utilisé au monde. Pour l'installer et découvrir l'outil,
rendez-vous sur [le site officiel (en anglais)](https://git-scm.com). 

1. La première chose à faire est de [forker le repository](https://help.github.com/articles/fork-a-repo/).

2. Récupérez le code de votre fork.

3. Installez ensuite le projet en suivant [les instructions d'installation](docs/1-Installer-le-projet-en-local.md).

4. Lorsque nous travaillons avec Git, nous utilisons un processus de développement basé sur "une branche par fonctionnalité/bug".
   La première chose à faire une fois que votre projet est installé est donc de créer une branche pour votre travail.
   
   Imaginons par exemple que vous souhaitez travailler sur l'issue 1500 qui résoud un problème de CORS sur l'API.
   Vous pourriez suivre les étapes suivantes:
   
   - Récupérer le code le plus récent du projet principal (`git pull git@github.com:nioperas06/bj-decoupage-territorial.git`)
   - Commenter sur l'issue 1500 que vous commencez à travailler dessus
   - Créer une nouvelle branche, nommée par exemple `1500-fix-cors`, dans votre fork (`git branch 1500-fix-cors`).
     Le nom de la branche ne nous importe pas mais vous permettra de travailler sur plusieurs problèmes en
     même temps si vous le souhaitez. Nous vous conseillons d'inclure le numéro de l'issue en prefixe.
   - Une fois votre code écrit, l'envoyer sur votre fork (`git push`) et une fois votre modification terminée,
     créer une pull request pour proposer vos modifications au repository principal.

Vous voilà prêt à contribuer !


## Outils de travail recommandés

### Git

- Github a créé un outil en ligne de commande appelé **hub** qui est très pratique pour cloner des repositories
  et créer des pull requests. Essayez-le sur [https://hub.github.com](https://hub.github.com).
- Si vous utilisez Bash (sous Linux ou Mac OS), essayez
  [l'autocomplétion Git](https://git-scm.com/book/en/v2/Git-in-Other-Environments-Git-in-Bash) qui vous facilitera
  la vie jour après jour.
- Si vous utilisez Zsh (sous Linux ou Mac OS), essayez [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)
  avec le plugin git qui lui aussi vous facilitera énormément la vie.
- Si vous travaillez sous Windows, nous vous recommandons d'utiliser [Cmder](http://cmder.net/) qui émule une console
  pour vous fournir plus de possibilités qu'avec la console de base de Windows. Vous pouvez aussi utiliser le
  [sous-système Ubuntu intégré nativement à Windows](https://blogs.msdn.microsoft.com/wsl/2016/04/22/windows-subsystem-for-linux-overview/)
  depuis quelques mois.

## Je veux améliorer la documentation pour développeurs

Si vous souhaitez améliorer la documentation pour développeurs, il y a certaines choses à savoir :

- La documentation pour développeurs est disponible dans le dossier `docs`
- Pour de grosses modifications, il est généralement préférable d'ouvrir une issue pour discuter des modifications
- Nous essayons de garder le document README.md léger et de l'utiliser comme un point d'entrée vers le reste de la documentation
- Quand vous ajoutez ou modifiez de la documentation, essayez de mettre en place une navigation simple entre les documents

Pour travailler concrètement sur la documentation, créez une
[pull request](https://help.github.com/articles/about-pull-requests/) et proposez votre modification. Essayez d'expliquer
dans cette pull request en quoi cette modification est utile.


## Je veux proposer une nouvelle fonctionnalité

Vous avez une idée de fonctionnalité pour l'API ? N'hésitez pas!

Pour cela, la première chose à faire est de vérifier que cette idée n'a pas déjà été proposée. Allez sur la liste des
[issues du projet](https://github.com/nioperas06/bj-decoupage-territorial/issues) et recherchez si votre idée n'a pas déjà été proposée.
Si c'est le cas et qu'elle n'a pas été acceptée, vous comprendrez probablement pourquoi, et si c'est le cas mais qu'elle
est en cours de développement, vous pourrez apporter votre opinion sur le sujet en commentant sur l'issue.

Si votre idée n'a jamais été proposée, alors n'hésitez pas à la proposer. Pour cela, créez une
[nouvelle issue](https://github.com/nioperas06/bj-decoupage-territorial/issues/new) en décrivant votre idée. 

La meilleure manière pour décrire votre idée est de décrire son fonctionnement final et à quoi l'interface devrait 
ressembler. Vous pouvez en plus décrire votre idée en terme de "user story":

> En tant que [acteur], je voudrais pouvoir [action], afin de [intérêt].


N'hésitez pas à ajouter des captures d'écrans de ce à quoi vous avez pensé ou à décrire les comportements attendus
dans le détail. Si besoin, nous vous poserons des questions dans l'issue afin de détailler tous les cas possibles.

Si vous êtes un développeur et que vous souhaitez travailler sur votre idée, n'hésitez pas à lier votre idée à
une [pull request](https://help.github.com/articles/about-pull-requests/) pour démarrer votre travail. Notez cependant
que nous devrons valider votre idée avant d'accepter votre code.


