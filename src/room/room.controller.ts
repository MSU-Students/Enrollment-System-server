import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RoomDto } from 'src/entities/room.dto';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
  constructor(private UserService: RoomService) {}

  @ApiBody({ type: RoomDto })
  @ApiOperation({
    summary: 'Add new Users',
    operationId: 'AddUsers',
  })
  @ApiResponse({ status: 200, type: RoomDto })
  @Post()
  async create(@Body() job: RoomDto): Promise<RoomDto> {
    return this.UserService.create(job);
  }

  @ApiOperation({ summary: 'Get all Users', operationId: 'GetUserss' })
  @ApiResponse({ status: 200, type: RoomDto })
  @Get()
  async findAll(): Promise<RoomDto[]> {
    return this.UserService.findAll();
  }

  @ApiOperation({ summary: 'Get Users by id', operationId: 'GetUsers' })
  @ApiResponse({ status: 200, type: RoomDto })
  @Get(':userID')
  async findOne(@Param('userID') id: number): Promise<RoomDto> {
    return this.UserService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Users by id',
    operationId: 'UpdateUsers',
  })
  @ApiResponse({ status: 200, type: RoomDto })
  @Put(':userID')
  async update(@Param('userID') id: number, @Body() job: RoomDto) {
    return this.UserService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Users by id',
    operationId: 'DeleteUsers',
  })
  @ApiResponse({ status: 200, type: RoomDto })
  @Delete(':userID')
  async delete(@Param('userID') id: number) {
    return this.UserService.deleteOne(id);
  }
}
