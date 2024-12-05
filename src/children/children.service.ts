import { Injectable } from '@nestjs/common';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { PrismaService } from 'src/prisma.service';
import { Child } from '@prisma/client';

@Injectable()
export class ChildrenService {
  constructor(private prisma: PrismaService) {}

  async create(createChildDto: CreateChildDto): Promise<Child> {
    return this.prisma.child.create({ data: createChildDto });
  }

  async findAll(): Promise<Child[]> {
    return this.prisma.child.findMany({ include: { toys: true } });
  }

  async findOne(id: number): Promise<Child> {
    return this.prisma.child.findUnique({ where: { id }, include: { toys: true } });
  }

  async update(id: number, updateChildDto: UpdateChildDto): Promise<Child> {
    return this.prisma.child.update({ where: { id }, data: updateChildDto });
  }

  async remove(id: number): Promise<Child> {
    return this.prisma.child.delete({ where: { id } });
  }

  async addToyToChild(childId: number, toyId: number): Promise<Child> {
    await this.prisma.toy.update({
      where: { id: toyId },
      data: { childId },
    });
    return this.findOne(childId);
  }
}
