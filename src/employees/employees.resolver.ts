import { Query, Resolver } from '@nestjs/graphql';
import { ReviewsService } from 'src/reviews/reviews.service';
import { EmployeesService } from './employees.service';
import { Employee } from './entities/employee.entity';

@Resolver()
export class EmployeesResolver {
  constructor(
    private readonly employeesService: EmployeesService,
    private readonly reviewsService: ReviewsService,
  ) {}

  @Query(() => [Employee])
  async employees(): Promise<Employee[]> {
    return this.employeesService.getAll();
  }
}
