export interface Usermodel {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    expDate: Date | string;
    salary: number;
    deletedUser: boolean;
}