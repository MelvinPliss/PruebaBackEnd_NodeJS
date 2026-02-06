export interface Alumno {
    id_alumno: number;
    matricula: string;
    nombre: string;
    apellido_paterno: boolean | null;
    apellido_materno: string | null;
    fecha_de_nacimiento: Date;
    estatus: string;
    genero: string;
    id_grado: number;
}