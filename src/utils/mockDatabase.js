module.exports = {
    tables: {
        users: ["id", "name", "email"],
        orders: ["id", "user_id", "total", "date"]
    },
    data: {
        users: [{ id: 1, name: "Alice", email: "alice@example.com" }],
        orders: [{ id: 1, user_id: 1, total: 100, date: "2024-02-01" }]
    }
};
