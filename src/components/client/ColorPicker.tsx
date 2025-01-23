import type { Props } from "./ThemeSelector";
import { useBaseTranslations } from "@/i18n/base";
import { getColor, changeColor } from "@/utils/theme";
import { createMemo, createSignal, Index, onMount, type Component } from "solid-js";

const colors = [
  { name: 'blue', value: '#3fa0fa' },
  { name: 'indigo', value: '#7593fe' },
  { name: 'red', value: '#ee6f5d' },
  { name: 'orange', value: '#e17f08' },
  { name: 'green', value: '#5ab352' },
  { name: 'gray', value: '#9b9b9b' },
];

const translations = {
  en: {
    blue: 'Blue',
    indigo: 'Indigo',
    red: 'Red',
    orange: 'Orange',
    green: 'Green',
    gray: 'Gray',
    otherColor: 'Other color'
  },
  es: {
    blue: 'Azul',
    indigo: 'Índigo',
    red: 'Rojo',
    orange: 'Naranja',
    green: 'Verde',
    gray: 'Gris',
    otherColor: 'Otro color'
  },
};

const ColorPicker: Component<Props> = (props) => {
  const [currentColor, setCurrentColor] = createSignal<string>();
  const lang = () => props.lang;
  const translate = useBaseTranslations(translations, lang());

  const handleChangeColor = ({ currentTarget } : { currentTarget: HTMLButtonElement | HTMLInputElement }) => {
    setCurrentColor(currentTarget.value);
    changeColor(currentTarget.value);
  };

  onMount(() => {
    setCurrentColor(getColor());
  });

  const isOtherColor = createMemo(() => !colors.some(color => color.value == currentColor()));

  return (
    <div>
      <div class="flex gap-4 m-3">
        <Index each={colors}>
          {color => (
            <button
              type="button"
              class={`size-4 rounded-full transition ${color().value == currentColor() ? 'ring-4 ring-primary/25' : ''}`}
              title={translate(color().name)}
              aria-label={translate(color().name)}
              style={{
                'background-color': color().value,
              }}
              onClick={handleChangeColor}
              value={color().value}
            >
              <span class="sr-only">{translate(color().name)}</span>
            </button>
          )}
        </Index>
        <label
          for="otherColor"
          class={`size-4 rounded-full transition ${isOtherColor() ? 'ring-4 ring-primary/25' : ''}`}
          role="button"
          title={translate('otherColor')}
          aria-label={translate('otherColor')}
        >
          <span class="sr-only">{translate('otherColor')}</span>
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
