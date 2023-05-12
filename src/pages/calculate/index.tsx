import React from "react";
import {
  Grid,
  TextField,
  InputAdornment,
  InputLabel,
  FormControl,
  OutlinedInput,
  FormHelperText,
  Box,
} from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";

interface LanguageType {
  value: string;
  label: string;
  icon: string;
  rate: number;
}
type calculatePorps = {
  displayLanguageFlag: LanguageType;
};

const CalculatePage = ({ displayLanguageFlag }: calculatePorps) => {
  const validationSchema = yup.object().shape({
    amount: yup
      .number()
      .positive("Must be a positive number")
      .required("This field is required"),
    result: yup
      .number()
      .positive("must be a positive number")
      .required("This field is required"),
  });
  const formik = useFormik({
    initialValues: {
      amount: 0,
      result: 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  React.useEffect(() => {
    formik.setValues({
      amount: formik.values.amount,
      result: formik.values.amount * 10 * displayLanguageFlag?.rate,
    });
  }, [formik.values.amount, displayLanguageFlag?.rate]);
  return (
    <Grid container maxWidth={"sm"}>
      <form noValidate onSubmit={formik.handleSubmit}>
        <Box display={"flex"}>
          <FormControl
            fullWidth
            size="small"
            error={Boolean(formik.touched.amount && formik.errors.amount)}
          >
            <InputLabel htmlFor="outlined-adornment-amount-login">
              amount
            </InputLabel>
            <OutlinedInput
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              label="Amount"
              name="amount"
              id="outlined-start-adornment"
              value={formik.values.amount}
              sx={{ mr: 2 }}
            />
            {formik.touched.amount && formik.errors.amount && (
              <FormHelperText
                error
                id="standard-weight-helper-text-amount-login"
              >
                {formik.errors.amount}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl
            fullWidth
            size="small"
            error={Boolean(formik.touched.result && formik.errors.result)}
          >
            <InputLabel htmlFor="outlined-adornment-result-login">
              Result
            </InputLabel>
            <OutlinedInput
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              label="Result"
              name="result"
              id="outlined-start-adornment"
              value={formik.values.result}
              startAdornment={
                <InputAdornment position="start">
                  {displayLanguageFlag?.label}
                </InputAdornment>
              }
            />
            {formik.touched.result && formik.errors.result && (
              <FormHelperText
                error
                id="standard-weight-helper-text-result-login"
              >
                {formik.errors.result}
              </FormHelperText>
            )}
          </FormControl>
        </Box>
      </form>
    </Grid>
  );
};

export default CalculatePage;
