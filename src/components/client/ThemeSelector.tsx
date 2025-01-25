import Sun from 'lucide-solid/icons/sun';
import Moon from 'lucide-solid/icons/moon';
import SunMoon from 'lucide-solid/icons/sun-moon';
import { createSignal, Index, onMount, type Component } from 'solid-js';
import { Dynamic } from "solid-js/web";
import type { Locale } from '@/i18n/constants';
import { useBaseTranslations } from '@/i18n/base';
import { switchTheme, THEMES, type Theme } from '@/utils/theme';
import ColorPicker from './ColorPicker';

export interface Props {
  lang?: Locale;
}

const iconTheme = {
  light: Sun,
  dark: Moon,
  system: SunMoon,
};

const translations = {
  en: {
    theme: 'Theme',
    light: 'Light',
    dark: 'Dark',
    system: 'System',
  },
  es: {
    theme: 'Tema',
    light: 'Claro',
    dark: 'Oscuro',
    system: 'Sistema',
  },
};

const ThemeSelector: Component<Props> = (props) => {
  let dropdownRef: HTMLDetailsElement | undefined;
  const [currentTheme, setCurrentTheme] = createSignal<Theme>();
  const lang = () => props.lang;
  const translate = useBaseTranslations(translations, lang());

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
      <summary
        tabIndex={0}
        role="button"
        aria-label={translate('theme')}
        title={translate('theme')}
        class="inline-block align-middle select-none rounded-full p-2 transition text-body hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
      >
        {currentTheme()
          ? <Dynamic component={iconTheme[currentTheme()!]} class="size-5" />
          : <div class="size-5" />
        }
      </summary>
      <div tabIndex={0} class="dropdown-content border border-body/10 bg-background rounded-xl z-10 p-1 shadow-sm -me-2 mt-4">
        <div class="grid grid-cols-3 gap-1 text-sm">
          <Index each={THEMES}>
            {theme => (
              <button
                type="button"
                class={`flex flex-col items-center justify-center w-full rounded-lg px-4 py-2 transition ${currentTheme() == theme() ? 'bg-primary/10 text-primary' : ''} hover:bg-primary/10 hover:text-primary`}
                onClick={handleChangeTheme}
                value={theme()}
              >
                <Dynamic component={iconTheme[theme()]} class="size-6" />
                <span>{translate(theme())}</span>
              </button>
            )}
          </Index>
        </div>
        <ColorPicker {...props} />
      </div>
    </details>
  );
};

export default ThemeSelector;
