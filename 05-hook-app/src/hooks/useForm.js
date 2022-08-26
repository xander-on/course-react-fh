import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

  const [formtSate, setFormState] = useState(initialForm);

  const onInputChange = ({target}) => {
    const { name, value } = target;
    setFormState({
      ...formtSate,
      [ name ]: value
    });
  }

  const onResetForm = () => {
    setFormState(initialForm);
  }

  return{
    ...formtSate,
    formtSate,
    onInputChange,
    onResetForm
  }
}
