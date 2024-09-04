import {useState} from 'react';
import './style.css';
import data from './data';

const Accrodian = () => {
  const [seleted, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  const handleSingleSelect = (getSeletectId) => {
    if (enableMultiSelect) {
      let cpyMultiSelect = [...multiSelected];
      const findCurrentId = cpyMultiSelect.indexOf(getSeletectId);
      findCurrentId === -1
        ? cpyMultiSelect.push(getSeletectId)
        : cpyMultiSelect.splice(findCurrentId, 1);

      setMultiSelected(cpyMultiSelect);
    } else {
      setSelected(getSeletectId === seleted ? null : getSeletectId);
    }
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
        Enable Multi-Selection
      </button>
      <div className="accrodian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="items" key={item.id}>
              <div
                className="title"
                onClick={() => handleSingleSelect(item.id)}>
                <h2>{item.question}</h2>
                <span>+</span>
              </div>
              <div className="content">
                {/* {enableMultiSelect
                  ? multiSelected.indexOf(item.id) !== -1 && (
                      <p>{item.answer}</p>
                    )
                  : seleted === item.id && <p>{item.answer}</p>} */}
                {(seleted === item.id ||
                  multiSelected.indexOf(item.id) !== -1) && (
                  <p>{item.answer}</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
};

export default Accrodian;
