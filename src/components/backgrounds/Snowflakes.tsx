import Snowflake from "lucide-solid/icons/snowflake";
import { randomRange } from "~/utils/numbers";
import '~/styles/snowflakes.css';

const COUNT = 16;

const SnowflakeFalls = () => (
  <div
    class="snowflake"
    style={{
      '--sf-left-offset': randomRange(0, 100) + 'vw',
      '--sf-float-duration': randomRange(2000, 4000) + 'ms',
      '--sf-float-delay': randomRange(0, 8000) + 'ms',
      '--sf-sway-duration': randomRange(4000, 6000) + 'ms',
      '--sf-sway-delay': randomRange(0, 8000) + 'ms',
      '--sf-sway-type': ['sway-left-to-right', 'sway-right-to-left'][randomRange(0, 1)],
    }}
  >
    <Snowflake />
  </div>
);

export function Snowflakes() {
  return (
    <div class="snowflakes">
      {new Array(COUNT).fill(0).map(() => <SnowflakeFalls />)}
    </div>
  )
}
