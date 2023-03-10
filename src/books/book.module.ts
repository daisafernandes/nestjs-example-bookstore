import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './services/book.service';

@Module({
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
