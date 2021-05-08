export interface Response {
    data: string;
    status: string;
}

export interface BookingRes {
    id: number;
    loginid: number;
    idcard: string;
    name: string;
    phonenum: number;
    email: string;
    date: Date;
}

export interface ReportRes {
    id: number;
    roomnum: number;
    name: string;
    phonenum: number;
    theproblems: string;
    requre: string;
    title: string;
}

export interface CheckoutRes {
    id: number;
    roomnum: number;
    name: string;
    phonenum: number;
    date: Date;
}

