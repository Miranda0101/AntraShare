export interface User {
    _id: string;
    age?: number;
    gender?: string;
    email: string;
    role: string;
    username: string;
    password: string;
    birthday?: string;
    avatar?: string;
}