import AsyncStorage from '@react-native-community/async-storage';

const storeDataAsync = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(error);
    }
};

const retrieveDataAsync = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) return JSON.parse(value);
    } catch (error) {
        console.error(error);
    }
};

const storeObjAsync = (Obj) => {
    for (key in Obj) {
        storeDataAsync(key, Obj[key]);
    }
}

const getDataAsyncFromKeys = async (array) => {
    const data = await array.map(key => retrieveDataAsync(key))
    const values = await Promise.all(data);
    const obj = {};
    values.forEach((value, i) => {
      obj[array[i]] = value;
    })
    return obj;
  }

export default {
    storeDataAsync,
    storeObjAsync,
    retrieveDataAsync,
    getDataAsyncFromKeys
}