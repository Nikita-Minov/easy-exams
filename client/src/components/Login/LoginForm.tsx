import React from 'react';
import {useFormik} from 'formik';
import styled from 'styled-components';
import {validate} from '../../utils/validators/loginValidator';
import {
  InputProps,
  LabelProps,
  ButtonProps,
} from '../../types/components/Register/registerForm.types';
import {Link} from 'react-router-dom';

export default function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
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
      <ForgetPasswordText to='/forger-password'>
        Забыли пароль?
      </ForgetPasswordText>
      {
        formik.isValid?
        <StyledButton
          bgColor='#2DD700'
          type="submit">
            Войти
        </StyledButton>:
        <StyledButton
          bgColor='#F60018'
          type="submit"
          disabled
        >Войти
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
  font-size: 22px;
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

const ForgetPasswordText = styled(Link)`
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  text-decoration: none;
  line-height: 28px;
  color: #0D56A6;
`;
