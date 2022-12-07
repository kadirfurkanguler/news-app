import { Strings } from 'utils';
interface Categorie {
  name: Strings;
  path: string;
}

export const categories: Array<Categorie> = [
  { name: 'business', path: '/categories/business' },
  { name: 'entertainment', path: '/categories/entertainment' },
  { name: 'general', path: '/categories/general' },
  { name: 'health', path: '/categories/health' },
  { name: 'science', path: '/categories/science' },
  { name: 'sports', path: '/categories/sports' },
  { name: 'technology', path: '/categories/technology' },
]