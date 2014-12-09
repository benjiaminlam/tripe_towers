//set trigger after spell on the enemy
#pragma strict

var explosion : GameObject;
var triggerIce : GameObject;
//var icetime=5;
//var stage;


function Start () {

}

function Update () {
	


}

function OnCollisionEnter () {
	Instantiate(explosion, transform.position, transform.rotation);
	Instantiate(triggerIce, transform.position, transform.rotation);
	Destroy(gameObject);
	
	
	
	
	

}