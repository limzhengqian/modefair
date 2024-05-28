interface MemoryChoice {
  type: string;
  availability: boolean;
  additional_price: number;
}

interface Condition {
  [key: string]: number[][];
}

interface StorageChoice {
  type: string;
  availability: boolean;
  additional_price: number;
}

interface ProcessorChoice {
  result: number;
  choice: {
    type: string;
    availability: boolean;
    additional_price: number;
  }[];
  condition : Condition;
  subtitle : string;
}

interface KeyboardChoice {
  result: number;
  choice: string[];
}

interface AdapterChoice {
  result: number;
  choice: {
    type: string;
    additional_price: number;
  }[];
}

interface ColorChoice {
  result: number;
  choice: string[];
}

export interface MacItem {
  id: number;
  CPU: string;
  GPU: string;
  subtitle: string;
  memory: {
    result: number;
    choice: MemoryChoice[];
    subtitle: string;
  };
  storage: {
    result: number;
    choice: StorageChoice[];
  };
  display: string;
  ports: string;
  keyboard_title: string;
  Keyboard: KeyboardChoice;
  trackpad: string;
  adapter: AdapterChoice;
  type: number;
  price: number;
  price_div: number;
  color: ColorChoice;
  processor: ProcessorChoice;
}

export interface MacItem16 {
  id: number;
  CPU: string;
  GPU: string;
  subtitle: string;
  memory: {
    result: number;
    choice: MemoryChoice[];
    subtitle: string;
  };
  storage: {
    result: number;
    choice: StorageChoice[];
    subtitle : string;
  };
  display: string;
  ports: string;
  keyboard_title: string;
  Keyboard: KeyboardChoice;
  trackpad: string;
  adapter: string;
  type: number;
  price: number;
  price_div: number;
  color: ColorChoice;
  processor: ProcessorChoice;
}
