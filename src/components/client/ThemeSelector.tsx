import Sun from 'lucide-solid/icons/sun';
import Moon from 'lucide-solid/icons/moon';
import SunMoon from 'lucide-solid/icons/sun-moon';
import { createSignal, onMount } from 'solid-js';
import { getCurrentColorScheme, loadCurrentColorScheme, type ColorScheme } from '~/utils/theme';
import ColorPicker from './ColorPicker';

function ThemeSelector() {
  let ref: HTMLDetailsElement | undefined;
  const [colorScheme, setColorScheme] = createSignal<ColorScheme>();
  const [currentColorScheme, setCurrentColorScheme] = createSignal<ColorScheme>();

  const handleChangeColorScheme = ({ currentTarget } : { currentTarget: HTMLButtonElement }) => {
    const scheme = currentTarget.value as ColorScheme;
    localStorage.setItem('theme', scheme);
    const currentColorScheme = getCurrentColorScheme();
    setCurrentColorScheme(currentColorScheme);
    loadCurrentColorScheme(currentColorScheme);
    setColorScheme(scheme);
    ref!.removeAttribute('open');
  };

  onMount(() => {
    setCurrentColorScheme(getCurrentColorScheme());
    setColorScheme(localStorage.theme ?? 'system' as ColorScheme);
  });

  return (
    <details ref={ref} class="dropdown dropdown-end">
      <summary tabIndex={0} role="button" title="Tema" class="inline-block align-middle select-none rounded-full p-2 transition hover:bg-primary/10">{
        currentColorScheme() == 'light' ?
          <Sun class="size-6 text-primary" /> :
        currentColorScheme() == 'dark' ?
          <Moon class="size-6 text-white" /> :
        <div class="size-6"></div>
      }<span class="sr-only">Tema</span></summary>
      <div tabIndex={0} class="dropdown-content border border-body/10 bg-background rounded-xl z-10 w-68 p-1 shadow -me-2 mt-4">
        <ul class="grid grid-cols-3 gap-1 text-sm">
          <li><button type="button" class={`flex flex-col items-center justify-center w-full rounded-lg px-4 py-2 transition-[background-color] ${colorScheme() == 'light' ? 'bg-primary/10 text-primary' : ''} hover:bg-primary/10`} onClick={handleChangeColorScheme} value="light"><Sun class="size-6" /><span>Claro</span></button></li>
          <li><button type="button" class={`flex flex-col items-center justify-center w-full rounded-lg px-4 py-2 transition-[background-color] ${colorScheme() == 'dark' ? 'bg-primary/10 text-primary' : ''} hover:bg-primary/10`} onClick={handleChangeColorScheme} value="dark"><Moon class="size-6" /><span>Oscuro</span></button></li>
          <li><button type="button" class={`flex flex-col items-center justify-center w-full rounded-lg px-4 py-2 transition-[background-color] ${colorScheme() == 'system' ? 'bg-primary/10 text-primary' : ''} hover:bg-primary/10`} onClick={handleChangeColorScheme} value="system"><SunMoon class="size-6" /><span>Sistema</span></button></li>
        </ul>
        <ColorPicker />
      </div>
    </details>
  );
}

export default ThemeSelector;