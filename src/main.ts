import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //http://localhost:8080 : https://jakasdomena.com
  const hostDomain = AppModule.isDev ? `${AppModule.host}: ${AppModule.port}` : AppModule.host;

  const swaggerOptions = new DocumentBuilder()
    .setTitle(' Zbójowy Nest MEAN')
    .setDescription('API Doc')
    .setVersion('1.0.0')
    .setHost(hostDomain.split('//')[1])
    .setSchemes(AppModule.isDev ? 'http' : 'https')
    .setBasePath('/api')
    .addBearerAuth('Authorization', 'header')
    .build();

  const swaggerDoc = SwaggerModule.createDocument(app, swaggerOptions);

  app.use('/api/docs/swagger.json', (req, res) => {
    res.send(swaggerDoc);
  });

  SwaggerModule.setup('/api/docs', app, swaggerDoc, {
    swaggerUrl: `${hostDomain}/api/docs-json`,
    explorer: true,
    swaggerOptions: {
      docExpansion: 'list',
      filter: true,
      showRequestDuration: true,
    },
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close())
  }
  app.setGlobalPrefix('api');
  // app.useGlobalFilters(new HttpExceptionFilter());
// process.env.PORT || 3000
  await app.listen(AppModule.port);
}

bootstrap();
