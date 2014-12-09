//mouse move

#pragma strict

var towerSpeed : float=1;

function Start () {

}

function Update () {
	var x = Input.GetAxis("Mouse X");
	print(x);
	var y = Input.GetAxis("Mouse Y");
	transform.Rotate(0,towerSpeed*x,0);
	transform.Rotate(towerSpeed*y,0,0);

}