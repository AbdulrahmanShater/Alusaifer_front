import ReactSlider from "react-slider";
import { useState } from "react";


interface FilterByProps { rangTitle: string, onChange: (value: number[], index: number) => void, min: number, max: number, className: string }

const FilterBy = ({ rangTitle, onChange, min, max, className }: FilterByProps) => {

  const [value, setValue] = useState<number[]>([min, max]);

  return (
    <div className={className}>
      <div className="price_slider_amount" style={{ justifyContent: "end" }}>

        <span style={{ marginRight: 0 }}>{value[1]}</span>
        <span>-</span>
        <span>{value[0]}</span>
        <span>{rangTitle}:</span>
      </div>

      <ReactSlider
        value={value}
        min={min}
        max={max}
        onChange={(value, index) => {
          setValue(value)
        }}
        onAfterChange={(value, index) => {
          setValue(value)
          onChange(value, index)
        }}
        className="horizontal-slider"
        thumbClassName="filter-by-price-thumb"
        trackClassName="filter-by-price-track"
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
    </div>
  );
};

export default FilterBy;
