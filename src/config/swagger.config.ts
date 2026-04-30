import { DocumentBuilder } from '@nestjs/swagger';

export default new DocumentBuilder()
  .setTitle('Portfolio API')
  .setDescription('Portfolio API')
  .setVersion('1.0')
  .addTag('portfolio')
  .addBearerAuth()
  .build();