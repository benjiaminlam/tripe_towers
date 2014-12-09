#pragma strict
var waitTime=0;
var Switch:CreatEnemy;

function Start () {
	Switch = gameObject.Find("EnemySpawnPoint2").GetComponent("CreatEnemy");
}

function Update () {
	
	test();
	
}


function test()
{
	if(waitTime==0)
	{
	waitTime = 1;
	yield WaitForSeconds(10);
	Switch.enabled= true;
	Debug.Log("!!!!!!!!!!!!!!!!!!!!!!!!!!");
	yield WaitForSeconds(10);
		Switch.enabled= false;
	waitTime = 0;
    }
}


