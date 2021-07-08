export const isCPF = (cpf: string) => {
  let sum = 0, rest: number, i: number

  // Sanitizing the received string
  cpf = cpf.replace(/[^\d]+/g,'')

  // Checking if all CPF digits are the same
  const regex = /^(.)\1+$/
  if (regex.test(cpf)) return false

  // CPF validation logic
  for (i = 1; i <= 9; i++)
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i)
  rest = (sum * 10) % 11

  if ((rest === 10) || (rest === 11))  rest = 0
  if (rest !== parseInt(cpf.substring(9, 10))) return false

  sum = 0
  for (i = 1; i <= 10; i++)
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i)
  rest = (sum * 10) % 11

  if ((rest === 10) || (rest === 11)) rest = 0
  if (rest !== parseInt(cpf.substring(10, 11))) return false
  return true
}

export const isPhone = (phone: string) => {
  // Checking if the string matches the required number pattern
  const regex = /^\(\d{2}\)[\s]\d{4,5}(-)\d{4}$/
  return regex.test(phone)
}

export const isCEP = (cep: string) => {
  // Checking if the string matches the required CEP pattern
  const regex = /^\d{5}(-)\d{3}$/
  return regex.test(cep)
}
