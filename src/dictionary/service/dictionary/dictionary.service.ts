import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dictionary } from '../../entity/dictionary.entity';
import { In, Repository } from 'typeorm';
import * as path from 'path'
import * as fs from 'fs'

@Injectable()
export class DictionaryService {
    constructor(@InjectRepository(Dictionary) private dictionaryRepo: Repository<{ id: string, simplified: string, traditional: string, pinyin: string, definitions: string[] }>){}

    async generateDatas(){
        const jsonFile = path.join(__dirname, '../../../../cedict.json')
        const jsonData = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'))
        const cleaned = jsonData.map(d => ({
            traditional: d.traditional || '',
            simplified: d.simplified || '',
            pinyin: d.pinyin || '',
            definitions: Array.isArray(d.definitions) ? d.definitions : [],
        }))
        const slice = cleaned.slice(30001, 80001)
        // console.log(cleaned[122])
        await this.dictionaryRepo.createQueryBuilder().insert().values(slice).execute()
        // const data = await this.dictionaryRepo.create(jsonData[0])
        // const result = await this.dictionaryRepo.save(data)
        return { status: HttpStatus.ACCEPTED, message: 'SUCCESS' }
    }

    async searchDatas(keyword: string | any){
        return await this.dictionaryRepo
                .createQueryBuilder('entry')
                .where("EXISTS (SELECT 1 FROM unnest(entry.definitions) def WHERE def ILIKE :kw)", { kw: `%${keyword}%` })
                .getMany();
    }
}
