import styled from 'styled-components';

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
     contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 16,
    },    
}))`
  margin-top: 25px;
`;

export const Option = styled.TouchableOpacity`
    background: ${({ bgColor }) => bgColor};
    width: 150px;
    height: 200px;
    border-radius: 8px;
    padding: 15px;
    margin-right:16px;
    justify-content: space-between;

`;

export const Title = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: 600;
`;

export const Img = styled.Image`
    align-self: center;
`;
