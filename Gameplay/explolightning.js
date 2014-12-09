#pragma strict

var explosion : GameObject;
var triggerLightning : GameObject;
//var icetime=5;
//var stage;


function Start () {

}

function Update () {
	


}

function OnCollisionEnter () {
	Instantiate(explosion, transform.position, transform.rotation);
	Instantiate(triggerLightning, transform.position, transform.rotation);
	Destroy(gameObject);
	
	
	
	
	

}