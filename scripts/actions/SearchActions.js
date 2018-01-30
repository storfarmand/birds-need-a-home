import dispatcher from '../dispatcher';

export function search(data) {
  dispatcher.dispatch({
    type: "TEXT",
    action: "SEARCH",
    data: data
  });
}
