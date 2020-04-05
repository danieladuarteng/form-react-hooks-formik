import * as yup from "yup";

export const formSchema = yup.object().shape({

  stickers: yup.object({
    react: yup.boolean(),
    vue: yup.boolean(),
    angular: yup.boolean(),
  })
  .test(
    'myCustomTest',
    null,
    (obj) => {
      if ( obj.react || obj.vue || obj.angular ) {
        return true;
      }
      return new yup.ValidationError(
        'Please check at least one checkbox',
        null,
        'stickers'
      );
    }
  ),

  count: yup.number()
  .integer()
  .positive(),
  description: yup.string(),
});

const initialData = {
  stickers: {
    react: false,
    vue: false,
    angular: false,
  },
  count: 0,
  description: ''
};

const mapDataToValues = data => ({
  stickers: data.stickers,
  count: data.count,
  description: data.description
});

const mapValuesToData = values => ({
  stickers: values.stickers,
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
    const data = mapValuesToData(values);
    bag.props.handleSubmit(data, callback);
  },
  enableReinitialize: true,
  mapPropsToValues: props => {
    console.log("props formik", props);
    if (!props.initialData) return initialData;
    return mapDataToValues(props.initialData);
  },
  validationSchema: () => formSchema
};
