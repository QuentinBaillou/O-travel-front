import { useSelector, useDispatch } from 'react-redux';

import { setBudgetValue } from 'src/actions/formActions';

import './style.scss';

const FormSlider = () => {
  const budget = useSelector((state) => state.form.budget);
  const dispatch = useDispatch();

  const handleSlider = (e) => {
    dispatch(setBudgetValue(e.target.value));
  };
  return (
    <div className="form__slider">
      <input
        type="range"
        className="form__slider-input"
        value={budget}
        onChange={handleSlider}
        min="0"
        max="5000"
        step="500"
      />
      <div className="form__slider-values">
        <div className="form__slider-min">0</div>
        <div className="form__slider-current">Budget max : {budget}</div>
        <div className="form__slider-max">5000</div>
      </div>
    </div>
  );
};

export default FormSlider;
