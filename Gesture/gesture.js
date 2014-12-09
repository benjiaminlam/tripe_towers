// gesture.js

static var avatar : GameObject;
static var avatarCam : GameObject;
static var gestureDrawing : GameObject;
static var GuiText : GameObject;
static var enterText : GUIText;
static var Intro : GameObject;

var p : Vector2;
var pointArr : Array;
static var mouseDown;

// runs when game starts - main function
function Start () {
	
	pointArr = new Array ();
	
	gestureDrawing = GameObject.Find("gesture");
	GuiText = GameObject.Find("gtest");
	avatar = GameObject.FindWithTag("Player");
	
	// Find the main camera and disable the default mouselook script.
	avatarCam = GameObject.FindWithTag("MainCamera");
	avatarCam.GetComponent (MouseLook).enabled=false;
	
	Intro = GameObject.Find("Intro");
}


function worldToScreenCoordinates() {
	// fix world coordinate to the viewport coordinate
	var screenSpace = Camera.main.WorldToScreenPoint(gestureDrawing.transform.position);
	
	while (Input.GetMouseButton(1))
	{
		var curScreenSpace = Vector3(Input.mousePosition.x, Input.mousePosition.y, screenSpace.z);
		var curPosition = Camera.main.ScreenToWorldPoint(curScreenSpace); 
		gestureDrawing.transform.position = curPosition;
		yield;
	}
}

function Update()
{
	// Explain the skills
	Intro.guiText.text = " Heal pressing h\n Update skill pressing u\n Ice:square\n Earth:circle\n fire:triangle\n lightning:z\n";
	
	if (Input.GetMouseButtonDown(1)) {
		// run one time - click the right click button
		avatar.GetComponent (MouseLook).enabled=false;
		mouseDown = 1;
	}
	
	if (mouseDown == 1) {
		p = Vector3(Input.mousePosition.x , Input.mousePosition.y, Input.mousePosition.z);
		pointArr.Add(p);
		worldToScreenCoordinates();
	}

	if (Input.GetMouseButtonUp(1)) {
		if (Input.GetKey (KeyCode.LeftControl)) {
			// if CTRL is held down, the script will record a gesture. 
			mouseDown = 0;
			gestureRecognizer.recordTemplate(pointArr);
		
		} else {
			avatar.GetComponent (MouseLook).enabled=true;
			mouseDown = 0;

			// start recognizing! 
			gestureRecognizer.startRecognizer(pointArr);
			pointArr.Clear();	
		}
		// When 
		Screen.lockCursor = true;
		var mousePos = Input.mousePosition;
		mousePos.x = Screen.width/2;
		mousePos.y = Screen.height/2;
		Screen.lockCursor = false;
	}
	
} 





