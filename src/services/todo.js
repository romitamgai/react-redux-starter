// import config from '../config';
// import http from '../utils/http';

/**
 * Service to fetch todos
 *
 */
export async function fetchTodos() {
  // const url = config.endpoints.fetchTodos;
  // const { data } = await http.get(url);
  // return data;

  return {
    todos: [
      {
        id: 1,
        title: 'Complete boilerplate'
      },
      {
        id: 2,
        title: 'Todo some random task'
      }
    ]
  };
}
