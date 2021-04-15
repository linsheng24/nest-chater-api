import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InterestService } from './interest.service';

@Controller('interest')
export class InterestController {
  constructor(private readonly interestService: InterestService) {}

  @ApiTags('interest')
  @Post('mapping')
  async index() {
    let interests: {
      id: number;
      text: string;
    }[] = await this.interestService.findAll();
    interests = interests.map((interest) => {
      const { id, text } = interest;
      return { id, text };
    });
    return interests;
  }
}
