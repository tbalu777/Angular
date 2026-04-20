import { Injectable } from '@angular/core';
import { Usermodel } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  allChars: Array<Usermodel> = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      expDate: '2023-12-31',
      salary: 50000,
      deletedUser: false
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      expDate: '2024-06-30',
      salary: 60000,
      deletedUser: false
    },
    {
      id: 3,
      firstName: 'Bob',
      lastName: 'Johnson',
      email: 'bob.johnson@example.com',
      expDate: '2024-12-31',
      salary: 70000,
      deletedUser: false
    },
    {
      id: 4,
      firstName: 'Alice',
      lastName: 'Williams',
      email: 'alice.williams@example.com',
      expDate: '2025-06-30',
      salary: 80000,
      deletedUser: false
    },
    {
      id: 5,
      firstName: 'Charlie',
      lastName: 'Brown',
      email: 'charlie.brown@example.com',
      expDate: '2025-12-31',
      salary: 90000,
      deletedUser: false
    }, 
    {
      id: 6,
      firstName: 'David',
      lastName: 'Lee',
      email: 'david.lee@example.com',
      expDate: '2026-06-30',
      salary: 100000,
      deletedUser: false  
    },
    {
      id: 7,
      firstName: 'Eva',
      lastName: 'Garcia',
      email: 'eva.garcia@example.com',
      expDate: '2026-12-31',
      salary: 110000,
      deletedUser: false
    },
    {
      id: 8,
      firstName: 'Frank',
      lastName: 'Martinez',
      email: 'frank.martinez@example.com',
      expDate: '2027-06-30',
      salary: 120000,
      deletedUser: false
    },
    {
      id: 9,
      firstName: 'Grace',
      lastName: 'Lopez',
      email: 'grace.lopez@example.com',
      expDate: '2027-12-31',
      salary: 130000,
      deletedUser: false
    },
    {
      id: 10,
      firstName: 'Henry',
      lastName: 'Gonzalez',
      email: 'henry.gonzalez@example.com',
      expDate: '2028-06-30',
      salary: 140000,
      deletedUser: false
    },
  ]

  getEven(): Array<Usermodel> {
    return this.allChars.filter(user=> user.id % 2 === 0);
  }

  getOdd(): Array<Usermodel> {
    return this.allChars.filter(user=> user.id % 2 !== 0);
  }

}
