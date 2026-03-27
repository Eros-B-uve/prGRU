import { Injectable } from '@nestjs/common';

export interface user{
    name: string;
    age: number;
}

@Injectable()
export class UsersService {
    
    getUsers(): user{
         return {
            name: 'John Doe',
            age: 30 
         }
    }

    postUser(){
        return [{ id: 3, name: 'User 3', phone: '1112223333' }];
    }

    putUser(){
        return [{ id: 1, name: 'Updated User 1', phone: '1234567890' }];
    }

    deleteUser(){
        return 'User deleted';
    }

    patchUser(){
        return 'User patched';
    }
}
