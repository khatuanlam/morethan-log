import { CSSObject } from "@emotion/react"; // Import CSSObject for typing
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { colors } from "src/styles";
import { COLOR_SET } from "./constants";

export const getColorClassByName = (name: string): string => {
  try {
    let sum = 0;
    name.split("").forEach((alphabet) => (sum = sum + alphabet.charCodeAt(0)));
    const colorKey = sum
      .toString(16)
      ?.[sum.toString(16).length - 1].toUpperCase();
    return COLOR_SET[colorKey];
  } catch {
    return COLOR_SET[0];
  }
};

type Props = {
  children?: ReactNode;
  readOnly?: boolean;
};

const Category = ({ readOnly = false, children }: Props) => {
  const router = useRouter();

  const handleClick = (value?: string) => {
    if (readOnly) return;
    router.push(`/?category=${value}`);
  };

  return (
    <StyledWrapper
      onClick={() => typeof children === "string" && handleClick(children)}
      css={{
        backgroundColor:
          typeof children === "string" ? getColorClassByName(children) : undefined,
        cursor: readOnly ? "default" : "pointer",
      }}
    >
      {children}
    </StyledWrapper>
  );
};

export default Category;

const StyledWrapper = styled.div<{ css?: CSSObject }>`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 9999px;
  width: fit-content;
  font-size: 0.875rem;
  line-height: 1.25rem;
  opacity: 0.9;
  color: ${colors.dark.gray1};
`;