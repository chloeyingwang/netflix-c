import axios from "axios";

// base url to make requests to the movie database

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
// default is the one you can change the name later in other files, like in Row we call it axios
//one file can only has one default but can has other const like export const a = axios.create({b:'1'}) ??
