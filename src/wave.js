import * as THREE from "three";

export function createWave(container, isPaused) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
  } catch {
    container.dataset.state = "unavailable";
    return null;
  }
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  container.append(renderer.domElement);
  container.dataset.state = "ready";
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100);
  camera.position.z = 10;
  const uniforms = {
    time: { value: 0 },
    pointer: { value: new THREE.Vector2(0.5, 0.5) },
    aspect: { value: 1 },
  };
  const material = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    vertexShader: `
      uniform float time;
      uniform vec2 pointer;
      uniform float aspect;
      varying float vShade;
      varying float vDepth;
      void main() {
        float x = position.x;
        float strand = position.y;
        float phase = x * 4.4 + time * .26;
        float lift = sin(phase + strand * 1.7);
        float envelope = .26 + .11 * cos(x * 3.14);
        vec2 pos = vec2(x * 1.15, .05 + lift * .43 + strand * envelope);
        vec2 cursor = vec2(pointer.x * 2.0 - 1.0, 1.0 - pointer.y * 2.0);
        float d = length((pos - cursor) * vec2(aspect, 1.0));
        pos.y += sin(d * 12.0 - time * 1.7) * exp(-d * 2.8) * .10;
        pos.x += sin(strand * 3.14 + time * .16) * .025;
        vShade = strand * .5 + .5;
        vDepth = lift;
        gl_Position = vec4(pos, 0.0, 1.0);
      }`,
    fragmentShader: `
      varying float vShade;
      varying float vDepth;
      void main() {
        vec3 purple = vec3(.65,.29,.79);
        vec3 cyan = vec3(.09,.91,.88);
        float t = smoothstep(.2,.75,1.0 - vShade + .2 * vDepth);
        vec3 color = mix(purple, cyan, t);
        color = mix(color, vec3(.65,.05,.82), (1.0-t)*.4);
        float edge = smoothstep(0.0,.10,vShade) * smoothstep(1.0,.90,vShade);
        gl_FragColor = vec4(color, .72 * edge);
      }`,
  });
  const lines = matchMedia("(max-width: 600px)").matches ? 65 : 110;
  const segments = 230;
  // Horizontal strands and fine cross-strands form one continuous ribbon.
  const points = [];
  for (let j = 0; j < lines; j++) {
    const y = (j / (lines - 1)) * 2 - 1;
    for (let i = 0; i < segments; i++)
      points.push(
        (i / segments) * 2 - 1,
        y,
        0,
        ((i + 1) / segments) * 2 - 1,
        y,
        0,
      );
  }
  for (let i = 0; i < 150; i++) {
    const x = (i / 149) * 2 - 1;
    for (let j = 0; j < 55; j++)
      points.push(x, (j / 55) * 2 - 1, 0, x, ((j + 1) / 55) * 2 - 1, 0);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(points, 3),
  );
  scene.add(new THREE.LineSegments(geometry, material));
  const pointerTarget = new THREE.Vector2(0.5, 0.5);
  const hero = container.parentElement;
  hero.addEventListener("pointermove", (event) => {
    const box = hero.getBoundingClientRect();
    pointerTarget.set(
      (event.clientX - box.left) / box.width,
      (event.clientY - box.top) / box.height,
    );
  });
  hero.addEventListener("pointerleave", () => pointerTarget.set(0.5, 0.5));
  let visible = true;
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
  }).observe(container);
  const render = () => renderer.render(scene, camera);
  const resize = () => {
    renderer.setSize(container.clientWidth, container.clientHeight);
    uniforms.aspect.value = container.clientWidth / container.clientHeight;
    render();
  };
  new ResizeObserver(resize).observe(container);
  resize();
  let last = 0;
  let lost = false;
  renderer.domElement.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    lost = true;
  });
  renderer.domElement.addEventListener("webglcontextrestored", () => {
    lost = false;
    render();
  });
  function frame(now) {
    requestAnimationFrame(frame);
    const delta = Math.min((now - last) / 1000, 0.05);
    last = now;
    if (!visible || document.hidden || isPaused() || lost) return;
    uniforms.time.value += delta;
    uniforms.pointer.value.lerp(pointerTarget, 0.04);
    render();
  }
  requestAnimationFrame(frame);
  return { render };
}
