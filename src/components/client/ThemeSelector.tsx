import Sun from 'lucide-solid/icons/sun';
import Moon from 'lucide-solid/icons/moon';
import SunMoon from 'lucide-solid/icons/sun-moon';
import { createSignal, onMount } from 'solid-js';
import type { ColorScheme } from '~/types/Theme';
import { loadColorScheme } from '~/utils/theme';
import ColorPicker from './ColorPicker';

function ThemeSelector() {
  let ref: HTMLDetailsElement | undefined;
  const [colorScheme, setColorScheme] = createSignal<ColorScheme>();
  const [currentColorScheme, setCurrentColorScheme] = createSignal<ColorScheme>();

  const changeColorScheme = (scheme: ColorScheme) => {
    localStorage.setItem('theme', scheme);
    setCurrentColorScheme(loadColorScheme());
    setColorScheme(scheme);
    ref!.removeAttribute('open');
  };

  onMount(() => {
    const lsColorScheme = (localStorage.getItem('theme') ?? 'system') as ColorScheme;
    setCurrentColorScheme(loadColorScheme());
    setColorScheme(lsColorScheme);
  });

  return (
    <details ref={ref} class="dropdown dropdown-end">
      <summary tabIndex={0} role="button" title="Tema" class="inline-block align-middle select-none rounded-full p-2 transition hover:bg-primary/10">{
        currentColorScheme() == 'light' ?
          <Sun class="size-6" /> :
        currentColorScheme() == 'dark' ?
          <Moon class="size-6" /> :
        <div class="size-6"></div>
      }<span class="sr-only">Tema</span></summary>
      <div tabIndex={0} class="dropdown-content border border-soft bg-background rounded-xl z-10 w-68 p-1 shadow -me-2 mt-6">
        <ul class="grid grid-cols-3 gap-1 text-sm">
          <li><button type="button" onClick={() => changeColorScheme('light')} class={`flex flex-col items-center justify-center w-full rounded-lg px-4 py-2 transition-[background-color] ${colorScheme() == 'light' ? 'bg-primary/10 text-primary' : ''} hover:bg-primary/10`}><Sun class="size-6" /><span>Claro</span></button></li>
          <li><button type="button" onClick={() => changeColorScheme('dark')} class={`flex flex-col items-center justify-center w-full rounded-lg px-4 py-2 transition-[background-color] ${colorScheme() == 'dark' ? 'bg-primary/10 text-primary' : ''} hover:bg-primary/10`}><Moon class="size-6" /><span>Oscuro</span></button></li>
          <li><button type="button" onClick={() => changeColorScheme('system')} class={`flex flex-col items-center justify-center w-full rounded-lg px-4 py-2 transition-[background-color] ${colorScheme() == 'system' ? 'bg-primary/10 text-primary' : ''} hover:bg-primary/10`}><SunMoon class="size-6" /><span>Sistema</span></button></li>
        </ul>
        <ColorPicker />
      </div>
    </details>
  );
}

export default ThemeSelector;