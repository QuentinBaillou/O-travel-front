import { useDispatch, useSelector } from 'react-redux';

import Checkbox from 'src/components/Checkbox';
import { setCheckedValue } from 'src/actions/formActions';

import './style.scss';

const Form = () => {
  const landscapes = useSelector((state) => state.form.landscapes);
  const transports = useSelector((state) => state.form.transports);
  const dispatch = useDispatch();
  const handleChange = (field, name) => {
    dispatch(setCheckedValue(field, name));
  };
  return (
    <form className="form">
      <fieldset className="form__landscapes">
        <legend className="form__legend">Un paysage de rêve?</legend>
        {
          landscapes.map(
            (landscape) => (
              <Checkbox
                name={landscape.name}
                field="landscapes"
                checked={landscape.checked}
                handleChange={handleChange}
                key={landscape.id}
              />
            ),
          )
        }
      </fieldset>
      <fieldset className="form__transports">
        <legend className="form__legend">Un moyen de transport idéal?</legend>
        {
          transports.map(
            (transport) => (
              <Checkbox
                name={transport.way}
                field="transports"
                checked={transport.checked}
                handleChange={handleChange}
                key={transport.id}
                rounded
              />
            ),
          )
        }
      </fieldset>
    </form>
  );
};

export default Form;
