import React from "react";

const LinkCard = ({ link }) => {
  return (
    <>
      <h2>Информация о ссылке:</h2>
      <p>
        Сокращенная ссылка:{" "}
        <a href={link.to} target='_blank' rel='noopener noreferrer'>
          {link.to}
        </a>
      </p>
      <p>
        Ваша ссылка:{" "}
        <a href={link.from} target='_blank' rel='noopener noreferrer'>
          {link.from}
        </a>
      </p>
      <p>
        Количество кликов: <strong>{link.clicks}</strong>
      </p>
      <p>
        Дата создания:{" "}
        <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </>
  );
};

export default LinkCard;
