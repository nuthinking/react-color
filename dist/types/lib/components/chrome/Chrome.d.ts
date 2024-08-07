import { Component, CSSProperties } from 'react';
import { Classes } from 'reactcss';
import { ColorPickerProps } from '../../../..';

export interface ChromePickerStylesProps {
  picker: CSSProperties;
  saturation: CSSProperties;
  Saturation: CSSProperties;
  body: CSSProperties;
  controls: CSSProperties;
  color: CSSProperties;
  swatch: CSSProperties;
  active: CSSProperties;
  toggles: CSSProperties;
  hue: CSSProperties;
  Hue: CSSProperties;
  alpha: CSSProperties;
  Alpha: CSSProperties;
}

export interface ChromePickerProps extends ColorPickerProps<ChromePicker> {
  disableAlpha?: boolean | undefined;
  styles?: Partial<Classes<ChromePickerStylesProps>> | undefined;
  onClickEyeDropper?: (e: MouseEvent) => void;
}

export default class ChromePicker extends Component<ChromePickerProps> {}
