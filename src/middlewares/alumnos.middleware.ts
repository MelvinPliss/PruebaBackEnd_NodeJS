import { Request, Response, NextFunction } from 'express';

// Middleware para validar creación (sin id_alumno)
export const validarAlumnoCrear = (req: Request, res: Response, next: NextFunction) => {
  const {
    matricula,
    nombre,
    apellido_paterno,
    apellido_materno,
    fecha_de_nacimiento,
    genero,
    estatus,
    id_grado
  } = req.body;

  if (!matricula || !nombre || !apellido_paterno || !apellido_materno || !fecha_de_nacimiento || !genero || !estatus || !id_grado) {
    res.status(400).json({ error: 'Todos los campos son obligatorios excepto id_alumno' });
  } else if (isNaN(Number(id_grado))) {
    res.status(400).json({ error: 'id_grado debe ser un número entero' });
  } else if (isNaN(Date.parse(fecha_de_nacimiento))) {
    res.status(400).json({ error: 'fecha_de_nacimiento debe ser una fecha válida (YYYY-MM-DD)' });
  } else {
    next(); 
  }

  // ✅ importante
};

// Middleware para validar actualización (sí requiere id en la URL)
export const validarAlumnoActualizar = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const {
    matricula,
    nombre,
    apellido_paterno,
    apellido_materno,
    fecha_de_nacimiento,
    genero,
    estatus,
    id_grado
  } = req.body;

  if (!id || isNaN(Number(id))) {
    res.status(400).json({ error: 'El id_alumno en la URL es obligatorio y debe ser número' });
  } else if (!matricula || !nombre || !apellido_paterno || !apellido_materno || !fecha_de_nacimiento || !genero || !estatus || !id_grado) {
    res.status(400).json({ error: 'Todos los campos son obligatorios' });
  } else if (isNaN(Number(id_grado))) {
    res.status(400).json({ error: 'id_grado debe ser un número entero' });
  } else if (isNaN(Date.parse(fecha_de_nacimiento))) {
    res.status(400).json({ error: 'fecha_de_nacimiento debe ser una fecha válida (YYYY-MM-DD)' });
  } else {
    next();
  }
};
