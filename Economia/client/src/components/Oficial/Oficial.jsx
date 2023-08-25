import React, { useEffect } from "react";
import CardOficial from "./CardOficial";
import { useDispatch, useSelector } from "react-redux";
import { getDolar } from "../../Redux/Actions";
import "./Oficial.css";

export default function Oficial() {
  const dispatch = useDispatch();
  const dolar = useSelector((state) => state.dolar);

  useEffect(() => {
    dispatch(getDolar());
  }, [dispatch]);

  return (
    <div className="oficial">
      {dolar.official && (
        <CardOficial
            value_buy={dolar.official.value_buy}
            value_sell={dolar.official.value_sell}
        />
      )}
    </div>
  );
}