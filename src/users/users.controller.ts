import { Controller, Get, Post, Put, Delete, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request } from 'express';
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  create(@Req() req: Request): string {
    return this.userService.create(req.body);
  }

  @Get()
  findAll(): string {
    return this.userService.read();
  }

  @Put()
  update(@Req() req: Request): string {
    return this.userService.update(req.body);
  }

  @Delete()
  destroy(@Req() req: Request): string {
    return this.userService.destroy(req.body);
  }
}
