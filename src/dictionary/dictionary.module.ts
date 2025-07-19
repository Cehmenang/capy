import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dictionary } from './entity/dictionary.entity';
import { DictionaryService } from './service/dictionary/dictionary.service';
import { DictionaryController } from './controller/dictionary/dictionary.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Dictionary])],
    providers: [DictionaryService],
    controllers: [DictionaryController]
})
export class DictionaryModule {}
