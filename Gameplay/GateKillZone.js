//calculate the enemy attack

#pragma strict
var totalEntreEnemy = 0;
function OnTriggerEnter(other:Collider)
{
	//print("enemy entered");
	if (other.gameObject.tag == "enemy")
	{
		totalEntreEnemy+=1;
		gateHeal.enemyHit=totalEntreEnemy;
	}
}
function OnTriggerExit(other:Collider)
{
	//print("enemy leave");
	if (other.gameObject.tag == "enemy")
	{
		totalEntreEnemy-=1;
		gateHeal.enemyHit=totalEntreEnemy;
	}
}
