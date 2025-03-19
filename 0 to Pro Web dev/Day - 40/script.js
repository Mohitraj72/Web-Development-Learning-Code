let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li"); // Use querySelectorAll to get all <li> elements

div.addEventListener("click", function() {
    console.log("div was Clicked");
});

ul.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents the event from bubbling up to the div
    console.log("ul was clicked");
});

// Iterate over all <li> elements
for (let li of lis) {
    li.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents the event from bubbling up to the ul and div
        console.log("li was clicked");
    });
}