const {
  sum,
  average,
  minMax,
  titleCase,
  reverse,
  isPalindrome,
  slugify
} = require('../src/utils');

describe('sum', () => {
  test('calcule la somme de nombres positifs', () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
  });

  test('calcule la somme avec des nombres négatifs', () => {
    expect(sum([-1, -2, 3])).toBe(0);
  });

  test('retourne 0 pour un tableau vide', () => {
    expect(sum([])).toBe(0);
  });

  test('fonctionne avec des décimaux', () => {
    expect(sum([0.1, 0.2])).toBeCloseTo(0.3);
  });

  test('lance une erreur si pas un tableau', () => {
    expect(() => sum('not an array')).toThrow(TypeError);
    expect(() => sum(123)).toThrow(TypeError);
    expect(() => sum(null)).toThrow(TypeError);
  });
});

describe('average', () => {
  test('calcule la moyenne correctement', () => {
    expect(average([2, 4, 6])).toBe(4);
  });

  test('fonctionne avec un seul élément', () => {
    expect(average([42])).toBe(42);
  });

  test('gère les décimaux', () => {
    expect(average([1, 2, 3, 4])).toBe(2.5);
  });

  test('lance une erreur pour un tableau vide', () => {
    expect(() => average([])).toThrow('Input must be a non-empty array');
  });

  test('lance une erreur si pas un tableau', () => {
    expect(() => average('test')).toThrow();
  });
});

describe('minMax', () => {
  test('trouve min et max', () => {
    expect(minMax([3, 1, 4, 1, 5, 9, 2, 6])).toEqual({ min: 1, max: 9 });
  });

  test('fonctionne avec des nombres négatifs', () => {
    expect(minMax([-5, 0, 5])).toEqual({ min: -5, max: 5 });
  });

  test('fonctionne avec un seul élément', () => {
    expect(minMax([42])).toEqual({ min: 42, max: 42 });
  });

  test('lance une erreur pour un tableau vide', () => {
    expect(() => minMax([])).toThrow();
  });
});

describe('titleCase', () => {
  test('capitalise chaque mot', () => {
    expect(titleCase('hello world')).toBe('Hello World');
  });

  test('gère les majuscules existantes', () => {
    expect(titleCase('HELLO WORLD')).toBe('Hello World');
  });

  test('gère une chaîne vide', () => {
    expect(titleCase('')).toBe('');
  });

  test('gère un seul mot', () => {
    expect(titleCase('javascript')).toBe('Javascript');
  });

  test('lance une erreur si pas une string', () => {
    expect(() => titleCase(123)).toThrow(TypeError);
    expect(() => titleCase(null)).toThrow(TypeError);
  });
});

describe('reverse', () => {
  test('inverse une chaîne simple', () => {
    expect(reverse('hello')).toBe('olleh');
  });

  test('gère une chaîne vide', () => {
    expect(reverse('')).toBe('');
  });

  test('gère les espaces', () => {
    expect(reverse('hello world')).toBe('dlrow olleh');
  });

  test('gère les caractères spéciaux', () => {
    expect(reverse('a!b@c')).toBe('c@b!a');
  });

  test('lance une erreur si pas une string', () => {
    expect(() => reverse(123)).toThrow(TypeError);
  });
});

describe('isPalindrome', () => {
  test('détecte un palindrome simple', () => {
    expect(isPalindrome('radar')).toBe(true);
  });

  test('ignore la casse', () => {
    expect(isPalindrome('Radar')).toBe(true);
  });

  test('ignore les espaces et ponctuation', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  test('détecte un non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('chaîne vide est un palindrome', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('un seul caractère est un palindrome', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  test('lance une erreur si pas une string', () => {
    expect(() => isPalindrome(12321)).toThrow(TypeError);
  });
});

describe('slugify', () => {
  test('convertit en minuscules avec tirets', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  test('gère les accents français', () => {
    expect(slugify('Café résumé')).toBe('cafe-resume');
  });

  test('supprime les caractères spéciaux', () => {
    expect(slugify('Hello! World?')).toBe('hello-world');
  });

  test('gère les espaces multiples', () => {
    expect(slugify('hello   world')).toBe('hello-world');
  });

  test('supprime les tirets en début/fin', () => {
    expect(slugify(' -hello world- ')).toBe('hello-world');
  });

  test('gère une chaîne vide', () => {
    expect(slugify('')).toBe('');
  });

  test('cas réel: titre d\'article', () => {
    expect(slugify('Mon Article de Blog #1!')).toBe('mon-article-de-blog-1');
  });

  test('lance une erreur si pas une string', () => {
    expect(() => slugify(123)).toThrow(TypeError);
  });
});
