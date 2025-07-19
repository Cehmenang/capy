import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Affirmation } from '../../entity/affirmation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AffirmationService {
    constructor(@InjectRepository(Affirmation) private affirm: Repository<{ text: string, favorite: boolean, createdAt: Date }>){}

    async getLocalAffirms(){
        return await this.affirm.find({ order: { text: 'ASC' } })
    }

    async getAffirmationsWithLimit(from: number){
        let response
        if(!from) response = await this.affirm.find({ take: 5, order: { text: 'ASC' } })
        else response = await this.affirm.find({ take: 5, skip: from, order: { text: 'ASC' } })
        return response
    }

    async setFavorite(id: string, bool: boolean){
        return await this.affirm.update(id , { favorite: bool ? false : true })
    }

    async createAffirm(body: { affirmation: string }){
        const newAffirm = await this.affirm.save({ text: body.affirmation })
        return { status: HttpStatus.ACCEPTED, newAffirm }
    }
}
