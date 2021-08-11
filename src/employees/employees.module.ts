import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewsService } from 'src/reviews/reviews.service';
import { EmployeesResolver } from './employees.resolver';
import { EmployeesService } from './employees.service';
import { Employee } from './entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  providers: [EmployeesResolver, EmployeesService, ReviewsService],
})
export class EmployeesModule {}
