import React, { useState, useContext, useCallback, useEffect } from "react";
import Loader from "../components/Loader";
import { useHttp } from "../hooks/http.hook";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LinkCard from "../components/LinkCard";

const DetailPage = () => {
  const [link, setLink] = useState(null);
  const { loading, request } = useHttp();
  const { token } = useContext(AuthContext);
  const linkId = useParams().id;

  const getLink = useCallback(async () => {
    try {
      const fetched = await request(`/api/link/${linkId}`, "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setLink(fetched);
    } catch (e) {}
  }, [linkId, token, request]);

  useEffect(() => {
    getLink();
  }, [getLink]);

  if (loading) {
    return <Loader />;
  }

  return <>{!loading && link && <LinkCard link={link} />}</>;
};
export default DetailPage;
