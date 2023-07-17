import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  date_of_birth: yup.date().required(),
  address: yup.string().required(),
  user_id: yup.string().nullable(),
});
