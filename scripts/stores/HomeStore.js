import { EventEmitter } from "events";

import dispatcher from '../dispatcher';

class HomeStore extends EventEmitter {
  constructor() {
    super();
    this.setMaxListeners(50);
  }

  search(obj) {
    this.emit('text:search', obj);
  }

  handleActions(evt) {
    switch(evt.type) {
      case "TEXT":
        switch (evt.action) {
          case "SEARCH":
            this.search(evt.data);
            break;
        }
        break;
    }
  }

}

const homeStore = new HomeStore;
dispatcher.register(homeStore.handleActions.bind(homeStore));

export default homeStore;
