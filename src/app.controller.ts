import { Controller, Get, Param, Body, Query, Delete, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { BooksService } from './books/books.service';
import { CreateBookDTO } from './books/create-book.dto';

@Controller('books')
export class AppController {
  constructor(private readonly bookService: BooksService) {}
  
  @Get() 
   getBooks() {
      const books =  this.bookService.getBooks();
      return books;
  }

  @Get(':bookId')
  async getBook(@Param('bookId') bookId) {
    const book = await this.bookService.getBook(bookId);
    return book;
  }

  @Post() 
  async addBook(@Body() createBookDTO: CreateBookDTO) {
    const book = await this.bookService.addBook(CreateBookDTO);
    return book;
  }  

  @Delete()
  async deleteBook(@Query() query) {
      const books = await this.bookService.deleteBook(query.bookID);
      return books;
  }



}
