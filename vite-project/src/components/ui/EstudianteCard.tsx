import React from "react";
import { IEstudiante } from "../../types/IEstudiante";

interface EstudianteCardProps {
  estudiante: IEstudiante; // Prop que recibe un estudiante
}

export const EstudianteCard: React.FC<EstudianteCardProps> = ({ estudiante }) => {
  return (
    <div style={styles.card}>
      <h3>{estudiante.nombre}</h3>
      <p><strong>Edad:</strong> {estudiante.edad}</p>
      <p><strong>Curso ID:</strong> {estudiante.cursoId}</p>
    </div>
  );
};

// Estilos básicos para la tarjeta
const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
};