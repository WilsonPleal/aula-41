const z = require("zod");
const { default: errorMap } = require("zod/locales/en.js");

const EsquemaDeUsuario = z.object({
  nome: z
    .string({ required_error: "O nome é obrigatório." })
    .trim()
    .min(3, { message: "O nome deve conter pelo menos três caractere." }),
  email: z
    .string({ required_error: "O email é obrigatório." })
    .email({ message: "O email deve ser um email válido." }),
  cpf: z
    .string({ required_error: "O CPF é obrigatório." })
    .trim()
    .min(11, { message: "O CPF deve conter 11 caracteres." }),
  senha: z
    .string({ required_error: "A senha é obrigatória." })
    .trim()
    .min(8, { message: "A senha deve conter pelo menos 8 caracteres." }),
});

function validadorDeUsuario(dados) {
  const validacao = EsquemaDeUsuario.safeParse(dados);

  if (!validacao.success) {
    console.error(validacao.error.format())
    return { error: validacao.error.format() };
  }

  return { error: null };
}

module.exports = validadorDeUsuario;