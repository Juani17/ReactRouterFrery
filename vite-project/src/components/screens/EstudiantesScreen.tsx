import { useEffect, useState } from "react";
import { EstudianteCard } from "../ui/EstudianteCard";
import { IEstudiante } from "../../types/IEstudiante";
import { getAllEstudiantesByCursoId } from "../../http/api";

interface EstudiantesScreenProps {
  cursoId: string; // ID del curso para filtrar estudiantes
}

export const EstudiantesScreen: React.FC<EstudiantesScreenProps> = ({ cursoId }) => {
  const [estudiantes, setEstudiantes] = useState<IEstudiante[]>([]);

  const getEstudiantes = async () => {
    try {
      const data = await getAllEstudiantesByCursoId(cursoId); // Usar el cursoId recibido como prop
      if (data) setEstudiantes(data);
    } catch (error) {
      console.error("Error al obtener estudiantes:", error);
    }
  };

  useEffect(() => {
    getEstudiantes();
  }, [cursoId]); // Ejecutar el efecto cuando cambie el cursoId

  return (
    <div>
      <h1>Estudiantes del Curso {cursoId}:</h1>
      {estudiantes.length > 0 ? (
        estudiantes.map((estudiante) => (
          <EstudianteCard key={estudiante.id} estudiante={estudiante} />
        ))
      ) : (
        <p>No hay estudiantes disponibles para este curso.</p>
      )}
    </div>
  );
};