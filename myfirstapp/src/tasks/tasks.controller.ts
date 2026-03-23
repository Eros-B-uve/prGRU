import { Controller, Get } from '@nestjs/common';

@Controller({})
export class TasksController {

    @Get('/tass')
    getAllTasks(){
        return 'Esta accion regresa todas las tareas';
    }
}
