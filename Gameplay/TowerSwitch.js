#pragma strict

//adding this script to the last wall

var tower1:GameObject;//gameobejct dragged on
var tower2:GameObject;

var tower1Camera:Camera;//add cammera on the tower
var tower2Camera:Camera;

private var tower1Control:shoot;
private var tower2Control:shoot;

private var tower1Look:MouseLook;//mouselook.js is on the gameobeject
private var tower2Look:MouseLook;



function Start () {
   //change find("") to the objects which have the shoot.js on
   tower1Control = tower1.Find("GameObject3").GetComponent(shoot);
   tower2Control = tower2.Find("GameObject_test").GetComponent(shoot);

   tower1Look = tower1.GetComponent(MouseLook);
   tower2Look = tower2.GetComponent(MouseLook);

   tower1Camera.enabled = true;
   tower2Camera.enabled = false;
   tower1Control.enabled = true;
   tower2Control.enabled = false;
   tower1Look.enabled = true;
   tower2Look.enabled = false;
}

function Update () {
  //press one change view

  if(Input.GetKeyDown("1"))
  {
  	tower1Camera.enabled =! tower1Camera.enabled;
  	tower2Camera.enabled =! tower2Camera.enabled;
  	tower1Control.enabled =! tower1Control.enabled;
  	tower2Control.enabled =! tower2Control.enabled;
    tower1Look.enabled =! tower1Look.enabled;
    tower2Look.enabled =! tower2Look.enabled;
  }
 }
  