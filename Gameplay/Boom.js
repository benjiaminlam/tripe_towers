
function OnCollisionEnter(other:Collision)
{
print(" entered trigger");
if (other.gameObject.tag == "enemy")
{
	//Instantiate(boomFire,this.transform.position,this.transform.rotation);
	Destroy(gameObject);
}
}
