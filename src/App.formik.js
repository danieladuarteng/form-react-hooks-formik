import * as yup from "yup";

export const formSchema = yup.object().shape({
  react: yup.boolean(),
  vue: yup.boolean(),
  angular: yup.boolean(),
  count: yup.number()
  .integer()
  .positive(),
  description: yup.string(),
});

const initialData = {
  react: false,
  vue: false,
  angular: false,
  count: 0,
  description: ''
};

const mapDataToValues = data => ({
  react: data.react,
  vue: data.vue,
  angular: data.angular,
  count: data.count,
  description: data.description
});

const mapValuesToData = values => ({
  react: values.react,
  vue: values.vue,
  angular: values.angular,
  count: values.count,
  description: values.description
});

export const formik = {
  displayName: "App",
  handleSubmit: (values, bag) => {
    console.log('cheguei', values, bag)
    const callback = () => {
      bag.setSubmitting(false);
    };
    bag.props.handleSubmit(mapValuesToData(values), callback);
  },
  enableReinitialize: true,
  mapPropsToValues: props => {
    console.log("props formik", props);
    if (!props.initialData) return initialData;
    return mapDataToValues(props.initialData);
  },
  validationSchema: () => formSchema
};
