import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { FC } from "react";
import {
  CurrentStatusOptions,
  YearsOfExpOptions,
} from "../../helpers/constants";
import { RegisterFormInterface } from "../../helpers/interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { RegisterFormSchema } from "../../helpers/validations";
import { CurrentStatusEnum } from "../../helpers/enums";
import courses from "../../helpers/courses.json";

interface IProps {
  courseId?: number;
}

const RegisterForm: FC<IProps> = (props) => {
  const { courseId } = props;
  const form = useForm<RegisterFormInterface>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(RegisterFormSchema),
  });

  const { handleSubmit, formState, control, register, watch, getValues } = form;
  const { errors } = formState;
  const currentStatus = watch("currentStatus");

  const onSubmit = (data: RegisterFormInterface) => {
    console.log(data);
  };

  console.log(courseId);

  return (
    <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
      {" "}
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h6" color="primary.main">
            Full Name
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            {...register("fullName")}
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h6" color="primary.main">
            Phone
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            {...register("phone")}
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />
        </Grid>
        <Grid size={12}>
          <Typography variant="h6" color="primary.main">
            Email
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Grid>

        <FormControl error={!!errors.currentStatus}>
          <Typography variant="h6" color="primary.main">
            Current Status
          </Typography>
          <RadioGroup>
            {CurrentStatusOptions.map((option: any) => (
              <FormControlLabel
                key={option.value}
                value={String(option.value)}
                control={<Radio />}
                label={option.label}
                {...register("currentStatus")}
              />
            ))}
          </RadioGroup>

          <FormHelperText>{errors.currentStatus?.message}</FormHelperText>
        </FormControl>

        <Grid size={12}>
          {String(currentStatus) == String(CurrentStatusEnum.Professional) && (
            <FormControl fullWidth error={!!errors.yearsOfExp}>
              <Typography variant="h6" color="primary.main">
                Years of Experience
              </Typography>

              <Controller
                name="yearsOfExp"
                control={control}
                render={({ field }) => (
                  <Select {...field} displayEmpty>
                    <MenuItem value="">Select Experience</MenuItem>

                    {YearsOfExpOptions?.map((exp: any) => (
                      <MenuItem key={exp.value} value={exp.value}>
                        {exp.label}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />

              <FormHelperText>{errors.yearsOfExp?.message}</FormHelperText>
            </FormControl>
          )}
        </Grid>
        <Grid size={12}>
          <FormControl fullWidth error={!!errors.courseId}>
            <Typography variant="h6" color="primary.main">
              Course
            </Typography>

            <Select
              labelId="course-select-label"
              defaultValue=""
              value={courseId ?? getValues("courseId")}
              {...register("courseId")}
            >
              {courses?.courses?.map((course: any) => (
                <MenuItem key={course.id} value={course.id}>
                  {course.title}
                </MenuItem>
              ))}
            </Select>

            <FormHelperText>{errors.courseId?.message}</FormHelperText>
          </FormControl>
        </Grid>

        {/* <Button type="submit" variant="contained" fullWidth sx={{height:40}}>
          Submit
        </Button> */}
      </Grid>
    </form>
  );
};

export default RegisterForm;
