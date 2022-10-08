import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HakunModule } from './hakun/hakun.module';

@Module({
  imports: [
    HakunModule,
    MongooseModule.forRoot(
      'mongodb+srv://hakunia:keluarmasuk@cluster0.9ntoerw.mongodb.net/nest_db?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
