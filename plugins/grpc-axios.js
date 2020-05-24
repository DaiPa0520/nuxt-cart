export default function grpcAxios(axios, method, metadata, req, callback) {
  
  // const bi = req.serializeBinary();
  // const ib = new ArrayBuffer(bi.length + 5);
  // new Uint8Array(ib, 0).set([
  //     bi.length / (256 * 256 * 256 * 256),
  //     bi.length / (256 * 256 * 256) % 256,
  //     bi.length / (256 * 256) % 256,
  //     bi.length / (256) % 256,
  //     bi.length % 256
  // ])
  // new Uint8Array(ib, 5).set(bi);

  
  return axios.$post(
    'https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1
  })
  .then((res) => {
     return res 
  })
  .catch((error) => {
     console.log(error) 
  })
  
}