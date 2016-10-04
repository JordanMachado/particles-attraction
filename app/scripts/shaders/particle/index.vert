uniform sampler2D map;
uniform sampler2D vel;
uniform sampler2D origin;

attribute vec3 color;

varying vec3 vColor;


void main() {

	vec4 buffer = texture2D(map,uv);
	vec4 velocity =  texture2D(vel,uv);
	vec3 p = buffer.xyz;
	vColor = color;
	gl_PointSize = 3. * velocity.z;

	gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);

}
