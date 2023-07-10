const ano_atual = 2023
let ano_nasc = prompt('Qual seu ano de nascimento?')
const nome = prompt('Qual seu nome?')
let idade = ano_atual - ano_nasc
const texto = 'Olá, seu nome é ' + nome + ' e você tem ' + idade + ' anos\n'
alert(texto)