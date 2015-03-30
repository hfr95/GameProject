#pragma strict
var map : Sprite;
var sr : SpriteRenderer;
function Start () {
         var mapa = new GameObject ("mapa");
         mapa.transform.position.x=0;
         mapa.transform.position.y=0;
         mapa.transform.position.z=0;
         mapa.transform.localScale.x=4;
         mapa.transform.localScale.y=4;
         mapa.AddComponent(SpriteRenderer);
         sr = mapa.GetComponent(SpriteRenderer);
         sr.sprite = map;
         
}

function Update () {

}