function diminuiTamanho (){
    if (tamanhoSenha > 20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
const campoSenha = document.querySelector('#campo-senha');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ;
const letrasMaiusculas = 'abcdefghijklmnopqrstuvwxyz' ;
const numeros = '0123456789';
const simbulos = '!@%*?' ;
function geraSenha (){
    let alfabeto ='' ;
    }if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMaiusculas;
     }
     if (checkbox[2].checked){
        alfabeto = alfabeto + letrasMaiusculas ;
  }
  if (checkbox[3].checked){
        alfabeto = alfabeto + letrasMaiusculas;
}  
let senha = '';
for (let i = 0; i < tamanhoSenha; i++){
    let numeroAleatorio = Math.random () * alfabeto.length;
    numeroAleatorio = Math.floor (numeroAleatorio);
    senha = senha + alfabeto [numeroAleatorio];
}
campoSenha.value = senha;
classificasenha(alfabeto.length);{
}
function classificasenha( tamanhoalfabeto){
    
}