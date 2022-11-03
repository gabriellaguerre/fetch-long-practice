/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here
fetch("/products", {method: "POST",
   headers: {"Content-Type": "application/x-www.urlencoded"},
   body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"})


/* ============================== Phase 2 ============================== */

// Your code here
fetch("/products").then(res => console.log(res.status))

fetch('/products').then(res => console.log(res.headers.get('Content-Type')))

fetch("/products").then(res => console.log(res.url))




/* ============================== Phase 3 ============================== */

// Your code here

