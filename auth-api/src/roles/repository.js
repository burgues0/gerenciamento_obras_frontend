import db from "../../db.js";

const tabela = "roles";

export const create = async (dados) => {
  const dadosMapeados = {
    nome: dados.nome,
    user_email: dados.user_email,
    permissao: dados.permissao,
  };
  const result = await db(tabela).insert(dadosMapeados).returning("*");

  return result;
};

export const findAll = async () => {
  const modulos = await db(tabela).select("*");

  return modulos.map((modulos) => ({
    id: modulos.id,
    nome: modulos.nome,
  }));
};

export const findOne = async (id) => {
  const modulos = await db(tabela).where({ id }).first();

  if (modulos) {
    return {
      id: modulos.id,
      nome: modulos.nome,
    };
  }
  return null;
};

export const update = async (id, dados) => {
  const dadosMapeados = {
    nome: dados.nome,
  };

  const result = await db(tabela)
    .where({ id })
    .update(dadosMapeados)
    .returning("*");

  if (!result || result.length === 0) {
    throw new Error("Nenhum registro foi atualizado.");
  }
  return result[0];
};

export const patch = async (id, dados) => {
  const dadosMapeados = {
    nome: dados.nome,
  };

  const result = await db(tabela)
    .where({ id })
    .update(dadosMapeados)
    .returning("*");

  if (!result || result.length === 0) {
    throw new Error("Nenhum registro foi atualizado.");
  }
  return result[0];
};

export const remove = async (id) => {
  const result = await db(tabela).where({ id }).delete().returning("*");

  if (!result || result.length === 0) {
    throw new Error("Nenhum registro foi removido.");
  }
  return result[0];
};

export const repository_roles = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
