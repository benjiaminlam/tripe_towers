//enemy path move


static var pathpoints = Array();
var nextPathPoint : AutoPathPoint;

static function FindClosest(pos : Vector3) : AutoPathPoint {
	var closest : AutoPathPoint;
	var closestDistance = 100000.0;
	
	for (var cur : AutoPathPoint in pathpoints) {
		var distance = Vector3.Distance(cur.transform.position, pos);
		if (distance < closestDistance) {
			closestDistance = distance;
			closest = cur;
		}
	}
	return closest;
}

@ContextMenu("Update Pathpoints")
function UpdatePathpoints() {
	RebuildPathpointList();
}

function Awake() {
	RebuildPathpointList();
}

//在端點上秀出 p 字母
function OnDrawGizmos() {
	Gizmos.DrawIcon(transform.position, "Pathpoint.tif");
}

function OnDrawGizmosSelected() {
	if (pathpoints.length == 0) {
		RebuildPathpointList();
	}
	if (nextPathPoint) {
	    var cur = this;
		var next = nextPathPoint;
		while (next) {

			if (Physics.Linecast(cur.transform.position, next.transform.position)) {
				Gizmos.color = Color.red;
				Gizmos.DrawLine(cur.transform.position, next.transform.position);
			} else {
				Gizmos.color = Color.green;
				Gizmos.DrawLine(cur.transform.position, next.transform.position);
			}
			cur = next;
			next = next.nextPathPoint;
		}
	}
}

function RebuildPathpointList() {
	var object : Object[] = FindObjectsOfType(AutoPathPoint);
	pathpoints = Array(object);
}