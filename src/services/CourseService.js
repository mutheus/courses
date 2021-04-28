import { ApiService } from './ApiService';

const endpoint = 'courses.db';

export const CourseService = {
  list() {
    return ApiService.get(endpoint);
  },
  create(newCourse) {
    return ApiService.post(endpoint, newCourse);
  },
  remove(courseId) {
    return ApiService.delete(endpoint, courseId);
  }
}
