import React, { useState } from "react";
import { FlexibleDiv } from "../CustomFlex/flexibleDiv.styles";
import {
  CardCover,
  CardHeader,
  CardBody,
  CustomListCard,
  CardMain,
} from "./styles";
import PropTypes from "prop-types";
import {
  MdDeleteSweep as Delete,
  MdEdit as Edit,
  MdMenu as MenuIcon,
} from "react-icons/md";
import { BsStar as Important } from "react-icons/bs";
import { TiTick as Done } from "react-icons/ti";

const CustomCard = ({ eventData }) => {
  // console.log(iconData)
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <CardCover eventData={eventData}>
      {!!eventData.length &&
        eventData.map((event, index) => (
          <CardMain key={index}>
            <CustomListCard>
              {/* <FlexibleDiv> */}
              <CardHeader>
      
              </CardHeader>

              <CardBody>
                <FlexibleDiv
                  justifyContent="flex-end"
                  className="icon_wrap"
                  width="max-content"
                  flexWrap="no-wrap"
                >
                  {open &&
                   
                      <FlexibleDiv
                        justifyContent="flex-end"
                        className="icon_wrap_sub"
                      > <Important className="icons" /> <Done className="icons" />
                      </FlexibleDiv>
                   }
                  <MenuIcon className="icons" onClick={handleOpen} />
                </FlexibleDiv>
                <aside className="aside">
                  <div className="body_header">
                    <p className="card_p">Event Type:</p>
                  </div>
                  <p className="card_p">{event.eventType}</p>
                </aside>
                <aside className="aside">
                  <div className="body_header">
                    <p className="card_p">Location:</p>
                  </div>
                  <p className="card_p">{event.location}</p>
                </aside>
                <aside className="aside">
                  <div className="body_header">
                    <p className="card_p">Guests:</p>
                  </div>
                  <p className="card_p">
                    {event.noOfAttendees ? event.noOfAttendees : "No Guests"}
                  </p>
                </aside>
                <aside className="aside">
                  <div className="body_header">
                    <p className="card_p">Date:</p>
                  </div>
                  <p className="card_p">{event.date}</p>
                </aside>
                <FlexibleDiv
                  justifyContent="flex-end"
                  className="bottom_icon_wrap"
                >
                  {" "}
                  <Edit className="icons" />
                  <Delete className="icons" />
                </FlexibleDiv>
              </CardBody>
            </CustomListCard>
          </CardMain>
        ))}
    </CardCover>
  );
};

CustomCard.propTypes = {
  eventData: PropTypes.array.isRequired,
  
};

export default CustomCard;
