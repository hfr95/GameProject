#pragma strict
var shuriken : GameObject;//Invoca o objecto shuriken
var y : float;//Variavel de posiçao
var quant : int = 0;//Contador de execuçoes para o instanciamento de uma nova shuriken


function Start () {
          

}

function Update () {
        if (quant==20){//Condiçao que mantem um intervalo entre os instanciamentos
            
            y=Random.Range(-6.85,7.02);//Gera valores randomicos para y de acordo com os valores possiveis do tamanho do mapa
            Instantiate(shuriken,Vector3(9.59,y,0),Quaternion.identity);//Instancia uma shuriken de acordo com os dados de posiçao
            quant=0;//Zera contador para reiniciar o processo
        }
        else
            quant++;    //Adiciona ao contador avançando a cada execuçao
}