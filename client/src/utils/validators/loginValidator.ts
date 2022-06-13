interface ValidateType {
  email?: string;
  password?: string;
}

export const validate = (values:ValidateType) => {
  const errors:ValidateType = {};

  if (!values.email) {
    errors.email = 'Поле не должно быть пустым';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Некорректная почта';
  }

  if (!values.password) {
    errors.password = 'Поле не должно быть пустым';
  }

  return errors;
};
