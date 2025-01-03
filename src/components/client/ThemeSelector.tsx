import Sun from 'lucide-solid/icons/sun';
import Moon from 'lucide-solid/icons/moon';
import SunMoon from 'lucide-solid/icons/sun-moon';
import { createSignal, Index, onMount, type Component } from 'solid-js';
import { Dynamic } from "solid-js/web";
import { COLOR_SCHEMES, getCurrentColorScheme, loadCurrentColorScheme, type ColorScheme } from '~/utils/theme';
import ColorPicker from './ColorPicker';
import { useCustomTranslations } from '~/i18n/custom';
import type { Locale } from '~/i18n/constants';

const iconScheme = {
  light: Sun,
  dark: Moon,
  system: SunMoon,
};

const translations = {
  en: {
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    system: "System",
  },
  es: {
    theme: "Tema",
    light: "Claro",
    dark: "Oscuro",
    system: "Sistema",
  },
}

export interface Props {
  lang?: Locale;
}

const ThemeSelector: Component<Props> = (props) => {
  let ref: HTMLDetailsElement | undefined;
  const [lightDark, setLightDark] = createSignal<ColorScheme>();
  const [currentColorScheme, setCurrentColorScheme] = createSignal<ColorScheme>();
  const lang = () => props.lang;
  const translate = useCustomTranslations(translations, lang());

  const handleChangeColorScheme = ({ currentTarget }: { currentTarget: HTMLButtonElement }) => {
    const scheme = currentTarget.value as ColorScheme;
    localStorage.setItem('theme', scheme);
    const currentLightDark = getCurrentColorScheme();
    setLightDark(currentLightDark);
    loadCurrentColorScheme(currentLightDark);
    setCurrentColorScheme(scheme);
    ref!.removeAttribute('open');
  };

  onMount(() => {
    setLightDark(getCurrentColorScheme());
    setCurrentColorScheme(localStorage.theme ?? 'system' as ColorScheme);
  });

  return (
    <details ref={ref} class="dropdown dropdown-end">
      <summary
        tabIndex={0}
        role="button"
        title={translate('theme')}
        aria-label={translate('theme')}
        class="inline-block align-middle select-none rounded-full p-2 transition hover:bg-primary/10"
      >
        {lightDark() ? <Dynamic component={iconScheme[lightDark()!]} class="size-6" /> : <div class="size-6"></div>}
        <span class="sr-only">{translate('theme')}</span>
      </summary>
      <div tabIndex={0} class="dropdown-content border border-soft bg-background rounded-xl z-10 w-68 p-1 shadow -me-2 mt-6">
        <div class="grid grid-cols-3 gap-1 text-sm">
          <Index each={COLOR_SCHEMES}>
            {scheme => (
              <button
                type="button"
                class={`flex flex-col items-center justify-center w-full rounded-lg px-4 py-2 transition-[background-color] ${currentColorScheme() == scheme() ? 'bg-primary/10 text-primary' : ''} hover:bg-primary/10`}
                onClick={handleChangeColorScheme}
                value={scheme()}
              >
                <Dynamic component={iconScheme[scheme()]} class="size-6" />
                <span>{translate(scheme())}</span>
              </button>
            )}
          </Index>
        </div>
        <ColorPicker {...props} />
      </div>
    </details>
  );
}

export default ThemeSelector;