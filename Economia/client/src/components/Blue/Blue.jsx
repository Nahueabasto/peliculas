import React, { useEffect } from "react";
import CardBlue from "./CardBlue";
import { useDispatch, useSelector } from "react-redux";
import { getDolar } from "../../Redux/Actions";

export default function Blue() {
  const dispatch = useDispatch();
  const dolarblue = useSelector((state) => state.dolar);

  useEffect(() => {
    dispatch(getDolar());
  }, [dispatch]);

  return (
    <div>
      {dolarblue.blue && (
        <CardBlue
          value_avg={dolarblue.blue.value_avg}
          value_sell={dolarblue.blue.value_sell}
        />
      )}
    </div>
  );
}
