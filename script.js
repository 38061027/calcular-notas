function media(){
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    

    var media = (nota1 + nota2)/2 ;


    if(media >= 6)
     if(media==10)
      alert("Uau! Aluno aprovado com distinção! Média: " +media);
     else
      alert("Aluno aprovado! Média: " +media);
    else
     alert("Aluno reprovado! Média: " +media)

   }