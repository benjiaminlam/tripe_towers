//sound control
#pragma strict

var explosion : GameObject;
var sound : AudioClip;

function Start () {
	audio.clip = sound;
}

function OnCollisionEnter () {
	Instantiate(explosion, transform.position, transform.rotation);
	//audio.Play();
	Destroy(gameObject);
	Destroy(audio);
}