import * as yup from 'yup'

export const typeSchema = yup.object().shape({
     type: yup.string().required("Type is required"),
     companyname: yup.string().required("companyname is required"),
     companycategory: yup.string().required("companycategory is required"),
     name: yup.string().required("name is required"),
     surname: yup.string().required("surname is required"),
     age: yup.number().required("age is required"),
   });