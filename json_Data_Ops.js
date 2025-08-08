// Write a function to filter, sort, and paginate given JSON data.

// Sample dataset
const users = [
  { id: 1, name: "Alice", status: "active", age: 29 },
  { id: 2, name: "Bob", status: "inactive", age: 33 },
  { id: 3, name: "Charlie", status: "active", age: 24 },
  { id: 4, name: "David", status: "pending", age: 29 },
  { id: 5, name: "Eve", status: "active", age: 41 },
];

// TODO: Implement filter + sort + paginate
function queryData(data, filter = {}, sortKey = null, sortOrder = "asc", page = 1, limit = 10) {
    // Your code here

    // 1) Filter
    const filtered = data.filter(item => Object.keys(filter).every(k => item[k] === filter[k]));

    // 2) Sort 
    const dir = sortOrder === "desc" ? -1 : 1;
    // const sorted = sortKey ? [...filtered].sort((a, b) => {
    //     const va = a[sortKey];
    //     const vb = b[sortKey];


    // })
}

// Example usage:
const result = queryData(users, { status: "active" }, "age", "desc", 1, 2);
console.log(result);




// Expected Output (page 1, 2 per page, active users sorted by age desc):
// [
//   { id: 5, name: "Eve", status: "active", age: 41 },
//   { id: 1, name: "Alice", status: "active", age: 29 }
// ]
