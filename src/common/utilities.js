// @flow



export default storage => ({
  get(k) {
    try {
      return JSON.parse(storage.getItem(k));
    }
    catch(e) {
      return null;
    }
  },
  set(k, v) {
    try {
      storage.setItem(k, JSON.stringify(v));
    }
    catch (e){
      return e;
    }
  }
})