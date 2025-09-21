// src/index.ts
console.log("🚀 TypeScript ejecutándose desde VS Code Terminal!");
console.log("✅ Entorno configurado correctamente");

// Ejemplo de función TypeScript
const saludar = (nombre: string): string => {
    return `¡Hola ${nombre}! desde TypeScript`;
};

console.log(saludar("MacBook Air 2017"));

// Ejemplo con interfaz
interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

const usuario: Usuario = {
    id: 1,
    nombre: "Usuario macOS",
    email: "usuario@macbook.com"
};

console.log("Usuario:", usuario);