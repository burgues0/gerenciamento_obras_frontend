// @ts-nocheck
import express from "express";
import cors from "cors";
import { swaggerDocument, swaggerUi } from "./swagger.js";
import usuarioRoutes from "./src/usuario/route.js";
import authRoutes from "./src/auth/auth.routes.js";
import passwordRoutes from "./src/passwordCheck/passwordRoutes.js";
import modulosRoutes from "./src/modulos/route.js";
import perfilRoutes from "./src/perfis/route.js";
import rolesRoutes from "./src/roles/route.js";
import permissoesRoutes from "./src/permissoes/route.js";
import auditoriaRoutes from "./src/auditoria/route.js";
import comentariosRoutes from "./src/comentarios/route.js";
import errorHandler from "./src/middlewares/errorHandler.js";

const app = express();
const port = 3001;

// CORS configuration
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002", "http://127.0.0.1:3000", "http://127.0.0.1:3001", "http://127.0.0.1:3002"], // Portas
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Permitir credenciais (cookies, authorization headers, etc..)
  })
);

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/usuarios", usuarioRoutes);
app.use("/", passwordRoutes);
app.use("/modulos", modulosRoutes);
app.use("/perfis", perfilRoutes);
app.use("/roles", rolesRoutes);
app.use("/permissoes", permissoesRoutes);
app.use("/auditoria", auditoriaRoutes);
app.use("/comentarios", comentariosRoutes);

// error handler
app.use(errorHandler);

// Swagger
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    docExpansion: "none",
  })
);
app.listen(port, () => {
  console.log(`\n🚀 Servidor rodando com sucesso em http://localhost:${port}`);
  console.log(`\n--------------------------------------------------`);
  console.log(`📜 Rotas Principais:`);
  console.log(`--------------------------------------------------`);
  console.log(`🔑 Autenticação:`);
  console.log(`  ➡️  POST /auth/login`);
  console.log(`  ➡️  POST /auth/validate`);
  console.log(`  ➡️  POST /auth/check`);
  console.log(`  ➡️  POST /auth/magic`);
  console.log(`\n👤 Usuários:`);
  console.log(`  ➡️  POST /usuarios`);
  console.log(`  ➡️  GET  /usuarios`);
  console.log(`  ➡️  GET  /usuarios/:id`);
  console.log(`  ➡️  PUT  /usuarios/:id`);
  console.log(`  ➡️  PATCH /usuarios/:id`);
  console.log(`  ➡️  DELETE /usuarios/:id`);
  console.log(`\n📄 Documentação:`);
  console.log(`  ➡️  GET  /api-docs (Swagger)`);
  console.log(`--------------------------------------------------\n`);
});
