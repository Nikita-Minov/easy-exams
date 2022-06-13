import React from 'react';
import {useFormik} from 'formik';
import styled from 'styled-components';
import {validate} from '../../utils/validators/registerValidator';
import {
  InputProps,
  LabelProps,
  ButtonProps,
} from '../../types/components/Register/registerForm.types';

export default function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate,
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Field>
        <LabelWrapper>
          <StyledLabel
            htmlFor="username"
            bgColor={formik.errors.username &&
               formik.touched.username?'#F60018':'#2DD700'}
          >
            Логин
          </StyledLabel>
        </LabelWrapper>
        <StyledInput
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          bgColor={formik.errors.username &&
             formik.touched.username?'#F60018':'#2DD700'}
          value={formik.values.username}
          onBlur={formik.handleBlur}
          placeholder='Ввод...'
        />
        {formik.errors.username && formik.touched.username?
        <ErrorMessage>{formik.errors.username}
        </ErrorMessage>: <></>}
      </Field>
      <Field>
        <LabelWrapper>
          <StyledLabel
            htmlFor="email"
            bgColor={formik.errors.email &&
               formik.touched.email?'#F60018':'#2DD700'}
          >
            Почта
          </StyledLabel>
        </LabelWrapper>
        <StyledInput
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          bgColor={formik.errors.email &&
             formik.touched.email?'#F60018':'#2DD700'}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          placeholder='Ввод...'
        />
        {formik.errors.email && formik.touched.email?
        <ErrorMessage>{formik.errors.email}
        </ErrorMessage>:<></>}
      </Field>
      <Field>
        <LabelWrapper>
          <StyledLabel
            htmlFor="password"
            bgColor={formik.errors.password &&
               formik.touched.password?'#F60018':'#2DD700'}
          >
            Пароль
          </StyledLabel>
        </LabelWrapper>
        <StyledInput
          id="password"
          name="password"
          type="text"
          onChange={formik.handleChange}
          bgColor={formik.errors.password &&
             formik.touched.password?'#F60018':'#2DD700'}
          value={formik.values.password}
          onBlur={formik.handleBlur}
          placeholder='Ввод...'
        />
        {formik.errors.password && formik.touched.password?
        <ErrorMessage>{formik.errors.password}
        </ErrorMessage>:<></>}
      </Field>
      <Field>
        <LabelWrapper>
          <StyledLabel
            htmlFor="repeatPassword"
            bgColor={formik.errors.repeatPassword &&
              formik.touched.repeatPassword?'#F60018':'#2DD700'}
          >
            Пароль ещё раз
          </StyledLabel>
        </LabelWrapper>
        <StyledInput
          id="repeatPassword"
          name="repeatPassword"
          type="text"
          bgColor={formik.errors.repeatPassword &&
             formik.touched.repeatPassword? '#F60018':'#2DD700'}
          onChange={formik.handleChange}
          value={formik.values.repeatPassword}
          onBlur={formik.handleBlur}
          placeholder='Ввод...'
        />
        {formik.errors.repeatPassword && formik.touched.repeatPassword?
        <ErrorMessage>{formik.errors.repeatPassword}
        </ErrorMessage>:<></>}
      </Field>
      {
        formik.isValid?
        <StyledButton
          bgColor='#2DD700'
          type="submit">
            Зарегистрироваться
        </StyledButton>:
        <StyledButton
          bgColor='#F60018'
          type="submit"
          disabled
        >Зарегистрироваться
        </StyledButton>
      }
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Field = styled.div`
  width: 500px;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const LabelWrapper = styled.div`
  width: 100%;
  min-height: 5px;
  display: flex;
  justify-content: start;
`;

const StyledLabel = styled.label<LabelProps>`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: ${(props) => props.bgColor};
`;

const StyledInput = styled.input<InputProps>`
  min-width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 100px;
  background: #FFFFFF;
  border: 3px solid ${(props) => props.bgColor};
  border-radius: 15px;
  outline: none;
  color: ${(props) => props.bgColor};
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  &::placeholder{
    color: ${(props) => props.bgColor};
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
  }
`;

const StyledButton = styled.button<ButtonProps>`
  margin-top: 30px;
  padding: 10px 50px;
  background: ${(props) => props.bgColor};
  border: 5px solid ${(props) => props.bgColor};;
  border-radius: 15px;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #FFFFFF;
  &:hover {
    cursor: pointer;
  }
`;

const ErrorMessage = styled.p`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #F60018;
`;
