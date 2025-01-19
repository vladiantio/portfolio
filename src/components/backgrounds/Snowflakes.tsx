import Snowflake from "lucide-solid/icons/snowflake";
import { randomRange, roundDecimals } from "@/utils/numbers";
import '@/styles/snowflakes.css';
import { createSignal, onMount, onCleanup, createMemo } from "solid-js";

const COUNT = 16;

const easeInOut = (t: number) => t**2 * (3 - 2*t);

function createEaseInOutTransition(initialValue: number, duration: number, delay: number = 0) {
  const [currentValue, setCurrentValue] = createSignal(initialValue);
  let animationFrame: number;

  const startTransition = (toValue: number) => {
    const startTime = performance.now();
    const fromValue = currentValue();
    const range = toValue - fromValue;

    const step = (time: number) => {
      const elapsed = time - startTime - delay;
      if (elapsed > 0) {
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOut(progress);
        setCurrentValue(fromValue + range * easedProgress);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        } else {
          setCurrentValue(toValue);
        }
      } else {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
  };

  const transitionTo = (toValue: number) => {
    // setValue(toValue);
    startTransition(toValue);
  };

  onCleanup(() => {
    if (animationFrame) cancelAnimationFrame(animationFrame);
  });

  return {
    value: currentValue,
    transitionTo,
  };
}

const SnowflakeFalls = () => {
  const leftOffset = createMemo(() => randomRange(0, 100));
  const floatDuration = createMemo(() => randomRange(2000, 4000));
  const floatDelay = createMemo(() => randomRange(0, 8000));
  const swayDuration = createMemo(() => randomRange(4000, 6000));
  const swayDelay = createMemo(() => randomRange(400, 4000));
  const swayType = createMemo(() => ['sf-sway-left-to-right', 'sf-sway-right-to-left'][randomRange(0, 1)]);

  return (
    <div
      class="snowflake"
      style={{
        '--sf-left-offset': leftOffset() + 'vw',
        '--sf-float-duration': floatDuration() + 'ms',
        '--sf-float-delay': floatDelay() + 'ms',
        '--sf-sway-duration': swayDuration() + 'ms',
        '--sf-sway-delay': swayDelay() + 'ms',
        '--sf-sway-type': swayType(),
      }}
    >
      <Snowflake />
    </div>
  )
};

export function Snowflakes() {
  const { value, transitionTo } = createEaseInOutTransition(0, 300);
  const [lastTimeUpdated, setLastTimeUpdated] = createSignal(0);

  const handleDeviceMotion: (event: DeviceMotionEvent) => void = (event) => {
    if (Date.now() - lastTimeUpdated() < 100) return true;
    setLastTimeUpdated(Date.now());
    if (!event.accelerationIncludingGravity || event.accelerationIncludingGravity.x === null) return true;
    transitionTo(event.accelerationIncludingGravity.x * -2);
  };

  onMount(() => {
    if (globalThis.DeviceMotionEvent) {
      window.addEventListener('devicemotion', handleDeviceMotion);
    }
  });

  onCleanup(() => {
    if (globalThis.DeviceMotionEvent) {
      window.removeEventListener('devicemotion', handleDeviceMotion);
    }
  });

  return (
    <div class="snowflakes" style={{
      '--sf-gravity': roundDecimals(value(), 5) + 'rem',
    }}>
      {new Array(COUNT).fill(0).map(() => <SnowflakeFalls />)}
    </div>
  )
}
