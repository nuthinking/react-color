import { ClassAttributes, ReactNode } from 'react';
import { Classes } from 'reactcss';

export interface HSLColor {
  a?: number | undefined;
  h: number;
  l: number;
  s: number;
}

export interface RGBColor {
  a?: number | undefined;
  b: number;
  g: number;
  r: number;
}

export type Color = string | HSLColor | RGBColor;

export interface ColorResult {
  hex: string;
  hsl: HSLColor;
  rgb: RGBColor;
}

export type ColorChangeHandler = (
  color: ColorResult,
  event: React.ChangeEvent<HTMLInputElement>
) => void;

export interface ColorPickerProps<A> extends ClassAttributes<A> {
  color?: Color | undefined;
  className?: string | undefined;
  styles?: Partial<Classes<any>> | undefined;
  onChange?: ColorChangeHandler | undefined;
  onChangeComplete?: ColorChangeHandler | undefined;
}

export interface CustomPickerProps<A> extends ClassAttributes<A> {
  color?: Color | undefined;
  pointer?: ReactNode | undefined;
  className?: string | undefined;
  styles?: Partial<Classes<any>> | undefined;
  onChange: ColorChangeHandler;
}

export {
  AlphaPickerProps,
  default as AlphaPicker,
} from './types/lib/components/alpha/Alpha';
export {
  BlockPickerProps,
  default as BlockPicker,
} from './types/lib/components/block/Block';
export {
  ChromePickerProps,
  default as ChromePicker,
} from './types/lib/components/chrome/Chrome';
export {
  CirclePickerProps,
  default as CirclePicker,
} from './types/lib/components/circle/Circle';
export {
  CheckboardProps,
  default as Checkboard,
} from './types/lib/components/common/Checkboard';
export {
  default as CustomPicker,
  InjectedColorProps,
} from './types/lib/components/common/ColorWrap';
export {
  CompactPickerProps,
  default as CompactPicker,
} from './types/lib/components/compact/Compact';
export {
  default as GithubPicker,
  GithubPickerProps,
} from './types/lib/components/github/Github';
export {
  default as HuePicker,
  HuePickerProps,
} from './types/lib/components/hue/Hue';
export {
  default as MaterialPicker,
  MaterialPickerProps,
} from './types/lib/components/material/Material';
export {
  default as PhotoshopPicker,
  PhotoshopPickerProps,
} from './types/lib/components/photoshop/Photoshop';
export {
  default as SketchPicker,
  SketchPickerProps,
} from './types/lib/components/sketch/Sketch';
export {
  default as SliderPicker,
  SliderPickerProps,
} from './types/lib/components/slider/Slider';
export {
  default as SwatchesPicker,
  SwatchesPickerProps,
} from './types/lib/components/swatches/Swatches';
export {
  default as TwitterPicker,
  TwitterPickerProps,
} from './types/lib/components/twitter/Twitter';
