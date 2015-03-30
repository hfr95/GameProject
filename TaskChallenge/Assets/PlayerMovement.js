#pragma strict
var up : KeyCode;//Relaciona uma tecla fisica a variavel utilizando como entrada de comando
var down : KeyCode;
var speed : float = 2;//Determina a velocidade de deslocamento do objeto durante sua movimentaçao
var ninja : GameObject;//Invoca o objeto player para manuseio interno pelo codigo
var robe : GameObject;
var animator : Animator;
var animRobe : Animator;
var yAx : float;
var xAx : float;
function Start () {
    
}

function Update () {
         //Bloco de movimentaçao de configuraçao de teclado padrao
        /* yAx = ninja.transform.position.y;
         if(Input.GetKey(up)){
           rigidbody2D.velocity.y=speed;
           animator.SetFloat("Speed",speed);
           animRobe.SetFloat("Speed",speed);
           
           xAx = ninja.transform.position.x;
           xAx-=0.02;
           yAx-=0.079;
           
         }
         else if(Input.GetKey(down))
           rigidbody2D.velocity.y=speed*-1;
         else{  
           rigidbody2D.velocity.y=0;
           animator.SetFloat("Speed",0);    
           animRobe.SetFloat("Speed",0);
           //Mantem o item Robe na mesma posiçao do personagem durante o repouso
           xAx=-0.186;
           yAx=yAx-0.0002;
         }  
         robe.transform.position.y=yAx;
         robe.transform.position.x=xAx;
      */ 
    //Bloco experimental de controle de toque sensivel do sistema android
    //Apresenta falhas       
    yAx = ninja.transform.position.y;
    if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Moved) {
		    
			// Get movement of the finger since last frame
			var touchDeltaPosition:Vector2 = Input.GetTouch(0).deltaPosition;
			if(touchDeltaPosition.y>0){
			   animator.SetFloat("Speed",speed);
               animRobe.SetFloat("Speed",speed);
               xAx = ninja.transform.position.x;
               xAx-=0.02;
               yAx-=0.079;
               GetComponent.<Rigidbody2D>().velocity.y=speed;
			}
			else{
			    GetComponent.<Rigidbody2D>().velocity.y=speed*-1;
			}
			    
                //Mantem o item Robe na mesma posiçao do personagem durante o repouso
                
		
			// Move object across XY plane
			
			//transform.Translate (0,touchDeltaPosition.y*0.2, 0);
	}
	else{
         GetComponent.<Rigidbody2D>().velocity.y=0;
         xAx=-0.186;
         yAx=yAx-0.0002; 
         animator.SetFloat("Speed",0);    
         animRobe.SetFloat("Speed",0);
         
     }
     robe.transform.position.y=yAx;
     robe.transform.position.x=xAx;
}
function OnCollisionEnter2D(coll: Collision2D){//Funçao nativa da coleçao unity que testa eventos de colisao dos objetos descritos
         if(coll.gameObject.tag == "Shuriken"){
            Destroy(ninja);
            Application.LoadLevel("GameOver");
         }
         
}