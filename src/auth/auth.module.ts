import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './service/auth/auth.service';
import { AuthController } from './controller/auth/auth.controller';
import { JwtStrategy } from 'src/jwt/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entity/auth.entity';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: "MYSECRET",
            signOptions: { expiresIn: '30s' }
        }),
        TypeOrmModule.forFeature([Account])
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController]
})
export class AuthModule {}
