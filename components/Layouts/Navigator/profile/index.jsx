import React from 'react';
import {ProfileContainer, ImageDiv }from './styles';
import {FlexibleDiv} from '../../../CustomFlex/flexibleDiv.styles'
import {MdSettings as Settings, MdEdit as Edit} from 'react-icons/md';
import {AiFillBell as Notifications} from 'react-icons/ai';
import ProfilePic from '../../../../assets/images/user.jpg'
import CustomButton from '../../../Buttons/index'

const Profile = (props) => {
    return (
       <ProfileContainer>
           <FlexibleDiv flexDir="column" justifyContent="space-around"  height="100%">
           <FlexibleDiv>
                <Settings className="icons"/>
                <ImageDiv>
                    <img src={ProfilePic}/>
                </ImageDiv>
                <Notifications className="icons"/>
           </FlexibleDiv>
           <h2>Kel's Events</h2>
           <CustomButton
            icon = {
             (<Edit className="button-icon"/>)
            }
            text="Edit Profile"
           />
           </FlexibleDiv>
       </ProfileContainer>
    )
}
export default Profile