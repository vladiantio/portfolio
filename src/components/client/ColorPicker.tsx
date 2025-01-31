import type { Props } from "./ThemeSelector";
import { useBaseTranslations } from "@/i18n/base";
import { getColor, changeColor } from "@/utils/theme";
import { createMemo, createSignal, Index, onMount, type Component } from "solid-js";

const colors = [
  { name: 'blue', value: '#3fa0fa' },
  { name: 'indigo', value: '#7593fe' },
  { name: 'red', value: '#ee6f5d' },
  { name: 'orange', value: '#e17f08' },
  { name: 'yellow', value: '#f9ba26' },
  { name: 'green', value: '#5ab352' },
  { name: 'gray', value: '#9b9b9b' },
];

const translations = {
  en: {
    blue: 'Blue',
    indigo: 'Indigo',
    red: 'Red',
    orange: 'Orange',
    yellow: 'Yellow',
    green: 'Green',
    gray: 'Gray',
    otherColor: 'Other color'
  },
  es: {
    blue: 'Azul',
    indigo: 'Índigo',
    red: 'Rojo',
    orange: 'Naranja',
    yellow: 'Amarillo',
    green: 'Verde',
    gray: 'Gris',
    otherColor: 'Otro color'
  },
};

const ColorPicker: Component<Props> = (props) => {
  const [currentColor, setCurrentColor] = createSignal<string>();
  const lang = () => props.lang;
  const t = useBaseTranslations(translations, lang());

  const handleChangeColor = ({ currentTarget } : { currentTarget: HTMLButtonElement | HTMLInputElement }) => {
    setCurrentColor(currentTarget.value);
    changeColor(currentTarget.value);
  };

  onMount(() => {
    setCurrentColor(getColor());
  });

  const isOtherColor = createMemo(() => !colors.some(color => color.value == currentColor()));

  return (
    <div class="flex gap-3 m-3">
      <Index each={colors}>
        {color => (
          <button
            type="button"
            class={`radio border-body/20 ${color().value == currentColor() ? 'checked' : ''}`}
            title={t(color().name)}
            aria-label={t(color().name)}
            style={{
              'background-color': color().value,
            }}
            onClick={handleChangeColor}
            value={color().value}
          >
            <span class="sr-only">{t(color().name)}</span>
          </button>
        )}
      </Index>
      <label
        for="otherColor"
        class={`radio bg-color-wheel border-body/20 ${isOtherColor() ? 'checked' : ''}`}
        role="button"
        title={t('otherColor')}
        aria-label={t('otherColor')}
      >
        <span class="sr-only">{t('otherColor')}</span>
      </label>
      <input
        type="color"
        class="sr-only bottom-0 left-0"
        id="otherColor"
        onInput={handleChangeColor}
        value={currentColor()}
      />
    </div>
  );
}

export default ColorPicker;
