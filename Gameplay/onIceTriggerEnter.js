#pragma strict
var stage=0;
var myTimer : float =5.0;
var triggerHit : float = 4.0;

function Start () {

}

function Update () {
	if(stage==1 && myTimer > 0)
	{
		myTimer-=Time.deltaTime;
	}
	else if(stage==1 && myTimer < 0)
	{
		stage=0;
		FollowPath.speed = 5.0;
		myTimer=5.0f;
	}
	
	

}

function OnTriggerEnter (other : Collider) {
	if(other.gameObject.tag == "ice")
	{
		
		FollowPath.speed = 0.0;
		//print("1");
		stage=1;
	}
	

}
/*function OnTriggerExit (other : Collider) {
	if(other.gameObject.tag == "ice")
	{
		FollowPath.speed = 5.0;
		print("2");
	}

}*/


