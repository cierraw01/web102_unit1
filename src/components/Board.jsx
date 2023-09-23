import React from "react";
import Card from './Card';

const Board = () => {
    return (
        <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center"}} className="Board">
        <Card 
            cardImg='https://lh3.googleusercontent.com/p/AF1QipM8hZMvhvBTD3XLQ0O4W6YnjDNAmE2z6KYiqVQg=s1360-w1360-h1020'
            cardName="Bubbakoo's Burritos"
            cardCategory='Mexican'
            cardLink='https://www.bubbakoos.com'
        />
        <Card 
            cardImg='https://lh3.googleusercontent.com/p/AF1QipNM_Wy3aBR9Dy8YJds_YIoEV8b13p-9r2rz5mt3=s1360-w1360-h1020'
            cardName="Tacoria"
            cardCategory='Mexican'
            cardLink='https://tacoria.com/location/piscataway/' 
        />
        <Card 
            cardImg='https://lh3.googleusercontent.com/p/AF1QipNYe1Hr0wg-i8AGqAb6EexVSj9x2Y3y-VdwGqoj=s1360-w1360-h1020'
            cardName="Fat Cactus Cantina"
            cardCategory='Mexican'
            cardLink='https://www.fatcactuscantina.com'
        />
        <Card 
            cardImg='https://lh3.googleusercontent.com/p/AF1QipPa5Tfin99J5BPvAVAdWGkROI1vwXQ2zJ33tb7r=s1360-w1360-h1020'
            cardName="Yummy Yummy"
            cardCategory='Chinese'
            cardLink='https://www.grubhub.com/restaurant/yummy-yummy-chinese-restaurant-1665-stelton-road-k-piscataway/3212878'
        />
        <Card 
            cardImg='https://lh3.googleusercontent.com/p/AF1QipPd7lLjtf6C-nD-U1eLhfcxL1xYMCBBtnruxmzd=s1360-w1360-h1020'
            cardName="Sumiyaki Japan"
            cardCategory='Asian Fusion'
            cardLink='http://www.sumiyakijapan.com'
        />
        <Card 
            cardImg='https://lh3.googleusercontent.com/p/AF1QipOcgbRl3T-HlkDSPThDBr0tMNLDjgjCUzWfytBG=s1360-w1360-h1020'
            cardName="Asian Garden"
            cardCategory='Chinese'
            cardLink='https://www.asiangardennj.com'
        />
        <Card 
            cardImg='https://lh3.googleusercontent.com/p/AF1QipO8az4S0zAO5apfCoEumH7iOVf2Tqkwm1S3cfKR=s1360-w1360-h1020'
            cardName="Indochine Restaurant"
            cardCategory='Chinese'
            cardLink='https://indochinefood.com'
        />
        <Card 
            cardImg='https://lh3.googleusercontent.com/p/AF1QipPFHhC4mTZwohYDn0m3T3mcnYfjKx_C-wv4Ga4G=s1360-w1360-h1020'
            cardName="Surreal Creamery"
            cardCategory='Ice Cream'
            cardLink='https://www.surrealcreamery.com'
        />
        <Card 
            cardImg='https://lh3.googleusercontent.com/p/AF1QipOEx1w8p8mOYZaN14apQiYQd-aAvxHFZhxWhBqB=s1360-w1360-h1020'
            cardName="Honeygrow"
            cardCategory='American'
            cardLink='https://www.honeygrow.com'
        />
        <Card 
            cardImg='https://lh3.googleusercontent.com/p/AF1QipNzBFDdDw_Kf4rUHoDwyN0eyyYWDPK3Owe9taac=s1360-w1360-h1020'
            cardName="Diesel and Duke"
            cardCategory='Hamburger'
            cardLink='https://www.eatdiesel.com'
        />
        </div>
    )
}

export default Board;

