/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_KLAVIYO_COMPANY_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface Window {
  _learnq: any[];
  _klOnsite: any[];
  klaviyo: any;
}
