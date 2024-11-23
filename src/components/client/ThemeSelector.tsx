import { Sun, Moon, SunMoon } from 'lucide-preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import type { ColorScheme } from '~/types/Theme';
import { loadColorScheme } from '~/utils/theme';
import ColorPicker from './ColorPicker';

function ThemeSelector() {
  const ref = useRef<HTMLDetailsElement>(null);
  const [colorScheme, setColorScheme] = useState<ColorScheme>();
  const [currentColorScheme, setCurrentColorScheme] = useState<ColorScheme>();

  const closeDropdown = () => {
    ref.current?.removeAttribute('open');
  };

  const changeColorScheme = (scheme: ColorScheme) => {
    localStorage.setItem('theme', scheme);
    setCurrentColorScheme(loadColorScheme());
    setColorScheme(scheme);
    closeDropdown();
  };

  useEffect(() => {
    const lsColorScheme = (localStorage.getItem('theme') ?? 'system') as ColorScheme;
    setCurrentColorScheme(loadColorScheme());
    setColorScheme(lsColorScheme);
  }, []);

  return (
    <details ref={ref} className="dropdown dropdown-end">
      <summary tabIndex={0} role="button" title="Tema" className="inline-block align-middle select-none rounded-full p-2 transition hover:bg-primary/10">{
        currentColorScheme == 'light' ?
          <Sun className="size-5" /> :
        currentColorScheme == 'dark' ?
          <Moon className="size-5" /> :
        <div className="size-5"></div>
      }<span class="sr-only">Tema</span></summary>
      <div tabIndex={0} className="dropdown-content border border-soft bg-background rounded-xl z-10 w-68 p-1 shadow -me-2 mt-6">
        <ul className="grid grid-cols-3 gap-1 text-sm">
          <li><button type="button" onClick={() => changeColorScheme('light')} className={`flex flex-col items-center justify-center w-full rounded-lg px-4 py-2 transition-[background-color] ${colorScheme == 'light' ? 'bg-primary/10 text-primary' : ''} hover:bg-primary/10`}><Sun className="size-6" /><span>Claro</span></button></li>
          <li><button type="button" onClick={() => changeColorScheme('dark')} className={`flex flex-col items-center justify-center w-full rounded-lg px-4 py-2 transition-[background-color] ${colorScheme == 'dark' ? 'bg-primary/10 text-primary' : ''} hover:bg-primary/10`}><Moon className="size-6" /><span>Oscuro</span></button></li>
          <li><button type="button" onClick={() => changeColorScheme('system')} className={`flex flex-col items-center justify-center w-full rounded-lg px-4 py-2 transition-[background-color] ${colorScheme == 'system' ? 'bg-primary/10 text-primary' : ''} hover:bg-primary/10`}><SunMoon className="size-6" /><span>Sistema</span></button></li>
        </ul>
        <ColorPicker />
      </div>
    </details>
  );
}

export default ThemeSelector;