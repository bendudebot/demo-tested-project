/**
 * Collection d'utilitaires mathématiques et de manipulation de strings
 */

/**
 * Calcule la somme d'un tableau de nombres
 * @param {number[]} numbers - Tableau de nombres
 * @returns {number} La somme
 */
function sum(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError('Input must be an array');
  }
  return numbers.reduce((acc, n) => acc + n, 0);
}

/**
 * Calcule la moyenne d'un tableau de nombres
 * @param {number[]} numbers - Tableau de nombres
 * @returns {number} La moyenne
 */
function average(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error('Input must be a non-empty array');
  }
  return sum(numbers) / numbers.length;
}

/**
 * Trouve le minimum et maximum d'un tableau
 * @param {number[]} numbers - Tableau de nombres
 * @returns {{min: number, max: number}}
 */
function minMax(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error('Input must be a non-empty array');
  }
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };
}

/**
 * Capitalise la première lettre de chaque mot
 * @param {string} str - La chaîne à transformer
 * @returns {string}
 */
function titleCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Inverse une chaîne de caractères
 * @param {string} str - La chaîne à inverser
 * @returns {string}
 */
function reverse(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }
  return str.split('').reverse().join('');
}

/**
 * Vérifie si une chaîne est un palindrome
 * @param {string} str - La chaîne à vérifier
 * @returns {boolean}
 */
function isPalindrome(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

/**
 * Génère un slug URL-friendly
 * @param {string} str - La chaîne à transformer
 * @returns {string}
 */
function slugify(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }
  return str
    .toLowerCase()
    .trim()
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[ñ]/g, 'n')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

module.exports = {
  sum,
  average,
  minMax,
  titleCase,
  reverse,
  isPalindrome,
  slugify
};
