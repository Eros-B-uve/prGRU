import { Controller, Get } from '@nestjs/common';
import { PanService } from './pan.service';

@Controller('/pan')
export class PanController {

    PanService:PanService;
    constructor(PanService:PanService){
        this.PanService = PanService;
    }

    @Get()
        getAllPan(){
            return this.PanService.getPan();
    }
    
}
 