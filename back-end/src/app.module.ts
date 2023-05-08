import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { User } from './users/user.entity';
import { Report } from './reports/report.entity';
import { AdmService } from './users/adm/adm.service';
import { AdmModule } from './users/adm/adm.module';
import { AdmController } from './users/adm/adm.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'bd.sqlite',
      entities: [User, Report],
      synchronize: true,
    }),
    UsersModule,
    ReportsModule,
    AdmModule,
  ],
  controllers: [AppController, AdmController],
  providers: [AppService, AdmService],
})

export class AppModule {}
