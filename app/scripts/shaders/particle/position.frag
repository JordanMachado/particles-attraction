// simulation
varying vec2 vUv;

uniform sampler2D tPositions;
uniform vec3 mouse;
uniform sampler2D tVelocity;




void main() {
      vec4 pos = texture2D(tPositions, vUv);
      vec4 vel = texture2D(tVelocity, vUv);

      pos.xyz += vel.xyz;

      gl_FragColor = vec4(pos.xyz,1.0);
}
