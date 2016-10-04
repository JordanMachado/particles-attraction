// simulation
varying vec2 vUv;

uniform sampler2D tVelocity;
uniform sampler2D tPositions;

uniform vec3 mouse;



void main() {


      vec4 pos = texture2D(tPositions, vUv);
      vec4 vel = texture2D(tVelocity, vUv);

      vec3 force = mouse - pos.xyz;
      vec3 nForce = normalize(force);
      vel.xyz *= 0.993;
      vel.xyz += nForce * 0.1;


      gl_FragColor = vec4(vel.xyz,1.0);
}
