import React, { useEffect } from "react";
import CardBlue from "./CardBlue";
import { useDispatch, useSelector } from "react-redux";
import { getDolar } from "../../Redux/Actions";
import "./Blue.css";

export default function Blue() {
  const dispatch = useDispatch();
  const dolarblue = useSelector((state) => state.dolar);

  useEffect(() => {
    dispatch(getDolar());
  }, [dispatch]);

  return (
    <div className="blue">
      {dolarblue.blue && (
        <CardBlue
        value_buy={dolarblue.blue.value_buy}
        value_sell={dolarblue.blue.value_sell}
        />
      )}
    </div>
  );
}
