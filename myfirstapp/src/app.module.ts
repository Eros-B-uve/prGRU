import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TaskModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';


@Module({
  imports: [UsersModule, TaskModule, ProjectsModule], 

})
export class AppModule {}
