//Simulate a simple query filter like find({ status: "active" }).

const users = [
  { id: 1, name: "Alice", status: "active" },
  { id: 2, name: "Bob", status: "inactive" },
  { id: 3, name: "Charlie", status: "active" },
  { id: 4, name: "David", status: "pending" }
];

function find(coll, query) {
    return coll.filter(doc => {
        return Object.keys(query).every(k => doc[k] === query[k]  );
    });
}

const activeUser = find(users, {status: "active"});
console.log(activeUser);
