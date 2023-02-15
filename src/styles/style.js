import styled from 'styled-components'

const StText = styled.div` 
    font-Family: "Oswald", sans-serif;
    font-Size: 20px;
    font-Weight: bold;
    margin-Bottom: 10px;
    width: 1200px;
    height: 50px;
    display: flex;
    align-Items: center;
    margin: 0 auto;
`

const StArea = styled.div`
        width: 1200px;
        min-Height: 200px;
        display: flex;
        flex-Wrap: wrap;
        align-Items: center;
        justify-Content: left;
        padding-Left: 10px;
        padding-Right: 10px;
        margin: 0 auto;
        margin-Bottom: 10px;
`

const StBox = styled.div`
    width: 200px;
    min-Height: 150px;
    border: 3px solid black;
    border-Radius: 10px;
    display: block;
    align-Items: center;
    justify-Content: center;
    text-Align: center;
    margin-Right: 20px;
    margin-Bottom: 20px;
`

export { StText, StBox ,StArea }