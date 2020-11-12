import React from "react";
import { FlexibleDiv } from "../../../CustomFlex/flexibleDiv.styles";
import CustomButton from "../../../Buttons/index";
import Link from "next/link";

const Logout = (props) => {
  return (
    <FlexibleDiv alignItem="flex-end" height="35%">
      <Link href="/index">
      <CustomButton
        text="Logout"
        dark
      />
      </Link>
    </FlexibleDiv>
  );
};
export default Logout;
