import React, { useState, useEffect } from "react";
import { Slider } from "@material-ui/core/";
import "./WeatherCard.css";

interface CardInputProps {
  setTotalHours: (totalHours: number) => void;
}

function CardInput({ setTotalHours }: CardInputProps): JSX.Element {
  const [hours, setHours] = useState<number>(0);
  const [days, setDays] = useState<number>(0);

  useEffect(() => {
    const totalHours = days * 24 + hours;
    setTotalHours(totalHours);
  });

  function getDate(): string {
    const today = new Date();
    let month: number | string = today.getMonth();

    if (today.getMonth() + 1 < 10) {
      month = "0" + (today.getMonth() + 1);
    }

    return today.getFullYear() + "-" + month + "-" + today.getDate();
  }

  return (
    <div className="time-form">
      {hours === 0 && days === 0 ? (
        <p className="current-time">Local Time - {getDate()}</p>
      ) : (
        <p className="current-time">
          Forecast after {days}d {hours}h
        </p>
      )}
      <p>Set Days</p>
      <Slider
        onChange={(e, val) =>
          setDays((val: number | number[]) => {
            if ((val as number[]).length > 1) {
              return (val as number[])[0];
            }
            return val as number;
          })
        }
        defaultValue={0}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={4}
      ></Slider>
      <p>Set Hours</p>
      <Slider
        onChange={(e, val) =>
          setHours((val: number | number[]) => {
            if ((val as number[]).length > 1) {
              return (val as number[])[0];
            }
            return val as number;
          })
        }
        defaultValue={0}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={3}
        marks
        min={0}
        max={21}
      ></Slider>
    </div>
  );
}

export default CardInput;
