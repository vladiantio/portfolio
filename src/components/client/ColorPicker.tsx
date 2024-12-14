import { loadColorTheme, saveColor } from "~/utils/theme";
import { createSignal, Index, onMount } from "solid-js";

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

  const handleChangeColor = (value: string) => {
    setCurrentColor(value);
    saveColor(value);
  };

  onMount(() => {
    setCurrentColor(loadColorTheme());
  });

  const isOtherColor = () => !colors.some(color => color.value == currentColor());

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
              onClick={() => handleChangeColor(color().value)}
            >
              <span class="sr-only">{color().name}</span>
            </button>
          )}
        </Index>
        <label for="otherColor" class={`size-4 rounded-full transition ${isOtherColor() ? 'ring-4 ring-primary ring-opacity-25' : ''}`} role="button" title="Otro color" aria-label="Otro color">
          <span class="sr-only">Otro color</span>
          <svg class="size-4 rounded-full" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10 0-0.5 0.5v9.5h1.207l6.3633-6.3633v-0.70703c-1.8105-1.8106-4.3105-2.9297-7.0703-2.9297z" fill="url(#h)"/><path d="m17.07 2.9297-7.0703 7.0703 0.5 0.5h8.998l0.5-0.5c0-2.5586-0.9746-5.1191-2.9277-7.0703z" fill="url(#g)"/><path d="m20 10h-10v0.707l6.3633 6.3633h0.707c1.8106-1.8105 2.9297-4.3105 2.9297-7.0703z" fill="url(#f)"/><path d="m17.07 17.07-7.0703-7.0703-0.5 0.5v8.998l0.5 0.5c2.5586 0 5.1191-0.9746 7.0703-2.9277z" fill="url(#e)"/><path d="m10 20v-10h-0.707l-6.3633 6.3633v0.707c1.8105 1.8106 4.3105 2.9297 7.0703 2.9297z" fill="url(#d)"/><path d="m2.9297 17.07 7.0703-7.0703-0.5-0.5h-8.998l-0.5 0.5c0 2.5586 0.97461 5.1191 2.9277 7.0703z" fill="url(#c)"/><path d="M 0,10 H 10 V 9.293 L 3.63672,2.92969 H 2.92969 C 1.11914,4.74023 0,7.24023 0,10 Z" fill="url(#b)"/><path d="m2.9297 2.9297 7.0703 7.0703v-9.998c-2.5586 0-5.1191 0.97461-7.0703 2.9277z" fill="url(#a)"/><defs><linearGradient id="h" x1="8.379" x2="15.442" y1="1.559" y2="8.621" gradientTransform="translate(-2,-2)" gradientUnits="userSpaceOnUse"><stop stop-color="#F44F5A" offset="0"/><stop stop-color="#EE3D4A" offset=".443"/><stop stop-color="#E52030" offset="1"/></linearGradient><linearGradient id="g" x1="17.001" x2="17" y1=".0537" y2="23.883" gradientTransform="translate(-2,-2)" gradientUnits="userSpaceOnUse"><stop stop-color="#FED100" offset="0"/><stop stop-color="#E36001" offset="1"/></linearGradient><linearGradient id="f" x1="20.535" x2="15.182" y1="10.535" y2="15.888" gradientTransform="translate(-2,-2)" gradientUnits="userSpaceOnUse"><stop stop-color="#FFD747" offset="0"/><stop stop-color="#FFD645" offset=".482"/><stop stop-color="#F5BC00" offset="1"/></linearGradient><linearGradient id="e" x1="19.071" x2="11.5" y1="16.999" y2="17" gradientTransform="translate(-2,-2)" gradientUnits="userSpaceOnUse"><stop stop-color="#33C481" offset="0"/><stop stop-color="#21A366" offset="1"/></linearGradient><linearGradient id="d" x1="13.465" x2="8.1115" y1="20.535" y2="15.182" gradientTransform="translate(-2,-2)" gradientUnits="userSpaceOnUse"><stop stop-color="#28AFEA" offset="0"/><stop stop-color="#0B88DA" offset="1"/></linearGradient><linearGradient id="c" x1="7.0012" x2="7.0013" y1="20.154" y2="12.584" gradientTransform="translate(-2,-2)" gradientUnits="userSpaceOnUse"><stop stop-color="#427FDB" offset=".002"/><stop stop-color="#2668CB" offset=".397"/><stop stop-color="#1358BF" offset=".763"/><stop stop-color="#0C52BB" offset="1"/></linearGradient><linearGradient id="b" x1="3.465" x2="8.8185" y1="13.465" y2="8.1115" gradientTransform="translate(-2,-2)" gradientUnits="userSpaceOnUse"><stop stop-color="#A235D4" offset="0"/><stop stop-color="#A033D1" offset=".441"/><stop stop-color="#982CC9" offset=".702"/><stop stop-color="#8B21BB" offset=".915"/><stop stop-color="#831BB3" offset="1"/></linearGradient><linearGradient id="a" x1="4.9281" x2="24.264" y1="7.0007" y2="7" gradientTransform="translate(-2,-2)" gradientUnits="userSpaceOnUse"><stop stop-color="#E83C67" offset="0"/><stop stop-color="#C5214A" offset=".423"/><stop stop-color="#B01038" offset=".773"/><stop stop-color="#A80A31" offset="1"/></linearGradient></defs></svg>
        </label>
        <input type="color" class="sr-only bottom-0 left-0" id="otherColor" onInput={ev => handleChangeColor(ev.currentTarget.value)} value={currentColor()} />
      </div>
    </div>
  );
}

export default ColorPicker;