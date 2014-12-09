//tower attack control


#pragma strict

var projectile1 : Rigidbody;
var projectile2 : Rigidbody;
var projectile3 : Rigidbody;
var projectile4 : Rigidbody;
var projectile5 : Rigidbody;

static var getText : GameObject;


var speed : float = 80;
var myTimer : float = 0;
var stage=0;
var sound : AudioClip;

function Start () {
	audio.clip = sound;
	getText = GameObject.Find("gtest");
}

function Update () {
	getText.guiText.text == "null"; //set the gesture then spell
	if(Input.GetButtonDown("Fire1"))
	{
		var shoot : Rigidbody =
			Instantiate(projectile1, transform.position, transform.rotation);
		shoot.velocity=transform.TransformDirection(Vector3(0,0,speed));
		Physics.IgnoreCollision(transform.root.collider, shoot.collider);
		
		audio.Play();
	}
//	else if(Input.GetButtonDown("ice") && myTimer <= 0)
	else if(getText.guiText.text == "square" && myTimer <= 0)
	{
		var shoot2 : Rigidbody =
			Instantiate(projectile2, transform.position, transform.rotation);
		shoot2.velocity=transform.TransformDirection(Vector3(0,0,speed));
		Physics.IgnoreCollision(transform.root.collider, shoot2.collider);
		myTimer=5.0f;
		stage=1;
		//getText.guiText.text == "null";
		
	}
//	else if(Input.GetButtonDown("earth") && myTimer <= 0)
	else if(getText.guiText.text == "circle" && myTimer <= 0)
	{
		var shoot3 : Rigidbody =
			Instantiate(projectile3, transform.position, transform.rotation);
		shoot3.velocity=transform.TransformDirection(Vector3(0,0,speed));
		Physics.IgnoreCollision(transform.root.collider, shoot3.collider);
		myTimer=5.0f;
		stage=1;
//		getText.guiText.text == "null";
	}
//	else if(Input.GetButtonDown("fire") && myTimer <= 0)
	else if(getText.guiText.text == "triangle" && myTimer <= 0)
	{
		var shoot4 : Rigidbody =
			Instantiate(projectile4, transform.position, transform.rotation);
		shoot4.velocity=transform.TransformDirection(Vector3(0,0,speed));
		Physics.IgnoreCollision(transform.root.collider, shoot4.collider);
		myTimer=5.0f;
		stage=1;
//		getText.guiText.text == "null";
	}
//	else if(Input.GetButtonDown("lightning") && myTimer <= 0)
	else if(getText.guiText.text == "z" && myTimer <= 0)
	{
		var shoot5 : Rigidbody =
			Instantiate(projectile5, transform.position, transform.rotation);
		shoot5.velocity=transform.TransformDirection(Vector3(0,0,speed));
		Physics.IgnoreCollision(transform.root.collider, shoot5.collider);
		myTimer=5.0f;
		stage=1;
		getText.guiText.text == "null";
	}
	
	//print(stage);
	//print(myTimer+"          "+stage);
	if(stage==1 && myTimer > 0)
	{
		myTimer-=Time.deltaTime;
	}
	else if(stage==1 && myTimer < 0)
	{
		stage=0;
		
	}

}