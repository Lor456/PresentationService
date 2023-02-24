const aboutTitle=document.getElementById('about-title')
const aboutContent=document.getElementById('about-content')

const displayAboutInfo=()=>{
    fetch('../repository/about.yaml')
    .then(response => response.text())
    .then(text => {
        let content=text.split('content:\r\n')
        let title=content[0].split('title:\r\n')
        aboutTitle.textContent=title[1].replaceAll('  ','')
        aboutContent.textContent=content[1].replaceAll('  ','')
        }) 
}

document.getElementById('btn-one').addEventListener('click',(element)=>{
    localStorage.setItem("option-sel", element.target.id);
    window.location.href='project-detail.html'
})

document.getElementById('btn-two').addEventListener('click',(element)=>{
    localStorage.setItem("option-sel",element.target.id);
    window.location.href='project-detail.html'
})

document.getElementById('btn-three').addEventListener('click',(element)=>{
    localStorage.setItem("option-sel", element.target.id);
    window.location.href='project-detail.html'
})

document.getElementById('btn-four').addEventListener('click',(element)=>{
    localStorage.setItem("option-sel", element.target.id);
    window.location.href='project-detail.html'
})

displayAboutInfo()
