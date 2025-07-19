import { Module } from '@nestjs/common';
import { BibleService } from './service/bible/bible.service';
import { BibleController } from './controller/bible/bible.controller';

@Module({
  providers: [BibleService],
  controllers: [BibleController]
})
export class BibleModule {}
