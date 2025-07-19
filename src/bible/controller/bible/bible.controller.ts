import { Controller, Get, Param } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { BibleService } from 'src/bible/service/bible/bible.service';

@Controller('bible')
export class BibleController {
    constructor(private readonly bibleService: BibleService){}
    
    @Get('passages')
    async getPassages(){
        return this.bibleService.getPassages()
    }

    @Get('passage/:abbr/:chapter')
    getChapter(@Param('abbr') abbr: string, @Param('chapter') chapter: number){
        return this.bibleService.getChapter(abbr, chapter)
    }

    
}
