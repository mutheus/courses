import { ApiService } from './ApiService';

const endpoint = 'category.db';

export const CategoryService = {
  list() {
    return ApiService.get(endpoint);
  }
}
