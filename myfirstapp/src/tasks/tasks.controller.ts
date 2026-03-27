import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}

    @Get()
    getAllTasks(@Query() query: any ){
        console.log(query);
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTask(@Param('id') id: string){
        return this.tasksService.getTask(parseInt(id));
    }

    @Post()
    createTask(@Body() task: any){
        return this.tasksService.createTask(task);
    }
}
