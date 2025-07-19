import { Module } from '@nestjs/common';
import { AffirmationService } from './service/affirmation/affirmation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Affirmation } from './entity/affirmation.entity';
import { AffirmationController } from './controller/affirmation/affirmation.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Affirmation])],
  providers: [AffirmationService],
  controllers: [AffirmationController]
})
export class AffirmationModule {}
