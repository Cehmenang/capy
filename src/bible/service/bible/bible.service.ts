import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class BibleService {
    async getPassages(){
        const res = await axios.get(`${process.env.BIBLE_API!}v1/passage/list`) as AxiosResponse
        return await res.data
    }

    async getChapter(abbr: string, chapter: number){
        const res = await axios.get(`${process.env.BIBLE_API!}v1/passage/${abbr}/${chapter}`) as AxiosResponse
        return await res.data
    }
}
