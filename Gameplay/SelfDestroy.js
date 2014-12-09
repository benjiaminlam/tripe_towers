function OnControllerColliderHit(hit:ControllerColliderHit) {
	if (hit.gameObject.tag == "destination") {
		// Debug.Log("Touched !");
		Destroy(gameObject);
	}
}