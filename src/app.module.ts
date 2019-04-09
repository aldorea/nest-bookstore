import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { BooksService } from './books/books.service';

import { AppController } from './app.controller';

@Module({
  imports: [BooksModule],
  controllers: [AppController],
  providers: [BooksService],
})
export class AppModule {}
