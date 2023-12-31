import React from "react";
import * as S from "./style";

function Keyword({ keyword, keywordFontSize, keywordFontWeight = "400" }) {
  const keywordColor = {
    챗봇: "#FFB6A7",
    과제: "#98ADF2",
    논문: "#FFD494"
  };
  return (
    <S.KeywordWrapper>
      {keyword.map((item, idx) => (
        <S.KeywordTag
          key={idx}
          style={{ backgroundColor: keywordColor[item] }}
          fontSize={keywordFontSize}
          fontWeight={keywordFontWeight}

        >
          {item}
        </S.KeywordTag>
      ))}
    </S.KeywordWrapper>
  );
}

export default Keyword;
