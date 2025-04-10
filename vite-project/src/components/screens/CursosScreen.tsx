import { CursoCard } from "../ui/CursoCard";
import { ICurso } from "../../types/ICurso";
import { getAllCursos } from "../../http/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const CursosScreen = () => {
  const [cursos, setCursos] = useState<ICurso[]>([]);
  const navigate = useNavigate(); // Hook para navegar entre rutas

  const getCursos = async () => {
    const data = await getAllCursos();
    if (data) setCursos(data);
  };

  useEffect(() => {
    getCursos();
  }, []);

  const handleCursoClick = (cursoId: number) => {
    navigate(`/curso/${cursoId}`); // Navegar a la ruta dinámica con el ID del curso
  };

  return (
    <div>
      <h1>Cursos:</h1>
      {cursos.map((curso) => (
        <div key={curso.id} onClick={() => handleCursoClick(curso.id)} style={{ cursor: "pointer" }}>
          <CursoCard curso={curso} />
        </div>
      ))}
    </div>
  );
};
