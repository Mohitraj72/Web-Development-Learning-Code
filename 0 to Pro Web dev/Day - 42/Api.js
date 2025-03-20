let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((Response) => {
//         console.log(Response);
//         return Response.json();
//     })
//     .then((data) => {
//         console.log("data fact1 = ",data.fact);
//         return fetch(url);
//     })
//     .then((Response) => {
//         return Response.json();
//     })
//     .then((data2) => {
//         console.log("data fact2 = ",data2.fact);
//     })
//     .catch((err) => {
//         console.log("ERROR -", err);
//     });




// fetch(url)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//      Display the first cat fact in <h1>
//     document.querySelector("h1").textContent = `Fact 1: ${data.fact}`;

//      Fetch the second cat fact
//     return fetch(url);
//   })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data2) => {
//      Display the second cat fact in <h2>
//     document.querySelector("h2").textContent = `Fact 2: ${data2.fact}`;
//   })
//   .catch((err) => {
//     Handle errors
//     console.error("ERROR -", err);
//     document.querySelector("h1").textContent = "Failed to fetch cat facts.";
//     document.querySelector("h2").textContent = "Please try again later.";
//   });


async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);


    } catch (e) {
        console.log("error", e);
    }

}