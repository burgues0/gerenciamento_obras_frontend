// @ts-nocheck
import { usuariosService } from "./service.js";
import { sendWelcomeEmail } from "../magicAuth/emailService.js";
import { throwNotFound, throwConflict } from "../utils/errors.js";

export const getAllUsuarios = async (_, res, next) => {
  try {
    const usuarios = await usuariosService.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    next(error);
  }
};

export const getUsuario = async (req, res, next) => {
  try {
    const { id } = req.params;
    const usuario = await usuariosService.findOne(id);

    if (!usuario) {
      throwNotFound("Usuário");
    }

    res.status(200).json(usuario);
  } catch (error) {
    next(error);
  }
};

export const createUsuario = async (req, res, next) => {
  try {
    const { nome, email, senha } = req.validatedData; // Dados já validados pelo middleware

    const existingUser = await usuariosService.findByEmail(email);
    if (existingUser) {
      throwConflict("Email já está em uso.");
    }

    const novoUsuario = await usuariosService.create({
      nome,
      email,
      senha,
    });

    try {
      await sendWelcomeEmail(email, nome);
    } catch (emailError) {
      console.warn(
        "Usuário criado, mas falha ao enviar e-mail de boas-vindas:",
        emailError.message
      );
    }

    res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (error) {
    next(error);
  }
};

export const updateUsuario = async (req, res, next) => {
  try {
    const { id } = req.params;
    const dadosParaAtualizar = req.validatedData; // Dados já validados pelo middleware

    const usuarioExistente = await usuariosService.findOne(id);
    if (!usuarioExistente) {
      throwNotFound("Usuário");
    }

    // Verificar se o email já está em uso por outro usuário
    if (dadosParaAtualizar.email) {
      const existingUserWithEmail = await usuariosService.findByEmail(
        dadosParaAtualizar.email
      );
      if (existingUserWithEmail && existingUserWithEmail.id.toString() !== id) {
        throwConflict("Email já está em uso por outro usuário.");
      }
    }

    await usuariosService.update(id, dadosParaAtualizar);
    res.status(200).json({ message: "Usuário atualizado com sucesso" });
  } catch (error) {
    next(error);
  }
};

export const patchUsuario = async (req, res, next) => {
  try {
    const { id } = req.params;
    const dados = req.body;

    const usuarioExistente = await usuariosService.findOne(id);
    if (!usuarioExistente) {
      throwNotFound("Usuário");
    }

    await usuariosService.update(id, dados);
    res.status(200).json({ message: "Usuário atualizado com sucesso" });
  } catch (error) {
    next(error);
  }
};

export const deleteUsuario = async (req, res, next) => {
  try {
    const { id } = req.params;

    const usuarioExistente = await usuariosService.findOne(id);
    if (!usuarioExistente) {
      throwNotFound("Usuário");
    }

    await usuariosService.remove(id);
    res.status(200).json({ message: "Usuário removido com sucesso" });
  } catch (error) {
    next(error);
  }
};
