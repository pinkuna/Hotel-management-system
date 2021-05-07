export class register {
    username: string;
    Usesurname: string;
    password: string;
    repassword: string;
    Usename: string;
    idcard: number;
    phonNum: number;
    email: any;
    address: string;
}

export interface registerRequire {
    username: string;
    Usesurname: string;
    password: string;
    repassword: string;
    Usename: string;
    idcard: number;
    phonNum: number;
    email: any;
    address: string;
}

export interface registerRes {
    status: string;
    data: string;
}