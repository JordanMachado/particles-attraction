varying vec3 vColor;
varying vec3 vVel;
void main() {

	if ( length(vec2(0.5) - gl_PointCoord) > 0.5 ) {
		discard;
	}
	gl_FragColor = vec4(vColor + vVel, 1.0);

}
