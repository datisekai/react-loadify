interface IDLoading {
  size?: number;
  color?: string;
  speed?: number;
}

export interface IDSpinner extends IDLoading {
  borderWidth?: number;
}

export interface IDDot extends IDLoading {}
export interface IDBar extends IDLoading {}
export interface IDBlob1 extends IDLoading {}
