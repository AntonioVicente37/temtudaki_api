import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UsuarioProviders } from './usuario.providers';
import { UsuarioService } from './usuario.service';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...UsuarioProviders,
        UsuarioService,
    ],
})
export class PhotoModule { }