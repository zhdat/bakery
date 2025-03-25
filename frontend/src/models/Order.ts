import {Status} from "./Status.ts";

export type Order = {
    id: string;
    client_name: string;
    phone: string;
    email: string;
    street: string;
    city: string;
    postal_code: string;
    country: string;
    status: Status;
    total_price: number;
    created: Date;
}