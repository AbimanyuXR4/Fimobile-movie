const result = fetch('https://api.themoviedb.org/3/movie/popular?api_key=6f5c15a5026f574a44ea16fcbc73b0c6&language=en-US&page=1').then(res=>res.json());

console.log(result);