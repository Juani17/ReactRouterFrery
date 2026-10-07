# Cursos y estudiantes — React Router

Práctica académica de navegación entre un listado de cursos y sus estudiantes. Implementada con React, TypeScript, React Router, Axios y Vite. JSON Server utiliza los datos de `vite-project/db.json`.

## Ejecución

La aplicación se encuentra en `vite-project/`; el `package.json` de la raíz no contiene los scripts del frontend.

```bash
cd vite-project
npm install
npm run bdDev
```

En otra terminal, también dentro de `vite-project/`, ejecutar `npm run dev`. El cliente consulta `http://localhost:3001/cursos`, coherente con el puerto del script `bdDev`. Node.js y npm son necesarios.

`src/routes/` define la navegación; `src/components/screens/` contiene las pantallas y `src/http/api.ts` las consultas HTTP. También están disponibles `npm run build`, `npm run lint` y `npm run preview`.

Ejercicio de frontend con datos simulados; se conserva el código original.
