
#pragma strict
static var enemyHit:int;
static var gateHeal=50;
var flag=false;
//var waitTime=Time.time;
private var waitTime : float;
function Update () {
	//print(enemyHit);
	if(flag){
		waitTime=Time.time;
		gateHeal=gateHeal-enemyHit;
		flag=false;
	}
	if(Time.time>(waitTime+1)){
		flag=true;
	}
	if(gateHeal<=0){
		gateHeal=0;
		Destroy(gameObject);
	}
}

//show gate health above the gate
function OnGUI()
{
	var targetPos:Vector2;
	targetPos = Camera.main.WorldToScreenPoint (transform.position);
	GUI.Box(new Rect(targetPos.x, Screen.height- targetPos.y, 60, 20), gateHeal + "/" + 50);
}