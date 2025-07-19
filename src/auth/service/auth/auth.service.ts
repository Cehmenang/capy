import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/auth/dtos/user.dto';
import { Account } from 'src/auth/entity/auth.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(Account) private account: Repository<Account>, private jwtService: JwtService){}

    async register({ username, password }: CreateUserDto){
        const account = await this.account.create({ username, password })
        await this.account.save(account)
        return { status: HttpStatus.ACCEPTED, account }
    }

    async login(){
        const payload = { id: 'HALO' }
        return this.jwtService.sign(payload)
    }

    async getAccounts(){
        return await this.account.find()
    }
}
