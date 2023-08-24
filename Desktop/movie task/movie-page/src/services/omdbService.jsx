  const OMDB_API_KEY = "257bb5cd"

export const search = async(searchTerm) => {
    try{
        console.log("movies")
        const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${OMDB_API_KEY}`)
        const data = await response.json()
            console.log(data.Search)
            return data.Search
           }catch(error){
        console.error("error fetching data", error)
        defaultMovies()
    }
}

export const defaultMovies = async () => {
    try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=marvel&apikey=257bb5cd&s=&type=movie`
        );
        const data = await response.json();
        console.log(data)
        if (data.Response === "True") {
          console.log(data.search)
          return data.Search
        } 
      } catch (error) {
        console.error("Error fetching list:", error);
      }
}

// import toastify from "toastify-js";
// import "toastify-js/src/toastify.css"; // Import toastify CSS

// const OMDB_API_KEY = "257bb5cd";

// export const search = async (searchTerm) => {
//   try {
//     const response = await fetch(
//       `https://www.omdbapi.com/?s=${searchTerm}&apikey=${OMDB_API_KEY}`
//     );
//     const data = await response.json();
//     if (data.Response === "True") {
//       return data.Search;
//     } else {
//       toastify({
//         text: "Search succesful",
//         duration: 3000,
//         gravity: "top",
//         backgroundColor: "green"
//       }).showToast();
//       return [];
//     }
//   } catch (error) {
//     console.error("Error fetching list:", error);
//     toastify({
//       text: "Error fetching list",
//       duration: 3000,
//       gravity: "top",
//       backgroundColor: "red"
//     }).showToast();
//     return [];
//   }
// };

// export const defaultMovies = async () => {
//   try {
//     const response = await fetch(
//       `https://www.omdbapi.com/?s=marvel&apikey=257bb5cd&s=&type=movie`
//     );
//     const data = await response.json();
//     if (data.Response === "True") {
//       return data.Search || [];
//     } else {
//       toastify({
//         text: "Error fetching default movies",
//         duration: 3000,
//         gravity: "top",
//         backgroundColor: "red"
//       }).showToast();
//       return [];
//     }
//   } catch (error) {
//     console.error("Error fetching list:", error);
//     toastify({
//       text: "Error fetching default movies",
//       duration: 3000,
//       gravity: "top",
//       backgroundColor: "red"
//     }).showToast();
//     return [];
//   }
// };
