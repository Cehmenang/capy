import { Controller, Get, Query } from '@nestjs/common';
import { DictionaryService } from '../../service/dictionary/dictionary.service';

@Controller('dictionary')
export class DictionaryController {
    constructor(private dictionaryService : DictionaryService){}

    @Get()
    generateDatas(){
        return this.dictionaryService.generateDatas()
    }

    @Get('search')
    searchDatas(@Query('keyword') keyword: string){
        return this.dictionaryService.searchDatas(keyword)
    }
}
