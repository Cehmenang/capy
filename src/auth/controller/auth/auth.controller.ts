import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from '../../dtos/user.dto';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { AuthService } from 'src/auth/service/auth/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post("register")
    @UsePipes(new ValidationPipe())
    register(@Body() body: CreateUserDto){
        return this.authService.register(body)
    }

    @Get("login")
    login(){
        return this.authService.login()
    }

    @Get("accounts")
    @UseGuards(JwtGuard)
    getAccounts(){
        return this.authService.getAccounts()
    }
}
