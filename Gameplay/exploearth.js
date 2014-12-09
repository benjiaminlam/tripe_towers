//set trigger after spell on the enemy
#pragma strict

var explosion : GameObject;
var triggerEarth : GameObject;
//var icetime=5;
//var stage;


function Start () {

}

function Update () {
	


}

function OnCollisionEnter () {
	Instantiate(explosion, transform.position, transform.rotation);
	Instantiate(triggerEarth, transform.position, transform.rotation);
	Destroy(gameObject);
	
}