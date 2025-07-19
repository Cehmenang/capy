import { Body, Controller, Get, Inject, Param, Post, Query } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { XMLParser } from 'fast-xml-parser';
import { AffirmationService } from 'src/affirmation/service/affirmation/affirmation.service';

@Controller('affirmation')
export class AffirmationController {
    constructor(private affirmService: AffirmationService){}

    @Get()
    async getDailyAffirmation(){
        const response = await axios.get("https://www.affirmations.dev/?ref=freepublicapis.com") as AxiosResponse
        return response.data.affirmation
        // return this.affirmService.getAffirs()
    }

    @Get('getAll')
    getAffirmations(){
        return this.affirmService.getLocalAffirms()
    }

    @Get('limit')
    getAffirmationsWithLimit(@Query('from') from: string){
        return this.affirmService.getAffirmationsWithLimit(parseInt(from))
    }

    @Get(':id')
    setFavorite(@Param("id") id:string, @Query('bool') bool: boolean){
        return this.affirmService.setFavorite(id, bool)
    }

    @Post('create')
    createAffirmation(@Body() createAffirmationDto: { affirmation: string }){
        return this.affirmService.createAffirm(createAffirmationDto)
    }
}
