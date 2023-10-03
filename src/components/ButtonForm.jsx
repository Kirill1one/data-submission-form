import React from "react";

const ButtonForm = ({ formValid, handleSubmit }) => {
  return (
    <div className="form__buttons">
      <button disabled={!formValid} className="button__cancel">
        Cancel
      </button>
      <button
        disabled={!formValid}
        onClick={handleSubmit}
        className="button__next"
      >
        Next
      </button>
    </div>
  );
};

export default ButtonForm;


/* Данный код представляет компонент `ButtonForm`, который принимает два props: `formValid` и `handleSubmit`.

Компонент `ButtonForm` рендерит две кнопки - "Cancel" и "Next", и их доступность определяется значением `formValid`. Если `formValid` равно `false`, то обе кнопки будут заблокированы (disabled). Если же `formValid` равно `true`, то кнопки будут доступны для использования.

Кнопка "Next" также привязана к функции `handleSubmit`, которая будет вызвана при клике на кнопку. Вы можете определить эту функцию в родительском компоненте и использовать ее для выполнения необходимых действий при нажатии на кнопку "Next".

Таким образом, данный компонент предоставляет кнопки для формы, и их доступность контролируется через значение `formValid`. Кнопка "Next" имеет также обработчик клика `handleSubmit`, который можно использовать для обработки события нажатия на эту кнопку. */