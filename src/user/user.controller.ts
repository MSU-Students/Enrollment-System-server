import { UserDto } from './../entities/user.dto';
import { UserService } from './user.service';
import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}

  @ApiBody({ type: UserDto })
  @ApiOperation({
    summary: 'Add new Users',
    operationId: 'AddUsers',
  })
  @ApiResponse({ status: 200, type: UserDto })
  @Post()
  async create(@Body() job: UserDto): Promise<UserDto> {
    return this.UserService.create(job);
  }

  @ApiOperation({ summary: 'Get all Users', operationId: 'GetUserss' })
  @ApiResponse({ status: 200, type: UserDto })
  @Get()
  async findAll(): Promise<UserDto[]> {
    return this.UserService.findAll();
  }

  @ApiOperation({ summary: 'Get Users by id', operationId: 'GetUsers' })
  @ApiResponse({ status: 200, type: UserDto })
  @Get(':userID')
  async findOne(@Param('userID') id: number): Promise<UserDto> {
    return this.UserService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Users by id',
    operationId: 'UpdateUsers',
  })
  @ApiResponse({ status: 200, type: UserDto })
  @Put(':userID')
  async update(@Param('userID') id: number, @Body() job: UserDto) {
    return this.UserService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Users by id',
    operationId: 'DeleteUsers',
  })
  @ApiResponse({ status: 200, type: UserDto })
  @Delete(':userID')
  async delete(@Param('userID') id: number) {
    return this.UserService.deleteOne(id);
  }
}
