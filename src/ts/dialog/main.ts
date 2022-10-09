export interface DialogData {
  title: string;
  message: string;
  buttons: DialogButton[];
}

export interface DialogButton {
  icon: string;
  capt: string;
  action: () => void;
  className?: string;
}
