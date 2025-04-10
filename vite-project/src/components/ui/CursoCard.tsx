import React from "react";
import { ICurso } from "../../types/ICurso";

interface CursoCardProps {
  curso: ICurso;
}

export const CursoCard: React.FC<CursoCardProps> = ({ curso }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", margin: "16px", borderRadius: "8px" }}>
      <h2>{curso.nombre}</h2>
    </div>
  );
};