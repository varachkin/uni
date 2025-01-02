import axios from "axios";

// const server = "http://0.0.0.0:6006";
const cloud = `http://localhost:5001`
// const cloud = 'http://ec2-3-19-64-139.us-east-2.compute.amazonaws.com:8000/storage/v1/';
export const imagesUrl = 'https://clickash.s3.us-east-2.amazonaws.com/staging/products/';

export function getSerial() {
  return axios
    .get(cloud + `/serial/`)
    .then(function (response) {
      console.log('getSerial request', response)
      return response;
    })
    .catch(function (error) {
      console.log('getSerial request', error)
      return error;
    });
}

export const getTechBreak = (serial: string | null) => {
    return serial
  // return axios
  //   .get(server + `/machine/status/technical-break?serial=${serial}`)
  //   .then((response) => {
  //     console.log('getTechBreak request', response)
  //     return response;
  //   })
  //   .catch((error) => {
  //     console.log('getTechBreak request', error)
  //       throw new Error(error);
  //     return error;
  //   });
};

export function getProducts(serial: string | null) {
  return axios
    .get(cloud + `/storage/?serial=${serial}`)
    .then(function (response) {
      console.log('getProducts request', response)
      return response;
    })
    .catch(function (error) {
      console.log('getProducts request', error)
        throw new Error(error);
      return error;
    });
}

