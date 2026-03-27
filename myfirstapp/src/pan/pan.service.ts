import { Injectable } from '@nestjs/common';

@Injectable()
export class PanService {
    getPan(){
        return ['pan 1','pan 2','pan 3'];
    }
}
