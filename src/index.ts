import E from 'wangeditor'

const editor = new E('#editor')
editor.config.onchange = (newHtml: any) => {
    let content: HTMLElement = document.getElementById('content') as HTMLElement
    content.innerHTML = newHtml
}

editor.create()

let btnHtml: HTMLElement = document.getElementById('html') as HTMLElement
btnHtml.addEventListener('click',function(){
    alert(editor.txt.html())
})

let btnText: HTMLElement = document.getElementById('text') as HTMLElement
btnText.addEventListener('click',function(){
    alert(editor.txt.text())
})

