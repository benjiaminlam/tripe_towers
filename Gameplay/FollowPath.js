//enemies follow found path move
static var speed = 5.0;
var rotationSpeed = 5.0;
var pickNextPathpointDistance = 2.0;

@script RequireComponent(CharacterController)

function Start() {
	Patrol();
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
	
	// 朝著既定目標旋轉
	transform.rotation = Quaternion.Slerp (transform.rotation, Quaternion.LookRotation(direction), rotationSpeed * Time.deltaTime);
	transform.eulerAngles = Vector3(0, transform.eulerAngles.y, 0);

	// 當我們沒有面向目標物時,移動的速度會變慢
	var forward = transform.TransformDirection(Vector3.forward);
	var speedModifier = Vector3.Dot(forward, direction.normalized);
	speedModifier = Mathf.Clamp01(speedModifier);

	// 移動角色
	direction = forward * speed * speedModifier;
	GetComponent (CharacterController).SimpleMove(direction);
	
	SendMessage("SetSpeed", speed * speedModifier, SendMessageOptions.DontRequireReceiver);	
}