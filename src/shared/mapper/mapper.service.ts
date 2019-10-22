import {AutoMapper, Mapper, Configuration} from 'automapper-nartc';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MapperService {
  mapper: AutoMapper;

  constructor() {
    this.mapper = Mapper;
    this.initializeMapper();
  }

  private initializeMapper(): void {
    this.mapper.initialize(MapperService.configure);
  }

  private static configure(config: Configuration): void {
    // config.createMap(User, UserVm)
    //         .forMember("fullName", opts => opts.mapFrom(s => s.fullName));
    //     config.createMap(Todo, TodoVm);
  }
}

