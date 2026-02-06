export interface AutorizacionResponse {
    Token: string;
    Resultado: boolean;
    Msg: string;
    Datos?: InfoUsuario;
}

interface InfoUsuario{
    ID_USUARIO: string;
    NOMBREUSUARIO: string;
    NOMBRE: string;
    APELLIDOPATERNO: string;
    APELLIDOMATERNO: string;
    ID_ROL: string;
    DESCRIPCION: string;
}
