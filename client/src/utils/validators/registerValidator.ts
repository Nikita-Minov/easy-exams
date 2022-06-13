interface ValidateType {
  email?: string;
  username?: string;
  password?: string;
  repeatPassword?: string;
}

export const validate = (values:ValidateType) => {
  const errors:ValidateType = {};

  if (!values.email) {
    errors.email = 'Поле не должно быть пустым';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Некорректная почта';
  }

  if (!values.username) {
    errors.username = 'Поле не должно быть пустым!';
  } else if (values.username.length < 6 || values.username.length > 24) {
    errors.username = 'Логин должен быть от 6-и до 24-х символов в длину';
  }

  if (!values.password) {
    errors.password = 'Поле не должно быть пустым';
  } else if (values.password.length < 6) {
    errors.password = 'Пароль должен быть от 6-и символов в длину';
  }

  if (!values.repeatPassword) {
    errors.repeatPassword = 'Поле не должно быть пустым';
  } else if (values.repeatPassword != values.password) {
    errors.repeatPassword = 'Пароли не совпадают';
    errors.password = 'Пароли не совпадают';
  }

  return errors;
};
