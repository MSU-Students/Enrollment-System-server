import { RoomDto } from 'src/entities/room.dto';
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
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @ApiBody({ type: RoomDto })
  @ApiOperation({
    summary: 'Add new Rooms',
    operationId: 'AddRooms',
  })
  @ApiResponse({ status: 200, type: RoomDto })
  @Post()
  async create(@Body() job: RoomDto): Promise<RoomDto> {
    return this.roomService.create(job);
  }

  @ApiOperation({ summary: 'Get all Rooms', operationId: 'GetRooms' })
  @ApiResponse({ status: 200, type: RoomDto })
  @Get()
  async findAll(): Promise<RoomDto[]> {
    return this.roomService.findAll();
  }

  @ApiOperation({ summary: 'Get Rooms by id', operationId: 'GetRoomById' })
  @ApiResponse({ status: 200, type: RoomDto })
  @Get(':roomID')
  async findOne(@Param('roomID') id: number): Promise<RoomDto> {
    return this.roomService.findOne(id);
  }
  @ApiOperation({
    summary: 'Update Rooms by id',
    operationId: 'UpdateRoom',
  })
  @ApiResponse({ status: 200, type: RoomDto })
  @Put(':roomID')
  async update(@Param('roomID') id: number, @Body() job: RoomDto) {
    return this.roomService.update(id, job);
  }

  @ApiOperation({
    summary: 'Delete Rooms by id',
    operationId: 'DeleteRoom',
  })
  @ApiResponse({ status: 200, type: RoomDto })
  @Delete(':roomID')
  async delete(@Param('roomID') id: number) {
    return this.roomService.deleteOne(id);
  }
}
