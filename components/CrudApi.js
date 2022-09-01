import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import React, { useEffect, useState, useContext } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import Message from "./Message";
import CrudContext from "../context/CrudContext";


const CrudApi = () => {
  const { db, loading, error } = useContext(CrudContext);

  return (
    <div>
      <h2>Crud Api con Context API</h2>
      <article className="grid-1-2">
        <CrudForm/>

        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}

        {db && (
          <CrudTable/>
        )}
      </article>
    </div>
  );
};

export default CrudApi;
