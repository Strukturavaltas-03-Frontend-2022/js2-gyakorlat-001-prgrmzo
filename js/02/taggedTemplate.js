const taggedTemplate = (texts, ...values) =>
  texts
    .map(
      (text, i) =>
        `${text && text !== " " ? `<em>${text}</em>` : ""}${
          values[i] ? `<strong>${values[i]}</strong>` : ""
        }`
    )
    .join("");

export default taggedTemplate;
