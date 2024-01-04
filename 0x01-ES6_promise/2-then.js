export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      body: 'Success',
      status: 200,
    }))
    .catch(() => Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
