/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_KLAVIYO_COMPANY_ID?: string;
  readonly VITE_KLAVIYO_LIST_ID?: string;
  readonly VITE_KLAVIYO_DOUBLE_OPT_IN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface Window {
  _learnq: any[];
  _klOnsite: any[];
  klaviyo: any;
}
