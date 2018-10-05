function fetchWrapper(url, options) {
  var opts = options || {};
  opts.credentials = 'include';
  return fetch(url, opts)
  .then(res => {
    if(res.status !== 200){ 
      throw res.statusText; 
    }
    return res.json();
  });
}

export default fetchWrapper;