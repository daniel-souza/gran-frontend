type User = {
    id: number,
    name: string,
    email: string,
    password: string
}

type Task = {
    id: number,
    userId: number,
    title: string,
    status: string
}