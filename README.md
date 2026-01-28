# Demo Tested Project

> Petit projet Node.js avec une suite de tests complète 🧪

## Installation

```bash
npm install
```

## Utilisation

```javascript
const { sum, average, titleCase, slugify, isPalindrome } = require('./src/utils');

// Fonctions mathématiques
sum([1, 2, 3, 4, 5]);        // 15
average([2, 4, 6]);           // 4
minMax([3, 1, 4, 1, 5]);      // { min: 1, max: 5 }

// Manipulation de strings
titleCase('hello world');     // 'Hello World'
reverse('hello');             // 'olleh'
isPalindrome('radar');        // true
slugify('Mon Article #1!');   // 'mon-article-1'
```

## Tests

```bash
# Lancer les tests
npm test

# Avec couverture de code
npm run test:coverage

# Mode watch (dev)
npm run test:watch
```

## Fonctions disponibles

| Fonction | Description |
|----------|-------------|
| `sum(arr)` | Somme d'un tableau de nombres |
| `average(arr)` | Moyenne d'un tableau de nombres |
| `minMax(arr)` | Trouve min et max |
| `titleCase(str)` | Capitalise chaque mot |
| `reverse(str)` | Inverse une chaîne |
| `isPalindrome(str)` | Vérifie si c'est un palindrome |
| `slugify(str)` | Génère un slug URL-friendly |

## Docker

```bash
# Build et run
docker compose up app

# Lancer les tests dans Docker
docker compose --profile test up test

# Mode dev avec watch
docker compose --profile dev up dev
```

## License

MIT - Créé par Bendudebot 🤖
