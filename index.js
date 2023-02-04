let root = document.querySelector(':root');

root.style.setProperty('','');

const mainPage = document.getElementsByTagName('main')[0];
const header = document.getElementsByTagName('h1')[0];
const issueLabel = document.querySelectorAll('.issues > p');
const second = document.getElementById('second');
const scChild = document.querySelectorAll('.child');

mainPage.addEventListener('scroll', (e)=>{
    let scrolled = mainPage.scrollTop;
    let b = mainPage.scrollHeight - mainPage.clientHeight;
    let c = scrolled / b;
    if(c <= 0.1){
        issueLabel[0].style.fontWeight = '600';
        issueLabel[1].style.fontWeight = '500';
        issueLabel[2].style.fontWeight = '500';
        issueLabel[3].style.fontWeight = '500';
        issueLabel[4].style.fontWeight = '500';
        issueLabel[5].style.fontWeight = '500';
        root.style.setProperty('--buyColor','#E568AC');
        root.style.setProperty('--bgColor','#FFFFFF');
    }else if(c <= 0.3){
        issueLabel[1].style.fontWeight = '600';
        issueLabel[0].style.fontWeight = '500';
        issueLabel[2].style.fontWeight = '500';
        issueLabel[3].style.fontWeight = '500';
        issueLabel[4].style.fontWeight = '500';
        issueLabel[5].style.fontWeight = '500';
        root.style.setProperty('--buyColor','#FFFFFF');
        root.style.setProperty('--bgColor','#00C1B5');
    }else if(c <= 0.5){
        issueLabel[2].style.fontWeight = '600';
        issueLabel[0].style.fontWeight = '500';
        issueLabel[1].style.fontWeight = '500';
        issueLabel[3].style.fontWeight = '500';
        issueLabel[4].style.fontWeight = '500';
        issueLabel[5].style.fontWeight = '500';
        root.style.setProperty('--buyColor','#FFFFFF');
        root.style.setProperty('--bgColor','#FF6519');
    }else if(c <= 0.7){
        issueLabel[3].style.fontWeight = '600';
        issueLabel[0].style.fontWeight = '500';
        issueLabel[2].style.fontWeight = '500';
        issueLabel[1].style.fontWeight = '500';
        issueLabel[4].style.fontWeight = '500';
        issueLabel[5].style.fontWeight = '500';
        root.style.setProperty('--buyColor','#FFFFFF');
        root.style.setProperty('--bgColor','#FFBE00');
    }else if(c <= 0.9){
        issueLabel[4].style.fontWeight = '600';
        issueLabel[0].style.fontWeight = '500';
        issueLabel[2].style.fontWeight = '500';
        issueLabel[3].style.fontWeight = '500';
        issueLabel[1].style.fontWeight = '500';
        issueLabel[5].style.fontWeight = '500';
        root.style.setProperty('--buyColor','#FFFFFF');
        root.style.setProperty('--bgColor','#1D3FBB');
    }else if(c <= 1){
        issueLabel[5].style.fontWeight = '600';
        issueLabel[0].style.fontWeight = '500';
        issueLabel[2].style.fontWeight = '500';
        issueLabel[3].style.fontWeight = '500';
        issueLabel[4].style.fontWeight = '500';
        issueLabel[1].style.fontWeight = '500';
        root.style.setProperty('--buyColor','#FFFFFF');
        root.style.setProperty('--bgColor','#E30512');
    }
})