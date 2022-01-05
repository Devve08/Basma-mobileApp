import styled from "styled-components";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import Constants  from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

//colors 
export const Colors = {
    primary : '#ff2d47',
    secondary: '#fbd532',
    light : '#edf5e1',
    darkLight: '#272727',
    orange: '#ff8450'
}

const { primary, secondary, light, darkLight} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 40px 25px;
    background-color: white;
    
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    height: 100%
`

export const PageLogo = styled.Image`
    width: 250px;
    height: 150px;
`

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${primary};
    padding: 10px;
`

export const SubTitle = styled.Text`
    font-size: 15px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${secondary}
`

export const StyledFormArea = styled.View`
    width: 90%;
`

export const StyledTextInput = styled.TextInput`
    background-color : ${light};
    padding: 15px 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-bottom: 10px;
    color: ${darkLight};
`

export const StyledInputLabel = styled.Text`
    color: ${darkLight};
    font-size: 13px;
    text-align: left;
`

export const LeftIcon = styled.View`
    left: 15px;
    top:35px;
    position: absolute;
    z-index: 1;
`

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top:35px;
    position: absolute;
    z-index: 1;
`

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${primary};
    justify-content: center;
    border-radius: 5px;
    height: 60px;
    align-items: center;
    margin-vertical: 5px;

    ${(props)=> props.google == true ? `
    flex-direction : row;
    justify-content: center;
    background-color: ${secondary}
    ` : ''}
`

export const ButtonText = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 17px;

    ${(props)=> props.google == true ? `
    padding-left: 25px;
    ` : ''}

`

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
    color: red;
`

export const Line= styled.View`
    height: 1px;
    width: 100%;
    background-color: ${light};
    margin-vertical: 10px;
`

export const ExtraView= styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
`

export const ExtraText= styled.Text`
    justify-content: center;
    align-items: center;
    color: ${darkLight};
    font-size: 15px;
`

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;

`

export const TextLinkContent = styled.Text`
    color: ${primary};
    font-size: 15px;
    font-weight : bold
    padding: 5px
`