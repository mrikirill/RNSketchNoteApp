export default {
    setItem: jest.fn(() => {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }),
    multiSet:  jest.fn(() => {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }),
    getItem: jest.fn(() => {
        return new Promise((resolve, reject) => {
            resolve('{"items":[{"name":"My_Sketch1","date":"2020-10-10T08:50:57.547Z","points":["1 1","2 2","3 3"]},{"name":"My_Sketch2","date":"2020-10-10T08:50:57.547Z","points":["1 1","2 2","3 3"]}]}');
        });
    }),
    multiGet: jest.fn(() => {
        return new Promise((resolve, reject) => {
            resolve(multiGetTestData());
        });
    }),
    removeItem: jest.fn(() => {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }),
    getAllKeys: jest.fn(() => {
        return new Promise((resolve) => {
            resolve(['one', 'two', 'three']);
        });
    })
  };
