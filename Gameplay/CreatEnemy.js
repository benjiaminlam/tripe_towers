//set on the spellpoint
#pragma strict

enum attributes {earth, fire, ice};// three attribution on enemy

var enemyCreatSwitch=false;
private var waitCreat : float;
var projectile : Rigidbody;
var totalEnemyNumber=10; //one wave has 10 enemy 
public static var attribut;
var test=0;
function start(){
}

function Update () {
	if(test==0){
		attribut =getAttributes();
		test=1;
	}
	if(enemyCreatSwitch && totalEnemyNumber>0){
		//attribut =getAttributes();
		waitCreat=Time.time;
		var enemy : Rigidbody = Instantiate(projectile,transform.position,transform.rotation);
		Debug.Log(attribut);
		totalEnemyNumber--;
		enemyCreatSwitch = false; //can not produce new enemy and wait
	}
	if(Time.time>(waitCreat+2)) //create enemy wave using time control
	{
		enemyCreatSwitch=true; //produce new enemy
	}
	if (totalEnemyNumber == 0 && Time.time>(waitCreat+8)){
		totalEnemyNumber = 10;
		attribut =getAttributes();
		
	}
}

public static function getAttributes()
{
  if(Random.value>=0 && Random.value < 0.33)
  {
     return "earth";
  }
  else if(Random.value >= 0.33 && Random.value < 0.66)
  {
     return "fire";
  }
  else 
  {
  	return "ice";
  }
  
}