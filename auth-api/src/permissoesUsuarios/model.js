export class permissoesUsuarios {
  constructor({ id_usuario, id_permissao}) {
    this.id_usuario = id_usuario;
    this.id_permissao = id_permissao;
  }

  static validate(dados) {
    if (!dados.id_usuario || !dados.id_permissao) {
      throw new Error("Campos são obrigatórios");
    }
  }
}
