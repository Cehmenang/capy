import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AffirmationModule } from './affirmation/affirmation.module';
import { BibleModule } from './bible/bible.module';
import { DictionaryModule } from './dictionary/dictionary.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      inject: [ ConfigService ],
      useFactory: ( config: ConfigService ) => ({
        type: 'postgres',
        url: config.get<string>('DATABASE_URL'),
        ssl: { rejectUnauthorized: false },
        autoLoadEntities: true,
        synchronize: true
      })
  }),
    AffirmationModule,
    BibleModule,
    DictionaryModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
