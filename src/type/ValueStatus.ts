type CustomValueStatusPairType<T> = {
  value: string | number | undefined;
  valueLabel?: string | undefined;
  status: string | number | T | undefined;
  statusLabel?: string | undefined;
};

export default CustomValueStatusPairType;
