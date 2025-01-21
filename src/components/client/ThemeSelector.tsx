import Sun from 'lucide-solid/icons/sun';
import Moon from 'lucide-solid/icons/moon';
import SunMoon from 'lucide-solid/icons/sun-moon';
import { createSignal, onMount } from 'solid-js';
import { Dynamic } from "solid-js/web";
import { switchTheme, type Theme } from '@/utils/theme';
import ColorPicker from './ColorPicker';

const iconTheme = {
  light: Sun,
  dark: Moon,
  system: SunMoon,
};

function ThemeSelector() {
  let dropdownRef: HTMLDetailsElement | undefined;
  const [currentTheme, setCurrentTheme] = createSignal<Theme>();

  const handleChangeTheme = ({ currentTarget } : { currentTarget: HTMLButtonElement }) => {
    const theme = currentTarget.value as Theme;
    switchTheme(theme);
    setCurrentTheme(theme);
    dropdownRef!.removeAttribute('open');
  };

  onMount(() => {
    setCurrentTheme(localStorage.theme ?? 'system');
  });

  return (
    <details ref={dropdownRef} class="dropdown dropdown-end">
      <summary tabIndex={0} role="button" title="Tema" class="inline-block align-middle select-none rounded-full p-2 transition hover:bg-primary/10">
        {currentTheme()
          ? <Dynamic component={iconTheme[currentTheme()!]} class="size-6 text-primary dark:text-white" />
          : <div class="size-6" />
        }
        <span class="sr-only">Tema</span>
      </summary>
      <div tabIndex={0} class="dropdown-content border border-body/10 bg-background rounded-xl z-10 w-68 p-1 shadow -me-2 mt-4">
        <ul class="grid grid-cols-3 gap-1 text-sm">
          <li><button type="button" class={`flex flex-col items-center justify-center w-full rounded-lg px-4 py-2 transition-[background-color] ${currentTheme() == 'light' ? 'bg-primary/10 text-primary' : ''} hover:bg-primary/10`} onClick={handleChangeTheme} value="light"><Sun class="size-6" /><span>Claro</span></button></li>
          <li><button type="button" class={`flex flex-col items-center justify-center w-full rounded-lg px-4 py-2 transition-[background-color] ${currentTheme() == 'dark' ? 'bg-primary/10 text-primary' : ''} hover:bg-primary/10`} onClick={handleChangeTheme} value="dark"><Moon class="size-6" /><span>Oscuro</span></button></li>
          <li><button type="button" class={`flex flex-col items-center justify-center w-full rounded-lg px-4 py-2 transition-[background-color] ${currentTheme() == 'system' ? 'bg-primary/10 text-primary' : ''} hover:bg-primary/10`} onClick={handleChangeTheme} value="system"><SunMoon class="size-6" /><span>Sistema</span></button></li>
        </ul>
        <ColorPicker />
      </div>
    </details>
  );
}

export default ThemeSelector;