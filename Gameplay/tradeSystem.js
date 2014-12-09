//using coins to upgrade level and heal
#pragma strict
static var skillLevel:float = 1;

function Update()
{
	if(Input.GetButtonDown("heal")) //press h
	{
		HealTheWall();
	}
	else if(Input.GetButtonDown("upgrade")) //press u
	{
		SkillUpgrade();
	}
}


//heal
function HealTheWall(){
	if(gateHeal.gateHeal>0 && gateHeal.gateHeal<=100 && CheckBalance()==true)
	{
		gateHeal.gateHeal+=30;
		CoinsCounter.coins-=5;
	}
}

//upgrade all the magic spell
function SkillUpgrade(){
	if(gateHeal.gateHeal>0 && CheckBalance()==true)
	{
		skillLevel +=0.5;
		CoinsCounter.coins-=5;
		Debug.Log(skillLevel);
	}
}

//check coins balance

function CheckBalance(){
	if(CoinsCounter.coins >= 5)
	{
		return true;
	}
	else
	{
		return false;
	}
}

