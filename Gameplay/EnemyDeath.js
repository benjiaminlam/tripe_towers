

var enemy=10;// 1st wave has 10 enemies
var stage=0;
var colliderstage=0;
var myTimer : float =5.0;
var triggerHit : float = 4.0;
var speed = 5.0;
var rotationSpeed = 5.0;
var pickNextPathpointDistance = 2.0;

var damage : int;
var enemiesSpeed : int;
var slowTime : int;

@script RequireComponent(CharacterController)

function Start() {
	Patrol();
}
function Update () {
	//check the skill is triggered or not
	if(stage==1 && myTimer > 0)
	{
		myTimer-=Time.deltaTime;
	}
	else if(stage==1 && myTimer < 0)
	{
		stage=0;
		speed = 5.0;
		myTimer=5.0f;
	}
}

function Patrol () {
	var curPathPoint = AutoPathPoint.FindClosest(transform.position);
	while (true) {
		var pathpointPosition = curPathPoint.transform.position;
		if (Vector3.Distance(pathpointPosition, transform.position) < pickNextPathpointDistance)
			if (curPathPoint.nextPathPoint)
				curPathPoint = curPathPoint.nextPathPoint;
		MoveTowards(pathpointPosition);
		yield;
	}
}

function MoveTowards(position : Vector3) {
	var direction = position - transform.position;

	if (direction.magnitude < 0.5) {
		SendMessage("SetSpeed", 0.0, SendMessageOptions.DontRequireReceiver);
		return;
	}
	
	transform.rotation = Quaternion.Slerp (transform.rotation, Quaternion.LookRotation(direction), rotationSpeed * Time.deltaTime);
	transform.eulerAngles = Vector3(0, transform.eulerAngles.y, 0);

	var forward = transform.TransformDirection(Vector3.forward);
	var speedModifier = Vector3.Dot(forward, direction.normalized);
	speedModifier = Mathf.Clamp01(speedModifier);

	direction = forward * speed * speedModifier;
	GetComponent (CharacterController).SimpleMove(direction);
	
	SendMessage("SetSpeed", speed * speedModifier, SendMessageOptions.DontRequireReceiver);	
}

function OnTriggerEnter (other : Collider) {
	if(other.gameObject.tag == "ice")
	{
		if(CreatEnemy.attribut == "ice") 
		{
			DamageForIceEnemies(0,0,0); // the attack damage set initially 
		}
		else if(CreatEnemy.attribut == "fire")
		{
			DamageForFireEnemies(6,0,0);
		}
		else if(CreatEnemy.attribut == "earth")
		{
			DamageForEarthEnemies(2,0,0);
		}
	}
	if(other.gameObject.tag == "earth")
	{
		if(CreatEnemy.attribut == "ice")
		{
			DamageForIceEnemies(6,2.0,0);	
		}
		else if(CreatEnemy.attribut == "fire")
		{
		   DamageForFireEnemies(2,2.0,0);
		}
		else if(CreatEnemy.attribut == "earth")
		{
			DamageForEarthEnemies(0,2.0,0);
		}	
	}
	if(other.gameObject.tag == "fire")
	{
		if(CreatEnemy.attribut == "ice")
		{
			DamageForIceEnemies(2,5.0,0);
		}
		else if(CreatEnemy.attribut == "fire")
		{
			DamageForFireEnemies(0,5.0,0);
		}
		else if(CreatEnemy.attribut == "earth")
		{
			DamageForEarthEnemies(6,5.0,0);
		}
	}
	if(other.gameObject.tag == "lightning")
	{
		DamageForEarthEnemies(10,5.0,0);
	}
	SetNull();
}

//ice damage
function DamageForIceEnemies(damage,enemiesSpeed,slowTime){
	speed =	enemiesSpeed;
	if(enemy>0)
	{
		enemy-=damage*tradeSystem.skillLevel; //change damage after the skill level
	}
	if(enemy<=0)
	{
		collider.isTrigger = true;
		transform.Translate(0, -100, 0);
		yield WaitForSeconds (1);
		Destroy(gameObject);
		CoinsCounter.coins++;
	}
}

//fire spell
function DamageForFireEnemies(type,enemiesSpeed,slowTime){
	speed =	enemiesSpeed;
	if(enemy>0)
	{
		enemy-=damage*tradeSystem.skillLevel;
	}
	if(enemy<=0)
	{
		collider.isTrigger = true;
		transform.Translate(0, -100, 0);
		yield WaitForSeconds (1);
		Destroy(gameObject);
		CoinsCounter.coins++;
	}
}
//earth spell
function DamageForEarthEnemies(type,enemiesSpeed,slowTime){
	speed =	enemiesSpeed;
	if(enemy>0)
	{
		enemy-=damage*tradeSystem.skillLevel;
	}
	if(enemy<=0)
	{
		collider.isTrigger = true;
		transform.Translate(0, -100, 0);
		yield WaitForSeconds (1);
		Destroy(gameObject);
		CoinsCounter.coins++;
	}
}

//gesture set null after spelling
static function SetNull()
{
	gesture.GuiText.guiText.text = "null";
}

//normal attack
function OnCollisionEnter(other:Collision)
{
	//print(" entered");
	if (other.gameObject.tag == "Bullet")
	{
		if(enemy>0)
		{
			enemy--;
		}
		if(enemy<=0)
		{
			collider.isTrigger = true;
			transform.Translate(0, -100, 0);
			yield WaitForSeconds (1);
			Destroy(gameObject);
			CoinsCounter.coins++;
		}
	}
}

//GUI above the enemy
function OnGUI()
{
	var targetPos:Vector2;
	targetPos = Camera.main.WorldToScreenPoint (transform.position);
	GUI.Box(new Rect(targetPos.x, Screen.height- targetPos.y, 60, 20), enemy + "/" + 10);
}


