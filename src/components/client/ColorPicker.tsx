import { getColorTheme, saveColorTheme } from "~/utils/theme";
import { createMemo, createSignal, Index, onMount } from "solid-js";

const colors = [
  { name: 'Azul', value: '#3fa0fa' },
  { name: 'Índigo', value: '#7593fe' },
  { name: 'Rojo', value: '#ee6f5d' },
  { name: 'Naranja', value: '#e17f08' },
  { name: 'Verde', value: '#5ab352' },
  { name: 'Gris', value: '#9b9b9b' },
];

function ColorPicker() {
  const [currentColor, setCurrentColor] = createSignal<string>();

  const handleChangeColor = ({ currentTarget } : { currentTarget: HTMLButtonElement | HTMLInputElement }) => {
    setCurrentColor(currentTarget.value);
    saveColorTheme(currentTarget.value);
  };

  onMount(() => {
    setCurrentColor(getColorTheme());
  });

  const isOtherColor = createMemo(() => !colors.some(color => color.value == currentColor()));

  return (
    <div>
      <div class="flex gap-4 m-3">
        <Index each={colors}>
          {color => (
            <button
              type="button"
              class={`size-4 rounded-full transition ${color().value == currentColor() ? 'ring-4 ring-primary ring-opacity-25' : ''}`}
              title={color().name}
              style={{
                'background-color': color().value,
              }}
              onClick={handleChangeColor}
              value={color().value}
            >
              <span class="sr-only">{color().name}</span>
            </button>
          )}
        </Index>
        <label for="otherColor" class={`size-4 rounded-full transition ${isOtherColor() ? 'ring-4 ring-primary ring-opacity-25' : ''}`} role="button" title="Otro color" aria-label="Otro color">
          <span class="sr-only">Otro color</span>
          <span class="bg-color-wheel block size-4 rounded-full" />
        </label>
        <input
          type="color"
          class="sr-only bottom-0 left-0"
          id="otherColor"
          onInput={handleChangeColor}
          value={currentColor()}
        />
      </div>
    </div>
  );
}

export default ColorPicker;