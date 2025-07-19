import { IsNotEmpty, MinLength } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty({ message: "Tolong Isi Username Anda!" })
    @MinLength(5, { message: "Username Minimal 5 Karakter!" })
    username: string

    @IsNotEmpty({ message: "Tolong Isi Password Anda!" })
    @MinLength(5, { message: "Password Minimal 5 Karakter!" })
    password: string
}