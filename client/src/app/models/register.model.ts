export interface IRegister {
    id: string;
    fullname: string;
    username: string;
    email: string;
    password: string;
    phno: string;
    msg?: string;
    success?: boolean;
}

export interface Ilogin {
    email: string;
    password: string;
    msg?: string;
    success?: boolean;
    token?: string;
    user?: string;
}