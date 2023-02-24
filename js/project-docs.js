const imageProject=document.getElementById('image-project')
const headerProject=document.getElementById('header-project')
const titleProject=document.getElementById('title-project')
const paragraphProject=document.getElementById('paragraph-project')

const loadPage=()=>{    
    fetch('../repository/index.yaml')
        .then(response => response.text())
        .then(text => {
            let contentOne=''
            switch (localStorage.getItem('option-sel')) {
              case 'btn-one':
                contentOne=text.substring(text.indexOf('proyect-one:\r\n'),text.indexOf('proyect-two:\r\n'))
                break;
              case 'btn-two':
                contentOne=text.substring(text.indexOf('proyect-two:\r\n'),text.indexOf('proyect-three:\r\n'))
                break;
              case 'btn-three':
                contentOne=text.substring(text.indexOf('proyect-three:\r\n'),text.indexOf('proyect-four:\r\n'))
                break;
              default:
                contentOne=text.substring(text.indexOf('proyect-four:\r\n'))
            }           
            let content=contentOne.split('content:\r\n')
            let title=content[0].split('title:\r\n')
            let image=title[0].split('image:\r\n')
            let header=image[0].split('header:\r\n')
            imageProject.src=`images/${image[1].replaceAll('  ','')}.jpg`
            headerProject.textContent=header[1].replaceAll('  ','')
            titleProject.textContent=title[1].replaceAll('  ','')
            paragraphProject.textContent=content[1].replaceAll('  ','')
        })
}
loadPage()