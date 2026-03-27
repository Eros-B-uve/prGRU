import { Module } from '@nestjs/common';
import { PanController } from './pan.controller';
import { PanService } from './pan.service';

@Module({
  controllers: [PanController],
  providers: [PanService]
})
export class PanModule {}
