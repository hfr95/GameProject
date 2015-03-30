#pragma strict

var shuriken : GameObject;//Chama o objeto referido para manuseio




function OnCollisionEnter2D(coll: Collision2D){//Funçao nativa da coleçao unity que testa eventos de colisao dos objetos descritos
         if(coll.gameObject.GetComponent.<Collider2D>()){
            Destroy(shuriken);
         }
         
}  
 
   
function Start () {
         
         
}

function Update () {
         if(shuriken.transform.position.y<7){//Condiçao para somente movimentar as shurikens dentro do ambiente de jogo, exceçao a shuriken original
            GetComponent.<Rigidbody2D>().velocity.x = -5;//Movimenta a shuriken constantemente
         }
         
}