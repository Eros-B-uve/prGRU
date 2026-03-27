import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TaskModule } from './tasks/tasks.module';
import { PanModule } from './pan/pan.module';

@Module({
  imports: [UsersModule, TaskModule, PanModule], 

})
export class AppModule {}
