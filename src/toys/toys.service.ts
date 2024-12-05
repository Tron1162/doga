import { Injectable } from '@nestjs/common';
import { CreateToyDto } from './dto/create-toy.dto';
import { UpdateToyDto } from './dto/update-toy.dto';
import { PrismaService } from 'src/prisma.service';
import { Toy } from '@prisma/client';

@Injectable()
export class ToysService {
  constructor(private prisma: PrismaService) {}

  async create(createToyDto: CreateToyDto): Promise<Toy> {
    return this.prisma.toy.create({ data: createToyDto });
  }

  async findAll(): Promise<Toy[]> {
    return this.prisma.toy.findMany();
  }

  async findOne(id: number): Promise<Toy> {
    return this.prisma.toy.findUnique({ where: { id } });
  }

  async update(id: number, updateToyDto: UpdateToyDto): Promise<Toy> {
    return this.prisma.toy.update({ where: { id }, data: updateToyDto });
  }

  async remove(id: number): Promise<Toy> {
    return this.prisma.toy.delete({ where: { id } });
  }
}
