import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Get()
    getUsers(){
        return this.usersService.getUsers();
    }

    @Post()
    createUser(){
        return this.usersService.postUser();
    }   

    @Put()
    updateUser(){
        return this.usersService.putUser(); 
    }

    @Delete()
    deleteUser(){
        return this.usersService.deleteUser();
    }

    @Patch()
    patchUser(){
        return this.usersService.patchUser();
    }   
}
