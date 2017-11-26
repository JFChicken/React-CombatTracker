// @flow

export const removeLocalStorage = (key)=>{
  window.localStorage.removeItem(key);
};

export const setLocalStorage = (key,value)=>{
  try {
    console.log('key value',key,value);
    removeLocalStorage(key);
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  catch (e){
    console.log('error',e);
    return e;
  }
  return true;
};

export const getLocalStorage = (key)=>{
  try {
    return JSON.parse(window.localStorage.getItem(key));
  }
  catch(e) {
    console.log('error',e);
    return null;
  }
};