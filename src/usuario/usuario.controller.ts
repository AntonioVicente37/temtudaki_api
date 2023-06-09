import { Controller, Get, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller()
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) { }

 }
