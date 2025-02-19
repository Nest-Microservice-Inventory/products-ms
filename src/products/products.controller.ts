import { Controller, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @MessagePattern("createProduct")
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @MessagePattern("findAllProducts")
  findAll() {
    console.log("productos")
    return this.productsService.findAll();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.productsService.findOne(slug);
  }

  @Patch(':term')
  update(@Param('term') term: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(term, updateProductDto);
  }

  @Delete(':term')
  remove(@Param('term') term: string) {
    return this.productsService.remove(term);
  }
}
