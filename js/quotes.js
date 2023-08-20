const quotes = [
    {
        quote:'"너무 겉모습에만 신경쓰지마. 중요한 건 마음가짐이야"',
        author:'<마녀배달부 키키 1989>',
    },
    {
        quote:'"난 이미 충분히 도망쳐 왔어. 이제야 지켜야만 하는 것이 생겼어... 바로 너야."',
        author:'<하울의 움직이는 성 2004>',       
    },
    {
        quote:'"한 번 만난 인연은 잊혀지는 것이 아니라. 잊고 있을 뿐이야."',
        author:'<센과 치히로의 행방불명 2001>',
    },
    {
        quote:'"살아라. 그대는 아름답다."',
        author:'<모노노케 히메 1997>',
    },
    {
        quote:'"꿈이었지만... 꿈이 아니였어!"',
        author:'<이웃집 토토로 1988>',
    },
    {
        quote:'"날지 않는 돼지는 그냥 돼지일 뿐이야."',
        author:'<붉은 돼지 1992>',
    },
    {
        quote:'"자기 안의 원석을 찾아내서 오랜 시간 다듬어 가는 거란다. 시간이 많이 드는 일이지."',
        author: '<귀를 기울이면 1995>',
    },
    {
        quote:'"오늘이 안되면 내일이 있다. 언제라도 내일은 있다."',
        author:'<추억은 방울방울 1991>',
    },
    {
        quote:'"원하는 것을 포기한다면, 그것은 원하는게 아니다."',
        author:'<폼포코 너구리 대작전, 1994>',
    },
    {
        quote:'"나라가 망했는데, 왕만 살아있다니 웃기는군요."' ,
        author:'<천공의 성 라퓨타 1986>',
    },
    {
        quote:'"토토로, 우산은 이렇게 쓰는거야."' ,
        author:'<이웃집 토토로 1988>',
    },
    {
        quote:'"어리석은 인간들아. 너희는 자연의 증오와 한을 알아야 한다."' ,
        author:'<모노노케 히메 1997>',
    },
    {
        quote:'"너는 너 자신이 되어야 해."' ,
        author:'<고양이의 보은 2002>',
    },
    {
        quote:'"늙어서 좋은건, 울 일이 적다는 거지."' ,
        author:'<하울의 움직이는 성 2004>',
    }
]
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
