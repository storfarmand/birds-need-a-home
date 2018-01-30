import content from '../content.json'

class ContentServices {
  constructor() {
    this.galleries = content.galleries;
    this.houses = content.houses;
    this.pics = content.pics;
  }
  getHouse(id, active) {
    return this.houses.filter(house=>{
      const isActive = typeof active === 'undefined' ? true : active
      return house.id === id && house.active === isActive;
    })[0];
  }
  getAllHouses(active) {
    const isActive = typeof active === 'undefined' ? true : active
    return this.houses.filter(house => house.active === isActive);
  }
  getGallery(id) {
    return this.galleries.filter(gallery=>{
      return gallery.id === id;
    })[0];
  }
  getAllGalleries() {
    return this.galleries;
  }
  getPic(id) {
    return this.pics.filter(pic=>{
      return pic.id === id;
    })[0];
  }
  getPicFor(type, id) {
    return this.pics.filter((pic)=>{
      return pic.type === type && pic.xid === id;
    })[0];
  }
  getAllPicsFor(type, id) {
    return this.pics.filter((pic)=>{
      return pic.type === type && pic.xid === id;
    });
  }
}

export default ContentServices;
