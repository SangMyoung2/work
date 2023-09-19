import styled,{css} from 'styled-components'

export const NewsListBlock = styled.div`
    box-sizing:border-box;
    padding-bottom:30px;
    width:768px;
    margin:0 auto;
    margin-top:30px;
    @media screen and (max-width:768px){
        width:100%;
        padding-left:5px;
        padding-right:5px;
    }
`

export const NewsItemBlock = styled.div`

    display:flex;

    .thumbnail {
        margin-right:20px;
        img{
            display:block;
            width:160px;
            height:100px;
            object-fit:cover;
        }
    }

    .contents{
        h2{
            margin:0;
            a{
                color:black;
            }
        }
        p{
            margin:0;
            line-height:1.5;
            margin-top:5px;
            white-space:normal;
        }
    }
    & + &{
        margin-top:30px;
    }
`

export const categories = [
    {
        name:'all',
        text:'전체보기'
    },
    {
        name:'business',
        text:'비지니스'
    },
    {
        name:'entertainment',
        text:'엔터테인먼트'
    },
    {
        name:'health',
        text:'건강'
    },
    {
        name:'science',
        text:'과학'
    },
    {
        name:'sports',
        text:'스포츠'
    },
    {
        name:'technology',
        text:'기술'
    }
]

export const CategoryBlock = styled.div`
    display:flex;
    padding:1rem;
    width:768px;
    margin:0 auto;
    @media screen and (max-width:768px){
        width:100%;
        overflow-x:auto
    }
`

export const CategoryLink = styled.div`
    font-size:1.125rem;
    cursor:pointer;
    white-space:pre;
    text-decoration:none;
    color:inherit;
    padding-bottom:0.25rem;

    &:hover{
        color:#495057;
    }

    //추가
    ${props => 
        props.active && css`
            font-weight:600;
            border-bottom:2px solid #22b8cf;
            color:#22b8cf;
            &:hover{
                color:#3bc9db;
            }
        `}

    & + &{
        margin-left:1rem;
    }
`