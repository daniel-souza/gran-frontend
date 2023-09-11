const data: { users: User[], tasks: Task[]} = {
    users: [
        {
            id: 1,
            name: "Ana",
            email: "ana@ig.com",
            password: "123"
        }
    ],
    tasks: [
        {
            id: 1,
            userId: 1,
            title: "Estudar Next",
            status: "em andamento"
        }
    ]
}

export default data;