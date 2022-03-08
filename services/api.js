import { api } from '../config/methods';

export default {
  getUserData() {
    return api.get(`/userData`);
  },
  getExpiriece() {
    return api.get(`/professionalExpirence`);
  },
  getProjects() {
    return api.get(`/projects`);
  },
  getProject(id) {
    return api.get(`/projects/${id}`);
  },
  getSkills(id) {
    return api.get(`/skills`);
  },
};
