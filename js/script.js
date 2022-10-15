
const patients = [
  {
    name:"",
    age:"",
    weight:"",
    height:"",
    telephone:""
  }
]

let userOption


while(userOption != 4) {

  userOption = Number(prompt(`~ Seja Bem vindo(a) a Healthy Heart ~

    Digite o número da opção desejada:

    1. Cadastrar paciente
    2. Ver seus dados de cadastro
    3. Apagar seus dados
    4. Sair da aplicação
    `) )

  switch(userOption) {
    case 1:
      patients[0].name = prompt(`Digite o seu nome:`)
      patients[0].age = prompt(`Digite a sua idade:`)
      patients[0].weight = prompt(`Digite o seu peso, exemplo: 60`)
      patients[0].height = prompt(`Digite a sua altura, exemplo: 160`)
      patients[0].telephone = prompt(`Digite o número do seu telefone, exemplo: XXXXXXXXXX`)

      alert(`Paciente cadastrado com sucesso!`)
    break
  
    case 2:

      if(patients[0].name.length == 0 && patients[0].age.length == 0 && patients[0].weight.length == 0 && patients[0].height.length == 0 && patients[0].telephone.length == 0) {

        alert(`Não há dados cadastrados.`)
        
      } else {

        alert(` Dados cadastrados:
        
        Nome: ${patients[0].name}
        Idade: ${patients[0].age}
        Peso: ${patients[0].weight}
        Altura: ${patients[0].height}
        Telefone: ${patients[0].telephone}`)
      }
     
    break
  
    case 3:
      
      if(patients[0].name.length == 0 && patients[0].age.length == 0 && patients[0].weight.length == 0 && patients[0].height.length == 0 && patients[0].telephone.length == 0) {

        alert(`Não há dados a serem apagados no momento.`)

      } else {

          patients[0].name = ""
          patients[0].age = ""
          patients[0].weight = ""
          patients[0].height = ""
          patients[0].telephone = ""
      
          alert(`Seus dados foram apagados com sucesso!`)
          }      
    break
  
    case 4:
      alert(`Obrigado por utilizar os nossos serviços. Até a próxima!`)
    break
  
    default:
    alert(`Opção inválida. Tente novamente...`)
  
  }
}





