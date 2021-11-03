import styled from 'styled-components';

export const AreaHeader = styled.div`
    height: 60px;
    background-image: linear-gradient(to right, #FE5D26, #370d44);
    color: #fff;

    .container{
        padding: 5px 20px;
        display: flex;
        align-items: center;

    }

        .logo{
            flex: 1;

            img{
                width: 50px;
            }

        }
        nav{
            ul{
                display: flex;
            }
            li{
                list-style: none;
                margin-left: 20px;
            }
            a{
                text-decoration: none;
                color: #fff;
                display: flex;
                align-items: center;

                &:hover{
                    color: #F5BB00;
                }
            }

        }
`;